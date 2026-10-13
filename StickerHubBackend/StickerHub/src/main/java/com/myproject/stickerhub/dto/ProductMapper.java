package com.myproject.stickerhub.dto;

import com.myproject.stickerhub.entity.Product;

public class ProductMapper {

  public static ProductDto toDto(Product product) {
        ProductDto productDto = new ProductDto();
        productDto.setProductId(product.getProductId());
        productDto.setCategory(product.getCategory());
        productDto.setProductName(product.getProductName());
        productDto.setProductPrice(product.getProductPrice());
        productDto.setProductDescription(product.getProductDescription());
        productDto.setImgUrl(product.getImgUrl());
        productDto.setPopularity(product.getPopularity());
        return productDto;

    }

   public Product toEntity(ProductDto productDto) {
        Product product = new Product();
        product.getProductId();
        product.setCategory(productDto.getCategory());
        product.setProductName(productDto.getProductName());
        product.setProductPrice(productDto.getProductPrice());
        product.setProductDescription(productDto.getProductDescription());
        product.setImgUrl(productDto.getImgUrl());
        return product;

    }
}
