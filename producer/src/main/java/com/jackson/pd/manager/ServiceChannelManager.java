package com.jackson.pd.manager;

import com.jackson.pd.controller.param.JacksonRequest;
import com.jackson.pd.controller.param.OrderRequestParam;
import com.jackson.pd.controller.payload.BasePayload;
import com.jackson.pd.controller.payload.OrderRequestPayload;
import com.jackson.pd.domain.order.Order;
import com.jackson.pd.order.OrderService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;


@Slf4j
@RequiredArgsConstructor
@Service
public class ServiceChannelManager {

    private final OrderService orderService;

    public BasePayload findJackson(JacksonRequest request){

        return BasePayload.builder()
                .resultCode("0000")
                .resultMsg("성공")
                .build();
    };

    public OrderRequestPayload saveOrder(OrderRequestParam param){
        Order order = orderService.save(param.toEntityOrder());
        return OrderRequestPayload.fromOrder(order);
    }
}
