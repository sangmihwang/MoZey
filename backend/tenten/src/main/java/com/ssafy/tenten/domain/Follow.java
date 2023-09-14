package com.ssafy.tenten.domain;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Table(name = "FOLLOW")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@AllArgsConstructor
public class Follow {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "follow_id", updatable = false)
    private Long followId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sender_id", updatable = false)
    private User senderId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "receiver_id", updatable = false)
    private User receiverId;
}
