package com.sa.dao;

import com.sa.entities.User;
import org.apache.commons.lang3.StringUtils;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class BaseBean implements BaseBeanLocal {

    @Override
    public void addUser(String firstName, String lastName) throws Exception {
        try {
            User user = new User();
            if (!StringUtils.isEmpty(firstName) && !StringUtils.isEmpty(lastName)) {
                user.setFirstName(firstName);
                user.setLastName(lastName);
                user.setEmail("test@email.com");
                EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("TheAlbanyProject_PU");
                EntityManager entityManager = entityManagerFactory.createEntityManager();
                entityManager.getTransaction().begin();
                entityManager.persist(user);
                entityManager.getTransaction().commit();
                entityManager.close();
            }
        } catch (Throwable ex){
            throw new Exception(ex);
        }
    }
}
