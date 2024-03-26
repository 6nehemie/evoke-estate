package _6nehemie.com.evoke_estate.config;

import com.google.common.util.concurrent.RateLimiter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RateLimiterConfig {

    @Bean
    public RateLimiter rateLimiter() {
        // permits 1 request per second. Adjust this value based on your requirements.
        return RateLimiter.create(1.0);
    }
}