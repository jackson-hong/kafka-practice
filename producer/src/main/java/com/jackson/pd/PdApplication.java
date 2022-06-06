package com.jackson.pd;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.kafka.core.KafkaTemplate;

@SpringBootApplication
@Slf4j
public class PdApplication {

    public static void main(String[] args) {
        SpringApplication.run(PdApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(KafkaTemplate<String, String> kafkaTemplate){
        return args -> {
            for(int i = 0; i < 100; i++){
                String toSent = "Hi ! " + i;
                log.info("data sent : {} ", toSent);
                kafkaTemplate.send("mandalArt","Hi Jackson~!" + i);
                Thread.sleep(1500);
            }
        };
    }

}
