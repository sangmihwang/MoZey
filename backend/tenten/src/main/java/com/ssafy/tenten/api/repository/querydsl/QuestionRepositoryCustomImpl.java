package com.ssafy.tenten.api.repository.querydsl;


import com.querydsl.jpa.impl.JPAQueryFactory;
import com.querydsl.jpa.impl.JPAUpdateClause;
import com.ssafy.tenten.domain.Question;
import com.ssafy.tenten.exception.CustomException;
import com.ssafy.tenten.vo.Request.QuestionRequest;
import com.ssafy.tenten.vo.Response.QuestionResponse;
import lombok.RequiredArgsConstructor;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import static com.ssafy.tenten.domain.QQuestion.question;
import static com.ssafy.tenten.exception.ErrorCode.QUESTION_NOT_FOUND;

@RequiredArgsConstructor
public class QuestionRepositoryCustomImpl implements QuestionRepositoryCustom {
    private final JPAQueryFactory jpaQueryFactory;
    @PersistenceContext
    private EntityManager em;


    @Override
    public QuestionResponse updateQuestion(Long qtnId, QuestionRequest questionRequest) {

        JPAUpdateClause update = jpaQueryFactory.update(question);
        update.where(question.qtnId.eq(qtnId));
        if (questionRequest.getImage() != null) update.set(question.img, questionRequest.getImage());
        if (questionRequest.getQtnContent() != null) update.set(question.qtnContent, questionRequest.getQtnContent());
        if (questionRequest.getStatus() != null) update.set(question.status, questionRequest.getStatus());
        update.execute();
        em.flush();
        em.clear();
        Question question1 = jpaQueryFactory.selectFrom(question)
                .where(question.qtnId.eq(qtnId))
                .fetchOne();
        if (question1 == null) throw new CustomException(QUESTION_NOT_FOUND);
        QuestionResponse build = QuestionResponse.builder()
                .image(question1.getImg())
//                .userId(question1.getUserId().getUserId())
                .qtnContent(question1.getQtnContent())
                .status(question1.getStatus())
//                .qtnId(question1.getQtnId())
                .build();
        return build;
    }

//    private BooleanExpression qtnContentEq(String qtnContent) {
//        return !hasText(qtnContent) ? null : question.qtnContent.eq(qtnContent);
//    }
}
