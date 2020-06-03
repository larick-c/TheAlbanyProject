package com.sa.test;

import org.junit.jupiter.api.Test;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.PersistenceContext;
import java.sql.*;
import java.util.List;

@Stateless
public class WebServletTest {

    @PersistenceContext(unitName="StringsAttached_PU") protected EntityManager em;

    @Test
    public void testConn(){
//        testConnection();
        testEm();
    }

    public void testConnection(){
//       String url = "jdbc:postgresql://rplvxjiahynfvj:005abe9be64181646b18da892eda3ec6cd15d9c90836fe892200771ca05c54a2@ec2-35-168-54-239.compute-1.amazonaws.com:5432/d656j25vh3pfvi";
       String url = "jdbc:postgresql://ec2-35-168-54-239.compute-1.amazonaws.com:5432/d656j25vh3pfvi?sslmode=require";
       String user = "rplvxjiahynfvj";
       String password = "005abe9be64181646b18da892eda3ec6cd15d9c90836fe892200771ca05c54a2";

        WebServletTest webServletTest = new WebServletTest();
        webServletTest.connect(url, user, password);

    }

    public void testEm(){
        EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("StringsAttached_PU");
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        entityManager.getTransaction().begin();
        List<Object[]> list = entityManager.createNativeQuery("select * from strings_attached.user_profile").getResultList();
       System.out.println("List");
    }

    public Connection connect(String url, String user, String password) {
        Connection conn = null;
        try {
            Class.forName("org.postgresql.Driver");
            conn = DriverManager.getConnection(url, user, password);
            System.out.println("Connected to the PostgreSQL server successfully.");
            String sql = "select * from strings_attached.user_profile";

            PreparedStatement preparedStatement =
                    conn.prepareStatement(sql);
            ResultSet result = preparedStatement.executeQuery();
            System.out.println("Result Set");
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }

        return conn;
    }

}
