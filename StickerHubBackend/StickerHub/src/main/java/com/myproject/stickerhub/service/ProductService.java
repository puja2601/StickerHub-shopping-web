package com.myproject.stickerhub.service;

import com.myproject.stickerhub.dto.ProductDto;

import java.util.List;

public interface ProductService {

    public List<ProductDto> getAllProducts();

    public ProductDto getProductById(long id);
}
