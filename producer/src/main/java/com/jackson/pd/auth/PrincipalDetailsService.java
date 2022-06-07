package com.jackson.pd.auth;

import com.jackson.pd.controller.param.user.UserParam;
import com.jackson.pd.controller.payload.user.UserPayload;
import com.jackson.pd.domain.auth.PrincipalDetails;
import com.jackson.pd.domain.auth.User;
import com.jackson.pd.domain.auth.UserRepository;
import com.jackson.pd.auth.verifier.SignUpDataVerifier;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

// login 요청시 즉시 동작.
@Service
@AllArgsConstructor
@Slf4j
public class PrincipalDetailsService implements UserDetailsService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    private final SignUpDataVerifier signUpDataVerifier;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        log.info("[USER_DETAILS] Security login Auth process start");
        User user = userRepository.findByUsername(username);
        return new PrincipalDetails(user);
    }

    public UserPayload userDataHandler(UserParam userParam){
        User user = new ModelMapper().map(userParam,User.class);
        signUpDataVerifier.validateUserParam(userParam);
        user.encodePwd(bCryptPasswordEncoder);
        user = saveUser(user);
        return userPayloadBuilder(user);
    }

    private User saveUser(User user){
        return userRepository.save(user);
    }

    private UserPayload userPayloadBuilder(User user){
        return UserPayload.builder()
                .username(user.getUsername())
                .role(user.getRole())
                .build();
    }

}
