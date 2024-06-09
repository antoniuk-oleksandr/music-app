# Stage 1: Build the Rust application
FROM rust:latest as builder

WORKDIR /usr/src/app

# Copy the Cargo.toml and source code
COPY Cargo.toml .
COPY src ./src

# Build the Rust application
RUN cargo build --release

# Stage 2: Create the final image
FROM nginx:latest

# Copy NGINX configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the built binary from the previous stage
COPY --from=builder /usr/src/app/target/release/file_upload_server /usr/bin/file_upload_server

# Create the files directory
RUN mkdir -p /files

# Expose port 80
EXPOSE 80

# Start the Rust application and NGINX
CMD ["/bin/sh", "-c", "file_upload_server & nginx -g 'daemon off;'"]

