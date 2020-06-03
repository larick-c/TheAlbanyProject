package com.sa.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="GROUP", schema = "strings_attached")
public class Group {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name ="id")
    private Long id;
    @Column(name="total")
    private BigDecimal total;

    @OneToMany(mappedBy = "group", cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
    private Set<StringAttached> stringAttachedSet = new HashSet<>();

    public Group(){

    }

    public Long getId() {
        return id;
    }


    public BigDecimal getTotal() {
        return total;
    }

    public void setTotal(BigDecimal total) {
        this.total = total;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Set<StringAttached> getStringAttachedSet() {
        return stringAttachedSet;
    }

    public void setStringAttachedSet(Set<StringAttached> stringAttachedSet) {
        this.stringAttachedSet = stringAttachedSet;
    }
}
