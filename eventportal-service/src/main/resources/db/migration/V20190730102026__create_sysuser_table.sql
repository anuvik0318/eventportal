create table sys_user(
	id bigint(20) NOT NULL AUTO_INCREMENT,
	user_name VARCHAR(20) NOT NULL,
	password VARCHAR(50) NOT NULL,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) DEFAULT NULL,
	email VARCHAR(50),
	PRIMARY KEY(id),
	UNIQUE KEY UK_username (user_name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;