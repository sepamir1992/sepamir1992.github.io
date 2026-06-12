---
title: "Fed-MVP: Federated Multipath Video Streaming"
summary: A federated learning-based multipath video streaming system with distributed meta-models at edge servers, achieving a 35% reduction in stalling and 20% better video quality. Published in IEEE/ACM Transactions on Networking.
technologies: [Python, PyTorch, Federated Learning, Meta-Learning, MPQUIC, Edge Computing]
researchArea: Federated Learning
role: Lead researcher and developer
impact: "35% reduction in video stalling and 20% improvement in average video quality over baselines. Published in IEEE/ACM Transactions on Networking. Funded by the Department of National Defence (DND), Canada."
links:
  github: ""
  paper: ""
featured: true
order: 1
---

## Goal

Adapt multipath video streaming to heterogeneous, fast-changing network conditions without centralizing sensitive client data. Schedulers trained on one client's network conditions generalize poorly to others, but pooling raw traces in a central server raises privacy and bandwidth concerns.

## My Solution

Built a hierarchical federated learning protocol with **distributed meta-models at edge servers**, enabling clients to personalize schedulers locally while sharing only model updates — never raw network traces.

## Impact

- Reduced video stalling by **35%** and improved average video quality by **20%** over baselines
- **Published in IEEE/ACM Transactions on Networking**
- Research funded by the **Department of National Defence (DND), Canada**
