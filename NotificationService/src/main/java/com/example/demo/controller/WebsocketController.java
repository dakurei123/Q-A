package com.example.demo.controller;

import com.example.demo.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.util.Scanner;

@RestController
@RequestMapping("")
@CrossOrigin(origins = "*")
public class WebsocketController {
    @Autowired
    private NotificationService notificationService;

    @PostMapping("/send-private-message/{id}")
    public void sendPrivateMessage(@PathVariable final String id) {
        notificationService.sendPrivateNotification(id);
//        for (int i = 1; i <= 40; i++){
        try {
            File myObj = new File("C:\\question\\1\\question.txt");
            Scanner myReader = new Scanner(myObj);
            StringBuilder data = new StringBuilder();
            while (myReader.hasNextLine()) {
                data.append(myReader.nextLine());
            }
            System.out.println(data);
            myReader.close();
        } catch (Exception e) {
            e.printStackTrace();
        }

//        }
    }
}
