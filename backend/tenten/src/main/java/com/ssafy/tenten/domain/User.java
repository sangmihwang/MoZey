package com.ssafy.tenten.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(updatable = false)
    private Long userId;
//
//    @Column
//    private String gender;
//
//    @Column
//    private String image;
//
//    @Column
//    private String name;
//
//    @Column
//    private String term;
//
//    @Column
//    private String campus;
//
//    @Column
//    private String group;
//
//    @Column
//    private int sub_yn;
//
//    @Column
//    private Date sub_start_time;
//
//    @Column
//    private int point;
//
//    @Column
//    private int coin1;
//
//    @Column
//    private int coin2;
//
//    @Column
//    private int withdraw;
//
//    @Column
//    private String is_admin;
}
