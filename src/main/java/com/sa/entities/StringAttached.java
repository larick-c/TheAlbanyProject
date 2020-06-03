package com.sa.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.*;

@Entity
@Table(name="string_attached", schema = "strings_attached")
public class StringAttached {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name ="id")
    private Long id;
    @Column(name = "DESCRIPTION")
    private String description;
    @Column(name = "NOTES")
    private String notes;
    @Column(name = "TOTAL")
    private BigDecimal total;
    @Column(name = "CREATIONTS")
    private Date creationTs;

    @ManyToMany(mappedBy = "stringsAttached", cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
    @JsonIgnoreProperties("stringsAttached")
    private Set<User> users = new HashSet<>();

    @ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
    @JoinTable(name="string_group", schema = "strings_attached",
            joinColumns = @JoinColumn(name = "string_id"),
            inverseJoinColumns = @JoinColumn(name = "group_id"))
    private Group group = new Group();

    public StringAttached(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }



    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public BigDecimal getTotal() {
        return total;
    }

    public void setTotal(BigDecimal total) {
        this.total = total;
    }

    public Date getCreationTs() {
        return creationTs;
    }

    public void setCreationTs(Date creationTs) {
        this.creationTs = creationTs;
    }

    public Group getGroup() {
        return group;
    }

    public void setGroup(Group group) {
        this.group = group;
    }

    //    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (o == null || getClass() != o.getClass()) return false;
//        StringAttached that = (StringAttached) o;
//        return Objects.equals(users, that.users) &&
//                Objects.equals(id, that.id) &&
//                Objects.equals(description, that.description) &&
//                Objects.equals(notes, that.notes) &&
//                Objects.equals(total, that.total) &&
//                Objects.equals(creationTs, that.creationTs);
//    }

//    @Override
//    public int hashCode() {
//        return Objects.hash(users, id, description, notes, total, creationTs);
//    }
}
