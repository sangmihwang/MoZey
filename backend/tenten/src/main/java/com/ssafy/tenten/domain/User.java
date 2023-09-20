package com.ssafy.tenten.domain;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

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
    @Column(name = "user_id", updatable = false)
    private Long userId;

    @Column(name = "email")
    private String email;

    @Column(nullable = false, columnDefinition = "CHAR(1)")
    private String gender;

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
    private boolean subYn;

    @Column(nullable = false)
    private Long subStartTime;

    @Column(nullable = false, columnDefinition = "BIGINT default '0'")
    private Long point;

    @Column(nullable = false, columnDefinition = "BIGINT default '0'")
    private Long coin1;

    @Column(nullable = false, columnDefinition = "BIGINT default '0'")
    private Long coin2;

    @Column(name = "withdraw")
    private int withdraw;

    @Column(nullable = false, columnDefinition = "char(10)")
    private String role;

    private String provider;
    private String providerId;

    private String firebaseToken;

}
