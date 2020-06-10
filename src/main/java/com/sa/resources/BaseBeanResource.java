package com.sa.resources;

import com.sa.dao.BaseBean;
import com.sa.dao.BaseBeanLocal;

import javax.ejb.Stateless;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Stateless
@Path("/resource")
public class BaseBeanResource {

    private BaseBeanLocal baseBeanLocal = new BaseBean();

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/addUser")
    public Response createUser(@QueryParam("firstName") final String firstName, @QueryParam("lastName") final String lastName, @Context final HttpServletRequest request) {
        try {
            baseBeanLocal.addUser(firstName, lastName);
            return Response.ok().build();
        } catch (final Throwable ex) {
            return Response.status(Response.Status.BAD_REQUEST).build();
        }
    }
}
