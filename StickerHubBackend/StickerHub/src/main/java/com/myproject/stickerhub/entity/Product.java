package com.myproject.stickerhub.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "products", schema = "stickershop")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id", nullable = false)
    private Integer productId;

    @Column(name = "category")
    private String category;

    @Column(name = "created_at")
    private Instant createdAt;

    @Column(name = "created_by")
    private String createdBy;

    @Column(name = "img_url")
    private String imgUrl;

    @Column(name = "popularity", nullable = false)
    private Integer popularity;

    @Column(name = "product_description")
    private String productDescription;

    @Column(name = "product_name")
    private String productName;

    @Column(name = "product_price", nullable = false)
    private Double productPrice;

    @Column(name = "updated_at")
    private Instant updatedAt;

    @Column(name = "updated_by")
    private String updatedBy;


}