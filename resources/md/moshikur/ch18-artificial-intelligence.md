# Chapter 18: Artificial Intelligence (AI)

Source: https://moshikur.com/a2-level/18-artificial-intelligence-ai-2/

---

## Graphs in AI

**Graph** — a collection of **nodes** (vertices) connected by **edges**.

- **Weighted graphs** — edges have associated costs
- **Directed graphs** — edges have one-way direction

Uses in AI: route optimisation, planning, and problem-solving.

### Pathfinding Algorithms

**Dijkstra's algorithm** — finds shortest paths from a source node to all other nodes in a weighted graph.

**A* algorithm** — extends Dijkstra's by adding a **heuristic estimate** of the remaining distance to the goal, focusing the search on promising paths toward a specific target.

---

## Artificial Neural Networks

Neural networks have three types of layers:
- **Input layer** — receives raw data
- **Hidden layer(s)** — processes and transforms data
- **Output layer** — produces the result

**Weights** — determine the importance of each connection between neurons.

**Activation functions** — decide whether a neuron fires based on its weighted input.

### Forward and Backward Propagation

**Forward propagation** — data passes through layers from input to output to generate a prediction.

**Backpropagation** — adjusts weights based on prediction errors by propagating error signals backwards through the network.

---

## Machine Learning

### Learning Types

| Type | Description | Example |
|---|---|---|
| **Supervised learning** | Learns from labelled training data | Image classification, spam detection |
| **Unsupervised learning** | Finds patterns in unlabelled data | Clustering, anomaly detection |
| **Reinforcement learning** | Optimises actions through reward/penalty feedback | Game-playing AI, robotics |
| **Deep learning** | Neural networks with multiple hidden layers | Speech recognition, image recognition |

### Regression

A supervised technique predicting continuous outputs:
- **Linear regression** — models straight-line relationships between variables
- **Logistic regression** — handles binary classification problems (despite the name)
