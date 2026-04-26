# 00 Cover

**Course:** Cambridge International AS & A Level Computer Science (9618)
**Source:** 00 Cover.pdf

---

Unless otherwise acknowledged, the questions, example answers and comments that appear in
this book were written by the authors. In examinations, the way marks are awarded may be
different. Questions from the Cambridge International AS & A Level Computer Science papers
are reproduced by permission of Cambridge Assessment International Education. Cambridge
Assessment International Education bears no responsibility for the example answers to questions
taken from its past question papers which are contained in this publication.
The publishers would like to thank the following who have given permission to reproduce the
following material in this book:
Page 181 Extract from IEEE Code of Ethics. Reprinted with permission of IEEE with the
copyright notice © Copyright 2018 IEEE; Pages 181–3 Copyright © 1999 by the Institute for
Electrical and Electronics Engineers, Inc. and the Association for Computing Machinery, Inc.;
Page 187 eBay software pirates stump up $100,000 –
https://www.theregister.co.uk/2006/11/24/ebay_pirates_payup/. Reprinted with permission of
Out-Law.com, the news service of international law firm Pinsent Masons; Page 218 Map data ©
2018 Google, Imagery © 2018 Landsat/Copernicus.
Photo credits
Figures 1.1 and 1.2 © David Watson; Figure 1.3 © Sébastien Delaunay/stock.adobe.com;
Figure 2.18 © Forgem/Shutterstock.com; Figure 3.1 tl © studio306fotolia/stock.adobe.com; tr
© Chavim/stock.adobe.com; bl © pozdeevvs/stock.adobe.com; br © Sergey
Yarochkin/stock.adobe.com; Figure 3.4 © Mau Horng/stock.adobe.com; Figure 3.5 © science
photo/stock.adobe.com; Figure 3.9 © Maksym Dykha/Shutterstock.com; Figure 3.10 © Hurst
Photo/Shutterstock.com; Figure 3.11 © philipus/stock.adobe.com; Figure 3.12 © belekekin/
Shutterstock.com; Figure 4.4 l © cybertrone/stock.adobe.com, c © Tungphoto/Shutterstock.com,
r © Luminis/Shutterstock.com; Figure 5.1 l © Stuart Brady (Public Domain) via Wikipedia
Commons; r © Jiri Hera/stock.adobe.com; Figure 6.3 © Andrey Burmakin/stock.adobe.com;
Figure 6.4 © bkilzer/stock.adobe.com; Figure 7.2 l © Pres Panayotov/
Shutterstock.com; c © James Balog/Getty Images; r © caluian/stock.adobe.com; Figure 18.19
© seewhatmitchsee/
123rf.com; Figure 18.21 b © Garmon/stock.adobe.com; t © Christian Musat/stock.adobe.com; ct
© Ammit/stock.adobe.com; cb © Martina Berg/stock.adobe.com; Figure 18.24
Harshal/stock.adobe.com; Figures 18.27 and 18.28 all © David Watson.
l = left, c = centre, b = bottom, t = top, r = right
Every effort has been made to trace and acknowledge ownership of copyright. The publishers
will be glad to make suitable arrangements with any copyright holders whom it has not been
possible to contact. Computer hardware and software brand names mentioned in this book are
protected by their respective trademarks and are acknowledged.
Although every effort has been made to ensure that website addresses are correct at time of going
to press, Hodder Education cannot be held responsible for the content of any website mentioned
in this book.
Hachette UK’s policy is to use papers that are natural, renewable and recyclable products and
made from wood grown in well-managed forests and other controlled sources. The logging and
manufacturing processes are expected to conform to the environmental regulations of the country
of origin.

Orders: please contact Bookpoint Ltd, 130 Park Drive, Milton Park, Abingdon, Oxon OX14 4SE.
Telephone: (44) 01235 827827. Fax: (44) 01235 400401. Email education@bookpoint.co.uk
Lines are open from 9 a.m. to 5 p.m., Monday to Saturday, with a 24-hour message answering
service. You can also order through our website: www.hoddereducation.com
© David Watson and Helen Williams 2019
First published 2019 by
Hodder Education,
An Hachette UK Company
Carmelite House
50 Victoria Embankment
London EC4Y 0DZ
www.hoddereducation.com
Impression number 10 9 8 7 6 5 4 3 2 1
Year     2023 2022 2021 2020 2019
All rights reserved. Apart from any use permitted under UK copyright law, no part of this
publication may be reproduced or transmitted in any form or by any means, electronic or
mechanical, including photocopying and recording, or held within any information storage and
retrieval system, without permission in writing from the publisher or under licence from the
Copyright Licensing Agency Limited. Further details of such licences (for reprographic
reproduction) may be obtained from the Copyright Licensing Agency Limited, www.cla.co.uk
Cover photo © Terrance Emerson – stock.adobe.com
Illustrations by Aptara Inc. and Hodder Education
Typeset by Aptara Inc.
Printed by Bell & Bain Ltd, Glasgow
A catalogue record for this title is available from the British Library.
ISBN: 9781510457591
eISBN: 9781510457607

Contents
   Introduction

AS LEVEL
1 Information representation and multimedia
   1.1 Data representation
   1.2 Multimedia
   1.3 File compression

2 Communication
   2.1 Networking
   2.2 The internet

3 Hardware
   3.1 Computers and their components
   3.2 Logic gates and logic circuits

4 Processor fundamentals
   4.1 Central processing unit (CPU) architecture
   4.2 Assembly language
   4.3 Bit manipulation

5 System software
   5.1 Operating systems
   5.2 Language translators

6 Security, privacy and data integrity
   6.1 Data security
   6.2 Data integrity

7 Ethics and ownership
   7.1 Legal, moral, ethical and cultural implications
   7.2 Copyright issues
   7.3 Artificial intelligence (AI)

8 Databases
   8.1 Database concepts
   8.2 Database management systems (DBMSs)
   8.3 Data definition language (DDL) and data manipulation language (DML)

9 Algorithm design and problem solving
   9.1 Computational thinking skills
   9.2 Algorithms

10 Data types and structures
   10.1 Data types and records
   10.2 Arrays
   10.3 Files
   10.4 Abstract data types (ADTs)

11 Programming
   11.1 Programming basics
   11.2 Programming constructs
   11.3 Structured programming

12 Software development
   12.1 Program development lifecycle
   12.2 Program design
   12.3 Program testing and maintenance

A LEVEL
13 Data representation
   13.1 User-defined data types
   13.2 File organisation and access
   13.3 Floating-point numbers, representation and manipulation

14 Communication and internet technologies
   14.1 Protocols
   14.2 Circuit switching and packet switching

15 Hardware
   15.1 Processors and parallel processing
   15.2 Boolean algebra and logic circuits

16 System software and virtual machines
   16.1 Purposes of an operating system (OS)
   16.2 Virtual machines (VMs)
   16.3 Translation software

17 Security
   17.1 Encryption
   17.2 Quantum cryptography
   17.3 Protocols

   17.4 Digital signatures and digital certificates

18 Artificial intelligence (AI)
   18.1 Shortest path algorithms
   18.2 Artificial intelligence, machine learning and deep learning

19 Computational thinking and problem solving
   19.1 Algorithms
   19.2 Recursion

20 Further programming
   20.1 Programming paradigms
   20.2 File processing and exception handling

   Glossary
   Index

Introduction
This textbook provides the knowledge, understanding and practical skills to support those
studying Cambridge International AS & A Level Computer Science. This textbook is part of a
suite of resources which include a Programming Skills Workbook and an Online Teacher’s
Guide.
The syllabus content has been covered comprehensively and is presented in two sections:
Chapters 1 to 12 cover the AS Level, Chapters 13 to 20 cover the extra content required for the
full A Level.

How to use this book
To make your study of Computer Science as rewarding and successful as possible, this textbook,
endorsed by Cambridge Assessment International Education, offers the following important
features.

Organisation
The content is presented in the same order as in the syllabus, and the chapter titles match those in
the syllabus.

Features to help you learn
Each chapter is broken down into several sections, so that the content is accessible.
At the start of each chapter, there is a blue box that gives a summary of the syllabus points to be
covered in that chapter, to show you what you are going to learn.

In this chapter, you will learn about
• binary magnitudes, binary prefixes and decimal prefixes
• binary, denary and hexadecimal number systems
• how to carry out binary addition and subtraction
• the use of hexadecimal and binary coded decimal (BCD) number systems
• the representation of character sets (such as ASCII and Unicode)
• how data for a bit-mapped image is encoded
• how to estimate the file size for a bit-map image
• image resolution and colour depth
• encoding of vector graphics
• the representation of sound in a computer
• the effects of changing sampling rate and resolution on sound quality
• the need for file compression methods (such as lossy and lossless formats)
• how to compress common file formats (such as text files, bit-map images, vector graphics,
  sound files and video files).

The grey-blue What you should already know boxes at the beginning of each chapter or section
help you to check you have the right level of knowledge before you begin. You may have
already studied Computer Science at IGCSE, O Level or equivalent, or you may not have. These
boxes contain questions to find out how much you remember, or to gauge your previous
learning. If you are unable to answer the questions, you will need to refresh your memory, or
make sure you are familiar with the the relevant ideas, before continuing.

WHAT YOU SHOULD ALREADY KNOW
Try these four questions before you read this chapter.
1 What are the column weightings for the binary number system?
2 Carry out these binary additions. Convert your answers to denary.
   a) 0 0 1 1 0 1 0 1 + 0 1 0 0 1 0 0 0
   b) 0 1 0 0 1 1 0 1 + 0 1 1 0 1 1 1 0
   c) 0 1 0 1 1 1 1 1 + 0 0 0 1 1 1 1 0
   d) 0 1 0 0 0 1 1 1 + 0 1 1 0 1 1 1 1
   e) 1 0 0 0 0 0 0 1 + 0 1 1 1 0 1 1 1
   f) 1 0 1 0 1 0 1 0 + 1 0 1 0 1 0 1 0
3 What are the column weightings for the hexadecimal (base 16) number system?

4 Carry out these hexadecimal additions. Convert your answers to denary.
  a) 1 0 7 + 2 5 7
  b) 2 0 8 + A 1 7
  c) A A A + 7 7 7
  d) 1 F F + 7 F 7
  e) 1 4 9 + F 0 F
  f) 1 2 5 1 + 2 5 6 7
  g) 3 4 A B + C 0 0 A
  h) A 0 0 1 + D 7 7 F
  i) 1 0 0 9 + 9 F F 1
  j) 2 7 7 7 + A C F 1

Key terms for each chapter or section are listed, with definitions. When you are reading through
the chapter and you come across a term you don’t understand, go back and see if it has been
explained here.

Key terms
Logic gates – electronic circuits which rely on ‘on/off’ logic; the most common ones are NOT,
AND, OR, NAND, NOR and XOR.
Logic circuit – formed from a combination of logic gates and designed to carry out a particular
task; the output from a logic circuit will be 0 or 1.
Truth table – a method of checking the output from a logic circuit; they use all the possible
binary input combinations depending on the number of inputs; for example, two inputs have 22
(4) possible binary combinations, three inputs will have 23 (8) possible binary combinations,
and so on.
Boolean algebra – a form of algebra linked to logic circuits and based on TRUE and FALSE.

There are Activities throughout, so that you can apply what you have learned. Some of these take
the form of questions, to allow you to test your knowledge; others aim to give you experience of
practical work. Some of these will also give you opportunities to work collaboratively with other
students.

ACTIVITY 3B
Produce truth tables for each of the following logic circuits. You are advised to split them up
into intermediate parts to help eliminate errors.
a)

b)

c)

d)

e)

There are also some Extension activities. These go beyond the requirements of the syllabus, but
it is good to see if you know the answers. We hope they will be of interest to you.

EXTENSION ACTIVITY 3E
1 Look at this simplified diagram of a keyboard; the letter H has been pressed. Explain:
  a) how pressing the letter H has been recognised by the computer
  b) how the computer manages the very slow process of inputting data from a keyboard.
2 a) Describe how these types of pointing devices work.
      i) Mechanical mouse

      ii) Optical mouse
   b) Connectivity between mouse and computer can be through USB cable or wireless.
      Explain these two types of connectivity.

The End of chapter questions are practice exam-style questions; these provide a more formal
way to check your progress. Some questions from Cambridge International AS & A Level
Computer Science past papers are included.

End of chapter questions
1 a) The following bytes represent binary integers using the two’s complement form. State
     the equivalent denary values.
     i) 0 1 0 0 1 1 1 1
                                                                                              [1]
      ii) 1 0 0 1   1010
                                                                                              [1]
      iii) Write the integer −53 in two’s complement form.
                                                                                       [1]
      iv) Write the maximum possible range of numbers using the two’s complement form of
          an 8-bit binary number.
          Give your answers in denary.
                                                                                       [2]
   b) i) Write the denary integer 798 in binary-coded decimal (BCD) format.
                                                                                       [1]
      ii) Write the denary number that is represented by the following BCD number.

                                                                                              [2]
   c) Give one use of binary-coded decimal system.
                                                                                              [1]

Assessment
If you are following the AS Level course, you will take two examination papers:
• Paper 1 Theory Fundamentals (1 hour 30 minutes)
• Paper 2 Fundamental Problem-solving and Programming Skills (2 hours)
If you are studying the A Level course, you will take four examination papers, Papers 1 and 2
and also:
• Paper 3 Advanced Theory (1 hour 30 minutes)
• Paper 4 Practical (2 hours 30 minutes)
Note that calculators must not be used in any paper.

Command words
The table below includes command words used in the assessment for this syllabus. The use of
the command word will relate to the subject context. Make sure you are familiar with these.

 Command        What it means
 word
 Analyse        examine in detail to show meaning, identify elements and the relationship
                between them
 Assess         make an informed judgement
 Calculate      work out from given facts, figures or information
 Comment        give an informed opinion
 Compare        identify/comment on similarities and/or differences
 Complete       add information to an incomplete diagram or table
 Consider       review and respond to given information
 Contrast       identify/comment on differences
 Define         give precise meaning
 Demonstrate show how or give an example
 Describe       state the points of a topic/give characteristics and main features
 Develop        take forward to a more advanced stage or build upon given information
 Discuss        write about issue(s) or topic(s) in depth in a structured way
 Draw           draw a line to match a term with a description
 Evaluate       judge or calculate the quality, importance, amount, or value of something
 Examine        investigate closely, in detail
 Explain        set out purposes or reasons/make the relationships between things
                evident/provide why and/or how and support with relevant evidence
 Give           produce an answer from a given source or recall/memory
 Identify       name/select/recognise
 Justify        support a case with evidence/argument
 Outline        set out main points

Predict     suggest what may happen based on available information
Sketch      make a simple freehand drawing showing the key features, taking care over
            proportions
State       express in clear terms
Suggest     apply knowledge and understanding to situations where there are a range of
            valid responses in order to make proposals
Summarise   select and present the main points, without detail
Write       write an answer in a specific way

From the authors
We hope you enjoy this book. It encourages you to develop your computational thinking while
broadening your understanding of computer science. This should prove helpful when you go on
to further study, where topics such as artificial intelligence, quantum cryptography and
imperative and declarative programming will be studied; all of these are covered in the later
chapters of the book. In order to handle such topics confidently, you will need to be a competent
programmer who uses computational thinking to solve problems and has a good understanding
of computer architecture. All chapters are designed to build on your previous experience in a
way that develops essential skills and at the same time expands the techniques you are able to
use.
David Watson
Helen Williams

Notes for teachers
Key concepts
These are the essential ideas that help learners to develop a deep understanding of the subject and
to make links between the different topics. Although teachers are likely to have these in mind at
all times when they are teaching the syllabus, the following icons are included in the textbook at
points where the key concepts relate to the text:

     Computational thinking
Computational thinking is a set of fundamental skills that help produce a solution to a problem.
Skills such as abstraction, decomposition and algorithmic thinking are used to study a problem
and design a solution that can be implemented. This may involve using a range of technologies
and programming languages.

     Programming paradigms
A programming paradigm is a way of thinking about or approaching problems. There are many
different programming styles that can be used, which are suited to unique functions, tools and
specific situations. An understanding of programming paradigms is essential to ensure they are
used appropriately, when designing and building programs.

     Communication
Communication is a core requirement of computer systems. It includes the ability to transfer data
from one device or component to another and an understanding of the rules and methods that are
used in this data transfer. Communication could range from the internal transfer of data within a
computer system, to the transfer of a video across the internet.

     Computer architecture and hardware
Computer architecture is the design of the internal operation of a computer system. It includes
the rules that dictate how components and data are organised, how data are communicated
between components, to allow hardware to function. There is a range of architectures – with
different components and rules – that are appropriate for different scenarios. All computers
comprise a combination of hardware components, ranging from internal components, such as the
central processing unit (CPU) and main memory, to peripherals. To produce effective and
efficient programs to run on hardware, it is important to understand how the components work
independently and together to produce a system that can be used. Hardware needs software to be
able to perform a task. Software allows hardware to become functional. This enables the user to
communicate with the hardware to perform tasks.

     Data representation and structures
Computers use binary and understanding how a binary number can be interpreted in many

different ways is important. Programming requires an understanding of how data can be
organised for efficient access and/or transfer.

Additional support
The Programming Skills Workbook provides practice for the programming papers and includes
exercises designed to give students the necessary experience of working in one of the three
prescribed high-level programming languages: Java (Console mode), Visual Basic and Python
(Console mode). It is a write-in workbook designed to be used throughout the course.
Answers to questions are available in the Online Teacher’s Guide.