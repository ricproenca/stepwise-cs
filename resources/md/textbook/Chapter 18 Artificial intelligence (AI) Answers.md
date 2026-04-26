# Chapter 18 SB Answers

**Course:** Cambridge International AS & A Level Computer Science (9618)
**Source:** A Level Textbook/Chapter 18 SB Answers.pdf

---

Cambridge International AS & A Level Computer Science

Chapter 18 answers
What you should already know
1   Artificial Intelligence
       is a machine which carries out a task that requires some degree of ‘human’ intelligence
       duplicates human tasks requiring decision-making and problem-solving skills.
2   AI pros and cons
       technologies such as autonomous vehicles
       artificial limb technology helping the disabled
       improvements in medical areas
       job losses in many areas
       dependence by humans on the technology
       loss of skills since taken over by AI.
3   Examples of the use of AI
       robotics
       predictions such as climate change
       performing delicate operations
       bespoke cancer treatments
       drones in bomb disposal, welding, nuclear incidents, and so on.

Activity 18A

Shortest route: A      B      C   F    I

Activity 18B
1   ‘A’ has two nodes ‘B’ and ‘F’
    F(B) = 6 + 8 = 14, F(F) = 3 + 6 = 9
    since F(F) < F(B) then ‘F’ is the next start node

Cambridge International AS & A Level Computer Science                                             1
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

    Path: A → F
    ‘F’ has two nodes ‘G’ and ‘H’
    F(G) = ((3 + 1) + 5) = 9, F(H) = ((3 + 7) + 3) = 13
    since F(G) < F(H) then ‘G’ is the next start node

    Path: A → F → G
    ‘G’ has one node, ‘I’
    so F(I) = 7 + 1 = 8

    Path: A → F → G → I
    ‘I’ has three nodes ‘E’, ‘H’ and ‘J’
    F(E) = ((3 + 1 + 3 + 5) + 3) = 15
    F(H) = ((3 + 1 + 3 + 2) + 3) = 12
    F(J) = ((3 + 1 + 3 + 3) + 0) = 10
    F(J) has the smallest value …

    … therefore shortest route is: A → F → G → I → J

Cambridge International AS & A Level Computer Science                                     2
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

3   a)

    b) shortest route: E         B        C       D          G
4   a) i)

         ii) route order: A      B        C       E          G   J
    b) Time = Distance/Speed
          T1 (A to J directly) = 56/95 = 35.4 minutes
          T2 (A, B, C, E, G, J) = 50/80 = 37.5 minutes
          direct route (dual carriageway) is the quickest

Cambridge International AS & A Level Computer Science                                     3
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

Activity 18C
1   a) Narrow AI – machine which is superior to a human when doing a specific task.
        General AI – machine which is similar in performance to a human in any intellectual task.
        Strong AI – machine which is superior to a human in many tasks.
    b) Reward and punishment
         The machine learns from good results and bad results to help improve the
          performance/produce optimal outcomes.
         For example, search engines:
           The number of hits shown on the first page (matching search criteria) is very high
             indicates a good result.
           If user needs to look at page 2, page 3, … then this is seen as a bad result and the search
             engine would need to learn from these two outcomes to improve future performance.
    c) Artificial neural networks:
         Are artificial networks based on the biology of the human brain in its inter-connections
          between neurons.
         Makes use of input, output and hidden layers.
         Has hidden layers are where the inputs are processed to produce output(s).
         For example, the following diagram shows an artificial neural network (with two hidden
          layers):

2   a) i) Supervised learning
            are systems able to predict future outcomes based on past data.
            uses labelled data
            uses both inputs and outputs to train the model.
        ii) Unsupervised learning
            are systems able to identify hidden patterns based on input data provided
            systems are not trained on ‘right’ answers.
        iii) Reinforcement learning
            are systems given no training …
            … but learns on the basis of ‘reward and punishment’ when performing an action to
             determine which action yields optimal outcomes.
Cambridge International AS & A Level Computer Science                                                 4
© Helen Williams and David Watson 2020

                                     Cambridge International AS & A Level Computer Science Answers

        iv) Active learning
                algorithms can interactively query source data to reach the desired output
                makes use of labelled data and unlabelled data
                makes use mainly of unlabelled data (based on cost reasons).
    b) i) Back propagation
                  initial system nodes are given ‘weights’
                  actual output compared to expected outputs
                  if results not satisfactory then ‘weights’ are changed
                  ‘weights’ updated until no errors or results are within acceptable limits.
        ii) There are two types of back propagation: static and recurrent.
                static maps static inputs to a static output
                mapping is instantaneous in static but this is not the case with recurrent
                training a network/model is more difficult with recurrent than with static
                with recurrent, activation is fed forward until a fixed value is achieved
3   a) i) Supervised learning can decide if emails are junk emails.
        ii) In marketing, unsupervised learning can look for patterns in groups of individuals.
        iii) Reinforcement learning is used in gaming and robotics.
        iv) Semi-supervised (active) learning is used in the classification of web pages.
    b) i)          artificial intelligence
        ii)        machine learning
        iii)       deep learning
        iv)        unlabelled (data)
        v)         web crawler (spider bot)
        vi)        chatbot
        vii)       back propagation (of errors)
        viii) regression
        ix)        labelled (data)
        x)         punishment and reward

End of chapter questions
1   a) i) C
        ii) D
        iii) E

Cambridge International AS & A Level Computer Science                                             5
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

    b)

2   a) i) Reinforcement learning
             given no training
             learns using ‘reward and punishment’
             uses optimisation techniques.
         ii) Supervised learning
             requires both input and output so model can be trained
             once trained, uses labelled data and results compared to what they should be
             uses regression and classification analysis.
    b) i) Chat bots
             interact through instant messaging, artificially replicating patterns of human interaction
             uses machine learning.
         ii) Search engines
             measures success of search based on whether website/web page comes up as first page of
              search
             if not on first page, this is seen as a failure and system adapts to improve the search
              process.

Cambridge International AS & A Level Computer Science                                                      6
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

        iii) Photographic enhancement
            some of the latest smartphones now use deep learning to give DSLR quality to the
             photographs taken by the smartphone
            the technology was developed by first of all taking the same photos using a smartphone
             and then using a DSLR camera
            the deep learning system was then trained by comparing the two photographs
            then a large number of photographs already taken by a DSLR camera (but not by the
             smartphone) were used to test the model.
3   random weighting
    actual output
    expected output
    error gradients
    minimised/removed
    removed/minimised
    back propagation
    static/recurrent
    recurrent/static
    regression
4 a) Dijkstra’s algorithm will follow the path which is currently the shortest path, but pays no
attention to which direction we’re going in
       A* builds on some idea of direction of the end point by adding an extra heuristic (H) value
which how far we have to go to reach the destination

Cambridge International AS & A Level Computer Science                                            7
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

    b) i)

    ii)     Route: C      A       S    H      N    Q

Cambridge International AS & A Level Computer Science                                     8
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

6)   GPS will use A* algorithm:
      to reset heuristic values based on possible alternative route(s)
      re-calculate the shortest path/route based on f(n) = g(n) + h(n)
      disregard any routes that take in nodes M-J, M-A-D-G-F
7    a) i)

     a) ii) route:       A        B      F        G      K        L

     b) A → D = 30 min}
        D → H = 12 min} total = 62 mins
        H → L = 20 min}

        A → I = 20 min }
        I → J = 14 min } total = 69 mins
        J → K = 20 min }
        K → L = 15 min}

        Therefore reduced time (maximum) = 71 − 62 = 9 minutes

Cambridge International AS & A Level Computer Science                                     9
© Helen Williams and David Watson 2020