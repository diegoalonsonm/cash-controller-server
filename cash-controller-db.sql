create database cashController;
use cashController;

create table users (
	id int auto_increment primary key,
    name varchar(25) not null,
    lastName varchar(40) not null,
    email varchar(30) not null,
    password varchar(30) not null,
    availableBudget decimal (10, 2)
);

insert into users (name, lastName, email, password, availableBudget) values ('Diego', 'Naranjo', 'diegoalonsonm@gmail.com', 'Danm0309', 133.85);
insert into users (name, lastName, email, password, availableBudget) values ('Juan', 'Perez', 'juanperez@gmail.com', '1234', 100.00);
insert into users (name, lastName, email, password, availableBudget) values ('Maria', 'Gonzalez', 'gonza.maria@apple.com', 'marimari', 200.00);

create table expense (
	id int auto_increment primary key,
    description varchar(255) not null,
    categoryId int not null,
    amount decimal(10, 2),
    date date not null,
    userId int not null,
    foreign key (userId) references users(id),
    foreign key (categoryId) references category(id)
);

insert into expense (description, categoryId, amount, date, userId) values ('Lunch', 1, 10.00, '2024-04-03', 1);
insert into expense (description, categoryId, amount, date, userId) values ('Train', 2, 2.00, '2024-04-03', 1);

create table income (
	id int auto_increment primary key,
    description varchar(255) not null,
    categoryId int not null,
    amount decimal(10, 2),
    date date not null,
    userId int not null,
    foreign key (userId) references users(id),
    foreign key (categoryId) references category(id)
);

insert into income (description, categoryId, amount, date, userId) values ('Salary', 9, 1000.00, '2024-04-03', 1);
insert into income (description, categoryId, amount, date, userId) values ('Investment', 10, 200.00, '2024-04-03', 1);

create table category (
	id int auto_increment primary key,
    description varchar(255) not null
);

insert into category (description) values ('Food');
insert into category (description) values ('Transport');
insert into category (description) values ('Health');
insert into category (description) values ('Education');
insert into category (description) values ('Entertainment');
insert into category (description) values ('Clothes');
insert into category (description) values ('Rent');
insert into category (description) values ('Services');
insert into category (description) values ('Salary');
insert into category (description) values ('Investment');
insert into category (description) values ('Gifts');
insert into category (description) values ('Savings');
insert into category (description) values ('Loans');
insert into category (description) values ('Insurance');
insert into category (description) values ('Others');