# Chapter 09 SB Answers

**Course:** Cambridge International AS & A Level Computer Science (9618)
**Source:** A Level Textbook/Chapter 09 SB Answers.pdf

---

Cambridge International AS & A Level Computer Science

Chapter 9 Student Book Answers
What you should already know
1   Procedure – a single set of statements that can be grouped together and called in a program when
    required, rather than repeated each time the statements are used.
2   Function – a single set of statements grouped together that return a value and are called in a
    program when required, rather than repeated each time the statements are used.
3   Algorithm – an ordered set of steps to complete a task.
4   Structured English – using English words and mathematical operations to show the steps in an
    algorithm.
5   Flowchart – a diagrammatical representation of the steps in an algorithm.
6   Pseudocode – shows the detailed logical steps in an algorithm using a set of keywords, declared
    and typed identifiers and mathematical and logical operators.
    Flowchart – Figure 9.3, Pseudocode before – Figure 9.3, Programs – before ACTIVITY 9F

Activity 9A
Possible solution
1 Ask for the number of sides
2 Ask for the length of each side
3 Calculate the internal angle of the polygon
4 Using a pencil and ruler draw a line of the required length
5 From the leftmost end of the line draw another line of the required length at the calculated angle
6 Repeat step 5 for number of sides − 1

Activity 9B
    Counter is 2
    MyChar is "A"
    LetterValue is 65
    StudentMark is 40
    Percentage is 50
    OldString is "Your mark is"
    NewString is "Your mark is ninety-seven"

Activity 9C
1   else used in all three programming languages.

Python
        # IF - single choice with alternative Python
        MyValue = int(input("Please enter my value "))
        YourValue = int(input("Please enter your value "))
        if MyValue > YourValue:
          print ("I win")
        else:
          print ("You win")

Cambridge International AS & A Level Computer Science                                                  1
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

VB

        'IF - single choice with alternative VB
        Module Module1

             Sub Main()

                   Dim MyValue, YourValue As Integer
                       Console.Write("Please enter my value ")
                   MyValue = Integer.Parse(Console.ReadLine())
                       Console.Write("Please enter your value ")
                   YourValue = Integer.Parse(Console.ReadLine())
                   If MyValue > YourValue Then
                       Console.WriteLine("I win")
                   Else
                       Console.Writeline("You win")
                   End If
                   Console.ReadKey() 'wait for keypress

             End Sub

        End Module

Java

        //IF - single choice with alternative Java
        import java.util.Scanner;
        class IFProgramWithAlt
        {
           public static void main(String args[])
            {
                 Scanner myObj = new Scanner(System.in);

                System.out.println("Please enter my value ");
                int MyValue = myObj.nextInt();
                System.out.println("Please enter your value ");
                int YourValue = myObj.nextInt();

                if (MyValue > YourValue)
                {
                     System.out.println("I win");
                } else {
                    system.out.println("You win");
                }
                }
        }

Cambridge International AS & A Level Computer Science                                     2
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

Python - does not have a case statement

        # - Multiple choice Python
        X=0
        Y=0
        Direction = input("Please Enter N, S, E or W ")

        if Direction == "N":
                    X=X+1
        elif Direction == "S":
                    X=X-1
        elif Direction == "E":
                    Y=Y+1
        elif Direction == "W":
                    Y=Y-1
        else:
            print("Error")
        print(X,Y)

VB – uses Select Case and Case Else
        'Select Case VB
        Module Module1

             Sub Main()

                 Dim X, Y As Integer
                 Dim Direction As String
                 X = 0
                 Y = 0
                 Console.Write("Please Enter N, S, E or W ")
                 Direction = Console.ReadLine()
                 Select Case Direction
                     Case "N"
                         Y = Y + 1
                     Case "S"
                         Y = Y - 1
                     Case "E"
                         X = X + 1
                     Case "W"
                         X = X - 1
                     Case Else
                         Console.WriteLine("Error")
                 End Select
                 Console.Write(X & " " & Y)
                 Console.ReadKey() 'wait for keypress
             End Sub

        End Module

Cambridge International AS & A Level Computer Science                                     3
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

Java – uses switch case and default
        // Switch Case Java

        import java.util.Scanner;
        public class CaseStatement
        {
               public static void main(String args[])
               {
               int X = 0,Y = 0;
               Scanner myObj = new Scanner(System.in);

                       System.out.println("Please Enter N, S, E or W ");
                       String Direction = myObj.next();
                       switch (Direction){
                           case "N":
                            Y = Y + 1;
                            break;
                           case "S":
                            Y = Y - 1;
                            break;
                           case "E":
                            X = X + 1;
                            break;
                           case "W":
                            X = X - 1;
                            break;
                           default:
                           System.out.println("Error");
                       }
                       System.out.println(X + " " + Y);
               }
        }

Activity 9D

FOR without step

Python - does not reach 10
        # FOR - simple loop Python without step
        for Counter in range (1,10):
          print(Counter)

Cambridge International AS & A Level Computer Science                                     4
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

VB - does reach 10
        'FOR - simple loop VB without step
        Module Module1

             Sub Main()

                 Dim Counter As Integer
                 For Counter = 1 To 10
                     Console.WriteLine(Counter)
                 Next
                 Console.ReadKey() 'wait for keypress
             End Sub

        End Module

Java - does reach 10 but always needs to include an increment
        //FOR - simple loop Java always needs to include an increment
        class FORProgramWithoutStep
        {
           public static void main(String args[])
            {
              for (int Counter = 1; Counter <= 10; Counter++)
              {
               System.out.println(Counter);
             }
          }
        }

REPEAT UNTIL loop

Python - does not have a repeat loop

VB – uses Do and Loop Until

        'REPEAT UNTIL loop
        Module Module1

             Sub Main()
                 Dim Number As Integer
                 Do
                     Console.Write("Please enter a positive number ")
                     Number = Console.ReadLine()

                   Loop Until Number > 0
                   Console.ReadKey() 'wait for keypress

             End Sub

        End Module

Cambridge International AS & A Level Computer Science                                     5
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

Java – uses a post condition while loop
        //Post condition loop
        import java.util.Scanner;
        class PostConditionLoop
        {
           public static void main(String args[])
            {
              Scanner myObj = new Scanner(System.in);
              int Number = 0;
              do {
              System.out.println("Please enter a positive number ");
              Number = myObj.nextInt();
              }
              while (Number <= 0);
          }
        }

While loop

Python – uses while and indentation
        # WHILE Python
        Number = 0
        while Number >= 0:
            Number = int(input("Please enter a negative number "))

VB – uses While and End While
        'WHILE loop
        Module Module1

             Sub Main()
                 Dim Number As Integer
                 Number = 0
                 While Number >= 0
                     Console.Write("Please enter a positive number ")
                     Number = Console.ReadLine()
                 End While
                 Console.ReadKey() 'wait for keypress
             End Sub

        End Module

Java – uses a pre-condition while loop
        //Pre-condition while loop
        import java.util.Scanner;
        class PreConditionWhileLoop
        {
           public static void main(String args[])
            {
              Scanner myObj = new Scanner(System.in);
              int Number = 0;
              while (Number >= 0){
              System.out.println("Please enter a negative number ");
              Number = myObj.nextInt();
              }
              }
        }

Cambridge International AS & A Level Computer Science                                     6
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

Activity 9E
        Number  0
        REPEAT
            PRINT "Enter a number, your number must be between 10 and 20 or over
        100"
            INPUT Number
        UNTIL (Number > 10 AND Number < 20) OR (Number > 100)

Activity 9F
        DECLARE Password1, Password2 : STRING
        DECLARE Counter : INTEGER
        Counter  0
        REPEAT
            PRINT "Enter your password "
            INPUT Password1
            PRINT "Enter your password again "
            INPUT Password1
            Counter  Counter + 1
        UNTIL (Counter = 3) OR (Password1 = Password2)
        IF Password1 = Password2
          THEN
            OUTPUT "Password correct"
          ELSE
            OUTPUT "Password incorrect"
        ENDIF

                 Identifier Name                       Description
                 Counter               To count the number of attempts
                 Password1             To store the first password attempt
                 Password2             To store the second password attempt

Python
        # three attempts at checking password
        Counter = 0
        Password1 = "Pass1"
        Password2 = "Pass2"
        while ((Counter != 3) and (Password1 != Password2)):
                Password1 = input("Enter your password ")
                Password2 = input("Enter your password again ")
                Counter = Counter + 1
        if Password1 == Password2:
                print ("Password correct")
        else:
                print ("Password incorrect")

Cambridge International AS & A Level Computer Science                                     7
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

VB
        'three attempts at checking password
        Module Module1

             Sub Main()
                 Dim Password1, Password2 As String
                 Dim Counter As Integer
                 Counter = 0
                 Do
                     Console.Write("Please enter password ")
                     Password1 = Console.ReadLine()
                     Console.Write("Please enter password again ")
                     Password2 = Console.ReadLine()
                     Counter = Counter + 1
                 Loop Until ((Counter = 3) Or (Password1 = Password2))
                 If Password1 = Password2 Then
                     Console.WriteLine("Password correct")
                 Else
                     Console.WriteLine("Password incorrect")
                 End If
                 Console.ReadKey() 'wait for keypress

             End Sub

        End Module

Java – note the use of .equals for string comparison
        //three attempts at checking password
        import java.util.Scanner;
        class ACTIVITY9F
        {
           public static void main(String args[])
            {
              Scanner myObj = new Scanner(System.in);
              int Counter = 0;
              String Password1 = "Pass1", Password2 = "Pass2";
              do {
              System.out.println("Enter your password ");
              Password1 = myObj.next();
              System.out.println("Enter your password again ");
              Password2 = myObj.next();
              Counter = Counter + 1;
              }
              while ((!Password1.equals(Password2)) && (Counter != 3));
              if (Password1.equals(Password2)){
                 System.out.println("Password correct");
                } else {
                      System.out.println("Password incorrect");
                    }
            }
        }

Cambridge International AS & A Level Computer Science                                     8
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

Activity 9G
        OUTPUT "Enter your personal best time in seconds "
        INPUT PBTimeSeconds
        IF TotalMarathonTimeSeconds < PBTimeSeconds
          THEN
            PBTimeSeconds  TotalMarathonTimeSeconds
        ENDIF
        OUTPUT "Your personal best time in seconds is ", PBTimeSeconds

                     Identifier Name                    Description
                    PBTimeSeconds        Personal Best time in seconds

Python
        # checking personal best time
        TotalMarathonTimeSeconds = 14400 #value to use for test
        PBTimeSeconds = int(input("Enter your personal best time in seconds "))
        if TotalMarathonTimeSeconds < PBTimeSeconds:
                          PBTimeSeconds = TotalMarathonTimeSeconds
        print( "Your personal best time in seconds is ", PBTimeSeconds)

VB
        'checking personal best time
        Module Module1

            Sub Main()
                Dim TotalMarathonTimeSeconds, PBTimeSeconds As Integer
                TotalMarathonTimeSeconds = 14400 'value to use for test
                Console.Write("Enter your personal best time in seconds ")
                PBTimeSeconds = Console.ReadLine()
                If TotalMarathonTimeSeconds < PBTimeSeconds Then
                    PBTimeSeconds = TotalMarathonTimeSeconds
                End If
                Console.WriteLine("Your personal best time in seconds is " +
        PBTimeSeconds.ToString())
                Console.ReadKey() 'wait for keypress
            End Sub

        End Module

Cambridge International AS & A Level Computer Science                                     9
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

Java
        //checking personal best time
        import java.util.Scanner;
        class ACTIVITY9G
        {
           public static void main(String args[])
            {
              Scanner myObj = new Scanner(System.in);
              int TotalMarathonTimeSeconds = 14400;
              System.out.println("Enter your personal best time in seconds");
              int PBTimeSeconds = myObj.nextInt();
              if ( TotalMarathonTimeSeconds < PBTimeSeconds){
              PBTimeSeconds= TotalMarathonTimeSeconds;
              }
              System.out.println("Your personal best time in seconds is " +
        PBTimeSeconds);
            }
        }

Activity 9H
        DECLARE Mark : INTEGER
        DECLARE Grade, Reply : STRING
        REPEAT
          OUTPUT "Enter your exam mark"
          INPUT Mark
          IF Mark < 40
            THEN
              Grade  "Fail"
            ELSE
              IF Mark < 60
                THEN
                  Grade  "Pass"
                ELSE
                  IF Mark < 80
                    THEN
                      Grade  "Merit"
                    ELSE
                      Grade  "Distinction"
                  ENDIF
              ENDIF
          ENDIF
          OUTPUT "Your grade is ", Grade
          OUTPUT "Enter another exam mark Y/N "
          INPUT Reply
        UNTIL Reply <> "Y"

          Identifier Name     Description
          Mark                Exam mark
          Grade               Exam grade
          Reply               Check for another mark

Cambridge International AS & A Level Computer Science                                     10
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

Python
        # more than one mark
        Reply = "Y"
        while Reply == "Y":
            Mark = int(input("Enter your exam mark "))
            if Mark < 40:
                Grade = "Fail"
            elif Mark < 60:
                Grade = "Pass"
            elif Mark < 80:
                Grade = "Merit"
            else:
                Grade = "Distinction"
            print( "Your grade is ", Grade)
            Reply = input("Enter another exam mark Y/N ")

VB
        'more than one mark
        Module Module1

             Sub Main()
                 Dim Mark As Integer
                 Dim Grade, Reply As String
                 Reply = "Y"
                 Do
                     Console.Write("Enter your exam mark ")
                     Mark = Console.ReadLine()
                     Select Case Mark
                         Case 0 To 39
                             Grade = "Fail"
                         Case 40 To 59
                             Grade = "Pass"
                         Case 60 To 79
                             Grade = "Merit"
                         Case 80 To 100
                             Grade = "Distinction"
                     End Select
                     Console.WriteLine("Your Grade is " + Grade)
                     Console.Write("Enter another exam mark Y/N ")
                     Reply = Console.ReadLine()
                 Loop While (Reply = "Y")
                 Console.ReadKey() 'wait for keypress
             End Sub

        End Module

Cambridge International AS & A Level Computer Science                                     11
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

Java
        //more than one mark
        import java.util.Scanner;
        class ACTIVITY9H
        {
           public static void main(String args[])
            {
              Scanner myObj = new Scanner(System.in);
              String Grade, Reply;
              Grade = "";
              int Mark;
              do {
                  System.out.println("Enter your exam mark");
                  Mark = myObj.nextInt();
                  if ( Mark < 40){
                      Grade = "Fail";
                    }
                  if ((Mark >= 40) && (Mark < 60) ){
                      Grade = "Pass";
                    }
                  if ((Mark >= 60) && (Mark < 80)) {
                      Grade = "Merit";
                    }
                  if (Mark > 80) {
                      Grade = "Distinction";
                    }
                  System.out.println("Your grade is " + Grade);
                  System.out.println("Enter another exam mark Y/N ");
                  Reply = myObj.next();
              }
              while (Reply.equals("Y"));

             }
        }

Activity 9I
        DECLARE Shape : STRING
        DECLARE Side, Base, Height, Radius : INTEGER
        DECLARE Area : REAL
        Area = 0
        CONSTANT Pi = 3.142
        OUTPUT "Please enter the shape (Square, Triangle, Circle) "
        INPUT Shape

        IF Shape = "Square"
          THEN
            OUTPUT "Please enter length of side "
            INPUT Side
            Area  Side * Side
        ENDIF

        IF Shape = "Triangle"
          THEN
            OUTPUT "Please enter length of base and height "
            INPUT Base, Height
            Area  (Base * Height) / 2
        ENDIF

        IF Shape = "Circle"
          THEN
Cambridge International AS & A Level Computer Science                                     12
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

            OUTPUT "Please enter length of radius "
            INPUT Radius
            Area  Pi * Radius * Radius
        ENDIF

        IF Area <> 0
          THEN
            OUTPUT "Area of ", Shape, " is ", Area
        ENDIF

Python
        # finding the area of a shape
        Pi = 3.142
        Area = 0.0
        Shape = input("Please enter the shape ")
        if Shape == "Square":
            Side = int(input("Plese enter the length of the side "))
            Area = Side * Side
        elif Shape == "Triangle":
            Base = int(input("Plese enter the length of the base "))
            Height = int(input("Plese enter the length of the height "))
            Area = (Base * Height) / 2
        elif Shape == "Circle":
            Radius = int(input("Plese enter the length of the radius "))
            Area = Pi * Radius * Radius

        if Area != 0:
            print("Area of ", Shape, " is ", Area)

VB
        ' finding the area
        Module Module1

             Sub Main()
                 Dim Shape As String
                 Dim Area As Decimal
                 Dim Side, Base, Height, Radius As Integer
                 Const Pi As Decimal = 3.142
                 Area = 0.0
                 Console.Write("Please enter the shape ")
                 Shape = Console.ReadLine()

                  Select Case Shape
                      Case = "Square"
                          Console.Write("Please enter the side ")
                          Side = Console.ReadLine()
                          Area = Side * Side
                      Case = "Triangle"
                          Console.Write("Please enter the base ")
                          Base = Console.ReadLine()
                          Console.Write("Please enter the height ")
                          Height = Console.ReadLine()
                          Area = (Base * Height) / 2
                      Case = "Circle"
                          Console.Write("Please enter the radius ")
                          Radius = Console.ReadLine()
                          Area = Pi * Radius * Radius
                  End Select
                  If Area <> 0.0 Then

Cambridge International AS & A Level Computer Science                                     13
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

                      Console.WriteLine("Area of shape " + Shape + " is " + Area.ToString())
                  End If
                  Console.ReadKey() 'wait for keypress

             End Sub

        End Module

Java
        // finding the area

        import java.util.Scanner;
        public class ACTIVITY9I
        {
               public static void main(String args[])
               {
               int Side, Base, Height, Radius;
               float Area = 0.0f;
               float Pi = 3.142f;

                 Scanner myObj = new Scanner(System.in);

                       System.out.println("Please enter the shape ");
                       String Shape = myObj.next();
                       switch (Shape){
                           case "Square":
                            System.out.println("Please enter the side ");
                            Side = myObj.nextInt();
                            Area = Side * Side;
                            break;
                           case "Triangle":
                            System.out.println("Please enter the base ");
                            Base = myObj.nextInt();
                            System.out.println("Please enter the height ");
                            Height = myObj.nextInt();
                            Area = (Base * Height) / 2;
                            break;
                           case "Circle":
                            System.out.println("Please enter the radius ");
                            Radius = myObj.nextInt();
                            Area = Pi * Radius * Radius;

                       }
                       if (Area != 0.0) {
                           System.out.println("Area of " + Shape + " is " + Area);
                        }
                   }
        }

Cambridge International AS & A Level Computer Science                                     14
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

End of chapter questions
1   See Key terms 9.2.
2   See Section 9.1.
3   See Section 9.2.5.
4   a) 40       b)      314.2 c)  Z not declared error    d)      True.
5   a) i)       13 or 14      ii) 07, 11 or 19    iii)    01 to 24
    b)
          Identifier Name           Description
          Choice                    Store Menu Choice
          Temperature               Store temperature input
          ConvertedTemperature Store converted temperature

    c) Use a variable Try

        01   Try  0
        02   REPEAT
        03   OUTPUT"        Menu Temperature Conversion"
        04   OUTPUT" Celsius to Fahrenheit                 1"
        05   OUTPUT" Fahrenheit to Celsius                 2"
        06   OUTPUT" Exit                                  3"
        07   OUTPUT" Enter choice"
        08   IF Choice = 1 OR Choice = 2
        09      THEN
        10         OUTPUT"Enter temperature"
        11         INPUT Temperature
        12         IF Choice = 1
        13            THEN
        14               ConvertedTemperature  1.8*Temperature + 32
        15            ELSE
        16               ConvertedTemperature  (Temperature – 32) * 5 / 9
        17         ENDIF
        18         OUTPUT "Converted temperature is ", ConvertedTemperature
        19      ELSE
        20         IF Choice <> 3
        21            THEN
        22               OUTPUT "Error in choice"
        23               Try  Try + 1
        24         ENDIF
        25   ENDIF
        26   UNTIL Choice = 3 OR Try = 3

Cambridge International AS & A Level Computer Science                                     15
© Helen Williams and David Watson 2020