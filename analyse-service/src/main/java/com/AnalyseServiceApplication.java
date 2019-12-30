package com;

import com.dao.ClientRepository;
import com.entities.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AnalyseServiceApplication implements CommandLineRunner {
    @Autowired
    ClientRepository clientRepository;

    public static void main(String[] args) {
        SpringApplication.run(AnalyseServiceApplication.class, args);

    }

    @Override
    public void run(String... args) throws Exception {
        clientRepository.save(new Client("", "salam", "ana", null, null));
        clientRepository.save(new Client("", "salam", "ana", null, null));
        clientRepository.save(new Client("", "salam", "ana", null, null));
        clientRepository.save(new Client("", "salam", "ana", null, null));
        clientRepository.save(new Client("", "salam", "ana", null, null));
        clientRepository.save(new Client("", "salam", "ana", null, null));
        clientRepository.save(new Client("", "salam", "ana", null, null));
        clientRepository.save(new Client("", "salam", "ana", null, null));
        clientRepository.save(new Client("", "salam", "ana", null, null));
    }
}
