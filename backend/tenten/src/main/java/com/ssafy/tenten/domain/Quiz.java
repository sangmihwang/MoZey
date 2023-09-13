package com.ssafy.tenten.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter @Setter
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long quizId;

//    @ManyToOne
//    @JoinColumn(name = "news_id")
//    private News newsId;

    @Column
    private String question;

    @Column
    private String answer;

    @Column
    private LocalDateTime date;


}
