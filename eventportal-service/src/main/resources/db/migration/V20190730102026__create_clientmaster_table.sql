create table client_master (
    id bigint not null auto_increment,
    first_name varchar(30) not null,
    last_name varchar(30),
    phone varchar(12) not null,
	email varchar(50),
    primary key (id)
) engine=InnoDB;