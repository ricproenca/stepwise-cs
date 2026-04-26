# Chapter 08 SB Answers

**Course:** Cambridge International AS & A Level Computer Science (9618)
**Source:** A Level Textbook/Chapter 08 SB Answers.pdf

---

Cambridge International AS & A Level Computer Science

Chapter 8 Student Book Answers
8.1 What you should already know
1   Suggestions to discuss include
     School database
     Database of births
     Examination board entries
     Doctors records
     Social media records, for example Facebook users

2   a) Suggestions include:
     Access
     Oracle
     dBase
     MySQL
     Filemaker
    b) storage space not wasted, reduction in redundant data stored, consistent data, independent
       data.
3   a) See glossary

    b) See Section 8.1 – key terms

    c) A normalised relational database is a data base in 3NF, where entities do not contain repeated
       groups of attributes, any non-key attributes depend upon the primary key and are independent,
       there are no partial dependencies, and the table contains no non-key dependencies.

Activity 8A
    Staff Name and staff number are stored twice so the is redundant data.
    Data could be inconsistent if the staff number was altered in the payroll file and not the sales file
    or vice versa.
    The data is not independent, for example, the fields are stored in a different order and in the
    payroll file the first name and second name are stored in different fields, but in the sales program
    they are stored together in the same field.

Activity 8B
Attributes for the table Teacher: teaching licence number, date of birth, address

Cambridge International AS & A Level Computer Science                                                       1
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

Activity 8C

Activity 8D

                                  (P SOR\HH      (P SOR\HH
                                                             3RVLWLRQ
                                  1XP EHU        1DP H

                                             -DPHV7H\ )LQDQFLDO'LUHFWRU

                                             3DXO/HLJK $FFRXQWDQW

                                             6X]\0H\      3HUVRQQHO0DQDJHU

                                                Employee Table

                                  &RQWDFW                          &RQWDFW (P DLO
                                                  &RQWDFW1DP H
                                  1XP EHU                          $GGUHVV

                                               -DPHV6PLWK      MDPHV# STUFRP

                                               0LVKDO+XVVDQL PK# [\]FRP

                                  
             0DU\&KHXQJ      PFK# DEFFRP

                                               'HDQ.QLJKW      NQG# VZ]FRP

                                               0DU\-RQHV       PDU\# [\]FRP

                                                Contact Table

                                          &RQWDFW        (P SOR\HH
                                          1XP EHU        1XP EHU

                                                       

                                                       

                                          
             

                                                       

                                                       

                                                       

                                          Employee Contact Table

Cambridge International AS & A Level Computer Science                                     2
© Helen Williams and David Watson 2020

                                Cambridge International AS & A Level Computer Science Answers

                                               E-R Diagam

Activity 8E
1    a) i) See Section 8.1.1
        ii) See Section 8.1.2
b)
          i) Normalisation is the process of organising data to be stored in a database into two or more
              tables and relationships between the tables, so that data redundancy is minimised.
          ii) Normalisation is carried out by the following:
               First Normal Form (1NF) – ensuring that entities do not contain repeated groups of
                  attributes.
               Second Normal Form (2NF) – ensuring that entities are in 1NF and any non-key
                  attributes depend upon the primary key. There are no partial dependencies.
               Third Normal Form (3NF) – ensuring that entities are in 2NF and all non-key
                  attributes are independent. The table contains no non-key dependencies.

2 a)
             Part (Part Number, Part Description, Date Last Ordered, Number in Stock, Minimum Order
             Level, Position in Warehouse)
             Manufacturer (Manufacturer Name, Manufacturer Address, Manufacturer Contact Details)
             Part Manufacturer (Part Number, Manufacturer Name)
     b)

8.2       What you should already know
1    a) Depends on student, probably MySQL or Access
     b) Suggestions include parts database, school database, employee database
2    a) Back-up is a copy of a file in case the original is destroyed or corrupted.
     b) Access rights are the permissions given to database users to access, modify or delete data.
     c) Back-up ensures that if data is destroyed or corrupted it can be replaced; access rights help to
        prevent unauthorised access to data.

Cambridge International AS & A Level Computer Science                                                      3
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

Activity 8F
1 a)    See Section 8.2.1
  b)    See Section 8.2.1 last paragraph
2 a)    See Section 8.2.1 and 8.2.2
  b)    The use of access rights to limit what can be seen or changed:
         Administrators would have full access rights to everything.
         Teachers may be able to see most items but only change details about themselves and their
            pupils.
         Pupils may only have the right to see data about themselves but not change it.

8.3     What you should already know

Activity 8G
CREATE TABLE Teacher(
        TeacherName CHARACTER,
        Address CHARACTER,
        TeacherDateOfBirth DATE);
ALTER TABLE Teacher ADD PRIMARY KEY (LicenceNumber);
ALTER TABLE Class ADD FOREIGN KEY LicenceNumber REFERENCES Teacher (LicenceNumber);

Activity 8H

Cambridge International AS & A Level Computer Science                                             4
© Helen Williams and David Watson 2020

                               Cambridge International AS & A Level Computer Science Answers

Activity 8I
SELECT COUNT(STUDENTSUBJECT.ExamMark)
FROM STUDENTSUBJECT;

SELECT AVG(STUDENTSUBJECT.ExamMark)
FROM STUDENTSUBJECT;

8.4      End of chapter questions
1 a)     ProgDev table has repeated group of attributes.
   b)
                  FirstName                Team

                      Alice                 WC

                     Charles                 PC

                     Ahmed                   QR

                FirstName          ProgramName             NoOfDays     Customer

                    Alice             TV control              3            SKM

                    Alice              Ice alert              2            WZP

                    Alice           Digital camera            6            HNC

                   Charles             Oil flow               1            GEB

                   Charles           Rescue pack              8            BGF

                   Ahmed              TV control              2            SKM

                   Ahmed              Accounts                8            ARC

                   Ahmed            Digital camera            4            HNC

                   Ahmed              Test Pack               3            GKN

        i) The primary key of the Programmer table is FirstName. This links to FirstName
            (foreign key) in Program.
        ii) There is a non-key dependency Customer is dependent on ProgramName, (which is not
            the primary key of the Program table).
        iii) Programmer (FirstName, Team)
              ProgramWorkDone (FirstName, ProgramName, NoOfDays)
              Program (ProgramName, Customer)

Cambridge International AS & A Level Computer Science                                           5
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

2 a)
        i)     Database Management System
        ii) Issue usernames and passwords to stop unauthorised access to the data. Set access rights so
            only relevant staff can edit certain parts of the data.
        iii) Setup search criteria to find the data that matches the criteria set
        iv) By storing data in (separate) linked tables data redundancy is reduced/data
            duplication is controlled. Compatibility/data integrity issues are reduced as data only needs
            to be updated once/is only stored once. Unwanted or accidental deletion of linked data is
            prevented as the DBMS will flag an error.
    b) i) The Primary Key in CLASS is ClassID. The Foreign Key of CLASS-GROUP is ClassID.
        ii) Many-to-one
        iii)
               SELECT StudentID, FirstName
               FROM STUDENT
               WHERE TutorGroup = "10B" // WHERE (TutorGroup = "10B")
               ORDER BY LastName ASC;
        iv)
               SELECT STUDENT.LastName
               FROM STUDENT, CLASS-GROUP
               WHERE ClassID = "CS1" // WHERE (ClassID = "CS1") AND CLASS-
               GROUP.StudentID = STUDENT.StudentID;

Cambridge International AS & A Level Computer Science                                                  6
© Helen Williams and David Watson 2020