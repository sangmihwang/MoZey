package com.ssafy.tenten.vo.Response;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Page;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL) // 널값은 전달하지 않는다
public class PageResponse {
    @ApiModelProperty(value = "전체 페이지",required = true)
    private String message;
    @ApiModelProperty(value = "유저 아이디")
    private Object data;
    @ApiModelProperty(value = "전체 페이지",required = true)
    private Integer totalPages;
    @ApiModelProperty(value = "총 데이터 수")
    private Long totalElements;
    @ApiModelProperty(value = "가져올 크기")
    private Integer size;
    @ApiModelProperty(value = "현재 페이지 번호")
    private Integer number;
    public static PageResponse PageResponse(String message,Page page){
        return PageResponse.builder()
                .message(message)
                .data(page.getContent())
                .number(page.getNumber())
                .totalPages(page.getTotalPages())
                .size(page.getSize())
                .totalElements(page.getTotalElements())
                .build();
    }

}
