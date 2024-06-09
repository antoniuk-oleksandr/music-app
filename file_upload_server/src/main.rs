use actix_web::{web, App, HttpResponse, HttpServer, Responder, post, get};
use actix_multipart::Multipart;
use futures_util::StreamExt as _; // for next()
use std::io::Write;
use uuid::Uuid;
use sanitize_filename::sanitize;
use std::fs::File;
use std::io::Read;
use std::path::Path;
use mime_guess;

#[post("/files/{uuid}")]
async fn upload(uuid: web::Path<String>, mut payload: Multipart) -> impl Responder {
    // Parse the UUID from the string
    let uuid = match Uuid::parse_str(&uuid) {
        Ok(uuid) => uuid,
        Err(_) => return HttpResponse::BadRequest().body("Invalid UUID"),
    };

    // Directory to save the files
    let filepath = "./files/";
    std::fs::create_dir_all(filepath).unwrap();

    // Get the filename from the first part
    if let Some(item) = payload.next().await {
        let mut field = item.unwrap();
        let filename = field.content_disposition().get_filename().unwrap().to_string();
        
        // Sanitize the filename
        let sanitized_filename = sanitize(&filename);

        // Extract the file extension
        let extension = Path::new(&sanitized_filename)
            .extension()
            .and_then(std::ffi::OsStr::to_str)
            .unwrap_or(""); // Default to empty string if no extension

        let new_filename = format!("{}.{}", uuid, extension);
        let filepath = format!("{}/{}", filepath, new_filename);

        // File writer
        let mut f = std::fs::File::create(filepath).unwrap();
        
        // Write file content
        while let Some(chunk) = field.next().await {
            let data = chunk.unwrap();
            f.write_all(&data).unwrap();
        }

        // Return the UUID as response
        return HttpResponse::Ok().body(uuid.to_string());
    }

    HttpResponse::BadRequest().body("No file uploaded")
}

#[get("/files/{filename}")]
async fn get_file(filename: web::Path<String>, mut _payload: Multipart) -> Result<HttpResponse, std::io::Error> {
    // Construct the file path using the provided filename
    let file_path = format!("./files/{}", filename);

    // Open the file
    let mut file = match File::open(&file_path) {
        Ok(file) => file,
        Err(_) => return Ok(HttpResponse::NotFound().body("File not found")),
    };

    // Read the file content into a buffer
    let mut buffer = Vec::new();
    if let Err(_) = file.read_to_end(&mut buffer) {
        return Ok(HttpResponse::InternalServerError().body("Failed to read file"));
    }

    // Set the content type based on the file's extension
    let content_type = mime_guess::from_path(&file_path)
        .first_or_octet_stream()
        .to_string();

    // Return the file content as the HTTP response
    Ok(HttpResponse::Ok()
        .content_type(content_type)
        .body(buffer))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(upload)
            .service(get_file)
    })
    .bind("0.0.0.0:8080")?
    .run()
    .await
}

