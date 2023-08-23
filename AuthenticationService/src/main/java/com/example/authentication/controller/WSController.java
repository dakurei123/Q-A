//package com.example.authentication.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.messaging.handler.annotation.MessageMapping;
//import org.springframework.messaging.handler.annotation.SendTo;
//import org.springframework.messaging.simp.SimpMessagingTemplate;
//import org.springframework.stereotype.Controller;
//
//@Controller
//public class WSController {
//    @Autowired
//    SimpMessagingTemplate simpMessagingTemplate;
//
//    @MessageMapping("/application")
//    @SendTo("/all/messages")
//    public String send(String message) throws Exception {
//        return message;
//    }
//}
