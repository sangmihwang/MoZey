package com.ssafy.tenten.domain;

import com.ssafy.tenten.dto.QuestionDto;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;

@Entity
@Getter
@DynamicInsert
@Table(name = "QUESTION")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long qtnId;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User userId;

    @Column(nullable = false)
    private String qtnContent;
    @Column(nullable = false,columnDefinition = "char(1) default 'P'")
    private Character status;

    private String img;

    @Builder
    Question(QuestionDto questionDto, User userId){
        this.userId = userId;
        this.qtnContent = questionDto.getQtnContent();
        this.img = questionDto.getImage();
    }


}
