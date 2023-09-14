package com.ssafy.tenten;

import lombok.Data;

import java.util.Map;

@Data
public class NotificationMessage {
    private boolean validate_only;
    private String recipientToken;
    private String title;
    private String body;
    private String image;
    private Map<String,String> data;
}