package com.sa.resources;

import com.sa.dao.BaseBean;
import com.sa.dao.BaseBeanLocal;
import com.sa.entities.StringAttached;
import com.sa.entities.User;

import javax.ejb.Stateless;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;
import java.util.Set;

@Stateless
@Path("/resource")
public class BaseBeanResource {

    private BaseBeanLocal baseBeanLocal = new BaseBean();

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/names")
    public Response names(@Context final HttpServletRequest request) {
        try {
            List<User> users = baseBeanLocal.getNames();
            if (users != null) {
                GenericEntity entity = new GenericEntity<List<User>>(users){};
                return Response.ok(entity).build();
            } else {
                return Response.status(Response.Status.NO_CONTENT).build();
            }
        } catch (final Throwable ex) {
            return Response.status(Response.Status.BAD_REQUEST).build();
        }
    }
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/stringsattached")
    public Response stringsAttached(@Context final HttpServletRequest request) {
        try {
            List<StringAttached> stringsAttached = baseBeanLocal.getStringsAttached();
            if (stringsAttached != null) {
                GenericEntity entity = new GenericEntity<List<StringAttached>>(stringsAttached){};
                return Response.ok(entity).build();
            } else {
                return Response.status(Response.Status.NO_CONTENT).build();
            }
        } catch (final Throwable ex) {
            return Response.status(Response.Status.BAD_REQUEST).build();
        }
    }
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/createUser")
    public Response createUser(@QueryParam("firstName") final String firstName, @QueryParam("lastName") final String lastName, @Context final HttpServletRequest request) {
        try {
            baseBeanLocal.createUser(firstName, lastName);
            return Response.ok().build();
        } catch (final Throwable ex) {
            return Response.status(Response.Status.BAD_REQUEST).build();
        }
    }
}
