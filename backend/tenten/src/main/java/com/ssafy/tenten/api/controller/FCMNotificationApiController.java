package com.ssafy.tenten.api.controller;

import com.google.firebase.messaging.FirebaseMessagingException;
import com.ssafy.tenten.api.service.FCMNotificationService;
import com.ssafy.tenten.dto.FCMNotificationRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/notification")
public class FCMNotificationApiController {

    private final FCMNotificationService fcmNotificationService;

    @PostMapping()
    public String sendNotificationByToken(@RequestBody FCMNotificationRequestDto requestDto) throws FirebaseMessagingException {
        return fcmNotificationService.sendNotificationByToken(requestDto);
    }
}