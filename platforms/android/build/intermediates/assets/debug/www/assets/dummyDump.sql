CREATE TABLE IF NOT EXISTS membersANDgroups(id INTEGER PRIMARY KEY AUTOINCREMENT, groupID TEXT, groupName TEXT, email TEXT, name TEXT, privilege TEXT, score INTEGER);
INSERT INTO membersANDgroups(groupID, groupName, email, name, privilege, score) VALUES ('marco.email@domainX.com-White-Family', 'White Family', 'marco.email@domainX.com', 'Marco', 'admin', '9');
INSERT INTO membersANDgroups(groupID, groupName, email, name, privilege, score) VALUES ('marco.email@domainX.com-White-Family', 'White Family', 'Julie White', 'Wife', 'member', '8');
INSERT INTO membersANDgroups(groupID, groupName, email, name, privilege, score) VALUES ('john.email@domainXYZ.com-Soccer-Team', 'Soccer Team', 'john.email@domainXYZ.com','John Kennedy', 'admin', '10');
INSERT INTO membersANDgroups(groupID, groupName, email, name, privilege, score) VALUES ('john.email@domainXYZ.com-Soccer-Team', 'Soccer Team', 'marco.email@domainX.com','Marco White', 'admin', '10');
CREATE TABLE IF NOT EXISTS UsersSettings(id INTEGER PRIMARY KEY AUTOINCREMENT, nick TEXT, email TEXT, defaultGroupID TEXT, defaultGroupName TEXT, pass TEXT );
INSERT INTO UsersSettings(nick, email, defaultGroupID, defaultGroupName, pass) VALUES ('Marco White', 'marco.email@domainX.com', 'marco.email@domainX.com-White-Family', 'White Family', '123');
