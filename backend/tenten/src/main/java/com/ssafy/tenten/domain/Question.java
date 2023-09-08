package com.ssafy.tenten.domain;

import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
@Table(name = "QUESTION")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long qtnId;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(nullable = false)
    private String qtnContent;
    @Column(nullable = false, columnDefinition = "char(1) default 'P'")
    private Character status;

    private String img;
}
