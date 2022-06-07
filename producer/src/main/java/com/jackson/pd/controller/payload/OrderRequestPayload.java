package com.jackson.pd.controller.payload;


import com.jackson.pd.domain.order.Order;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderRequestPayload {

    private String orderId;
    private String name;
    private String phoneNum;

    public static OrderRequestPayload fromOrder(Order order){
        return OrderRequestPayload.builder()
                .orderId(String.valueOf(order.getOrderId()))
                .phoneNum(order.getPhoneNum())
                .name(order.getName())
                .build();
    }
}
