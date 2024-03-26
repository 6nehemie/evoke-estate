package _6nehemie.com.evoke_estate.repositories;

import _6nehemie.com.evoke_estate.models.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface TokenRepository extends JpaRepository<Token, Long> {

    @Query("""
            select t from Token t inner join users u
            on t.user.id = u.id
            where t.user.id = :userId and t.isValid = true
            """)
    List<Token> findAllByUser_Id(Long userId);

    Optional<Token> findByToken(String token);
}
