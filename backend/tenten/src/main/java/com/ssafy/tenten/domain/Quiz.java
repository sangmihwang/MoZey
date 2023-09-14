package com.ssafy.tenten.domain;

import com.ssafy.tenten.dto.QuizDto;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@DynamicInsert
@Table(name = "QUIZ")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long quizId;

    //    @ManyToOne
//    @JoinColumn(name = "news_id")
//    private News newsId;
    @Column
    private Long newsId;

    @Column
    private String question;

    @Column
    private String answer;

    @Column
    private LocalDateTime date;

    @Builder
    Quiz(QuizDto quizDto){
        this.newsId = quizDto.getNewsId();
        this.question = quizDto.getQuestion();
        this.answer = quizDto.getAnswer();
        this.date = quizDto.getDate();
    }


}
