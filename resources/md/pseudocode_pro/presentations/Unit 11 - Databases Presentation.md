# Unit 11 - Databases Presentation

## Limitations of File-Based Data Storage

### Limitations of File-Based Data Storage

- Imagine a simple scenario – an agency manages bands, with each line corresponding to a particular members of the band, the agent who manages them etc..the required fields would be…

### Band Example – Required Fields

- Name
- Contact details
- Banking details
- Band name
- Band agent name
- Band agent contact details

### Band Example – Required Fields

- The intention is that the agency would be able to contact both the band member and their agent directly, since this information would be stored in the file

### Band Example – Required Fields

- Let’s look at a simple snapshot of the data (note: this is incomplete – they only include the band member’s first and last name as well as their band name…the real file would have all of the fields)

### Band Example – Required Fields

- Note how “Graham Vandana”’s names were entered in the incorrect order – they also have a duplicate entry

### Band Example – Required Fields

- Likewise, Precious Olsen has been incorrectly entered as being a member of both bands

### Band Example – Required Fields

- With a file-based approach, there is no validation by default – this can lead to inconsistent, inaccurate and redundant data

### Band Example – Potential Errors

- There is also possibly another error with this file – that someone could be entered into a band that doesn’t exist (with e.g. MySQL’s ENUM type, this could be avoided – since this type has a whitelist of valid values – anything else and the INSERT or UPDATE command will be rejected)

### File-Based Approach Privacy Issues

- Note how storing all the details on one line meant we had to include the person’s personal details along with their contact and financial details all together
- Hence, e.g. a customer support agent would be able to see all of this data directly – i.e. bad for privacy

### File-Based Approach Privacy Issues

- In contrast, with a database, different data could be separated into different tables and combined using JOINs when required
- Database systems have approaches to handle these privacy concerns

### File-Based Approach: Data Redundancy

- Aware of this privacy concern, assume the company wanted to separate the data into multiple files
- You would then get redundancy – e.g. the person’s name would then have to be stored in each of the different files

## File-Based Approach: Data Redundancy

### File-Based Approach: Data Redundancy

- Data redundancy in and of itself isn’t ideal, but the real problem is that it becomes difficult to update all records when required – leading to data inconsistency
- For example, imagine if we have duplicate entries for someone’s surname or email address – what happens if their name changes (e.g. due to marriage) or they change their email – if every single instance is not update correctly, there will be data inconsistency

### File-Based Approach: Data Redundancy

- As such, this is one of the primary aims of database systems – to eliminate data redundancy (and therefore data inconsistency)

### File-Based Approach: Data Dependency

- Another issue of the file-based approach is that data and the programs written to access them are tightly coupled – for example, imagine a CSV, where different fields are separated by a comma – perhaps the 4th field represents the group’s Instagram account – changing the organization or contents of the files would be difficult and the programs used to access them would have to be changed, too
- This tight-coupling of data, the files they are stored in and the programs written to access them is called data dependency

### File-Based Approach: Data Dependency

- In contrast, a database offers more flexibility – with the ability to easily add, remove or edit columns – i.e. changing the database schema

## Relational Databases

### Relational Databases

- In a relational database, each row is stored in a relation
- Relation: a special type of table that may/may not have some relationship to other tables

### Relational Databases

- Leading on from this, a relational database is a collection (one or many) of relational tables

### Relational Database Terminology

- Relation: the name of a table in a relational database
- Attributes/fields: the names given to the column headings in a relation
- Schema: the logical plan (relations and their attributes) of a database
- Tuple/records: the name for a row in a relation

### Relational Databases

- When planning a relation, we can write the relation’s name, along with its attributes, which we’d put inside brackets. Primary keys will be underlined

### Relational Databases

- In this schema, how many relations are there?
- 2
- What are the primary keys?
- MemberID and BandName
- What are the attributes in the Member relation?
- MemberID, MemberGivenName, MemberFamilyName, BandName etc

### Relational Databases

- In this schema, how many relations are there?
- 2
- What are the primary keys?
- MemberID and BandName
- What are the attributes in the Member relation?
- MemberID, MemberGivenName, MemberFamilyName, BandName etc

### Relational Databases

- Here is some example data that could exist in these relations

### Relational Databases

- Note: this view is called a ‘logical view’ – since a principle of relational databases is that no attribute column ordering is defined (i.e. MemberID could be stored last, not first)

### Relational Databases

- “A row in a relation should be referred to as a tuple but this formal name is not always used. Often a row is called a ‘record’ and the attribute values ‘fields’. The tuple is the collection of data stored for one ‘instance’ of the relation”

### Relational Databases – Atomic Values

- One key principle of relational databases is that all attribute values in a tuple should be atomic – i.e. containing either one or no value

### Relational Databases – Primary Keys

- Would the following tuple be atomic (from StackOverflow’s survey data – note this is a simple CSV data dump, not a database)?
- No – since you have multiple values for favourite programming languages/databases – to make the tuples atomic, we would have to normalise them

| Age | Gender | Favourite programming languages | Favourite databases |
| --- | --- | --- | --- |
| 26 | M | Python, Java, JavaScript, PHP | Solr, MongoDB |

### Primary Keys

- All tuples in a relation are required to have a value that can uniquely identify it from all other tuples in that relation – this unique attribute would be called the primary key
- What would be the simplest way you could guarantee uniqueness for a column?
- Make it an incrementing number – with MySQL, you can declare primary keys with the AUTO INCREMENT property

### Relational Databases – Primary Keys

| ID | Name | Age | Job |
| --- | --- | --- | --- |
| 1 | Walter | 50 | Teacher |
| 2 | Jesse | 24 |  |
| 3 | Gus | 45 | Restaurant Owner |
| 4 | Hank | 48 | Police Officer |

### Primary Keys

- Primary keys could be a single attribute, or they could be a combination of attributes
- A primary key that is a combination of attributes is called a composite key
- Let’s see an example

### Relational Databases – Primary Keys

- Can we use the airport code as an ID?
- With what attributes could we create a composite primary key?
- AirportCode, Runway

| AirportCode | Runway | Length | Surface |
| --- | --- | --- | --- |
| PEK | 1 | 6000 | Concrete |
| PEK | 2 | 5500 | Concrete |
| JFK | 1 | 7000 | Concrete |
| JFK | 2 | 2500 | Grass |

### Relational Databases – Primary Keys

- Why would AirportCode, Length not be a good primary key?
- Firstly, because it’s not as relevant (we care about particular runways, not their length), but also because the same airport could have multiple runways of the same length – hence these candidate attributes wouldn’t guarantee uniqueness

| AirportCode | Runway | Length | Surface |
| --- | --- | --- | --- |
| PEK | 1 | 6000 | Concrete |
| PEK | 2 | 5500 | Concrete |
| JFK | 1 | 7000 | Concrete |
| JFK | 2 | 2500 | Grass |

### Relational Databases – Candidate Keys

- What is a candidate – e.g. for a job, election etc?
- Someone who might win/get the job, but’s not been decided yet
- Similarly, a candidate key is any attribute that you could use as the primary key – i.e. it is any attribute – or combination of attributes (composite keys) – which provide uniqueness

### Relational Databases – Candidate Keys

- Which of the attributes here would be candidate keys – i.e. provide uniqueness?
- Every attribute except Name

| ID | Name | Passport Number | Phone | Email |
| --- | --- | --- | --- | --- |
| 1 | Alister | 57463816 | 0756726127 | a@gmail.com |
| 2 | Liz | 85737162 | 0746461736 | l@yahoo.com |
| 3 | Ryan | 98512938 | 0721635361 | r@mail.com |
| 4 | Hannah | 37487291 | 0777361531 | h@me.com |

### Relational Databases – Candidate Keys

- Let’s assume Phone and Email are unique – why would they be bad primary keys to use?
- Since they can change – i.e. if you run a query to select the user with the phone number 0123456789, in 2 years, if you run that same query, that phone number might belong to someone else

| ID | Name | Passport Number | Phone | Email |
| --- | --- | --- | --- | --- |
| 1 | Alister | 57463816 | 0756726127 | a@gmail.com |
| 2 | Liz | 85737162 | 0746461736 | l@yahoo.com |
| 3 | Ryan | 98512938 | 0721635361 | r@mail.com |
| 4 | Hannah | 37487291 | 0777361531 | h@me.com |

### Relational Databases – Candidate Keys

- In this case, what might be the best primary key to use?
- Passport number would be ok if all users in the database were from the same country (if different countries, you could have multiple people with the same passport number) – hence the auto-incrementing ID is most suitable, in this case

| ID | Name | Passport Number | Phone | Email |
| --- | --- | --- | --- | --- |
| 1 | Alister | 57463816 | 0756726127 | a@gmail.com |
| 2 | Liz | 85737162 | 0746461736 | l@yahoo.com |
| 3 | Ryan | 98512938 | 0721635361 | r@mail.com |
| 4 | Hannah | 37487291 | 0777361531 | h@me.com |

### Relational Databases – Secondary Keys

- Any candidate key that is NOT selected is called a secondary key – in our example (assume all people are from the same country), PassportNumber, Phone and Email would be secondary keys – i.e. they are valid candidate keys, but since they were not chosen, they are refered to as secondary keys

### Relational Databases – Primary Keys

- When thinking about choosing a primary key, it’s also important to think about what information you would have available when trying to retrieve that record
- For example, assume a website – we want to get all the data associated with a user named “username999” – now, if setting the primary key to AUTO INCREMENT, their pk could be 57382 – however, they wouldn’t know that – in this case, using their username as the primary key would make sense, since we would be able to find the tuple with that primary key directly

### Relational Databases – Primary Keys

- Likewise, imagine we have a database storing flight ticket purchases from users around the world – users signup with an username (which can also be their email) and password.
- What would it make sense to use as the primary key?
- In this case, we could again use their username field as a primary key – this is since they wouldn’t be able to change their username and our DBMS would ensure uniqueness (if a user tried to signup with a username that’s in use, it would throw an error)

### Relational Databases – Primary Keys

- Imagine an offline version of this same flight database – there is no username/email fields, but we have their passport number, nationality, mobile phone number (with country code), full name, address etc – what might be a good primary key to use?
- We could make a composite key of Nationality, PassportNumber, since that would guarantee uniqueness. Although mobile numbers would have the country code, hence would be unique, again, we have the problem that people change their mobile phone numbers

### Primary Keys - Websites

- What do websites usually use as primary keys, when there often isn’t a way to guarantee uniqueness based on the content?
- They use unique strings/numbers:
- https://www.youtube.com/watch?v=HXV3zeQKqGY
- https://twitter.com/MySQL/status/1479538869896949767
- https://www.reddit.com/r/ProgrammerHumor/comments/covgb5/comment/ewljciu/

### Primary Keys - Websites

- Bonus question: how many primary keys are in this URL?
- https://www.reddit.com/r/ProgrammerHumor/comments/covgb5/comment/ewljciu/
- 3:
- SubRedditID
- PostID
- CommentID
- This is required since the server needs to query data about the subreddit, post and comment when the user goes to this URL

### Primary Keys

- So, if there isn’t a candidate key that we can create from the attributes, we can simply create a primary key – either using SQL’s AUTO INCREMENT function or generating a random/unique string

### Primary Keys

- Primary keys also help ensure data integrity – if we use the username attribute as the primary key and we try to INSERT INTO this table a tuple with a username that is already in use, the DBMS will notify us of the error, rejecting the INSERT INTO command from inserting the data

### Relationships

- Databases can determine standalone tables, though often we might want to JOIN multiple tables (relations) together
- Imagine for example a User(UserID, Username, Email) and Payments table(PaymentID, UserID, Amount, Date) –  we can link these relations together by their shared UserID key
- A key that isn’t a primary key but links one relation to another is called a foreign key

### Primary & Foreign Keys

- What would the primary, foreign, composite and candidate/secondary keys be in this schema:
- Airport(AirportID, Name, Country)
- Flight(FlightID, FromAirport, ToAirport, Date, Time)
- Passenger(PassengerID, Name, Nationality, PassportNum)
- Booking(PassengerID, FlightID, CheckedIn)

### Primary & Foreign Keys

- Primary keys
- Composite primary key
- Foreign keys
- Airport(AirportID, Name, Country)
- Flight(FlightID, FromAirport, ToAirport, Date, Time)
- Passenger(PassengerID, Name, Nationality, PassportNum)
- Booking(PassengerID, FlightID, CheckedIn)

### Candidate & Secondary Keys

- Candidate keys
- [note: in this case, our candidate keys are also secondary keys, since they weren’t chosen]
- Airport(AirportID, Name, Country)
- Flight(FlightID, FromAirport, ToAirport, Date, Time)
- Passenger(PassengerID, Name, Nationality, PassportNum)
- Booking(PassengerID, FlightID, CheckedIn)

### Referential Integrity

- Imagine a database for a forum/social media site – what relations and attributes might there be?
- User(username, email)
- Comment(commentID, postID, username, content)
- Post(postID, username, content)
- What happens if a user deletes their account? We might automatically want to delete all of their comments and posts too – since “username” is a foreign key in the Comment and Post relations, with SQL, we can do this using the CASCADE property, which we will see later

### Referential Integrity

- Note: the CASCADE property can be used for DELETE and UPDATE statements
- That is, we can automatically UPDATE or DELETE tuples that are referenced by foreign keys in other relations
- i.e. if customer 106 was deleted, the corresponding circled tuples in the other relations would also be deleted

## Entity-Relationship Modelling

### Entity-Relationship (ER) Diagrams

- Entity-relationship diagrams can be created to model the relationship between relations
- They show what relations are linked and the multiplicity/cardinality (one to one, one to many etc) between them

### Entities

- Entities are things that will become a table (relation)
- In some cases, this will be a physical noun – User, City, Band etc, while in other cases, it will be more abstract – like Statistics, Payment or Book

### Entities

- Each entity will have instances – i.e. there will be many different instances of the User entity (i.e. the different users)

### Entity Relationship Cardinality

- Note: if we want to represent a cardinality not listed, we can create represent it as follows:
- 3..3
- 1..2
- etc

### Flight Example

- Airport(AirportID, Name, Country)
- Flight(FlightID, FromAirport, ToAirport, Date, Time)
- Passenger(PassengerID, Name, Nationality, PassportNum)
- Booking(PassengerID, FlightID, CheckedIn)

### Flight Example

- Step 1: draw boxes representing the 4 entities (Airport, Flight, Passenger, Booking)
- Step 2: look at the foreign keys to determine which relations have a direct link
- Step 3: draw the correct cardinality symbol for that relation

## Flight Example

### Many to Many Relationships

- When we have many-to-many relationships, we have a problem – that a foreign key can only have a single value, hence we need to ‘normalise’ the tables
- Let’s imagine an example of Planes and Pilots – a pilot will fly many different planes and a plane will be flown by many different pilots

### Plane Relation

| PlaneID | Brand | Model | YearBuilt |
| --- | --- | --- | --- |
| 1 | Boeing | 747 | 1995 |
| 2 | Airbus | A380 | 2000 |
| … | … | … | … |

### Pilot Relation

- Here we have a problem – what should go in the PlanesFlown column? Having a long list of planes in one column isn’t ideal, since it makes querying (as well as updating/removing) difficult – this is where normalization comes in

| PilotID | Name | License | PlanesFlown |
| --- | --- | --- | --- |
| 1 | Frank Smith | A | ? |
| 2 | Sue Perry | B | ? |
| … | … | … | … |

### Normalisation

- To solve the problem that many-to-many relationships would result in a list of data having to be stored in a tuple’s attribute field, we can introduce an intermediate table – in our example, let’s call it PlanePilot, which will link the Pilot and Plane relations – i.e. storing which pilots have flown which plane

### PlanePilot Relation

- What would the primary key of this relation be?
- It’d be a composite key of PlaneID, PilotID

| PlaneID | PilotID |
| --- | --- |
| 1 | 1 |
| 1 | 2 |
| 2 | 2 |

### PlanePilot Relation

- Why don’t we have to include the other plane or pilot details (brand, model, license etc) here?
- Since we can access them by JOINing this relation with the others

| PlaneID | PilotID |
| --- | --- |
| 1 | 1 |
| 1 | 2 |
| 2 | 2 |

### Normalisation Levels

- Let’s look at the levels of normalization:
- Unnormalised
- 1st normal form
- 2nd normal form
- 3rd normal form

### Unnormalised

- Data that hasn’t undergone any normalization will contain arrays (multiple entries for some attributes) – i.e. the ‘likes’ column

| PersonID | Name | Likes |
| --- | --- | --- |
| 1 | Frank Smith | Football, movies, basketball |
| 2 | Sue Perry | Books, pizza, music |
| … | … | … |

### Unnormalised

- Here is another, less obvious unnormalised database. There’s 2 problems:
- Item column can have multiple values
- There are 2 people called “Gene Li” and another called “Genny Le” who’s phone number seems to be incorrect in one of the tuples – uniquely identifying them is hard with no obvious ID attribute

### 1st Normal Form

- 1NF requirements:
- Tuples uniquely identified with primary key
- Each of a tuples attributes must contain at most 1 value
- Consistent data type must be enforced for each column

### 1st Normal Form

- There is still the problem of data redundancy, however: Name, Phone#, SubscriptionLevel, Manufacturer & ManufacturerPhone# have redundant entries

### 2nd Normal Form

- 2NF requirement:
- Every non-key column in a table must depend on the value of the key
- i.e. only attributes directly related to the key should be contained – Name and Phone# refer to the person, so we should keep them, but some of these other columns would be better suited in a Manufacturer or Product relation

## 2nd Normal Form

### 3rd Normal Form

- 3NF requirement:
- Every non-key column must ONLY depend on the value of the key
- So this looks like a repeat of 2NF at first glance. However, this further qualifies that every column must ONLY describe the item. We see that Manufacturer and ManufacturerPhone# not only describes our Item key, but also each other. This means we need to pull it out again to another table.

## 3rd Normal Form

## Unnormalised

## 1st Normal Form

## 2nd Normal Form

## 3rd Normal Form

### 3rd Normal Form

- To summarise, if a set of a relations are in 3rd normal form:
- “each non-key attribute is dependent on the key, the whole key and nothing but the key”

### Solution

- Order(OrderNo, CustomerNo, SalesRepNo, Date)
- Customer(CustomerNo, CustomerName, Address)
- SalesRep(SalesRepNo, SalesRepName)
- Product(ProductNo, Description, UnitPrice)
- OrderProduct(OrderNo, ProductNo, Quantity, Total)

### Normalisation: School Example

- Plan the relations & draw an entity-relationship diagram you would use to represent:
- Teachers, students, classes & subjects
- Multiple classes can represent the same subject for the same and different grade students – i.e. there could be 3 grade 10 maths class, for example
- Think of a few fields to include for each relation – e.g. teachers could have a name and email
- Ensure the relations are in 3rd Normal Form

### Normalisation: School Example

- Teacher(id, name, email)
- Student(id, name, grade)
- Subject(id, name)
- Class(id, subjectID, grade)
- TeacherClass(teacherID, classID)
- StudentClass(studentID, classID)

## Winner’s DOB is a transitive dependancy – it depends on another key (Winner), not the table’s primary key (TournamentName, Year)

### All rows must be unique
Each cell must contain only single values
Each cell should contain an atomic value (i.e. “John Smith” could be broken into a first name &  last name column)

No partial dependencies – non-key attributes should depend on whole key

No transitive dependencies – non-key attributes should depend on the primary key, not another (e.g. foreign) key

- 1NF
- 2NF
- 3NF

### Normalisation: Video Game Example

- “Game developers produce games for the public – these games can be of multiple genres, will have an age rating and release date. Data about buyers, their telephone number and the games they bought should also be stored. Buyers should also be able to give feedback for each game – this feedback can include a rating (e.g. 1-5) and a written comment)”
- Create a fully-normalized (i.e. 3NF) schema for this scenario

### Normalisation: Video Game Example

- Game(gameId, gameName, developerId, ageRating, releaseDate)
- Developer(developerId, developerName)
- GameGenre(gameId, genreId)
- Genre(genreId, genreName)
- Buyer(buyerId, name, telephone)
- BuyerGames(buyerId, gameId)
- BuyerFeedback(buyerId, gameId, rating, comment)

## The Database Management System (DBMS)

### Database Management System (DBMS)

- A database is not just a collection of data – it exists at 3 levels:
- external
- conceptual
- internal
- These levels are ordered from high to low-level

### DBMS: Internal Level

- This refers to the way to data is actually stored on disk – i.e. what file structures, encodings, optimisations etc are used to store the data, so that performance should be as optimal as possible
- Different DBMS’s will store the data differently, according to their features/use cases etc – we will just focus on MySQL, however

### DBMS: Internal Level

- Note that each relation has two associated files:
- .frm: stores the table definition – i.e. the column names, type, size, default values etc – additional metadata might be included too
- .ibd: stores the actual data as records – stores indexes too – note the file size of both files increase after adding an index to the “city” text column

### DBMS: Conceptual/Logical Level

- This is the level a database administrator would perceive the database – i.e. a collection of tables with a specific structures and set of tuples

### DBMS: External Level

- This is the level at which an end programmer/user might operate
- For example, we may wish to restrict users from access to certain tables/functionality
- Let’s say, for example, a customer support agent may be able to SELECT customers, but not DELETE them
- User privilledges in MySQL can be set with the GRANT/REVOKE commands

### DBMS: External Level - Views

- 'Views’ are another abstraction that the end programmer/user may see at the external level
- These are effectively intermediate MySQL relation, derived from another – for example, suppose we had a relation called Inventory – we could create a view for items in stock – i.e.:
- CREATE VIEW in_stock AS SELECT * FROM inventory WHERE stock > 0

### DBMS: External Level - Views

- Why create a view – why not just create a separate in_stock table?
- When the data in the inventory changes, these changes will update correspondingly in the in_stock view – if you create two separate tables, changing the original wouldn’t change the new one
- Views also improve data security – i.e. you could give users access to a simplified view containing only the data they need, rather than all the data (some of which might be confidential)

### DBMS: External Level - Views

- For example, imagine the following relation:
- User(id, username, password, email, credit_card)
- Suppose we wanted to create a View that customer support workers would use – they shouldn’t be able to see the password or credit_card fields (even though these fields should be salted + encrypted/hashed anyway):
- CREATE VIEW user_safe AS SELECT id, username, email FROM user

### DBMS: External Level - Views

- Using the cities relation, create a view called capital_cities which gets all the primary capitals, ordered from most to least populous
- CREATE VIEW capital_cities AS SELECT city, country, population FROM cities WHERE capital = 'primary' ORDER BY population DESC
- Then, try updating the capital names, population, deleting records from the original cities relation etc – the records in the capital_cities view should reflect these changes

### DBMS: External Level - Views

- Why do you think the number of records in the capital_cities view is listed as ~0?
- Since it’s unknown – i.e. if the original cities relation has changed, then the number of records in the capital_cities view might also change

### DBMS Features

- Support a specific query language – e.g. SQL, another shared link or a custom one
- Provide an interface to interact with the DB – a GUI and/or CLI version
- Troubleshooting & statistics – e.g. slow/error query logs etc

### Database Administrators

- A database administrator (DBA) is someone who sets up and manages the database – for example:
- Planning & creating the most optimized relations
- Possibly importing data
- Monitoring slow/erroneous error logs & trying to amend these issues
- Checking for suspicious activity (e.g. SQL injection attempts – though as long as developers followed modern documentation, these attacks are impossible)
- Creating indexes
- Ensuring data integrity – e.g. with CASCADE in the table definitions

### Indexes

- If the data isn’t indexed and we want to find a specific value, a linear search is required – likewise, ordering is even slower
- Instead, an index can be created (stored as a binary tree in MySQL  see picture) which keeps the data in a sorted order, hence makes searching and sorting trivial
- Note: adding an index also takes space on disk and can slow down INSERT/UPDATE statements (since the index has to be resorted (‘re-indexed’))

### Indexes

- Here we have a relation with an ID 2 additional attributes - one has and index, one doesn’t (the primary key automatically has an index too) – note the time difference between the queries

### Indexes

- For this WHERE query, the difference is even more apparent – the field with the index was 785x faster to search

### Indexes

- However, there are some drawbacks with adding indexes – namely:
- Will increase space – here, the index for the primary key and ‘has_index’ attribute is actually greater than the size of the data itself
- The index will be stored on secondary storage and depending on the DBMS, often loaded into RAM – i.e. more RAM required = higher hardware costs
- INSERTING/UPDATING/DELETING becomes slower – since the index has to be updated too

### Data Dictionary

- Stores metadata about database schema:
- Relation names
- Column names, types, default values etc
- Indexes

## Structured Query Language (SQL)

### SQL

- Structured Query Language (SQL) is a language that allows us to define our data’s structure and manipulate said data

### SQL

- There are hence two types of database language:
- Data definition language (DDL) – i.e. a language that allows us to create the database & relations
- Data manipulation language (DML) – i.e. a language that allows us to SELECT, INSERT, UPDATE or DELETE data from our relations

### CREATE and USE a Database

- CREATE DATABASE mydatabase
- USE mydatabase
- (we need this USE command in case you have multiple databases on the server – you need to tell the DBMS what one you want to use)

### CREATE a New relation

- CREATE TABLE country(
- name text,
- population int,
- gdp FLOAT,
- continent ENUM(‘Asia’, ‘Europe’, ‘North America’, ‘South America’…etc),
- PRIMARY KEY(name)
- )

### Common Data Type

- int – a 64-bit integer (signed by default)
- float – a floating-point (decimal) number
- char – a single character
- varchar – a variable-length string up to a maximum size – e.g. varchar(20)
- text - a string up to 65535 characters (can use LongText for up to 4GB text)
- boolean – true or false
- date/time/datetime

### CREATE a relation with a Foreign Key

- CREATE TABLE city(
- id INT,
- countryID INT,
- name VARCHAR(30),
- population INT,
- gdp FLOAT,
- region varchar(50),
- PRIMARY KEY(id),
- FOREIGN KEY(countryID) REFERENCES country(id)
- )

- A foreign key is used to join a relation with another – say, for example, if we wanted to get all the cities from the cities from China:
- SELECT * FROM city JOIN country ON city.countryID = country.id WHERE country.name = “China”

### INSERTing into a New relation

- INSERT INTO country(id, name, population, gdp, continent) VALUES(1, “China”, 1400000000, 10000000000, “Asia”)
- Note: if we set id to AUTO INCREMENT when using the CREATE relation commands, we wouldn’t have to manually-specify an ID (which can cause problems, since we can accidentally try to use the same ID twice, which will cause most DBMS’s to throw an error and refuse to enter the new record)

### SQL

- Let’s look at how to SELECT data from a database

### SELECT syntax

- Here is the general syntax to select all rows:
- SELECT * FROM [relation_name]
- We can also add a condition:
- SELECT * FROM [relation_name] WHERE [condition]

### SELECT syntax

- Let’s look at the employee relation in the music database as an example

### SELECT example

- SELECT * FROM employee
- Note: * means “all columns”

### SELECT example

- To select a single column:
- SELECT email FROM "employee"
- To select multiple columns, separate them with a comma:
- SELECT firstname, lastname, email FROM "employee"

### Comparison Operators

- If we only want to SELECT (or UPDATE/DELETE) a subset of the data, we can use comparison operators in our queries…

### SELECT Example

- We can use the WHERE clause to only select rows that meet the specified condition:
- SELECT * FROM “employee” WHERE City = “Calgary”
- Q: write a query to select all columns from employees who are sales managers

### Logical Operators

- We can also use the following logical operators:
- and
- or

### Logical Operators

- Q: how can we find the details of the people who work in either Edmonton or Calgary?
- We can either us the OR or IN keyword/function

### Logical Operators

- SELECT * FROM "employee" WHERE City = "Edmonton" OR City = "Calgary“
- SELECT * FROM "employee" WHERE City IN ("Edmonton", "Calgary")
- (The 2nd example is more convenient if you have lots of valid values)

### Logical Operators

- Q: how can we find the details of the IT manager from Calgary?
- SELECT * FROM employee WHERE Title = "IT Manager" AND City = “Calgary"

### String Comparison

- For more advanced string (text) comparisons, we can use the MySQL Regex functions, but we will just use the LIKE keyword

### String Comparison

- _: single character
- %: any characters

### String Comparison

- Q: how to get people who have a first name of 4 characters in length?
- SELECT * FROM `employee` WHERE FirstName LIKE "____";

### String Comparison

- Q: how to get all the managers? (e.g. IT Managers, General Managers etc)
- SELECT * FROM `employee` WHERE Title LIKE "%Manager";

### String Comparison

- Q: how to get all the people who live on avenues?
- SELECT * FROM `employee` WHERE Address LIKE "% Ave %";

### Date Functions

- Let’s look at some simple date & time functions
- The official list can be found here:
- https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html

### Date Functions

- YEAR(): returns the year from a date
- MONTH(), DAY(), HOUR(), MINUTE(), SECOND(): as above
- NOW(): gets current date & time
- ADDDATE(): adds specified amount of time to date – e.g. add 1 year to current date
- SUBDATE(): as above, but subtract
- DATEDIFF(): gets days between 2 dates

### Date Functions

- Q: How to get the name (first & last) and birth year of the employees?
- SELECT FirstName, LastName, YEAR(BirthDate) FROM `employee`

### Date Functions

- Q: How to get the name (first & last) and birth date of employees born after 1970?
- SELECT FirstName, LastName, BirthDate FROM `employee` WHERE YEAR(BirthDate) > 1970;

### Date Functions

- Q: How to get the name (first & last) and hire date of employees hired in October?
- SELECT FirstName, LastName, HireDate FROM `employee` WHERE MONTH(HireDate) = 10;

### Date Functions

- Q: How to get the age at which the employee was hired?
- SELECT FirstName, LastName, (DATEDIFF(HireDate, BirthDate) / 365) FROM `employee`;

### Changing Output Column Names

- Note: when using functions, the column name can get quite long/ugly:
- We can use the AS keyword to change the name of columns (and relations) as they are output

### Changing Output Column Names

- SELECT FirstName, LastName, (DATEDIFF(HireDate, BirthDate) / 365) AS AgeJoined FROM `employee`;

### Ordering

- We can use the following syntax to order columns:
- ORDER BY [column] [ASC/DESC]
- Note:
- ASC = ascending = lowest to highest
- DESC = descending = highest to lowest

### Ordering

- The full syntax would be:
- SELECT [columns] FROM [relation] WHERE [condition] ORDER BY [columns] [ASC/DESC]
- Note: the ORDER BY has to come after the WHERE condition

### Ordering

- We can order numeric, date, text columns etc
- Let’s order the employees by birth date
- SELECT * FROM `employee` ORDER BY BirthDate

### Ordering

- If we want to change the order from youngest to oldest, simply add the DESC keyword:
- SELECT * FROM `employee` ORDER BY BirthDate DESC

### Ordering

- We can also order by multiple columns:
- SELECT * FROM `employee` ORDER BY LastName, FirstName;

### Ordering

- Q: how to get the longest-serving sales support agent?
- SELECT * FROM `employee` WHERE Title = "Sales Support Agent" ORDER BY HireDate;

### LIMIT

- If we only want to get a specific number of results, we can LIMIT them
- In our last query for example, we may only want to get the longest-serving sales support agent, rather than all of them ordered by their duration of employment

### LIMIT

- SELECT * FROM `employee` WHERE Title = "Sales Support Agent" ORDER BY HireDate LIMIT 1

### Functions

- For the next examples, let’s use the track relation within the music database

### Functions

- MySQL has 100s of functions – we will just look at some simple ones. Here are two additional resources:
- Official: https://dev.mysql.com/doc/refman/8.0/en/functions.html
- Simpler: https://www.w3schools.com/mysql/mysql_ref_functions.asp

### Functions

- COUNT: counts the number of rows returned by the query
- SUM: sums the total of all values in the column
- AVG: averages the values in the column
- MIN: returns the minimum value in the column
- MAX: returns the maximum value in the column

### Count

- To count the number of rows in this relation:
- SELECT Count(*) FROM `track`;
- Note: we can also count a specific column (which is recommended, since it’s faster & returns same result)
- SELECT Count(TrackID) FROM `track`;

### Count

- Remember, if we want to give the column a specific name, we can do something like:
- SELECT Count(TrackID) AS “Number of Songs” FROM `track`;

### Count

- Q: how can we count the number of invoices where 5 or more of this particular currency was spent?
- SELECT COUNT(Total) FROM `invoice` WHERE Total >= 5;

### Sum

- To calculate the sum, let’s use the invoice relation – let’s sum the “total” column, to see how much income we’ve made?
- SELECT SUM(Total) FROM `invoice`;

### Sum

- Q: how to calculate the total spent by people from Chile?
- SELECT SUM(Total) FROM `invoice` WHERE BillingCountry = "Chile";

### Min & Max

- How to get the maximum spent for an invoice?
- SELECT Max(Total) FROM `invoice`;
- How to get the minimum spent for an invoice?
- SELECT MIN(Total) FROM `invoice`;

### Average (AVG)

- How to get the average spent per invoice?
- SELECT AVG(Total) FROM `invoice`;

### Questions

- Let’s now use the track relation again

### Questions

- 1) Get the minimum, maximum and average number of milliseconds of tracks
- 2) Get the track with the largest filesize
- 1) SELECT MIN(Milliseconds), MAX(Milliseconds), AVG(Milliseconds) FROM `track`
- 2) SELECT * FROM `track` ORDER BY Bytes DESC LIMIT 1;

### Questions

- Find the track with the highest ratio between filesize:duration – i.e. bytes per second
- SELECT * , (Bytes / Milliseconds) FROM `track` ORDER BY (Bytes / Milliseconds) DESC LIMIT 1;

### Questions

- Get all the tracks for which Steve Harris was a composer:
- SELECT * FROM `track` WHERE Composer LIKE "%Steve Harris%“
- Why can’t we use = “Steve Harris” here?
- Since some tracks have multiple composers e.g. “Paul Di'Anno/Steve Harris” – so “Steve Harris” wouldn’t match these values

### GROUP BY

- When we have categorical data, we can use the GROUP BY keywords to combine that data together in our query

### GROUP BY

- Let’s use our invoice relation again and count the number of invoices per country
- SELECT BillingCountry, COUNT(BillingCountry) FROM `invoice` GROUP BY BillingCountry;

### GROUP BY

- Let’s sort this last query descendingly, in order to see the countries from which most purchases were made
- SELECT BillingCountry, COUNT(BillingCountry) FROM `invoice` GROUP BY BillingCountry ORDER BY COUNT(BillingCountry) DESC

### GROUP BY

- Q: how to order customers by their amount of invoices?
- SELECT CustomerId, COUNT(CustomerId) FROM `invoice` GROUP BY CustomerId ORDER BY COUNT(CustomerId) DESC;

### GROUP BY

- Q: how to order customers by the total amount they spent?
- SELECT CustomerId, SUM(Total) FROM `invoice` GROUP BY CustomerId ORDER BY SUM(Total) DESC;

### GROUP BY

- Q: how to get the years in which the most money was spent?
- SELECT YEAR(InvoiceDate), SUM(Total) FROM `invoice` GROUP BY YEAR(InvoiceDate) ORDER BY SUM(Total) DESC;

### GROUP BY

- Q: using our track relation, how can you get the albums with the most tracks?
- SELECT AlbumId, COUNT(AlbumId) FROM track GROUP BY AlbumId ORDER BY COUNT(AlbumId) DESC;

### Normalisation

- You may notice some columns in our relation feature numeric ID columns – AlbumID, GenreID etc – this is because they have been ‘normalised’
- Normalisation is the process of removing duplicate data and referencing them via a key

### Primary Key

- Before talking about normalization more, you first need to understand what a primary key is:
- Primary key: a unique column that can be used to uniquely identify each row

### Primary Key

- For example, in the employee relation, the employeeID is a unique value

### Primary Key

- For a website – where you signup with a username – what might we want the primary key to be?
- The username itself – that’s why you get the “sorry, this username is already in use” error message – since the website needs to be able to identify each user when inserting/selecting data from the database etc

### Normalisation

- So now we understand that a primary key is a column that has to be unique, let’s go back to talking about normalisation
- For example, imagine a social media website – they might have a relation called Comments – we would want to store information about the User and their actual comment itself

### Normalisation

- Some data we might want about the user would include their:
- username
- real name
- email
- phone number
- date of birth
- description

### Normalisation

- If we were to store both the user and comment data in one relation, we would have lots of redundancy
- Modifying would also be difficult – e.g. if a person has 1000 comments and they change their phone number, a query to update their phone number in 1000 different rows would be needed (which is slow)

### This is an un-normalized relation – note how we have redundant data for each column (in reality, we would also need information about the post too – so the relation would be even bigger)

| username | full name | email | mobile | DOB | description | comment |
| --- | --- | --- | --- | --- | --- | --- |
| rebecca98 | Rebecca Holt | rh@gmail.com | 077461684 | 1998/06/15 | I love music & food | Cool video! |
| crazyman | Steve Smith | crazy@yahoo.com | 046272617 | 2000/09/22 | Level 100 on GTA | Not enough violence |
| crazyman | Steve Smith | crazy@yahoo.com | 046272617 | 2000/09/22 | Level 100 on GTA | 😂 |
| rebecca98 | Rebecca Holt | rh@gmail.com | 077461684 | 1998/06/15 | I love music & food | Nice song |

### Normalisation

- Supposing these comments were for video pages on a video website – instead of having 1 huge relation, we could create 3 smaller relations:
- Videos
- Users
- Comments

### Normalisation

- The following attributes could be used:
- Videos(VideoID, Title, Uploader, Description, Views, Likes, Dislikes)
- User(UserID, Username, FullName, Email, Mobile, Description)
- Comments(CommentID, VideoID, UserID, Comment)
- In this case, all the User data would be stored in the user relation – i.e. there would just be one instance of their username, fullname, email, mobile, description etc – same for videos & comments too – this reduces redundancy, increases organization and keeps the size of the database smaller

### User relation (username is the primary key):

- Video relation:

- Comments relation:

- What would the primary keys be in these 3 relations?
- User relation: username
- Video relation: videoID
- Comments relation: commentID

| username | full name | email | mobile | DOB |
| --- | --- | --- | --- | --- |
| rebecca98 | Rebecca Holt | rh@gmail.com | 077461684 | 1998/06/15 |
| crazyman | Steve Smith | crazy@yahoo.com | 046272617 | 2000/09/22 |

| videoID | uploader | title | duration | likes | description |
| --- | --- | --- | --- | --- | --- |
| 1 | rebecca98 | Birthday Vlog | 3:45 | 48 | My birthday party |
| 2 | crazyman | Best GTA Kills | 6:28 | 220 | Non-stop kills |
| 3 | crazyman | Exploring Chernobyl | 20:15 | 5382 | Walking around the reactor |

| commentID | videoID | commenter | Comment | likes |
| --- | --- | --- | --- | --- |
| 1 | 1 | rebecca98 | Hope you enjoy my video  | 3 |
| 2 | 3 | crazyman | Hope I don’t die after this | 10 |
| 3 | 3 | crazyman | So scary! | 25 |
| 4 | 2 | Crazyman | Enjoy the action | 7 |

### JOINs

- This is what this music database has done too – therefore, when running queries, we need to JOIN the relations back together

### JOIN

- If we want to join two relations based on common values, we can use INNER JOIN.
- The others you will rarely have to use

### JOINs

- Note the track relation has the column AlbumID which corresponds to AlbumID in the album relation:
- Track relation				Album relation

### JOINs

- We can JOIN the relations in the following way, to combine the rows based on a key in one relation which is equal to the key in the other:
- INNER JOIN [relation] ON [relation1.key] = [relation2.key]
- SELECT * FROM track INNER JOIN album ON track.AlbumId = album.AlbumId

### JOINs

- We can JOIN the relations in the following way, to combine the rows based on a key in one relation which is equal to the key in the other:
- INNER JOIN [relation] ON [relation1.key] = [relation2.key]
- SELECT * FROM track INNER JOIN album ON track.AlbumId = album.AlbumId

### JOINs

- When using JOIN, we may want to only return a subset of the columns, to keep things easier to understand (and improve performance):
- SELECT Name, Title, UnitPrice FROM track INNER JOIN album ON track.AlbumId = album.AlbumId;

### JOINs

- Going back to our previous example, can you then get the album names and number of songs of those albums which contain the most songs?
- SELECT Title, COUNT(track.AlbumId) FROM track INNER JOIN album ON track.AlbumId = album.AlbumId GROUP BY track.AlbumId ORDER BY COUNT(track.AlbumId) DESC;

### Practice Query – Music.sql

- 1) find all albums with the word "best" in their name
- 2) count the total number of albums
- 3) count the number of artists with the word "The" in their name
- 4) count the number of different cities customers are from
- 5) find the customer with the phone number +453 3331 9991
- 6) find all customers from India
- 7) find all the customers with yahoo or gmail email addresses
- 8) find the customers who work for Google Inc.
- 8.2) get all the artists with “Orchestra” in their name
- 9) get the employees hired in 2003
- 10) sum the total cost of all invoices
- 11) find the average invoice amount of German buyers
- 12) find all invoice and customer details for the customer with an ID of 33

### Practice Query – Music.sql

- 13) find the playlist names that the track with an ID of 190 is included in
- 14) find the track with the longest and shortest duration, the smallest and biggest file size and the cheapest/most expensive price
- 15) show the genre name, with the number of tracks, ordered from the genre with the most tracks to the least
- 16) find the name of the album and singer of all songs from the 'Soundtrack' genre
- 17) get the most popular file format
- 18) get the artist name who produced the album "War"

### Practice Query – Cities.sql

- Get the biggest city in Brazil
- Sum the total population of all cities
- Count the number of cities in China
- Sum the population of the 10 biggest cities
- Calculate the difference in population of the cities in the northern vs southern hemisphere
- Count the number of these cities in the northern vs southern hemisphere
- Find the % of cities which are 2 or more words
- Count the number of primary capitals, administrative ("admin") capitals & non-capitals
- Find the most northerly & southerly cities in this list
- Find all the cities in China with a population over 5 million
- Find the most northerly & southerly cities in China
- Find the number of cities in the 100 most populated that are in China

## https://sqlzoo.net/

### CREATE and USE a Database

- CREATE DATABASE mydatabase
- USE mydatabase
- (we need this USE command in case you have multiple databases on the server – you need to tell the DBMS what one you want to use)

### CREATE a New relation

- CREATE TABLE country(
- name text,
- population integer,
- gdp FLOAT,
- continent ENUM(‘Asia’, ‘Europe’, ‘North America’, ‘South America’…etc),
- PRIMARY KEY(name)
- )

### Primary Key

- What are primary keys and why are they needed?
- Do you know what indexes are? What benefits do they bring? Are there any disadvantages to them?
- Are primary keys indexes?

### CREATE a relation with a Foreign Key

- CREATE TABLE city(
- id INT,
- countryID INT,
- name VARCHAR(30),
- population INT,
- gdp FLOAT,
- region varchar(50),
- PRIMARY KEY(id),
- FOREIGN KEY(countryID) REFERENCES country(id)
- )

- A foreign key is used to join a relation with another – say, for example, if we wanted to get all the cities from the cities from China:
- SELECT * FROM city JOIN country ON city.countryID = country.id WHERE country.name = “China”

### INSERTing into a New relation

- INSERT INTO country(id, name, population, gdp, continent) VALUES(1, “China”, 1400000000, 10000000000, “Asia”)
- Note: if we set id to AUTO INCREMENT when using the CREATE relation commands, we wouldn’t have to manually-specify an ID (which can cause problems, since we can accidentally try to use the same ID twice, which will cause most DBMS’s to throw an error and refuse to enter the new record)

### Adding field to existing relation

- ALTER TABLE customers ADD email varchar(255);

### Common Functions

- COUNT: counts the number of records:
- SELECT COUNT(*) FROM cities
- SUM: sums all the records in the column:
- SELECT SUM(population) FROM country
- AVG: averages the records in the column
- SELECT AVG(gdp) FROM country
- MIN/MAX: returns the minimum/maximum record in the column:
- SELECT MIN(population) FROM country
- SELECT MAX(population) FROM country

### Common Functions

- SELECT [columns] FROM [relation name] WHERE [column name] = [value]

### Common Functions

- ORDER BY: orders the column (can also use ASC/DESC)
- SELECT * FROM country ORDER BY population DESC
- SELECT * FROM country ORDER BY population ASC
- LIMIT: returns only the number of records specified (e.g. LIMIT 10 returns 10 records)
- SELECT * FROM country ORDER BY population DESC LIMIT 10
- GROUP BY: groups records by a column
- SELECT SUM(population) FROM country GROUP BY name

### JOIN

- If we want to join two relations based on common values, we can use INNER JOIN. There is also OUTER JOIN, LEFT JOIN and RIGHT JOIN
- You only need to know INNER JOIN for the exam

### UPDATE record(s)

- UPDATE grades SET grade = 100 WHERE studentid = 15
- UPDATE products SET available = false

### UPDATE

- Using the cities relation:
- Update something about your hometown (e.g. population)
- Change the capital of Egypt to “New Cairo”
- [use appropriate SELECT queries to validate these changes were successful]

### DELETE record(s)

- DELETE FROM student WHERE age > 18
- DELETE FROM student

### DELETE

- Using the cities relation:
- Delete all cities with a population of 0
- Choose a particular country, then delete all cities from that country from the relation
- [again, use appropriate SELECT queries to validate the deletions occurred]
