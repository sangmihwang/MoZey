package com.ssafy.tenten.api.service;

import com.ssafy.tenten.api.repository.*;
import com.ssafy.tenten.domain.*;
import com.ssafy.tenten.dto.VoteDto;
import com.ssafy.tenten.exception.CustomException;
import com.ssafy.tenten.exception.ErrorCode;
import com.ssafy.tenten.vo.Response.VoteResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static com.ssafy.tenten.exception.ErrorCode.USER_NOT_ENOUGH;
import static com.ssafy.tenten.exception.ErrorCode.USER_NOT_FOUND;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class VoteServiceImpl implements VoteService{

    private final VoteCntRepository voteCntRepository;
    private final QuestionRepository questionRepository;
    private final VoteHistrotyRepository voteHistrotyRepository;
    private final UserRepository userRepository;
    private final FollowRepository followRepository;
//    private final ModelMapper mapper;
    @Override
    @Transactional
    public VoteResponse createVote(VoteDto voteDto) {

        boolean exists = voteCntRepository.checkIfVoteExists(voteDto.getChosen(), voteDto.getQtnId());
        User userId = userRepository.findById(voteDto.getUserId()).orElseThrow(
                () -> new CustomException(USER_NOT_FOUND)
        );
        Question questionId = questionRepository.findById(voteDto.getQtnId()).orElseThrow(
                ()-> new CustomException(ErrorCode.QUESTION_NOT_FOUND)
        );
        User chosenId = userRepository.findById(voteDto.getChosen()).orElseThrow(
                () -> new CustomException(USER_NOT_FOUND)
        );
        VoteHistory voteHistory = VoteHistory.builder()
                .question(questionId)
                .userId(userId)
                .chosen(chosenId)
                .build();
        voteHistrotyRepository.save(voteHistory);

        VoteCount voteCount = null;
        if(!exists){
            // 생성하기
           voteCount = VoteCount.builder()
                    .question(questionId)
                    .userId(chosenId)
                    .build();
            voteCntRepository.save(voteCount);
        }else{
            voteCount = voteCntRepository.findByQutAndCho(voteDto.getQtnId(),voteDto.getChosen());
            voteCount.updateVoteCount();
        }

        System.out.println(voteCount.getQuestionId().getQtnContent());
        return   VoteResponse.builder()
                .time(voteHistory.getVoteTime())
                .image(voteHistory.getQuestionId().getImg())
                .name(voteCount.getUserId().getName())
                .qtnId(voteDto.getQtnId())
                .qtnContent(questionId.getQtnContent())
                .build();
    }

    @Override
    public List<VoteResponse> suffleQuestion() {

        List<Question> question = questionRepository.findByStatus('Y');
        Collections.shuffle(question);

        List<Question> collect = question.stream()
                .limit(Math.min(question.size(), 8))
                .collect(Collectors.toList());
        if(collect.size()!=8) throw new CustomException(ErrorCode.QUESTION_NOT_ENOUGH);


        return collect.stream()
                .map(a -> VoteResponse.builder()
                        .image(a.getImg())
                        .qtnId(a.getQtnId())
                        .qtnContent(a.getQtnContent())
                        .build())
                .collect(Collectors.toList());
    }

    @Override
    public List<VoteResponse> getVoteCandidates(Long userId) {
        List<Follow> Follows = followRepository.findBySenderId_UserId(userId).orElseThrow(
                () ->new CustomException(USER_NOT_FOUND)
        );
        if(Follows.size()<4){
            throw new CustomException(USER_NOT_ENOUGH);
        }
        Collections.shuffle(Follows);

        List<VoteResponse> collect = Follows.stream()
                .map((follow -> {
                    return VoteResponse.builder()
                            .userId(follow.getReceiverId().getUserId())
                            .name(follow.getReceiverId().getName())
                            .build();
                }
                )).limit(4)
                .collect(Collectors.toList());
        return collect;
    }
}
