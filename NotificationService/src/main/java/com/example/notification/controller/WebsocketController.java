package com.example.notification.controller;

import com.example.notification.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("")
@CrossOrigin(origins = "*")
public class WebsocketController {
    @Autowired
    private NotificationService notificationService;

    @Autowired
    private RedisTemplate<String, String> template;

    @PostMapping("/send-private-message/{id}")
    public void sendPrivateMessage(@PathVariable final String id) {
        notificationService.sendPrivateNotification(id);
//        for (int i = 1; i <= 40; i++){
//        try {
//            File myObj = new File("C:\\question\\1\\question.txt");
//            Scanner myReader = new Scanner(myObj);
//            StringBuilder data = new StringBuilder();
//            while (myReader.hasNextLine()) {
//                data.append(myReader.nextLine());
//            }
//            System.out.println(data);
//            myReader.close();
//        } catch (Exception e) {
//            e.printStackTrace();
//        }

        template.opsForValue().set("hello", "world!");
        System.out.println("Test " + template.opsForValue().get("hello"));
//        }
    }
}
