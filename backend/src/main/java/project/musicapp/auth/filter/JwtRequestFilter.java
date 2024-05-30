package project.musicapp.auth.filter;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.SignatureException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import project.musicapp.auth.utils.JwtTokenUtils;

import java.io.IOException;
import java.util.Collections;

@Slf4j
@Component
@RequiredArgsConstructor
public class JwtRequestFilter extends OncePerRequestFilter {
    private final JwtTokenUtils jwtUtils;

    @Override
    protected void doFilterInternal(
            HttpServletRequest request, HttpServletResponse response, FilterChain filterChain
    ) throws ServletException, IOException {
        String authHeader = request.getHeader("Authorization");
        String username = getUsername(authHeader);
        putUserInSecurityContext(username);
        filterChain.doFilter(request, response);
    }

    private String getUsername(String authHeader) {
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            try {
                String jwtToken = authHeader.substring("Bearer ".length());
                return jwtUtils.getUsernameFromToken(jwtToken);
            } catch (ExpiredJwtException e) {
                log.debug("JWT token expired");
            } catch (SignatureException e) {
                log.debug("JWT token signature exception");
            }
        }
        return null;
    }

    private void putUserInSecurityContext(String username) {
        SecurityContext securityContext = SecurityContextHolder.getContext();

        if(username != null && securityContext.getAuthentication() == null) {
            securityContext.setAuthentication(
                new UsernamePasswordAuthenticationToken(
                    username, null, Collections.emptyList()
                )
            );
        }
    }
}