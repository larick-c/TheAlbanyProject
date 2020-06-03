package com.sa.resources;

import com.sa.dao.BaseBean;
import com.sa.dao.BaseBeanLocal;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;
import java.util.HashSet;
import java.util.Set;

@ApplicationPath("/app/*")
public class MyApplication extends Application {
    public Set<Class<?>> getClasses(){
        final Set<Class<?>> classes = new HashSet<>();
        classes.add(BaseBeanResource.class);
        classes.add(BaseBeanLocal.class);
        classes.add(BaseBean.class);
        return classes;
    }
}
