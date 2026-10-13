package com.myproject.stickerhub.controller;

import com.myproject.stickerhub.dto.ContactDto;
import com.myproject.stickerhub.dto.ContactMapper;
import com.myproject.stickerhub.entity.Contact;
import com.myproject.stickerhub.service.ContactServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/contact")
public class ContactController {

    ContactServiceImpl contactSeriveImpl;
   @Autowired
   public   ContactController(ContactServiceImpl contactSeriveImpl) {
        this.contactSeriveImpl=contactSeriveImpl;
    }

    @PostMapping
    public ContactDto  saveContactDto(@RequestBody Contact contact) {
       Contact contactoSave=contactSeriveImpl.saveContact(contact);
        return ContactMapper.toDto(contactoSave);
    }
}
