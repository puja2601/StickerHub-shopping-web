package com.myproject.stickerhub.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductDto {

    private Integer productId;
    private String category;
    private String imgUrl;
    private Integer popularity;
    private String productDescription;
    private String productName;
    private Double productPrice;

}
