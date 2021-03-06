package com.jackson.pd.common.filter.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.jackson.pd.domain.auth.PrincipalDetails;
import com.jackson.pd.domain.auth.User;
import com.jackson.pd.properties.JwtProperties;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;

// username
// password 인증처리 Filter
@AllArgsConstructor
@Slf4j
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private final AuthenticationManager authenticationManager;
    private final JwtProperties jwtProperties;

    // login 시도할 경우 동작하는 Filter
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        log.info("[Login Requested]");

        ObjectMapper objectMapper = new ObjectMapper();
        try {

            User user = objectMapper.readValue(request.getInputStream(), User.class);

            // 함수 실행시 userName 과 password 를 이용 Token 생성
            UsernamePasswordAuthenticationToken authenticationToken =
                    new UsernamePasswordAuthenticationToken(user.getUsername(),user.getPassword());

            // 생성된 Token 에서 userName 과 password 가 일치 하는지 여부를 확인.
            Authentication authentication = authenticationManager.authenticate(authenticationToken);

            PrincipalDetails principalDetails = (PrincipalDetails) authentication.getPrincipal();

            log.info(principalDetails.getUser().getUsername());

            return authentication;

        } catch (IOException e) {
            e.printStackTrace();
        }

        return null;
    }

    // 인증이 완료 되었을경우 JWT 토큰을 만들어 return 함.
    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        log.info("[Login Request Success]");
        PrincipalDetails principalDetails = (PrincipalDetails) authResult.getPrincipal();

        String jwtToken = JWT.create()
                .withSubject(jwtProperties.getSubject()) // 제목
                .withExpiresAt( new Date(System.currentTimeMillis() + jwtProperties.getRefreshTime() )) // 토큰 유효기간 설정
                .withClaim(jwtProperties.getClaim().getId(),principalDetails.getUser().getId()) // key value 값으로 저장하고자 하는 값 원하는 값을 넣으면 된다.
                .withClaim(jwtProperties.getClaim().getUsername(),principalDetails.getUser().getUsername())
                .sign(Algorithm.HMAC512(jwtProperties.getAlgorithm())); // 원하는 암호화 알고리즘 설정 개발단계에서 리터럴로 boiler 로 설정함.

        response.addHeader(jwtProperties.getCoreHeader(),jwtProperties.getCoreHeaderTypeWithBlankSpace()+jwtToken);
    }
}
