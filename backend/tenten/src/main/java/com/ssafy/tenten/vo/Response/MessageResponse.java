package com.ssafy.tenten.vo.Response;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@NoArgsConstructor
public class MessageResponse {
    private String campus;
    private String term;
    private Character gender;
    private Long time;
    private String qtnContent;
    private Long userId;

    public MessageResponse(String campus, String term, Character gender, Long time, String qtnContent, Long userId) {
        this.campus = campus;
        this.term = term;
        this.gender = gender;
        this.time = time;
        this.qtnContent = qtnContent;
        this.userId = userId;
    }
}
