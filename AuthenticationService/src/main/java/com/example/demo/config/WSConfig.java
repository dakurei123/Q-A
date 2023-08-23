//package com.example.demo.config;
//
//import com.example.demo.security.UserHandshakeSocketHandler;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.messaging.simp.config.MessageBrokerRegistry;
//import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
//import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
//import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;
//
//@Configuration
//@EnableWebSocketMessageBroker
//public class WSConfig implements WebSocketMessageBrokerConfigurer {
//    @Override
//    public void configureMessageBroker(final MessageBrokerRegistry registry) {
//        registry.enableSimpleBroker("/all");
//        registry.setApplicationDestinationPrefixes("/app");
//    }
//
//    @Override
//    public void registerStompEndpoints(final StompEndpointRegistry registry) {
//        registry.addEndpoint("/ws")
//                .setHandshakeHandler(new UserHandshakeSocketHandler())
//                .setAllowedOrigins("localhost:5500")
//                .withSockJS();
//        registry.addEndpoint("/ws")
//                .setAllowedOrigins("localhost:5500")
//                .setHandshakeHandler(new UserHandshakeSocketHandler());
//    }
//
//}
