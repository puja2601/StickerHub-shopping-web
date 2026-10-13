package com.myproject.stickerhub.service;

import com.myproject.stickerhub.dto.ProductMapper;
import com.myproject.stickerhub.dto.ProductDto;
import com.myproject.stickerhub.entity.Product;
import com.myproject.stickerhub.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService {

    final ProductRepository  productRepository;
    @Autowired
    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }


    @Override
    public List<ProductDto> getAllProducts() {
     List<ProductDto>  products = productRepository.findAll()
             .stream().map(ProductMapper::toDto).collect(Collectors.toList());
     return products;
    }

    @Override
    public ProductDto getProductById(long id) {
        Product product=productRepository.findById((int) id).get();
        return ProductMapper.toDto(product);
    }
}
