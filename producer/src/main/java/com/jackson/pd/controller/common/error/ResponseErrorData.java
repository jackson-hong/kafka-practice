package com.jackson.pd.controller.common.error;

import com.jackson.pd.common.code.ResultCode;
import com.jackson.pd.controller.ResponseData;
import com.jackson.pd.controller.payload.ErrorPayload;

public class ResponseErrorData extends ResponseData<ErrorPayload> {

    public ResponseErrorData(ResultCode resultCode, ErrorPayload data) {
        super(resultCode, data);
    }

}
