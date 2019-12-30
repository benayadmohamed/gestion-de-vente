package com;

import com.configs.security.MyBCryptPasswordEncoder;
import com.models.Privilege;
import com.models.Role;
import com.models.User;
import com.repositories.PrivilageRepository;
import com.repositories.RoleRepository;
import com.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;

@SpringBootApplication
public class SecurityServiceApplication implements CommandLineRunner {

    @Autowired
    UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private PrivilageRepository privilageRepository;
    @Autowired
    private MyBCryptPasswordEncoder myBCryptPasswordEncoder;

    public static void main(String[] args) {
        SpringApplication.run(SecurityServiceApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        roleRepository.deleteAll();
        privilageRepository.deleteAll();
        userRepository.deleteAll();

        Privilege EDIT_CUSTOMER = privilageRepository.save(new Privilege("EDIT_CUSTOMER"));
        Privilege READ_CUSTOMER = privilageRepository.save(new Privilege("READ_CUSTOMER"));
        Privilege DELETE_CUSTOMER = privilageRepository.save(new Privilege("DELETE_CUSTOMER"));

        Role ROLE_ADMIN = roleRepository.save(new Role("ROLE_ADMIN",
                Arrays.asList(
                        EDIT_CUSTOMER,
                        READ_CUSTOMER,
                        DELETE_CUSTOMER
                )));
        Role ROLE_USER = roleRepository.save(new Role("ROLE_USER", Arrays.asList(
                READ_CUSTOMER
        )));
        userRepository.save(new User(
                "admin",
                myBCryptPasswordEncoder.encode("0000"),
                Arrays.asList(ROLE_ADMIN, ROLE_USER)
        ));
        userRepository.save(new User(
                "user",
                myBCryptPasswordEncoder.encode("0000"),
                Arrays.asList(ROLE_USER)
        ));

    }
}
