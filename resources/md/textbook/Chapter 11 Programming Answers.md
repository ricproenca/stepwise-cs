# Chapter 11 SB Answers

**Course:** Cambridge International AS & A Level Computer Science (9618)
**Source:** A Level Textbook/Chapter 11 SB Answers.pdf

---

Cambridge International AS & A Level Computer Science

Chapter 11 Student Book Answers
What you should already know
Pseudocode
    DECLARE myList : ARRAY[0:9] OF INTEGER
    DECLARE upperBound : INTEGER
    DECLARE lowerBound : INTEGER
    DECLARE index : INTEGER
    DECLARE swap : BOOLEAN
    DECLARE temp : INTEGER
    DECLARE top : INTEGER
    upperBound  9
    lowerBound  0
    DECLARE found : BOOLEAN

    // input values to myList
    FOR index  lowerBound TO upperBound
        OUTPUT "Please Enter Value "
        INPUT myList[index]
    NEXT index
    top  upperBound

    // sort myList
    REPEAT
        FOR index  lowerBound TO top - 1
             Swap  FALSE
             IF myList[index] > myList[index + 1]
               THEN
                temp  myList[index]
               myList[index]  myList[index + 1]
               myList[index + 1]  temp
               swap  TRUE
             ENDIF
        NEXT
        top  top -1
    UNTIL (NOT swap) OR (top = 0)

    // Output sorted list
    OUTPUT "Sorted List"
    FOR index  lowerBound TO upperBound
        OUTPUT myList[index]
    NEXT index

    // search for 27
    found  FALSE
    index  lowerBound
    REPEAT
        IF 27 = myList[index]
           THEN
             found  TRUE
Cambridge International AS & A Level Computer Science   1
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

        ENDIF
        index  index + 1
    UNTIL (found = TRUE) OR (index > upperBound)

    // Output if 27 found
    IF found
      THEN
        OUTPUT "27 found"
      ELSE
        OUTPUT "27 not found"
    ENDIF

Python
        #input values into myList
        myList =[]
        upperBound = 10
        lowerBound = 0
        for index in range (lowerBound, upperBound):
            myList.append(int(input("Please Enter Value ")))

        #sort myList
        top = len(myList) - 1
        swap = True
        while (swap and top > lowerBound):
             swap = False
             for index in range (lowerBound, top):
                   if myList[index] > myList[index + 1]:
                    temp = myList[index]
                    myList[index] = myList[index + 1]
                    myList[index + 1] = temp
                    swap = True
             top = top - 1

        #output sorted list
        print (*myList)
        #search for 27

        lowerBound = 0
        upperBound = len(myList) - 1
        found = False
        index = lowerBound
        while (not found) and (index <= upperBound):
            if 27 == myList[index]:
                found = True
                foundIndex = index
            index = index + 1
        # output if 27 found
        if found:
            print ("27 found")
        else:
            print ("27 not found")

Cambridge International AS & A Level Computer Science                                     2
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

VB
        Module Module1

             Sub Main()
                 Dim myList(9) As Integer
                 Dim index, lowerBound, upperBound, top, temp As Integer
                 Dim swap As Boolean
                 Dim found = False
                 lowerBound = 0
                 upperBound = 9

        'input values into myList
                For index = lowerBound To upperBound
                    Console.Write("Please Enter Value ")
                    myList(index) = Console.ReadLine()
                Next

        'sort myList
                Do
                    swap = False
                    For index = myList.GetLowerBound(0) To top
                        If myList(index) > myList(index + 1) Then
                            temp = myList(index)
                            myList(index) = myList(index + 1)
                            myList(index + 1) = temp
                            swap = True
                        End If
                    Next
                    top = top - 1
                Loop Until Not swap Or top = myList.GetLowerBound(0)

        'output sorted list
                Console.WriteLine("Sorted List")
                For index = myList.GetLowerBound(0) To
        myList.GetUpperBound(0)
                    Console.Write(myList(index).ToString() + " ")
                Next
                Console.WriteLine()

        'search for 27
                index = myList.GetLowerBound(0)
                Do
                    If 27 = myList(index) Then
                        found = True
                    End If
                    index = index + 1
                Loop Until found Or index > myList.GetUpperBound(0)

        'Output if 27 found
                If found Then
                    Console.WriteLine("27 found")
                Else
                    Console.WriteLine("27 not found")
                End If
                Console.ReadKey() 'wait for keypress

             End Sub

        End Module

Cambridge International AS & A Level Computer Science                                     3
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

Java
        //linear search
        import java.util.Scanner;
        class Chapter11
         {
           public static void main(String args[]){
              Scanner myObj = new Scanner(System.in);
              int[] myList = new int [10];
              int top = myList.length - 1;
              int index = 0;
              boolean found = false;
              int temp;
              int lowerBound = 0;
              boolean swap;

        // input values to myList
               for (index = lowerBound; index <= top; index++){
                  System.out.println("Please enter value ");
                  myList[index] = myObj.nextInt();
                }
              System.out.println();

        //sort myList
              do {
                 swap = false;
                   for (index = lowerBound; index < top; index++){
                     if (myList[index] > myList[index + 1]) {
                       temp = myList[index];
                       myList[index] = myList[index + 1];
                       myList[index + 1] = temp;
                       swap = true;
                     }
                   }
                   top = top - 1;
                 }
              while (swap && (top > lowerBound));

        // output sorted list
              System.out.println("sorted list");
              for (index = lowerBound; index <= myList.length - 1;
        index++){
                  System.out.print(myList[index] + " ");
                }
              System.out.println();

        //search for 27
              found = false;
              index = lowerBound;

Cambridge International AS & A Level Computer Science                                     4
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

                 do {
                     if (27 == myList[index]) {
                      found = true;
                   }
                   index = index + 1;
                 }
                 while (!found && index< myList.length);

        //output if 27 found
               if (found){
                  System.out.println ("27 found");
                 } else {
                     System.out.println ("27 not found");
             }
           }
        }

Activity 11A
Python
        #calculate the volume and surface area of a sphere
        pi = 3.142
        finish = False
        radius = float(input("Please enter the radius of the sphere "))
        while finish == False:
                while radius <= 0 and radius != -1:
                        radius = float(input("Please enter the radius
        of the sphere "))
                if radius != -1:
                        volume = (4 / 3) * pi * radius * radius *
        radius
                        surfaceArea = 3 * pi * radius * radius
                        print("Volume is ", volume)
                        print("Surface area is ", surfaceArea)
                        radius = float(input("Please enter the radius
        of the sphere "))
                else:
                        finish = True

Cambridge International AS & A Level Computer Science                                     5
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

VB
        Module Module1
            Public Sub Main()
                Dim radius As Decimal
                Dim volume As Decimal
                Dim surfaceArea As Decimal
                Const pi As Decimal = 3.142
                Dim found As Boolean = False
                Do
                    Do
                        Console.Write("Please enter the radius of the sphere
        ")
                        radius = Decimal.Parse(Console.ReadLine())
                    Loop Until (radius > 0) Or (radius = -1.0)
                    If radius <> -1 Then
                        volume = (4 / 3) * pi * radius * radius * radius
                        surfaceArea = 3 * pi * radius * radius
                        Console.WriteLine("Volume is " & volume)
                        Console.WriteLine("Surface area is " & surfaceArea)
                    Else
                        found = True
                    End If
                Loop Until found

                   Console.ReadKey()

             End Sub

        End Module

Cambridge International AS & A Level Computer Science                                     6
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

Java
        import java.util.Scanner;
        class Activity11A
        {
           public static void main(String args[])
            {
               Scanner myObj = new Scanner(System.in);
               final double PI = 3.142;
               double radius;
               boolean found = false;

                 do {
                  do {
                   System.out.println("Please enter the radius of the sphere ");
                   radius = myObj.nextDouble();
                 }
                 while (radius < 0 && radius != -1);
                 if (radius != -1){
                     double volume = (4 / 3) * PI * radius * radius * radius;
                     double surfaceArea = 4 * PI * radius * radius;

                      System.out.println("Volume is " + volume);
                      System.out.println("Surface area is " + surfaceArea);

               }
                   else {
                     found = true;
              }
             }
               while(!found);

             }
        }

Activity 11B
Python
        #password checker
        storedPassword = "Secret"
        inputPassword = input("Please enter your password ")
        size = len(inputPassword)
        if size == len(storedPassword) :
          if (inputPassword[0] == storedPassword[0]) and (inputPassword[-1]
        == storedPassword[-1:]):
              print ("Password entered has correct first and last letters")
          else:
              print("Password entered is incorrect")
        else:
           print("Password entered is incorrect")

Cambridge International AS & A Level Computer Science                                     7
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

VB
        'Password checker
        Module Module1
            Sub Main()
                Dim storedPassword = "Secret"
                Dim inputPassword As String
                Dim size As Integer
                Console.Write("Please enter your password ")
                inputPassword = Console.ReadLine() I’
                size = Len(inputPassword)
                If size = Len(storedPassword) Then
                     If Left(inputPassword, 1) = Left(storedPassword, 1) And
        Right(inputPassword, 1) = Right(storedPassword, 1) Then
                         Console.WriteLine("Password has correct first and last
        letters")
                     Else
                         Console.WriteLine("Password entered is incorrect")
                     End If
                Else
                    Console.WriteLine("Password entered is incorrect")
                End If
                Console.ReadLine()
            End Sub
        End Module

Java
        //password checker
        import java.util.Scanner;
        class ACTIVITY11B {
           public static void main(String args[]){
              Scanner myObj = new Scanner(System.in);
              String storedPassword = "Secret";
              System.out.println("Please enter your password ");
              String inputPassword = myObj.next();
              int size = inputPassword.length();
             if (size == storedPassword.length()){
                 if ((inputPassword.charAt(0) == storedPassword.charAt(0)) &&
        (inputPassword.charAt(size - 1) ==
        storedPassword.charAt(storedPassword.length() - 1))) {
                  System.out.println("Password entered has correct first and last
        letters");
                        }
                  else{
                      System.out.println("Password entered is incorrect");
                  }

                  } else {
                      System.out.println ("Password entered is incorrect");
             }
            }
        }

Cambridge International AS & A Level Computer Science                                     8
© Helen Williams and David Watson 2020

                               Cambridge International AS & A Level Computer Science Answers

Extension
The strings would need converting to upper or lower case using these functions.

                       Upper                                      Language

                       inputPassword.upper()                      Python
                       UCase(inputPassword)                       Visual Basic
                       inputPassword.toUpperCase();               Java
                       Lower                                      Language

                       inputPassword.lower()                      Python
                       LCase(inputPassword)                       Visual Basic
                       inputPassword.tolowerCase();               Java

Activity 11C
Python
Standard Library Routines – examples
    1 NumPy – mathematical functions and large arrays
    2 datetime – allows the use of dates
    3 Scrapy – web crawler
    4 Pandas – data manipulation and management
    5 Matplotlib – 2D plotting
    6 PyGTK – creation of programs with a GUI

VB
Standard Library functions – examples

     1   MsgBox – pop up message box
     2   Format – for displaying dates
     3   Sign – determines the sign of a number
     4   Int – returns the integer part of a number
     5   Rnd – returns a random number
     6   Clipboard – access to the clipboard

Java
Standard Library Packages – examples
    1 util – miscellaneous useful classes
    2 time – date, time etc
    3 math – maths calculations
    4 net – networking
    5 sql – accessing a relational database
    6 awt – user interfaces and graphics

Cambridge International AS & A Level Computer Science                                      9
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

Activity 11D
        DECLARE number1, number2, answer : REAL
        DECLARE sign : STRING
        OUTPUT "Please enter Number one "
        INPUT number1
        OUTPUT "Please enter Number two "
        INPUT number2
        OUTPUT "Please enter + - * or / "
        INPUT sign
        CASE OF sign
          "+" : answer  number1 + number2
          "-" : answer  number1 - number2
          "*" : answer  number1 * number2
          "/" : answer  number1 / number2
          OTHERWISE OUTPUT "Invalid sign entered"
        ENDCASE
        IF sign = "+" or sign = "-" or sign = "*" or sign = "/"
          THEN
            OUTPUT "Answer is ", answer
        ENDIF

Python
        # calculations
        number1 = float(input("Please enter number one "))
        number2 = float(input("Please enter number two "))
        sign = input("Please enter + - * or / ")
        if sign =="+":
            answer = number1 + number2
            print("Answer is ", answer)
        elif sign =="-":
            answer = number1 - number2
            print("Answer is ", answer)
        elif sign =="*":
            answer = number1 * number2
            print("Answer is ", answer)
        elif sign =="/":
            answer = number1 / number2
            print("Answer is ", answer)
        else:
            print("Invalid sign")

Cambridge International AS & A Level Computer Science                                     10
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

VB
        'Calculations
        Module Module1

             Sub Main()
                 Dim number1, number2, answer As Decimal
                 Dim sign As String
                 Console.Write("Please enter number one ")
                 number1 = (Console.ReadLine())
                 Console.Write("Please enter number two ")
                 number2 = (Console.ReadLine())
                 Console.Write("Please enter sign ")
                 sign = (Console.ReadLine())
                 Select Case sign
                     Case "+"
                         answer = number1 + number2
                         Console.WriteLine("Answer is " + answer.ToString)
                     Case "-"
                         answer = number1 - number2
                         Console.WriteLine("Answer is " + answer.ToString)
                     Case "*"
                         answer = number1 * number2
                         Console.WriteLine("Answer is " + answer.ToString)
                     Case "/"
                         answer = number1 / number2
                         Console.WriteLine("Answer is " + answer.ToString)
                     Case Else
                         Console.WriteLine("Invalid sign")
                 End Select

                   Console.ReadKey()

             End Sub

        End Module

Cambridge International AS & A Level Computer Science                                     11
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

Java
        //calculations
        import java.util.Scanner;
        class ACTIVITY11D {
           public static void main(String args[]){
              Scanner myObj = new Scanner(System.in);
              System.out.println("Please enter Number one ");
              float number1 = myObj.nextFloat();
              System.out.println("Please enter Number two ");
              float number2 = myObj.nextFloat();
              System.out.println("Please enter + - * or / ");
              String sign = myObj.next();
              float answer = 0.0f;
              switch (sign) {
                  case "+":
                  answer = number1 + number2;
                  System.out.println("Answer is " + answer);
                  break;
                  case "-":
                  answer = number1 - number2;
                  System.out.println("Answer is " + answer);
                  break;
                  case "*":
                  answer = number1 * number2;
                  System.out.println("Answer is " + answer);
                  break;
                  case "/":
                  answer = number1 / number2;
                  System.out.println("Answer is " + answer);
                  break;
                 default:
                 System.out.println("Invalid sign entered");
                }
            }
           }

Activity 11E
Python
        # validation
        value = int (input("Please enter a number between 1 and 10 inclusive "))
        while 1 > value or value > 10:
            value = int (input("Please enter a number between 1 and 10 inclusive "))

Cambridge International AS & A Level Computer Science                                     12
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

VB
        ' validation
        Module Module1

             Sub Main()
                 Dim value As Integer
                 Console.Write("Please enter a number between 1 and 10 inclusive ")
                 value = Console.ReadLine()
                 While (value < 1 Or value > 10)
                     Console.Write("Please enter a number between 1 and 10 inclusive
        ")
                     value = Console.ReadLine()
                 End While
                 Console.ReadKey()
             End Sub

        End Module

Java
        //validation
        import java.util.Scanner;
        class ACTIVITY11E {
           public static void main(String args[]){
              Scanner myObj = new Scanner(System.in);
              int value = 0;
              while (value < 1 || value > 10){
                System.out.println ("Item Please enter a number between 1 and 10
        inclusive ");
                value = myObj.nextInt();
                }
           }
        }

Activity 11F
Python
        # line of stars
        def stars():
            print("**********")
        stars()

VB
        ' line of stars
        Module Module1

            Sub Main()
                stars()
                Console.ReadKey()
            End Sub
            Sub stars()
                Console.WriteLine("**********")
            End Sub
        End Module

Cambridge International AS & A Level Computer Science                                     13
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

Java
        //line of stars
        class ACTIVITY11F {
            static void stars(){
              System.out.println("**********");
              }
           public static void main(String args[]){
                    stars();
            }
           }

Activity 1G
Python
        # line of stars with parameter
        def stars(number):
            for counter in range (number):
                print("*", end ='')
        stars(7)

VB
        ' line of stars with parameter
        Module Module1

            Sub Main()
                stars(7)
                Console.ReadKey()
            End Sub
            Sub stars(number As Integer)
                Dim counter As Integer
                For counter = 1 To number
                    Console.Write("*")
                Next
            End Sub
        End Module

Java
        //line of stars
        class ACTIVITY11G {
            static void stars(int number){
                for (int counter = 1 ;counter <= number; counter++)
              System.out.print("*");
              }
           public static void main(String args[]){
                    stars(7);
            }
           }

Cambridge International AS & A Level Computer Science                                     14
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

Activity 11H
        // procedure to convert Celsius to Fahrenheit
        DECLARE myTemp : REAL
        PROCEDURE Fahrenheit (BYREF temperature : REAL)
            temperature  temperature * 9 / 5 +32
        ENDPROCEDURE

        CALL Fahrenheit (myTemp)

Activity 11I
Pseudocode
        // function to convert Celsius to Fahrenheit
        DECLARE myTemp : REAL
        FUNCTION fahrenheit (temperature : REAL)RETURNS REAL
            temperature  temperature * 9 / 5 +32
        ENDFUNCTION

        myTemp  fahrenheit (myTemp)

Python
        # function to convert Celsius to Fahrenheit
        def fahrenheit (temperature):
            return temperature * 9 /5 +32
        myTemp = float(input("Please enter a temperature in Celsius "))
        myTemp = fahrenheit(myTemp)
        print("Temperature in Fahrenheit is ", myTemp)

VB
        'function to convert Celsius to Fahrenheit

        Module Module1

            Sub Main()
                Dim myTemp As Decimal
                Console.Write("Please enter a temperature in Celsius ")
                myTemp = Console.ReadLine()
                myTemp = fahrenheit(myTemp)
                Console.WriteLine("Temperature in Fahrenheit is " +
        myTemp.ToString())
                Console.ReadKey()
            End Sub
            Function fahrenheit(ByVal temperature As Decimal) As Decimal
                Return temperature * 9 / 5 + 32
            End Function
        End Module

Cambridge International AS & A Level Computer Science                                     15
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

Java
        // function to convert Celsius to Fahrenheit
        import java.util.Scanner;
        class ACTIVITY11I {
            static double fahrenheit(double temperature){
            return temperature * 9 / 5 + 32;
        }

              public static void main(String args[]){
                 Scanner myObj = new Scanner(System.in);
                 System.out.println ("Please enter a temperature in Celsius");
                   double myTemp = myObj.nextDouble();
                   myTemp = fahrenheit (myTemp);
                   System.out.println ("Temperature in Fahrenheit is" + myTemp);
                   }
        }

A function is the better structure because a new value is required and this will be used in an
assignment statement making the code more efficient and easier to understand

End of chapter questions
1   DECLARE height : REAL
    CONSTANT maxHeight  25
    DECLARE width : REAL
    CONSTANT maxWidth  30
    DECLARE hypotenuse : REAL
    DECLARE area : REAL
2   REPEAT
         INPUT height
    UNTIL height > 0 and height <= maxHeight
    REPEAT
         INPUT width
    UNTIL width > 0 and height <= maxWidth
3   a) i) hypotenuse  SQUAREROOT(height * height + width * width)
        ii)   area  (width * height) / 2

        iii) perimeter  hypotenuse + height + width

Cambridge International AS & A Level Computer Science                                            16
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

    b) OUTPUT "       Menu"
        OUTPUT "1 ........... Area"
        OUTPUT "2 ..... Hypotenuse"
        OUTPUT "3 ...... Perimeter"
        INPUT choice
        CASE choice OF a value
                   1 : area  (width * height) / 2
                   2 : hypotenuse  SQUAREROOT(height * height + width *
             width)
                   3 : perimeter  SQUAREROOT(height * height + width *
             width) + height + width
                   OTHERWISE OUTPUT "Incorrect choice "
               ENDCASE
        c)

Python
        #Chapter 11 question 3 c)
        import math
        maxHeight = 25
        maxWidth = 30
        height = float(input("Please enter the height of the triangle "))
        while height < 0 or height > maxHeight:
            height = float(input("Please enter the height of the triangle "))

        width = float(input("Please enter the width of the triangle "))
        while width < 0 or width > maxWidth:
            width = float(input("Please enter the width of the triangle "))

        print ("      Menu")
        print ("1.......... Area")
        print ("2.....Hypotenuse")
        print ("3......Perimeter")
        choice = int(input("Please enter your choice of calculation "))

        if choice == 1:
            area = width * height / 2
            print("The area of the triangle is ", area)

        elif choice == 2:
            hypotenuse = math.sqrt(height * height + width * width)
            print("The hypotenuse is ", hypotenuse)

        elif choice == 3:
            perimeter = math.sqrt(height * height + width * width) + height + width
            print("The perimeter is ", perimeter)

        else:
            print("Incorrect choice")

Cambridge International AS & A Level Computer Science                                     17
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

Visual Basic
        Module Module1
            Public Sub Main()
                Dim choice As Integer
                Dim height, width, maxHeight, maxWidth, area, hypotenuse, perimeter
            As Decimal
                  maxHeight = 25
                  maxWidth = 30

                  Do
                      Console.Write("Please enter the height of the triangle ")
                      height = Decimal.Parse(Console.ReadLine())
                  Loop Until height > 0 And height <= maxHeight

                  Do
                      Console.Write("Please enter the width of the triangle ")
                      width = Decimal.Parse(Console.ReadLine())
                  Loop Until width > 0 And width <= maxWidth

                  Console.WriteLine("         Menu")
                  Console.WriteLine("1............ Area")
                  Console.WriteLine("2.......Hypotenuse")
                  Console.WriteLine("3........Perimeter")

                  Console.Write("Please enter your choice of calculation ")
                  choice = Integer.Parse(Console.ReadLine())
                  Select Case choice
                       Case 1
                            area = width * height / 2
                            Console.WriteLine("The area of the triangle is " +
             Str(area))
                       Case 2
                            hypotenuse = Math.Sqrt(height * height + width * width)
                            Console.WriteLine("The hypotenuse is " + Str(hypotenuse))
                       Case 3
                         perimeter = Math.Sqrt(height * height + width * width) +
             height + width
                         Console.WriteLine("The perimeter is " + Str(perimeter))
                       Case Else
                            Console.WriteLine("Incorrect choice")
                  End Select
                  Console.ReadLine()

             End Sub

        End Module

Cambridge International AS & A Level Computer Science                                     18
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

Java
        import java.util.Scanner;
        import java.lang.*;
        class Chaper11Q3C
        {
           public static void main(String args[])
            {
               Scanner myObj = new Scanner(System.in);
               final double maxHeight = 25;
               final double maxWidth = 30;
               double width;
               double height;

                  do {
                   System.out.println("Please enter the height of the triangle ");
                   height = myObj.nextDouble();
                 }
                 while (height < 0 || height > maxHeight);

                  do {
                   System.out.println("Please enter the width of the triangle ");
                   width = myObj.nextDouble();
                 }
                 while (width < 0 || width > maxWidth);

                 System.out.println("      Menu");
                 System.out.println("1........... Area");
                 System.out.println("2......Hypotenuse");
                 System.out.println("3.......Perimeter");

                 System.out.println("Please enter your choice of calculation ");
                 int choice = myObj.nextInt();

               switch (choice) {
                   case 1:
                   double area = width * height / 2;
                   System.out.println("The area of the triangle is " + area);
                   break;
                   case 2:
                   double hypotenuse = Math.sqrt(height * height + width * width);
                   System.out.println("The hypotenuse is " + hypotenuse);
                   break;
                   case 3:
                   double perimeter = Math.sqrt(height * height + width * width) +
             height + width;
                   System.out.println("The perimeter is " + perimeter);
                   break;
                   default:
                   System.out.println("Incorrect choice");
                 }

             }
        }
4   Library routine – a prewritten fully tested subroutine that is available to incorporate into a
    program. For example, printer drivers, string handling routines.

Cambridge International AS & A Level Computer Science                                                19
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

5  a) Procedure – subroutine that may return a value
   b) Function – subroutine that always returns a value
   c) Parameter – a value that’s passed to a function or procedure
   d) Header – the first statement of a procedure/function definition that contains the name and any
      parameters used.
6 a) A function always returns a value and can be used a part of an expression, a procedure may or
      may not change a variable and it is called as a single statement.
   b) Parameters passed by value cannot be changed, parameters passed by reference can be
      changed.
   c) Procedures are defined once and called many times, the definition included all the statements
      found in the procedure and the call is a single statement.
7 a)
                Identifier                Data type                     Description

         YearCount                 Integer              Loop counter

         PurchasePrice             Integer              Purchase price of the car

         CurrentValue              Real                 The changing depreciated value

    b)
          OUTPUT "Enter purchase price"
          INPUT PurchasePrice
          CurrentValue ← PurchasePrice
          YearCount  1
          WHILE YearCount < 9 AND CurrentValue >= 1000
             IF YearCount = 1
              THEN
               CurrentValue  CurrentValue * (1 – 40 / 100)
              ELSE
               CurrentValue  CurrentValue * 0.8
             ENDIF
             OUTPUT YearCount, CurrentValue
             YearCount  YearCount + 1
          ENDWHILE

Cambridge International AS & A Level Computer Science                                              20
© Helen Williams and David Watson 2020