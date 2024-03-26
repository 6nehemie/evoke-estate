package _6nehemie.com.evoke_estate.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "tokens")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Token {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "token")
    private String token;
    
    @Column(name = "is_valid")
    private boolean isValid;
    
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
