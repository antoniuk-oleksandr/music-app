package project.musicapp.auth.model;

import jakarta.persistence.*;
import lombok.*;
import project.musicapp.api.users.model.User;

@Entity
@Table(name="users_refresh_tokens")
@Builder
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class RefreshToken {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="user_refresh_token_id")
    private Integer id;
    private String refreshToken;

    @ManyToOne
    @JoinColumn(name="user_id", referencedColumnName = "user_id")
    private User user;
}
