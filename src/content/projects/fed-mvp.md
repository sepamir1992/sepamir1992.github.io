---
title: "Fed-MVP: Federated Multipath Video Streaming"
summary: A federated learning-based multipath video streaming system with distributed meta-models at edge servers, achieving a 35% reduction in stalling and 20% better video quality. Accepted to IEEE/ACM Transactions on Networking.
technologies: [Python, PyTorch, Federated Learning, Meta-Learning, MPQUIC, Edge Computing]
researchArea: Federated Learning
role: Lead researcher and developer
impact: "35% reduction in video stalling and 20% improvement in average video quality over baseline approaches. Accepted to IEEE/ACM Transactions on Networking. Supported by the Department of National Defence (DND), Canada."
links:
  github: ""
  paper: ""
featured: true
order: 1
---

## Overview

Fed-MVP (Federated Multipath Video streaming Protocol) tackles a core tension in learning-based multipath video streaming: schedulers trained on one client's network conditions generalize poorly to others, but pooling raw traces in a central server raises privacy and bandwidth concerns.

Fed-MVP resolves this with **federated learning over distributed meta-models at edge servers**: each multi-homed client trains a local scheduling policy on its own paths (e.g., Wi-Fi + cellular), and only model updates — never raw network traces — are aggregated, enabling dynamic adaptation to varying network conditions.

## Key ideas

- Federated aggregation of scheduling policies across heterogeneous clients
- Distributed meta-models at edge servers for fast adaptation
- Multipath packet scheduling tuned for video QoE (quality, stalls, latency)
- Privacy preservation: raw per-client network data never leaves the device

## Results

- **35% reduction in video stalling** over baseline approaches
- **20% improvement in average video quality**
- Accepted to **IEEE/ACM Transactions on Networking**
- Research supported by the **Department of National Defence (DND), Canada**
