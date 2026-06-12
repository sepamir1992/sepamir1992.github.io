---
title: "Meta-DAMS: Delay-Aware Multipath Scheduler"
summary: A delay-aware multipath packet scheduler using hybrid meta reinforcement learning that generalizes across heterogeneous, time-varying network paths. Published at IEEE VTC2023-Fall.
technologies: [Python, PyTorch, Meta-RL, MPTCP, MPQUIC]
researchArea: Multipath Video Streaming
role: Lead researcher and developer
impact: "Published at IEEE Vehicular Technology Conference (VTC2023-Fall), Hong Kong."
links:
  github: ""
  paper: ""
featured: false
order: 3
---

## Goal

Hand-tuned multipath schedulers (minRTT, round-robin) cannot cope with path asymmetry, loss patterns, and bandwidth fluctuations — and a single learned policy fails when deployed in network conditions it never saw during training.

## My Solution

Framed multipath packet scheduling as a sequential decision problem and built a **delay-aware scheduler using hybrid meta reinforcement learning**, producing scheduling policies that generalize across heterogeneous and time-varying network paths. This work is the foundation of my multipath scheduling research line.

## Impact

- Robust per-packet path selection under unseen path conditions
- Published at **IEEE Vehicular Technology Conference (VTC2023-Fall)**, Hong Kong, 2023: *A. Sepahi, L. Cai, W. Yang, and J. Pan, "Meta-DAMS: Delay-Aware Multipath Scheduler using Hybrid Meta Reinforcement Learning," pp. 1–5.*
