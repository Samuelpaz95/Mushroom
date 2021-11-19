CREATE DATABASE IF NOT EXISTS MRDB;

USE MRDB;

CREATE TABLE MRDB_User (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    passwrd VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE MRDB_class (
    code INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    class_name VARCHAR(100) NOT NULL,
    owner_user_id INT NOT NULL,
    FOREIGN KEY (owner_user_id) REFERENCES MRDB_User(id) ON DELETE CASCADE
);

CREATE TABLE MRDB_suscribe (
    subcription_code INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    class_code INT NOT NULL,
    FOREIGN KEY (student_id) REFERENCES MRDB_User(id) ON DELETE CASCADE,
    FOREIGN KEY (class_code) REFERENCES MRDB_class(code) ON DELETE CASCADE
);

CREATE TABLE MRDB_task (
    code INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    task_description TEXT,
    calification FLOAT,
    emition_date DATE NOT NULL,
    deadline DATE NOT NULL,
    class_code INT NOT NULL,
    FOREIGN KEY (class_code) REFERENCES MRDB_class(code) ON DELETE CASCADE
)