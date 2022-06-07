package com.jackson.pd.common.exception;

import com.jackson.pd.common.code.ResultCode;
import lombok.Getter;

@Getter
public class BoilerException extends RuntimeException {

    private final ResultCode resultCode;
    private final String description;

    public BoilerException(ResultCode resultCode) {
        this(resultCode, resultCode.getResultMessage());
    }

    public BoilerException(ResultCode resultCode, String message){
        super(message);
        this.resultCode = resultCode;
        this.description = message;
    }
}
