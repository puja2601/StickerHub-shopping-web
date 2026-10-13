package com.myproject.stickerhub.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ContactDto {
    private String name;
    private String email;
    private String mobileNumber;
    private String message;

}
