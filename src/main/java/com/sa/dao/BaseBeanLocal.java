package com.sa.dao;

import javax.ejb.Local;

@Local
public interface BaseBeanLocal {
    void addUser(String firstName, String lastName) throws Exception;
}
