package com.example.notification.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

@Service
public class NotificationService {
    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    public void sendPrivateNotification(final String userId) {
        System.out.println("/notification/" + userId);
        messagingTemplate.convertAndSend("/notification/" + userId, userId);
    }
}
