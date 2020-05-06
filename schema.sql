DROP TABLE IF EXISTS people;

CREATE TABLE people (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200),
  type VARCHAR(200)
);

INSERT INTO PEOPLE (name, type) VALUES ('Sally', 'Student');
INSERT INTO PEOPLE (name, type) VALUES ('John', 'Parent');
INSERT INTO PEOPLE (name, type) VALUES ('Zach', 'Kid');
INSERT INTO PEOPLE (name, type) VALUES ('Cathy', 'Parent');
INSERT INTO PEOPLE (name, type) VALUES ('Allie', 'Kid');
INSERT INTO PEOPLE (name, type) VALUES ('Trent', 'Student');
INSERT INTO PEOPLE (name, type) VALUES ('Amanda', 'Student');
INSERT INTO PEOPLE (name, type) VALUES ('Brian', 'Teacher');
