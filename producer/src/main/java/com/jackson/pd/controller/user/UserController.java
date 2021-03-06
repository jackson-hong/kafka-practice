package com.jackson.pd.controller.user;

import com.jackson.pd.common.annotation.ApiCode;
import com.jackson.pd.controller.ResponseData;
import com.jackson.pd.controller.param.user.UserParam;
import com.jackson.pd.controller.payload.user.UserPayload;
import com.jackson.pd.service.auth.PrincipalDetailsService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Tag(name = "[유저] 회원 컨트롤러")
@RequestMapping("/jp/api/v1")
@AllArgsConstructor
// TODO : 추후 회원가입 테스트 완료후 mvc 로 분리할것.
public class UserController {

    private final PrincipalDetailsService principalDetailsService;

    @PostMapping("/join")
    @ApiCode("USER-001")
    public ResponseData<UserPayload> signUp(@RequestBody @Validated UserParam userParam){
        return ResponseData.success(principalDetailsService.userDataHandler(userParam));
    }

}
