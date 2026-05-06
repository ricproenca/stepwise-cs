# CAIE Computer Science IGCSE — Chapter ?: Unknown Chapter

---

1) File-based data storage is fine for simple situations, but in more complex situations, a database is a better choice - one issue is the issue of data ____________ - this is when we have duplicate data. This can make updating/inserting/deleting data difficult, since we have to ensure the change applies everywhere the data is stored - if we don’t, then data ___________ can occur. As a result, programs will have to be written to select/insert/update/delete records from these files - problems arise if we want to add/remove attributes, want records with a different structure etc - this file-based approach if inflexible and this tightly-coupled nature is called data ____________. Another concern is the lack of _________ when dealing with file-based data - for example, someone’s name, email, phone number, credit card details, passwords (etc) might all be stored unencrypted in a single file - it would be possible to create different files with different permissions/access rights for different users, but then we encounter the problem of data redundancy, as stated above. Finally, no __________ is included with a file-based approach by default - it would have to be implemented by the programmer. Without it, data could be inconsistent, inaccurate and redundant. 

2) Define the following terms: 

Relation: 

Attributes/fields: 

Tuple/records: 

Schema: 

Relational database: 

Primary key: 

Composite key: 

Foreign key: 

Candidate key: 

Atomic data/atomicity: 

Referential integrity: 

View: 

Developer interface: 

Query processor: 

Errors or suggestions - contact me https://pseudocode.pro/contact 

3) Look at the following schema for a video-sharing website - underline a suitable primary key for each relation and also note the foreign keys - e.g. by circling them 

**User** (username, email, gender, bio) 

**Video** (id, uploader_username, title, number_of_likes, number_of_dislikes) 

//note ‘liked’ is a Boolean value - if true, the user liked this video - if false, they disliked it (records won’t exist for users which haven’t voted on a video) 

**VideoRating** (video_id, username, liked) 

**Comment** (id, video_id, username, comment) 

**Playlist** (id, title, creator_username) **PlaylistVideo** (playlist_id, video_id) 

4) What does the AUTO INCREMENT property do when added to an attribute in SQL? 




5) A website requires people to sign up with their phone number. Why would it be a bad idea to use a mobile number/email address as a primary key? (hint: think what might happen in 2, 5 or 10 years) 

6) A website decides to let users change their username a maximum of once per year - explain why it would therefore be a poor choice to use username as the primary key 

7) Assume the following relational database in which referential integrity is to be maintained for StudentID & SubjectID on both UPDATE and DELETE using MySQL’s CASCADE property. Show the result of the relations after the following SQL queries were run: 

DELETE FROM Subject WHERE SubjectID = 4 DELETE FROM Student WHERE StudentID = 1 




|Student|Student|Student|Student|
|---|---|---|---|
|StudentID|Name||Grade|
|1|Ellie||10|
|2|Paul||11|
|Subject<br>SubjectID<br>Name<br>1<br>Maths<br>2<br>Computer Science<br>3<br>Physics<br>4<br>Biology<br>StudentSubject<br>StudentID<br>SubjectID<br>1<br>1<br>1<br>2<br>1<br>3<br>2<br>2<br>2<br>3<br>2<br>4||||
|StudentID||SubjectID||
|1||1||
|1||2||
|1||3||
|2||2||
|2||3||
|2||4||



Errors or suggestions - contact me https://pseudocode.pro/contact 

## 8) Draw entity-relationship (ER) diagrams for both the schemas in questions 3 and 7 

- 9) If you see a many-to-many relationship, how should this be normalised? 


![](images/unit_11_-_databases_homework/img_001.png)


- 10) Suppose we have the following facts: 

- A school has teams for the following sports: football, basketball and table tennis 

- Each team will have multiple members 

- Each year group will have their own team, for each sport 

- A student will belong to a specific year group and potentially multiple sports teams 

Create a fully-normalised (3NF) schema for this scenario 

- 11) State the requirements for the following normalisation levels: 

Un-normalised: 

- 1[st] normal form: 

- 2[nd] normal form: 

- 3[rd] normal form: 

12) To be in 3[rd] normal phrase, it helps to remember the phrase: “each non-key attribute is dependant on the key, the ______ key and __________ but the key” 

- 13) What is the difference between the 3 levels of a database: external, conceptual and internal? 

Errors or suggestions - contact me https://pseudocode.pro/contact 

14) What is an index and why are they important for databases? What is one disadvantage of using an index? 

15) The DDL & DML we learn is ___ and the DBMS we have been using is _____ 

16) What is a ‘view’ in a MySQL, when might it be used and what are the advantages of it? 

17) What is a DBMS’ data dictionary? What are some of the things stored in it? 




18) Define the following terms and give example operations in each (for example, ORDER BY would be a DML operation). Note that SQL supports both DDL & DML statements 

DDL: 

DML: 




- 19) Suppose we have the table Score(userID, score) - write an SQL statement to create a view showing the top 100 scores 

- 20) A snapshot of a relation can be seen below - put it in 1[st] , 2[nd] , then 3[rd] normal form: 

|Teams|Stadium|Score|Date|Attendance|Referee|Players|
|---|---|---|---|---|---|---|
|Man Utd,Arsenal|Old Trafford|8-2|2011-08-28|75,448|Howard Webb|Rooney,van Persie...|
||||||||






Upon full normalisation, your data should be in format where you are easily able to perform queries such as: 

- Getting the biggest win (i.e. difference between their goals vs opponent’s goals) 

- Finding all the games that a specific player played in 

- Getting all the players that played in a particular game ..etc… 

- 21) Using the schema from question 3, write SQL queries to do the following: 

- Create the table with appropriate data types and keys 

- Get the video with the most likes 

- Get all bios that contain the word "vlogger" in them 

Errors or suggestions - contact me https://pseudocode.pro/contact 

- Get all the video IDs and titles that user "abc" disliked 

- Find the video that user "abc" had the most comments on 

- Insert a new video by “abc” entitled “funny video compilation” 

- Update the video with ID 5 to a have a new title of your choosing 

- Find the total, minimum, maximum and average number of dislikes that “abc’s” videos had 




- Delete all videos that have over 100 dislikes AND a dislike to like ratio of 5:1 or greater (assume that referential integrity is maintained and that entries with this video ID will also be deleted from other tables automatically) 

- Find all the playlist IDs and titles that contain videos from the user "abc" 

- Alter the video table to add an additional column of your choice 

Errors or suggestions - contact me https://pseudocode.pro/contact 

