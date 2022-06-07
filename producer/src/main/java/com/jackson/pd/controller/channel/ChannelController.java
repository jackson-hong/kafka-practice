package com.jackson.pd.controller.channel;

import com.jackson.pd.common.annotation.ApiCode;
import com.jackson.pd.controller.param.JacksonRequest;
import com.jackson.pd.controller.payload.BasePayload;
import com.jackson.pd.manager.ServiceChannelManager;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;


@RestController
@RequestMapping("/jp/api/v1")
@Tag(name = "general controller")
@RequiredArgsConstructor
@Slf4j
public class ChannelController {

    private final ServiceChannelManager serviceChannelManager;

    @Operation(description = "JCK-101 잭슨 조회하기 [테스트용]")
    @PostMapping("/find")
    @ApiCode("JCK-101")
    public BasePayload methodOne(@RequestBody @Valid @Parameter(name = "조회 정보") JacksonRequest jacksonRequest){
        log.info("JCK-101");
        return serviceChannelManager.findJackson(jacksonRequest);
    }
}
