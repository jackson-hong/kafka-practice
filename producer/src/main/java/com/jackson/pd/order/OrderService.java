package com.jackson.pd.order;

import com.jackson.pd.domain.order.Order;
import com.jackson.pd.domain.order.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;


@RequiredArgsConstructor
@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final PlatformTransactionManager manager;
    private final ChangeTestService changeTestService;

    public Order save(Order order){
        return orderRepository.save(order);
    }

}
