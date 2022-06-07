package com.jackson.pd.controller.payload.user;

import com.jackson.pd.controller.param.roles.Role;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.NotNull;

@Getter
@NoArgsConstructor
@ToString
public class UserPayload {

    @NotNull
    private String username;

    @NotNull
    @Enumerated(EnumType.STRING)
    private Role role;

    @Builder
    public UserPayload(String username, Role role) {
        this.username = username;
        this.role = role;
    }
}
