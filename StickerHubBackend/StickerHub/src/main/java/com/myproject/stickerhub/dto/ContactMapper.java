package com.myproject.stickerhub.dto;

import com.myproject.stickerhub.entity.Contact;

public class ContactMapper {

    public static ContactDto toDto(Contact contact) {

        ContactDto contactDto = new ContactDto();


        contactDto.setName(contact.getName());
        contactDto.setEmail(contact.getEmail());
        contactDto.setMobileNumber(contact.getMobileNumber());
        contactDto.setMessage(contact.getMessage());

        return contactDto;
    }

    // DTO -> Entity
    public static Contact toEntity(ContactDto contactDto) {

        Contact contact = new Contact();

        contact.getId();
        contact.setName(contactDto.getName());
        contact.setEmail(contactDto.getEmail());
        contact.setMobileNumber(contactDto.getMobileNumber());
        contact.setMessage(contactDto.getMessage());

        return contact;
    }
}
