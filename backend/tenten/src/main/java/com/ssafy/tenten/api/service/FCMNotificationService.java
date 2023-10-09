package com.ssafy.tenten.api.service;

import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.Notification;
import com.ssafy.tenten.dto.FCMNotificationRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class FCMNotificationService {

    private final FirebaseMessaging firebaseMessaging;


    public String sendNotificationByToken(FCMNotificationRequestDto requestDto) throws FirebaseMessagingException {

        Notification notification = Notification.builder()
                .setTitle(requestDto.getTitle())
                .setBody(requestDto.getBody())
                .build();

        firebaseMessaging.send(Message.builder()
                .setToken(requestDto.getTargetUserId())
                .setNotification(notification)
                .build());

        return " 알림갔습니다!";

    }
}
