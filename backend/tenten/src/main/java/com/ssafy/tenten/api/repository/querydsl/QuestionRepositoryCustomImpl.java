package com.ssafy.tenten.api.repository.querydsl;


import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.querydsl.jpa.impl.JPAUpdateClause;
import com.ssafy.tenten.domain.Question;
import com.ssafy.tenten.dto.QuestionDto;
import com.ssafy.tenten.exception.CustomException;
import com.ssafy.tenten.vo.Response.QuestionResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.domain.SliceImpl;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static com.ssafy.tenten.domain.QQuestion.question;
import static com.ssafy.tenten.exception.ErrorCode.QUESTION_NOT_FOUND;

@RequiredArgsConstructor
@Slf4j
public class QuestionRepositoryCustomImpl implements QuestionRepositoryCustom {
    private final JPAQueryFactory jpaQueryFactory;
    @PersistenceContext
    private EntityManager em;


    @Override
    public QuestionResponse updateQuestion(Long qtnId, QuestionDto questionDto) {

        JPAUpdateClause update = jpaQueryFactory.update(question);
        update.where(question.qtnId.eq(qtnId));
        if (questionDto.getImage() != null) update.set(question.img, questionDto.getImage());
        if (questionDto.getQtnContent() != null) update.set(question.qtnContent, questionDto.getQtnContent());
        if (questionDto.getStatus() != null) update.set(question.status, questionDto.getStatus());
        update.execute();
        em.flush();
        em.clear();
        Question question1 = jpaQueryFactory.selectFrom(question)
                .where(question.qtnId.eq(qtnId))
                .fetchOne();
        if (question1 == null) throw new CustomException(QUESTION_NOT_FOUND);

        return QuestionResponse.builder()
                .image(question1.getImg())
                .userId(question1.getUserId().getUserId())
                .qtnContent(question1.getQtnContent())
                .status(question1.getStatus())
                .qtnId(question1.getQtnId())
                .build();
    }

    @Override
    public Optional<Slice<QuestionResponse>> getPageQuestions(Long userId, Character status, Pageable pageable) {

        List<Question> fetch = jpaQueryFactory
                .selectFrom(question)
                .where(qtnStatusEq(status),
                        qtnUserEq(userId)
                , question.status.ne('N'))
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize() + 1)
                .fetch();

        List<QuestionResponse> collect = fetch.stream()
                .map(f -> QuestionResponse.builder()
                        .qtnContent(f.getQtnContent())
                        .status(f.getStatus())
                        .image(f.getImg())
                        .qtnId(f.getQtnId())
                        .build())
                .collect(Collectors.toList());
        boolean hasNext = false;
        if(collect.size()>pageable.getPageSize()){
            hasNext = true;
            collect.remove(collect.size()-1);
        }

        return Optional.of(new SliceImpl<>(collect, pageable, hasNext));
    }

    private BooleanExpression qtnStatusEq(Character status) {
        return status == null ? null : question.status.eq(status);
    }

    private BooleanExpression qtnUserEq(Long userId) {
        return userId == null ? null : question.userId.userId.eq(userId);
    }
}
