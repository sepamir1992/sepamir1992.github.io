---
title: "LSMeta-DAMS: Meta-RL Delay-Aware Multipath Scheduler"
summary: A hybrid meta-reinforcement learning multipath scheduler that learns an adaptation prior across network environments and fine-tunes to unseen conditions within a few gradient steps. Published in IEEE TCCN.
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

## Goal

Overcome the slow convergence of RL-based schedulers, which fail when network conditions shift faster than models can retrain. Live video streaming is especially unforgiving: there is no buffer cushion to hide bad scheduling decisions.

## My Solution

Developed a **hybrid meta-reinforcement learning scheduler** that learns an adaptation prior across network environments, fine-tuning to unseen conditions within a few gradient steps — combining learned policies with delay-aware heuristics for live latency budgets.

## Impact

- Delivered fast, delay-aware adaptation for live video streaming over MPQUIC
- Published in **IEEE Transactions on Cognitive Communications and Networking** (2024): *A. Sepahi, L. Cai, W. Yang, and J. Pan, "LiveStream Meta-DAMS: Multipath Scheduler using Hybrid Meta Reinforcement Learning for Live Video Streaming."*
