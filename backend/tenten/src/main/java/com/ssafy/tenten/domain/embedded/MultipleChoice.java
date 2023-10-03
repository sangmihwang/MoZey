package com.ssafy.tenten.domain.embedded;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Embeddable;

@Embeddable
@NoArgsConstructor
@Getter
@Setter
public class MultipleChoice {
    private String option1;
    private String option2;
    private String option3;
    private String option4;
    private String option5;
}
