package com.sa.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;
@Entity
@Table(name="USER_PROFILE", schema = "strings_attached")
public class User {
    private static final long serialVersionUID = 1L;
    @ManyToMany(cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
    @JoinTable(name="user_strings", schema = "strings_attached",
        joinColumns = @JoinColumn(name = "id_user"),
        inverseJoinColumns = @JoinColumn(name = "string_id"))
    @JsonIgnoreProperties("users")
    private Set<StringAttached> stringsAttached = new HashSet<>();

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name ="user_id")
    private Long userId;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "email")
    private String email;

    public User (){

    }

    public User (String firstName, String lastName, String email, Set<StringAttached> stringsAttached){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.stringsAttached = stringsAttached;
    }

    public Set<StringAttached> getStringsAttached() {
        return stringsAttached;
    }

    public void setStringsAttached(Set<StringAttached> stringsAttached) {
        this.stringsAttached = stringsAttached;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
