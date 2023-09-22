package com.ssafy.tenten.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
public class NewsRead {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long newsReadId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User userId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "news_id")
    private News newsId;
}
