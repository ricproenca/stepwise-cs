# CAIE Computer Science IGCSE — Chapter ?: Unknown Chapter

---

1) File-based data storage is fine for simple situations, but in more complex situations, a database is a better choice - one issue is the issue of data redundancy - this is when we have duplicate data. This can make updating/inserting/deleting data difficult, since we have to ensure the change applies everywhere the data is stored - if we don’t, then data inconsistency can occur. As a result, programs will have to be written to select/insert/update/delete records from these files - problems arise if we want to add/remove fields, want records with a different structure etc - this file-based approach is inflexible and this tightly-coupled nature is called program-data dependancy. Another concern is the lack of security when dealing with file-based data - for example, someone’s name, email, phone number, credit card details, passwords (etc) might all be stored unencrypted in a single file - it would be possible to create different files with different permissions/access rights for different users, but then we encounter the problem of data redundancy, as stated above. Finally, no validation is included with a file-based approach by default - it would have to be implemented by the programmer. Without it, data could be inconsistent, inaccurate and redundant. 

## 2) Define the following terms: 

Relation: a table in a relational database that models an entity - each relation will have attributes and can contain many records. Relations can be joined together via foreign keys. 

Attributes/fields: the columns in a relational database - i.e. properties about each record in the relation (name, gender, email etc) 

Tuple/records: the rows in a relational database - each record will have attribute values and all records has to be uniquely identifiable via its primary key 

Schema: used to define the structure of the database - i.e. listening the relation names, attributes in each relation, primary keys etc - e.g. School(SchoolID, Name, HeadteacherID, NumStudents, Email) 

Relational database: a type of database in which data is stored as records in relations - as stated, these relations can have relationships to other relations and be joined together via foreign keys 

Primary key: a field or set of fields chosen to uniquely identify each record in the relation 

Composite key: a primary key consisting of multiple fields - e.g. GameScore(PlayerID, GameID, Score) 

Foreign key: a field or set of fields that link to a primary key in another relation - e.g. linking the User and Video table with the User.UserID primary key and the Video.UploaderID foreign key 

Candidate key: any field or combination or fields that guarentee uniqueness in a relation - e.g. in the relation Person(PersonID, Nationality, PassportNum, PhoneNum, Email), there are various composite keys - PersonID, Nationality & PassportNum, Nationality & PhoneNum, Email (this is assuming passport & phone numbers can be the same in different countries…but with the naitonality/country code, they will be globally unique). 1 of these candidate keys will hence be chosen to be the primary key 

Atomic data/atomicity: the propety that each value for a record only contains one value (is indivisible) - e.g. storing “PHP, Java, JavaScript” in a single ProgrammingLanguages field wouldn’t be atomic - a new relation would have to be introduced to break down this data into single values - e.g. full normalised 

Language Relation: 

|Language Relation:||
|---|---|
|LanguageID|LanguageName|
|1|PHP|
|2|Java|
|3|JavaScript|



Person Relation: 

|Person Relation:||
|---|---|
|PersonID|Name|
|1|Rasmus|
|2|James|
|3|Brendan|



PersonLanguage 

PersonID 

LanguageID 

|1|1|
|---|---|
|1|2|
|1|3|
|2|2|
|2|1|
|3|3|



Referential integrity: ensures that each foreign key has a corresponding primary key in the table it references - i.e. no orphaned records. Rules can also be added to e.g. automatically delete the records containing the foreign key if the record with the primary key was deleted in the other relation - e.g. imagine a User and Comment relation on a social media website - if the User is deleted, then all of their comments should be deleted automatically - this can happen because we have linked the Comment.UserID foreign keys with the User.UserID primary key 

3) Look at the following schema for a video-sharing website - underline a suitable primary key for each relation and also note the foreign keys - e.g. by circling them 

**User** (user_id, username, email, gender, bio) 

**Video** (id, uploader_id, title, number_of_likes, number_of_dislikes) 

//note ‘liked’ is a Boolean value - if true, the user liked this video - if false, they disliked it (records won’t exist for users which haven’t voted on a video) 

**VideoRating** (video_id, user_id, liked) 

**Comment** (id, video_id, user_id, comment) **Playlist** (id, title, creator_id) **PlaylistVideo** (playlist_id, video_id) 

4) What does the AUTO INCREMENT property do when added to an attribute in SQL? 

It means that when a new record is inserted with INSERT INTO, then that attribute will be given the next available number - e.g. if defining “id INTEGER AUTO_INCREMENT” in the CREATE TABLE statement, then the first record insterted would automatically be given the id 1, then next would be given id 2, then id 3 and so on 

5) A website requires people to sign up with their phone number. Why would it be a bad idea to use a mobile number/email address as a primary key? (hint: think what might happen in 2, 5 or 10 years) 

People might change their mobile number/email address - or in the case of phone numbers, might even be made available to another user when their contract expires. 

6) A website decides to let users change their username a maximum of once per year - explain why it would therefore be a poor choice to use username as the primary key 

If this was referenced in another relation (e.g. a user’s comments), then all those values would also have to be updated too - would lead to data inconsistency if these records were’t correctly updated and would be a computationally-expensive process (e.g. needing to update indexes) 

7) Assume the following relational database in which referential integrity is to be maintained for StudentID & SubjectID on both UPDATE and DELETE using MySQL’s CASCADE property. Show the result of the relations after the following SQL queries were run: 

DELETE FROM Subject WHERE SubjectID = 4 DELETE FROM Student WHERE StudentID = 1 

|Student|Student|Student|
|---|---|---|
|StudentID|Name|Grade|
|~~1~~|~~Ellie~~|~~10~~|
|2|Paul|11|



Subject SubjectID Name 

|1||Maths|
|---|---|---|
|2||Computer Science|
|3||Physics|
|~~4~~||~~Biology~~|



|StudentSubject|StudentSubject|
|---|---|
|StudentID|SubjectID|
|~~1~~|~~1~~|
|~~1~~|~~2~~|
|~~1~~|~~3~~|
|2|2|
|2|3|
|~~2~~|~~4~~|



- 8) Draw entity-relationship (ER) diagrams for both the schemas in questions 3 and 7 

9) If you see a many-to-many relationship, how should this be normalised? 

Create an additional table containing the foreign keys which you want to link to the primary keys in the original tables: 

e.g. the additional StudentExam relation in this schema: 

Exam(ExamID, Subject) Student(StudentID, Name) StudentExam(StudentID, ExamID, Score) 

10) Suppose we have the following facts: 

- A school has teams for the following sports: football, basketball and table tennis 

- Each team will have multiple members 

- Each year group will have their own team, for each sport 

- A student will belong to a specific year group and potentially multiple sports teams 

Create a fully-normalised (3NF) schema for this scenario 

Member(MemberID, MemberName, YearGroup) Sport(SportID, SportName) Team(TeamID, SportID, YearGroup) 

TeamMember(TeamID, MemberID) 

11) State the requirements for the following normalisation levels: 

Un-normalised: 

Raw data - might contain fields with multiple values, repeating tuples etc 

1[st] normal form: 

Tuples uniquely identified with primary key Each of a tuples attributes must contain at most 1 value Consistent data type must be enforced for each column 


![](images/unit_11_-_databases_answers/img_001.png)


2[nd] normal form: Must be in 1NF No partial dependancy - every non-key column in a table must depend on the value of the key 

3[rd] normal form: Must be in 2NF 

No transitive dependancy - every non-key column must ONLY depend on the value of the key 

12) To be in 3[rd] normal phrase, it helps to remember the phrase: “each non-key attribute is dependant on the key, the whole key and nothing but the key” 

13) What is the difference between the 3 levels of a database: external, conceptual and internal? 

Internal: the way to data is actually stored on disk – i.e. what file structures, encodings, optimisations etc are used to store the data, so that performance should be as optimal as possible 

Conceptual: the level a database administrator would perceive the database – i.e. a collection of tables with a specific structures and set of tuples 

External: This is the level at which an end programmer/user might operate, for example, we may wish to restrict users from access to certain tables/functionality, views can be created to show just a subset of the data (e.g. items currently in stock, relations with sensitive data removed etc) 

14) What is an index and why are they important for databases? What is one disadvantage of using an index? 

A data structure (often a BTree) created for field(s) used to speed up access of a record via those field(s) - disadvantages are that memory/storage is also required for these indexes and updates can become slow, since the index also has to be updated accordingly. The primary key is automatically indexed, to allow for fast access (select/update/delete etc) of that tuple 

15) The DDL & DML we learn is SQL and the DBMS we have been using is MySQL 

16) What is a ‘view’ in a MySQL, when might it be used and what are the advantages of it? 

'Views’ are another abstraction that the end programmer/user may see at the external level. These are effectively intermediate relations, derived from others – for example, suppose we had a relation called Inventory – we could create a view for items in stock – i.e.: 

CREATE VIEW in_stock AS SELECT * FROM inventory WHERE stock > 0 

The advantage is that only the relevant data (items in stock) would be present in the view - if stock levels in the inventory relation change, the view will upadte accordingly. Another advantage is security - for example, suppose we need to store sensitive details (banking, address, phone number etc) for legal reasons, but customer support staff shouldn’t be able to see these on a day to day basis - we could create a view that selects the subset of customer details that the customer support agent is permitted to see 

## 17) What is a DBMS’ data dictionary? What are some of the things stored in it? 

A collection of metadata that stores things such as the following about the database: 

Relation names Column names, types, default values etc Indexes Users & permissions Views 

etc 

18) Define the following terms and give example operations in each (for example, ORDER BY would be a DML operation). Note that SQL supports both DDL & DML statements 

DDL: data definition language - used to manage relations, define the schemas etc 

CREATE TABLE Scientists ( 

scientistId INT PRIMARY KEY, fullName VARCHAR(100), birthYear INT, fieldId INT ); 

ALTER TABLE Scientists ADD country VARCHAR(50); 

ALTER TABLE Scientists 

ADD FOREIGN KEY (fieldId) REFERENCES Fields(fieldId); 

DML: 

SELECT fullName FROM Scientists JOIN Fields ON Scientists.fieldId = Fields.fieldId WHERE fieldName = 'Computer Science'; 

UPDATE Scientists SET country = 'United Kingdom' WHERE fullName = 'Alan Turing'; DELETE FROM Scientists WHERE birthYear < 1800; 

19) Suppose we have the table Result(userID, score) - write an SQL statement to create a view showing the top 100 scores 

CREATE VIEW Top100 AS SELECT score FROM Result ORDER BY score DESC LIMIT 100; 

20) A snapshot of a relation can be seen below - put it in 1[st] , 2[nd] , then 3[rd] normal form: 

|Teams||Stadium|Stadium|Score|Score|Date|Date|Attendance|Attendance||Referee|Referee||Players||||
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Man Utd,Arsenal||Old Trafford||8-2||2011-08-28||75,448|||Howard Webb|||Rooney,van Persie...||||
|1NF:<br>Game:||||||||||||||||||
|GameID|Team||Stadium||Score||Date||Attendance|||RefFName|RefSName||PFName|PSname||
|1|Man Utd||Old Trafford||8-2||2011-08-28||75,448|||Howard|Webb||Wayne|Rooney||
|1|Arsenal||Old Trafford||8-2||2011-08-28||75,448|||Howard|Webb||Robin|Van Persie||



3NF: 

|Game:|Game:|Game:|Game:|Game:|
|---|---|---|---|---|
|GameID|StadiumID|Date|Attendance|RefereeID|
|1|1|2011-08-28|75,448|1|



## GameTeam: 

|GameID|TeamID|Goals|
|---|---|---|
|1|1|8|
|1|2|2|



|Stadium:<br>StadiumID<br>StadiumName<br>1<br>Old Trafford<br>Team:<br>TeamID<br>TeamName<br>1<br>Man Utd<br>2<br>Arsenal<br>Referee:|Stadium:<br>StadiumID<br>StadiumName<br>1<br>Old Trafford<br>Team:<br>TeamID<br>TeamName<br>1<br>Man Utd<br>2<br>Arsenal<br>Referee:|Stadium:<br>StadiumID<br>StadiumName<br>1<br>Old Trafford<br>Team:<br>TeamID<br>TeamName<br>1<br>Man Utd<br>2<br>Arsenal<br>Referee:|
|---|---|---|
|RefereeID|FirstName|LastName|
|1|Howard|Webb|
|Player:|||
|PlayerID|FirstName|Surname|
|1|Wayne|Rooney|
|2|Robin|van Persie|
|GamePlayer:|||
|GameID|TeamID|PlayerID|
|1|1|1|
|1|2|2|




![](images/unit_11_-_databases_answers/img_002.png)


Upon full normalisation, your data should be in format where you are easily able to perform queries such as: 

- Getting the biggest win (i.e. difference between their goals vs opponent’s goals) 

- Finding all the games that a specific player played in 

- Getting all the players that played in a particular game 

- ..etc… 

21) Using the schema from question 3, write SQL queries to do the following: 

 Create the User and Video relations with appropriate data types and keys CREATE TABLE User( 

user_id integer AUTO_INCREMENT, username VARCHAR(20), email VARCHAR(50), gender CHAR, bio TEXT, PRIMARY KEY(user_id) ); 

CREATE TABLE Video( id INTEGER AUTO_INCREMENT, uploader_id INTEGER, title VARCHAR(255), number_of_likes INTEGER, number_of_dislikes INTEGER, 

FOREIGN KEY (uploader_id) REFERENCES User(user_id) ON DELETE CASCADE ON UPDATE CASCADE, PRIMARY KEY(id) 

); 

 Get the video with the most likes 

SELECT * FROM Video ORDER BY number_of_likes DESC LIMIT 1; 

 Get all bios that contain the word "vlogger" in them SELECT bio FROM User WHERE bio LIKE “%vlogger%”; 

 Get all the video IDs and titles that user with id 99 disliked SELECT Video.id, Video.title 

FROM Video 

INNER JOIN VideoRating ON Video.id = VideoRating.video_id WHERE VideoRating.user_id = 99 AND VideoRating.liked = false; 

 Find the video that user 99 had the most comments on SELECT * FROM Video 

INNER JOIN Comment ON Video.id = Comment.video_id WHERE Comment.user_id = 99 GROUP BY(Comment.video_id) ORDER BY COUNT(Comment.video_id) DESC LIMIT 1; 




- Insert a new video by 99 entitled “funny video compilation” 

- INSERT INTO Video(uploader_id, title, number_of_likes, number_of_dislikes) VALUES(99, “funny video compilation”, 0, 0); 

 Update the video with ID 5 to a have a new title of your choosing UPDATE Video SET title = “Me at the Zoo” WHERE id = 5; 

 Find the total, minimum, maximum and average number of dislikes that user 99’s videos had SELECT SUM(number_of_dislikes), MIN(number_of_dislikes), MAX(number_of_dislikes), AVG(number_of_dislikes) FROM Video 

WHERE uploader_id = 99; 

- Delete all videos that have over 100 dislikes AND a dislike to like ratio of 5:1 or greater (assume that referential integrity is maintained and that entries with this video ID will also be deleted from other tables automatically) 

DELETE FROM Video WHERE number_of_dislikes > 100 AND (number_of_dislikes / number_of_likes) >= 5; 

- Find all the playlist IDs and titles that contain videos from the user 99 

SELECT Playlist.id, Playlist.title FROM Playlist INNER JOIN PlaylistVideo ON PlaylistVideo.playlist_id = Playlist.id INNER JOIN Video ON PlaylistVideo.video_id = Video.id WHERE Video.uploader_id = 99; 

- Alter the video table to add an additional column of your choice 

ALTER TABLE Video ADD COLUMN upload_datetime DATETIME; 

