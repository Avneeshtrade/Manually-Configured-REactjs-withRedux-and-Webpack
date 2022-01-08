BEGIN TRANSACTION;

CREATE Table Student (
    id serial primary key,
    studentName varchar(50),
    contact varchar(20),
    age integer,
    hobby varchar(50),
    highest_education varchar(100)
);

COMMIT;


BEGIN TRANSACTION;

INSERT INTO Student (studentName,contact,age ,hobby,highest_education) values ('Naman Dubey','9324584679',24,'Cricket','Bachelor Of Engineering (BE)');

COMMIT;