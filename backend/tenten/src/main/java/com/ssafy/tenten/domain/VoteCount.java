package com.ssafy.tenten.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.stereotype.Service;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class VoteCount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "vote_cnt_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "qtn_id")
    private Question questionId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User userId;

    @ColumnDefault("0")
    private Long voteCnt;

    public void updateVoteCount(){
        this.voteCnt++;
    }
}
