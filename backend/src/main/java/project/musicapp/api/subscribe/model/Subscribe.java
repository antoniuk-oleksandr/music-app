package project.musicapp.api.subscribe.model;

import jakarta.persistence.*;
import lombok.*;
import project.musicapp.api.users.model.User;

@Entity
@Table(name = "users_following")
@Builder
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class Subscribe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "users_following_id")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "follower_id", referencedColumnName = "user_id")
    private User follower;

    @ManyToOne
    @JoinColumn(name = "followed_id", referencedColumnName = "user_id")
    private User followed;
}
