package _6nehemie.com.evoke_estate.config;

import _6nehemie.com.evoke_estate.interceptors.RateLimiterInterceptor;
import com.google.common.util.concurrent.RateLimiter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {


    private final RateLimiter rateLimiter;
    @Value("${cors.allowed.origins}")
    private String origin;

    public WebConfig(RateLimiter rateLimiter) {
        this.rateLimiter = rateLimiter;
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins(origin) // Only allow this origin
                .allowedMethods("GET", "POST", "PUT", "DELETE");
    }


    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new RateLimiterInterceptor(rateLimiter));
    }
}