package com.repositories;

import com.entities.Bill;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface BillRepository extends CrudRepository<Bill, Long> {
}