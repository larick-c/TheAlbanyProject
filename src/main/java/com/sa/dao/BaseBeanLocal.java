package com.sa.dao;

import javax.ejb.Local;
import java.util.List;
import java.util.Set;

import com.sa.entities.StringAttached;
import com.sa.entities.User;

@Local
public interface BaseBeanLocal {
    List<User> getNames() throws Exception;
    List<StringAttached> getStringsAttached() throws Exception;
    void createUser(String firstName, String lastName) throws Exception;
}
