package com.jackson.pd.listener;

import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class KafkaListeners {

    @KafkaListener(
            topics = "mandalArt",
            groupId = "groupId"
    )
    void listener(String data){
        log.info("Listener received data : {}", data);
    }
}
