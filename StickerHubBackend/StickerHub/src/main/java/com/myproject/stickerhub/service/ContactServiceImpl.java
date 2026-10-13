package com.myproject.stickerhub.service;

import com.myproject.stickerhub.entity.Contact;
import com.myproject.stickerhub.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
public class ContactServiceImpl implements ContactService{

    ContactRepository contactRepository;
    @Autowired
    public void contactServiceImpl(ContactRepository contactRepository){
        this.contactRepository=contactRepository;
    }

    @Override
    public Contact saveContact(Contact contact) {
        contact.setCreatedBy(contact.getName());
        contact.setCreatedAt(Instant.now());

        Contact newContacted = contactRepository.save(contact);

        return newContacted;
    }
}
