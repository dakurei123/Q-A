package com.example.demo.exception;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class ApiExceptionResponse {
    private String error;
    private Object data;
}
