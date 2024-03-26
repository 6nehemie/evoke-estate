package _6nehemie.com.evoke_estate.interceptors;

import com.google.common.util.concurrent.RateLimiter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.servlet.HandlerInterceptor;

public class RateLimiterInterceptor implements HandlerInterceptor {

    private final RateLimiter rateLimiter;

    public RateLimiterInterceptor(RateLimiter rateLimiter) {
        this.rateLimiter = rateLimiter;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        if (!rateLimiter.tryAcquire()) {
            response.setStatus(429);
            return false;
        }
        return true;
    }
}