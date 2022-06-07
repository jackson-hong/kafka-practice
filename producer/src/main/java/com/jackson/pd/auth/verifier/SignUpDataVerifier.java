package com.jackson.pd.auth.verifier;

import com.jackson.pd.common.code.ResultCode;
import com.jackson.pd.common.exception.BoilerException;
import com.jackson.pd.controller.param.user.UserParam;
import com.jackson.pd.domain.auth.User;
import com.jackson.pd.domain.auth.UserRepository;
import com.jackson.pd.properties.PasswordRegularExpressionProperties;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;

import static com.jackson.pd.common.code.ResultCode.*;
import static com.jackson.pd.common.regex.RegexUtils.isPatternMatched;

@Slf4j
@RequiredArgsConstructor
@Component
public class SignUpDataVerifier {

    private final UserRepository userRepository;
    private final PasswordRegularExpressionProperties regularExpressionProperties;

    public void validateUserParam(UserParam userParam){
        isIdExist(userParam.getUsername());
        isPasswordAppropriate(userParam.getPassword());
    }

    // 향후 회원 존재 여부 확인 API 사용 가능.
    public boolean isIdExist(String username){
        User order = userRepository.findByUsername(username);
        if(!ObjectUtils.isEmpty(order)) throw new BoilerException(ResultCode.RESULT_2000);
        return true;
    }

    public void isPasswordAppropriate(String password){
        checkPasswordMatched(password);
        sameAlphabetAndNumberExist(password);
        sameSymbolExist(password);
    }

    private void checkPasswordMatched(String password){
        if(!isPatternMatched(regularExpressionProperties.getRuleRegex(), password)) throw new BoilerException(RESULT_1001);
    }

    private void sameAlphabetAndNumberExist(String password){
        if(isPatternMatched(regularExpressionProperties.getSameAlphabetPattern(), password)) throw new BoilerException(RESULT_1002);
    }

    private void sameSymbolExist(String password){
        if(isPatternMatched(regularExpressionProperties.getSameSymbolPattern(),password)) throw new BoilerException(RESULT_1002);
    }

}
