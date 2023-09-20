package com.ssafy.tenten.domain;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.time.Instant;

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
    // 오류 없을 경우 주석 코드 삭제 예정
//    @Column(name = "user_id", updatable = false)
    @Column(updatable = false)
    private Long userId;

    @Column
    private String email;

//    @Column(nullable = false, columnDefinition = "CHAR(1)")
    @Column(nullable = false)
    private char gender;

    // SQL 예약어로 인한 컬럼명 변경
    @Column(name = "img")
    private String image;

    // SQL 예약어로 인한 컬럼명 변경
    @Column(name = "username")
    private String name;

    @Column(columnDefinition = "CHAR(2)")
    private String term;

    @Column(columnDefinition = "CHAR(10)")
    private String campus;

    // SQL 예약어로 인한 컬럼명 변경
    @Column(name = "unit", columnDefinition = "CHAR(10)")
    private String group;

    @ColumnDefault("false")
    @Column(columnDefinition = "TINYINT(1)")
    private int subYn;

    @Column(nullable = false)
    private Long subStartTime;

    @PrePersist
    public void prePersist() {
        if (subStartTime == null) {
            subStartTime = Instant.now().getEpochSecond();
        }
    }

    @Column(nullable = false, columnDefinition = "BIGINT default '0'")
    private Long point;

    @Column(nullable = false, columnDefinition = "BIGINT default '0'")
    private Long coin1;

    @Column(nullable = false, columnDefinition = "BIGINT default '0'")
    private Long coin2;

    @Column
    @ColumnDefault("1")
    private int withdraw;

    @Column(nullable = false, columnDefinition = "char(10)")
    @ColumnDefault("USER")
    private String role;

    private String provider;
    private String providerId;

    public void subscribe() {
        this.subYn = 1;
    }
    public void unsubscribe() {
        this.subYn = 0;
    }
}
