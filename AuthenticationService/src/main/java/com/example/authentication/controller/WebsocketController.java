//package com.example.authentication.controller;
//
//import com.example.authentication.service.NotificationService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("")
//@CrossOrigin(origins = "*")
//public class WebsocketController {
//    @Autowired
//    private NotificationService notificationService;
//
//    @PostMapping("/send-private-message/{id}")
//    public void sendPrivateMessage(@PathVariable final String id) {
//        notificationService.sendPrivateNotification(id);
//    }
//}
