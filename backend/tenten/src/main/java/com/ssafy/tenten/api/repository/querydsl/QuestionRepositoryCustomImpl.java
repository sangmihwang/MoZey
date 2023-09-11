package com.ssafy.tenten.api.repository.querydsl;


import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.tenten.domain.QQuestion;
import com.ssafy.tenten.domain.Question;
import com.ssafy.tenten.vo.Request.QuestionRequest;
import com.ssafy.tenten.vo.Response.QuestionResponse;
import lombok.RequiredArgsConstructor;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import static com.ssafy.tenten.domain.QQuestion.question;

public class QuestionRepositoryCustomImpl implements QuestionRepositoryCustom{
    private  JPAQueryFactory jpaQueryFactory;
    @PersistenceContext
    private EntityManager em;

    QuestionRepositoryCustomImpl(){
        this.jpaQueryFactory = new JPAQueryFactory(this.em);
    }
    @Override
    public QuestionResponse updateQuestion(Long qtnId, QuestionRequest questionRequest) {
        System.out.println(qtnId);
        long execute = jpaQueryFactory.update(question)
                .where(question.qtnId.eq(qtnId))
                .set(question.img, questionRequest.getImage())
                .set(question.qtnContent, questionRequest.getQtnContent())
                .set(question.status, questionRequest.getStatus())
                .execute();
        em.flush();
        em.clear();
        Question question1 = jpaQueryFactory.selectFrom(question)
                .where(question.qtnId.eq(qtnId))
                .fetchOne();
        QuestionResponse build = QuestionResponse.builder()
                .image(question1.getImg())
                .userId(question1.getUserId().getUserId())
                .qtnContent(question1.getQtnContent())
                .status(question1.getStatus())
                .qtnId(question1.getQtnId())
                .build();
        return build;
    }
}
