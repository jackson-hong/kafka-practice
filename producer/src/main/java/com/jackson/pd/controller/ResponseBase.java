package com.jackson.pd.controller;

import com.jackson.pd.common.code.ResultCode;
import lombok.Getter;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter
public class ResponseBase {

    private final ResultCode resultCode;

    public ResponseBase(ResultCode resultCode) {
        this.resultCode = resultCode;
    }

    public String getResultMessage() {
        return resultCode.getResultMessage();
    }

    public String getResultCode() {return resultCode.getResultCode();}
    private final LocalDateTime systemDt = LocalDateTime.now();

    public String getSystemDt() {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
    }


}
