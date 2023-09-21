package com.ssafy.tenten.api.service;

import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.Notification;
import com.ssafy.tenten.api.repository.UserRepository;
import com.ssafy.tenten.dto.FCMNotificationRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class FCMNotificationService {

    private final FirebaseMessaging firebaseMessaging;
    private final UserRepository usersRepository;

    public String sendNotificationByToken(FCMNotificationRequestDto requestDto) throws FirebaseMessagingException {

//        Optional<User> user = usersRepository.findById(requestDto.getTargetUserId());

        Notification notification = Notification.builder()
                .setTitle("임병국")
                .setBody("dsadadasdas")
                // .setImage(requestDto.getImage())
                .build();

        firebaseMessaging.send(Message.builder()
                        .setToken("ezFz9PqdOzqEeD8Id-MklV:APA91bGSDfro_OpJQOFzIaYVG3Q5uNVfDvsqzJEHL3pTaNCrwWhWF-fikzSruG19GfivzfHYQqwYNUZy1dLNzd8vYUHmWbjOJ2QlFyYCS9XwP9vHTlTauhSMfizJ8075z8a_bN0YZerU")
                        .setNotification(notification)
                        .build());

        return " zzz";

//        if (user.isPresent()) {
//            if (user.get().getFirebaseToken() != null) {
//                Notification notification = Notification.builder()
//                        .setTitle(requestDto.getTitle())
//                        .setBody(requestDto.getBody())
//                        // .setImage(requestDto.getImage())
//                        .build();
//
//                Message message = Message.builder()
//                        .setToken(user.get().getFirebaseToken())
//                        .setNotification(notification)
//                        // .putAllData(requestDto.getData())
//                        .build();
//
//                try {
//                    firebaseMessaging.send(message);
//                    return "알림을 성공적으로 전송했습니다. targetUserId=" + requestDto.getTargetUserId();
//                } catch (FirebaseMessagingException e) {
//                    e.printStackTrace();
//                    return "알림 보내기를 실패하였습니다. targetUserId=" + requestDto.getTargetUserId();
//                }
//            } else {
//                return "서버에 저장된 해당 유저의 FirebaseToken이 존재하지 않습니다. targetUserId=" + requestDto.getTargetUserId();
//            }
//
//        } else {
//            return "해당 유저가 존재하지 않습니다. targetUserId=" + requestDto.getTargetUserId();
//        }
//

    }
}
