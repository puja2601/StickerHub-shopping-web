package com.myproject.stickerhub.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "contact", schema = "stickershop")
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "contact_id", nullable = false)
    private Long id;

    @Column(name = "name", nullable = false, length = 100)
    private String name;

    @Column(name = "email", nullable = false, length = 100)
    private String email;

    @Column(name = "mobile_number", nullable = false, length = 12)
    private String mobileNumber;

    @Column(name = "message", nullable = false, length = 500)
    private String message;


    @Column(name = "created_at")
    private Instant createdAt;

    @Column(name = "created_by",  length = 20)
    private String createdBy;

    @Column(name = "updated_at")
    private Instant updatedAt;

    @Column(name = "updated_by")
    private Instant updatedBy;


}