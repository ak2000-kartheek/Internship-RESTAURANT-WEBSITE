create database restaurant;
use restaurant;
create table bookings(
        Id int auto_increment,
        Name varchar(45) not null,
		Email varchar(50) not null,
        mobile varchar(10),
        time varchar(10),
        number varchar(20) not null,
        primary key(Id)); 
        select * from bookings;
        
        create table customers(
        Id int auto_increment,
        Name varchar(50) not null,
		Email varchar(45) not null,
        mobile varchar(10),
        Feedback varchar(5000) not null,
        primary key(Id));
        select * from customers;