package com.ssafy.tenten.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
public class QuizSolve {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long quizSolveId;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User userId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "quiz_id")
    private Quiz quizId;
}
