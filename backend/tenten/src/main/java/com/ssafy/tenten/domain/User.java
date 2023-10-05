package com.ssafy.tenten.domain;

import com.ssafy.tenten.vo.Request.UserJoinRequest;
import com.ssafy.tenten.vo.Request.UserUpdateRequest;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "MEMBER")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false)
    private Long userId;

    @Column
    private String email;

    @Column(nullable = false, columnDefinition = "CHAR(1)")
    private char gender;

    @Column(name = "img")
    private String image;

    @Column(name = "username")
    private String name;

    @Column(columnDefinition = "CHAR(2)")
    private String term;

    @Column(columnDefinition = "CHAR(10)")
    private String campus;

    @Column(name = "unit", columnDefinition = "CHAR(10)")
    private String group;

    @ColumnDefault("false")
    @Column(columnDefinition = "TINYINT(1)")
    private int subYn;

    @Column(nullable = false)
    private Instant createTime;

    @Column
    private Instant subStartTime;

    @PrePersist
    public void prePersist() {
        if (createTime == null) createTime = Instant.now();
        if (point == null) point = 0L;
        if (coin1 == null) coin1 = 0L;
        if (coin2 == null) coin2 = 0L;
        if (withdraw == 0) withdraw = 1;
    }

    @Column(nullable = false)
    private Long point;

    @Column(nullable = false)
    private Long coin1;

    @Column(nullable = false)
    private Long coin2;

    @Column(nullable = false)
    private int withdraw;

    @Column(nullable = false, columnDefinition = "char(10)")
    @ColumnDefault("USER")
    private String role;

    private String provider;
    private String providerId;
    private String kakaoToken;
    private String refreshToken; // 리프레시 토큰
    private String firebaseToken;

    public void subscribe() {
//        if (this.subStartTime == null) this.subStartTime = Instant.now();
        if (this.subStartTime == null) this.subStartTime = Instant.now();
        this.subYn = 1;
    }
    public void unsubscribe() {
        if (subStartTime != null) subStartTime = null;
        this.subYn = 0;
    }

    @OneToMany(mappedBy = "senderId", cascade = CascadeType.ALL)
    private final List<Follow> senderList = new ArrayList<>();


    @OneToMany(mappedBy = "receiverId", cascade = CascadeType.ALL)
    private final List<Follow> receiverList = new ArrayList<>();

    @Builder
    public User(String email, String name, String term, String campus, String group) {
        this.email = email;
        this.name = name;
        this.term = term;
        this.campus = campus;
        this.group = group;
    }

    public void join(UserJoinRequest dto) {
        this.name = dto.getName();
        this.group = dto.getGroup();
        this.term = dto.getTerm();
        this.campus = dto.getCampus();
    }

    public void update(UserUpdateRequest dto) {
        this.gender = dto.getGender();
        this.image = dto.getImage();
        this.name = dto.getName();
        this.term = dto.getTerm();
        this.campus = dto.getCampus();
        this.group = dto.getGroup();
    }

    public void updateFirebaseToken(String token) {
        this.firebaseToken = token;
    }

    public void updateRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
    }

    public void updateMoney(String token, Long amount, String type) {
        if (type.equals("EARN")) {
            if (token.equals("Point")) {
                this.point += amount;
            } else if (token.equals("Coin1")) {
                this.coin1 += amount;
            } else {
                this.coin2 += amount;
            }
        } else {
            if (token.equals("Point")) {
                this.point -= amount;
            } else if (token.equals("Coin1")) {
                this.coin1 -= amount;
            } else {
                this.coin2 -= amount;
            }
        }

    }
}
