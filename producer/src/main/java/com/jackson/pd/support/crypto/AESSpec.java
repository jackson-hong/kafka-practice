package com.jackson.pd.support.crypto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class AESSpec {

    private String name;
    private String key;
    private String iv;
    private int bitSize;
    private boolean enabled;
}
