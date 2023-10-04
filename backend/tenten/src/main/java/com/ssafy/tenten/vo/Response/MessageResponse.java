package com.ssafy.tenten.vo.Response;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Builder
public class MessageResponse {
    private String campus;
    private String term;
    private Character gender;
    private Long time;
    private String qtnContent;


}
