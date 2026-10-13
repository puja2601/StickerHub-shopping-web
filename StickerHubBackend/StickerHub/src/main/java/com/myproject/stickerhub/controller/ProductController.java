package com.myproject.stickerhub.controller;


import com.myproject.stickerhub.dto.ProductDto;
import com.myproject.stickerhub.service.ProductService;
import com.myproject.stickerhub.service.ProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
//@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    private ProductServiceImpl productServiceimpl;
    @Autowired
    public ProductController(ProductServiceImpl productServiceimpl){
        this.productServiceimpl=productServiceimpl;
    }

    @GetMapping("/stickers")
    public List<ProductDto> getProductList() throws InterruptedException {
        return productServiceimpl.getAllProducts();
    }


}
