package com.ssafy.tenten.domain;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class VoteHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long voteId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "qtn_id")
    private Question questionId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user_id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "chosen")
    private User chosen;

    @CreatedDate
    private LocalDateTime time;


}
