package project.musicapp.auth.utils;

import org.springframework.stereotype.Component;

@Component
public class HtmlMessageUtils {
    public String getHtmlMessage() {
        return """
        <html>
            <body>
                <h3> Your confirmation code is: %s </h3>
            </body>
        </html>
        """;
    }
}
