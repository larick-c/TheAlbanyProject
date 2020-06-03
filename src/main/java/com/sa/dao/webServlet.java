package com.sa.dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.PersistenceContext;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/resource")
public class webServlet {

    @PersistenceContext(unitName="StringsAttached_PU") protected EntityManager em;

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getGreeting(){

//        List<Object[]> list = em.createNativeQuery("select * from strings_attached.user_profile;").getResultList();
        EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("StringsAttached_PU");
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        entityManager.getTransaction().begin();
        List<Object[]> list =  entityManager.createNativeQuery("select * from strings_attached.user_profile").getResultList();
//        List<String> names = new ArrayList<>();
//        names.add("Cory");

        return "This is your Time! " + list.get(0)[1] + " " + list.get(0)[3];
    }
}
