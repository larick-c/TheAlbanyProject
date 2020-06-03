select u.user_id, u.first_name, u.last_name, u_s.string_id, s_a.description, s_a.total from strings_attached.user_profile u inner join strings_attached.user_strings u_s on u.user_id = u_s.id_user inner join strings_attached.string_attached s_a on u_s.string_id = s_a.id
CREATE SEQUENCE strings_attached.group_id_seq START 1 Increment by 1;

-- Column: strings_attached.user_strings.user_id

-- ALTER TABLE strings_attached.user_strings DROP COLUMN user_id;

ALTER TABLE strings_attached.user_strings
    ADD COLUMN user_id integer NOT NULL;


	CREATE TABLE strings_attached.user_strings
(
    id_user integer NOT NULL,
    string_id integer NOT NULL,
    CONSTRAINT user_strings_strings_attached_id_fkey FOREIGN KEY (string_id)
        REFERENCES strings_attached.string_attached (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT user_strings_user_id_fkey FOREIGN KEY (id_user)
        REFERENCES strings_attached.user_profile (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

CREATE TABLE strings_attached.user_strings
(
    id_user integer NOT NULL,
    string_id integer NOT NULL,
    CONSTRAINT user_strings_strings_attached_id_fkey FOREIGN KEY (string_id)
        REFERENCES strings_attached.string_attached (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT user_strings_user_id_fkey FOREIGN KEY (id_user)
        REFERENCES strings_attached.user_profile (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

CREATE TABLE strings_attached.string_group
(
    string_id integer NOT NULL,
    group_id integer NOT NULL,
    CONSTRAINT string_group_string_attached_id_fkey FOREIGN KEY (string_id)
        REFERENCES strings_attached.string_attached (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT string_group_group_id_fkey FOREIGN KEY (group_id)
        REFERENCES strings_attached.group (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

-- Table: strings_attached.string_attached

-- DROP TABLE strings_attached.string_attached;

CREATE TABLE strings_attached.group
(
    id integer NOT NULL,
    total numeric(4,2) NOT NULL,
    CONSTRAINT group_pkey PRIMARY KEY (id)
)

CREATE TABLE strings_attached.string_group
(
    string_id integer NOT NULL,
    total numeric(4,2) NOT NULL,
    CONSTRAINT group_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE strings_attached.string_attached
    OWNER to vniudpwdvcythl;