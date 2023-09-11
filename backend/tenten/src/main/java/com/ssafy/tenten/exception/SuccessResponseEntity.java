package com.ssafy.tenten.exception;


import lombok.Builder;
import lombok.Data;
import org.springframework.http.ResponseEntity;

@Data
@Builder
public class SuccessResponseEntity<E> {
    private String message;
    private E data;

    public static ResponseEntity<SuccessResponseEntity> toResponseEntity(String massage, Object data) {
        return ResponseEntity
                .status(200)
                .body(SuccessResponseEntity.builder()
                        .message(massage)
                        .data(data)
                        .build()
                );
    }
}
