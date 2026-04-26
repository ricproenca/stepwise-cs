# 18 Artificial Intelligence (AI)

**Course:** Cambridge International AS & A Level Computer Science (9618)
**Source:** Thinka

---

Welcome to Chapter 18: Artificial Intelligence (AI)
1. AI Problem Solving using Graphs
2. Machine Learning: The Categories of Learning
3. Advanced AI and Learning Methods
4. Training the AI: Back Propagation and Regression
5. Social, Economic, and Environmental Impact of AI
Welcome to Chapter 18: Artificial Intelligence (AI)

Hello! Get ready to explore one of the most exciting and rapidly growing fields in Computer Science: Artificial Intelligence (AI). AI is about creating computer systems that can mimic human intelligence—things like learning, problem-solving, decision-making, and understanding language.

From the recommendation system on Netflix to the voice assistant on your phone, AI is already deeply integrated into our lives. In this chapter, we will look at how AI systems navigate complex problems and, crucially, how they learn and evolve.

Don't worry if some of these ideas seem abstract; we will break them down using clear analogies and relate them directly to what your syllabus requires!

1. AI Problem Solving using Graphs

In Computer Science, many problems (like finding the best route or solving a puzzle) can be modelled using a mathematical structure called a Graph.

Purpose and Structure of a Graph in AI

Imagine a subway map. This map is a perfect analogy for a graph used in AI:

Nodes (or Vertices): These represent the individual points, states, or locations. (e.g., A subway station)
Edges ( or Arcs): These represent the connections between the nodes. They often have an associated cost or weight. (e.g., The train line connecting two stations, and the weight might be the travel time or distance.)

How Graphs Aid AI: AI uses graphs to represent a state space—the set of all possible states and actions a system can take. Searching this graph allows the AI to find the optimal sequence of actions to reach a goal state.

Searching Algorithms: Dijkstra's and A* (A-Star)

When an AI needs to find the shortest or cheapest path between two nodes in a graph, it uses search algorithms.

Dijkstra's Algorithm

Purpose: Dijkstra's algorithm finds the shortest path from a starting node to all other nodes in the graph, based on the weights of the edges. It is very reliable.

Analogy: Imagine using a standard map app that strictly calculates the distance by checking every connecting road segment from the start point outwards until it reaches the destination. It is exhaustive and guaranteed to find the absolute shortest distance.

A* (A-Star) Algorithm

Purpose: A* also finds the shortest path, but it is typically much faster and more efficient than Dijkstra's, especially in large graphs.

The Trick: The Heuristic

A* uses a special function called a heuristic. A heuristic is essentially an "educated guess" or an estimation of the cost remaining to reach the goal. It helps the algorithm prioritize which paths look the most promising.

If Dijkstra's blindly searches all directions, A* intelligently focuses its search towards the goal, saving computational effort.
A* calculates its priority by combining the actual cost already spent (g) and the estimated cost remaining (h):
Total Estimated Cost =
𝑔
+
ℎ
g+h

Did you know? A* is widely used in video games for enemy pathfinding and in modern GPS systems because it finds optimal paths very quickly.

Quick Review: Graph Search

Graph: Nodes and weighted edges represent states and transitions.
Dijkstra's: Finds the actual shortest path to all nodes.
A*: Finds the shortest path efficiently by using a heuristic (estimate).

2. Machine Learning: The Categories of Learning

Machine Learning (ML) is a sub-field of AI where systems learn directly from data without being explicitly programmed with rules. Instead of programming "If X then Y," the machine is fed data and learns the relationship itself.

Machine Learning Categories

The syllabus requires you to understand three main categories of ML, defined by how the data is presented and how the system receives feedback.

(a) Supervised Learning

This is like having a teacher or a supervisor guide the learning process. The data used for training is labeled, meaning the input data already has the correct output or "answer" associated with it.

How it works:

The system is shown an input (e.g., a photo of an apple) and the correct label (e.g., "Apple").
It makes a prediction.
It compares its prediction to the correct label and calculates the error.
It adjusts its internal model to reduce this error for future predictions.

Common Tasks:

Classification: Predicting a discrete label (e.g., Is this email spam or not spam?)
Regression: Predicting a continuous value (e.g., Predicting the temperature tomorrow or the price of a house)
(b) Unsupervised Learning

This is learning without a teacher. The training data is unlabeled. The system's job is to explore the data and find hidden patterns, structures, or relationships on its own.

How it works:

The system is given data points and told to group or structure them based on similarities.

Common Task:

Clustering: Grouping similar items together. (e.g., A marketing company uses this to find groups of customers who buy similar products, allowing them to target those groups specifically.)

Analogy for Supervised vs. Unsupervised:

Supervised: You show a child 100 pictures of cats and dogs, telling them "This is a cat, this is a dog." They learn to classify new pictures.
Unsupervised: You show a child 100 mixed pictures and ask them to sort them into two piles of similar objects. They don't know the names, but they figure out the categories (cats and dogs) based on shared features.

Quick Review: ML Categories

Supervised: Uses labeled data; finds mappings from input to known output.
Unsupervised: Uses unlabeled data; finds hidden structures/patterns (Clustering).

3. Advanced AI and Learning Methods

When solving highly complex problems—like processing human speech or driving a car—AI relies on powerful mathematical models, primarily inspired by the human brain.

Artificial Neural Networks (ANNs)

ANNs are computational models inspired by the structure of biological neural networks in the brain. They are the backbone of most modern Machine Learning and Deep Learning systems.

Structure:

An ANN consists of layers of interconnected processing units called neurons (or nodes). Each connection between neurons has a numerical value called a weight. These weights are what the network "learns" by adjusting them during training.

Input Layer: Receives the data (e.g., pixel values of an image).
Hidden Layers: Perform complex computations and feature extraction. The more layers, the deeper the network.
Output Layer: Provides the final result (e.g., the classification, such as "car" or "truck").
Deep Learning (DL)

Deep Learning is simply a specific type of Machine Learning that uses very deep Artificial Neural Networks (those with many hidden layers).

Traditional ML might have one or two hidden layers; Deep Learning might have dozens.
This depth allows the system to automatically extract increasingly complex features from raw data. (e.g., In image processing, the first layer might detect edges, the next layer detects shapes, and the final layer identifies the object.)

Why use Deep Learning? It excels at tasks involving unstructured data (images, audio, text) where features are hard to define manually.

Reinforcement Learning (RL)

Reinforcement Learning is an approach where an AI agent learns to make decisions by performing actions in an environment and receiving rewards or penalties (feedback).

There is no training data or supervisor; the agent learns entirely through trial and error.
Objective: To maximize the cumulative reward over time.

Analogy: Teaching a robot to walk. When it moves correctly, it gets a positive reward. When it falls, it gets a penalty. It eventually figures out the optimal sequence of muscle movements (actions) to maximize its reward (staying upright).

Applications: Robotics, training AI to play complex games like Chess or Go, and optimizing industrial processes.

Quick Review: Advanced Learning

ANNs: Modeled after the brain, using weighted connections (weights) between neurons.
Deep Learning: Uses ANNs with many hidden layers for complex tasks.
Reinforcement Learning: Learning through rewards and penalties (trial and error).

4. Training the AI: Back Propagation and Regression

For an Artificial Neural Network to learn effectively, it needs a mechanism to adjust its weights based on the errors it makes during supervised training. This mechanism is called back propagation.

Back Propagation of Errors

Back Propagation is the primary algorithm used to train ANNs. It works by calculating the error at the output layer and distributing that error backwards through the network to determine how much each weight contributed to the mistake.

Step-by-Step Process (The Learning Cycle):

Forward Pass: Input data is fed through the network, layer by layer, until a final output prediction is generated.
Error Calculation: The difference between the network's prediction and the actual correct value (the known label) is calculated. This is the error.
Backward Pass (Back Propagation): The error is propagated (sent) backward from the output layer, through the hidden layers, back to the input layer.
Weight Adjustment: Using calculus (don't worry, you don't need to know the math!), the algorithm calculates the *gradient* (how sensitive the error is to a change in the weight). It then adjusts the weights slightly to reduce the calculated error.

By repeating this cycle thousands or millions of times, the network's weights are gradually refined, leading to an accurate model.

Memory Aid: Back Propagation is how the AI assigns blame for the mistake to specific weights, so it knows how to fix them.

Regression Methods in Machine Learning

Regression is a fundamental statistical method used in supervised learning. The primary purpose is prediction.

Definition: Regression methods are used when the AI needs to predict a continuous value (a number within a range, not a fixed category).

Example:

Classification predicts a category: "Is this fruit an apple or a banana?" (Discrete output)
Regression predicts a quantity: "How much will this apple weigh?" or "What will the stock price be tomorrow?" (Continuous output)

In the context of machine learning, regression methods establish a relationship between independent variables (inputs) and a dependent variable (the output we want to predict).

5. Social, Economic, and Environmental Impact of AI

AI is a powerful tool, and like any technology, it has significant implications.

Social Issues
Bias and Fairness: AI systems learn from data. If the training data contains human biases (e.g., historical racial or gender biases), the AI will replicate and potentially amplify these biases in its decisions (e.g., loan applications or job hiring).
Privacy: AI relies on vast amounts of personal data (Big Data) for training, raising concerns about surveillance and the misuse of private information.
Misinformation: AI can create highly realistic fake content (Deepfakes), threatening trust and leading to the spread of false information.
Economic Issues
Job Displacement: AI and automation can replace human workers in routine, repetitive, or complex analytical jobs (e.g., factory workers, certain administrative roles, even some legal research).
New Job Creation: While some jobs disappear, new ones are created, requiring skills in AI maintenance, ethics, and data science.
Increased Productivity: AI can handle massive datasets and complex calculations much faster than humans, leading to significant efficiency gains across industries (finance, medicine, logistics).
Environmental Issues
Energy Consumption: Training large, complex Deep Learning models (like those used for large language models) requires enormous amounts of computational power, leading to very high energy usage and a large carbon footprint.
Optimization: Conversely, AI can be used to optimize energy grids, traffic flow, and manufacturing processes, potentially leading to greater environmental efficiency overall. (e.g., Using ML to predict energy demand to reduce waste.)

As a Computing Professional: It is crucial to consider these impacts. Ethical bodies like the BCS (British Computer Society) and IEEE (Institute of Electrical and Electronic Engineers) promote ethical guidelines to ensure AI is developed responsibly.

Ready to test yourself?

Turn these notes into exam-style practice. Get unlimited AI questions on this topic with instant marking and explanations.

Practice This Topic
More Computer Science (9618) chapters
Data Representation
Communication and internet technologies
Hardware and Virtual Machines
System Software
Security
Computational thinking and Problem-solving

* The content provided by thinka is generated by AI and may not always be accurate or up-to-date. Please use it as a supplementary resource and verify with official materials.

Put These Notes into Practice

Reading the notes is a great start. Now practise with unlimited AI-generated questions and get instant feedback. 100,000+ students are already improving their grades.

Start Practising Now
View Pricing