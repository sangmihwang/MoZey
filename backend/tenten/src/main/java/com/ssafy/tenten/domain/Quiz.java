package com.ssafy.tenten.domain;

import com.ssafy.tenten.domain.embedded.MultipleChoice;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@DynamicInsert
@Table(name = "QUIZ")
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long quizId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "news_id")
    private News newsId;

    @Column
    private String question;

    @Column
    private String answer;

    @Column
    private LocalDate date;

    @Embedded
    private MultipleChoice multipleChoice;

}