package com.repositories;

import com.entities.ProductItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface ProductItemRepository extends
        CrudRepository<ProductItem, Long> {
    List<ProductItem> findByBillId(Long billID);
}