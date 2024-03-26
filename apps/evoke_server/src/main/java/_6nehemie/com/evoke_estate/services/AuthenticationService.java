package _6nehemie.com.evoke_estate.services;

import _6nehemie.com.evoke_estate.dto.requests.LoginDto;
import _6nehemie.com.evoke_estate.dto.requests.RegisterDto;
import _6nehemie.com.evoke_estate.dto.responses.AuthenticationResponse;
import _6nehemie.com.evoke_estate.enums.Role;
import _6nehemie.com.evoke_estate.exceptions.BadRequestException;
import _6nehemie.com.evoke_estate.models.Token;
import _6nehemie.com.evoke_estate.models.User;
import _6nehemie.com.evoke_estate.repositories.TokenRepository;
import _6nehemie.com.evoke_estate.repositories.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final TokenRepository tokenRepository;
    private final JwtService jwtService;

    public AuthenticationService(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder,
            AuthenticationManager authenticationManager,
            TokenRepository tokenRepository,
            JwtService jwtService
    ) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.tokenRepository = tokenRepository;
        this.jwtService = jwtService;
    }

    public AuthenticationResponse register(RegisterDto request) {

        // Checks if username is already taken
        if (userRepository.existsByUsername(request.username()) || "me".matches(request.username())) {
            throw new BadRequestException("Username is already taken");
        }

        // Checks if email is already taken
        if (userRepository.existsByEmail(request.email())) {
            throw new BadRequestException("Email is already taken");
        }

        // Checks password confirmation
        if (!request.password().matches(request.passwordConfirmation())) {
            throw new BadRequestException("Passwords do not match");
        }

        // Checks password length
        if (request.password().length() < 6) {
            throw new BadRequestException("Password must be at least 6 characters long");
        }

        if (request.termsAndConditions() == null || !request.termsAndConditions()) {
            throw new BadRequestException("Terms and conditions must be accepted");
        }

        // Combines first name and last name to create full name
        String fullName = request.firstName() + " " + request.lastName();

        User user = new User();
        user.setFullName(fullName);
        user.setUsername(request.username());
        user.setEmail(request.email());
        user.setPassword(passwordEncoder.encode(request.password()));

        Role role = request.role() != null ? request.role() : Role.USER;
        user.setRole(role);

        user = userRepository.save(user);

        String token = jwtService.generateToken(user);

        // save the generated token
        saveUserToken(token, user);

        return new AuthenticationResponse(
                user.getId(),
                user.getFullName(),
                user.getUsername(),
                user.getEmail(),
                null,
                user.getLocation(),
                user.getTitle(),
                user.getDescription(),
                token
        );
    }

    public AuthenticationResponse authenticate(LoginDto request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.username(),
                        request.password()
                )
        );

        User user = userRepository.findByUsernameOrEmail(request.username()).orElseThrow();
        String token = jwtService.generateToken(user);

        revokeAllUserTokens(user);

        saveUserToken(token, user);

        return new AuthenticationResponse(
                user.getId(),
                user.getFullName(),
                user.getUsername(),
                user.getEmail(),
                user.getAvatar(),
                user.getLocation(),
                user.getTitle(),
                user.getDescription(),
                token
        );
    }

    private void revokeAllUserTokens(User user) {
        List<Token> validUserTokens = tokenRepository.findAllByUser_Id(user.getId());

        if (!validUserTokens.isEmpty()) {
            validUserTokens.forEach(t -> {
                t.setValid(false);
            });
        }

        tokenRepository.saveAll(validUserTokens);
    }

    private void saveUserToken(String jwt, User user) {
        Token token = new Token();
        token.setToken(jwt);
        token.setValid(true);
        token.setUser(user);
        tokenRepository.save(token);
    }
}

