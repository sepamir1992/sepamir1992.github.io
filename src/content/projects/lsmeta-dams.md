---
title: "LiveStream Meta-DAMS: Meta-RL Scheduling for Live Video"
summary: A hybrid meta-reinforcement learning multipath scheduler that adapts within seconds to unseen network conditions for live video streaming. Published in IEEE Transactions on Cognitive Communications and Networking.
technologies: [Python, PyTorch, Meta-RL, MPQUIC, Live Streaming]
researchArea: Multipath Video Streaming
role: Lead researcher and developer
impact: "Published in IEEE Transactions on Cognitive Communications and Networking (2024)."
links:
  github: ""
  paper: ""
featured: true
order: 2
---

## Overview

Live video streaming is unforgiving: there is no buffer cushion to hide bad scheduling decisions, and network conditions shift constantly. LiveStream Meta-DAMS applies **hybrid meta-reinforcement learning** so the scheduler does not just learn one policy — it learns how to adapt its policy quickly when it encounters network conditions it has never seen.

## Key ideas

- Meta-training across diverse network environments for fast adaptation
- Hybrid design combining learned policies with delay-aware heuristics for live latency budgets
- Extends the Meta-DAMS scheduler lineage to live-streaming constraints

## Publication

Published in **IEEE Transactions on Cognitive Communications and Networking** (2024): *A. Sepahi, L. Cai, W. Yang, and J. Pan, "LiveStream Meta-DAMS: Multipath Scheduler using Hybrid Meta Reinforcement Learning for Live Video Streaming."*
