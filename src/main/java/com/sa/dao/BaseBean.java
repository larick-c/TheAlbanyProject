package com.sa.dao;

import com.sa.entities.Group;
import com.sa.entities.StringAttached;
import com.sa.entities.User;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class BaseBean implements BaseBeanLocal {
    @Override
    public List<User> getNames() throws Exception {
        try {
            EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("StringsAttached_PU");
            EntityManager entityManager = entityManagerFactory.createEntityManager();
            entityManager.getTransaction().begin();
            List<User> users = entityManager.createNativeQuery("select u.user_id from strings_attached.user_profile u", User.class).getResultList();
            entityManager.close();
            return users;
        } catch (Throwable ex) {
            throw new Exception(ex);
        }
    }

    @Override
    public List<StringAttached> getStringsAttached() throws Exception {
        try {
            EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("StringsAttached_PU");
            EntityManager entityManager = entityManagerFactory.createEntityManager();
            entityManager.getTransaction().begin();
            List<StringAttached> stringsAttached = entityManager.createNativeQuery("select first_name, last_name, email from strings_attached.string_attached", StringAttached.class).getResultList();
            entityManager.close();
            return stringsAttached;
        } catch (Throwable ex) {
            throw new Exception(ex);
        }
    }

    @Override
    public void createUser(String firstName, String lastName) throws Exception {
        try {
            User user = new User();
            user.setFirstName(firstName);
            user.setLastName(lastName);
            user.setEmail("test@email.com");
            StringAttached stringAttached = new StringAttached();
            stringAttached.setTotal(new BigDecimal(56));
//            user.getStringsAttached().add(stringAttached);
            EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("StringsAttached_PU");
            EntityManager entityManager = entityManagerFactory.createEntityManager();
            entityManager.getTransaction().begin();
            entityManager.persist(user);
            entityManager.getTransaction().commit();
            entityManager.close();
        } catch (Throwable ex){
            throw new Exception(ex);
        }
    }
//    Set<User> userSet = new HashSet<>();
//    Set<StringAttached> stringAttachedSet = new HashSet<>();
//    Set<Group> groupSet = new HashSet<>();
//    User user = new User();
//    User user2 = new User();
//    StringAttached stringAttached = new StringAttached();
//    StringAttached stringAttached2 = new StringAttached();
//    Group group = new Group();
//    user.setFirstName("user x with group");
//    user.setLastName("lastname x");
//    user.setEmail("userx@gmail.com");
//    userSet.add(user);
//    user2.setFirstName("user y with group");
//    user2.setLastName("lastname y");
//    user2.setEmail("usery@gmail.com");
//    stringAttached.setTotal(new BigDecimal(34));
//    stringAttached.setNotes("This will work x with group");
//    stringAttached.setDescription("description x with group");
//    stringAttached.setCreationTs(new Date());
//    stringAttached.setUsers(userSet);
//    stringAttached.setGroup(group);
//    stringAttached2.setTotal(new BigDecimal(43));
//    stringAttached2.setNotes("This will work y with group");
//    stringAttached2.setDescription("description y with group");
//    stringAttached2.setCreationTs(new Date());
//    stringAttached2.setUsers(userSet);
//    stringAttached2.setGroup(group);
//    stringAttachedSet.add(stringAttached);
//    stringAttachedSet.add(stringAttached2);
//    group.setStringAttachedSet(stringAttachedSet);
//    group.setTotal(new BigDecimal(200));
//    groupSet.add(group);
//    user.setStringsAttached(stringAttachedSet);
//    entityManager.persist(user);
//    entityManager.getTransaction().commit();
}
