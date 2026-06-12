---
title: "KESTREL: On-Device Intent-Aware Multipath Scheduling"
summary: An on-device intent-aware multipath scheduler for MPQUIC that runs entirely in user space on stock Android — keeping learned inference off the dataplane critical path while aligning path selection with application intent.
technologies: [Python, C++, Android, MPQUIC, Machine Learning, QoS Optimization]
researchArea: Intent-Based Networking
role: Lead researcher and developer
impact: "Real-time, intent-aligned path selection fully on-device; manuscript in preparation for IEEE Transactions on Mobile Computing, with a live Android deployment strengthening the systems contribution."
links:
  github: ""
  paper: ""
featured: true
order: 4
---

## Goal

Bring intelligent MPQUIC scheduling onto resource-constrained mobile devices. Deployed multipath schedulers (minRTT, ECF, BLEST) are application-blind and ignore what the transport is actually carrying — while cloud-scale RL models are infeasible on-device, online exploration is unsafe on user devices, and cloud-based control adds latency and exfiltrates telemetry.

## My Solution

Architected KESTREL around three complementary mechanisms:

- A **two-timescale split-loop architecture** that keeps learned inference and policy retrieval entirely off the per-chunk dataplane critical path, with a formal coupling bound limiting policy staleness in steady state and under regime shift.
- A **QoS-slack-driven runtime weight rule** connecting offline utility-based training to online per-chunk path scoring as a Lagrangian relaxation of a constrained QoS optimization — runtime weights are interpretable as estimated KKT multipliers of the QoS constraints.
- A compact **structured policy library** — indexed by intent, active path combination, QoS profile, and network regime — queried with safety-first ordering (hard rules before similarity) and a confidence-gated fallback that defaults to a known-safe template under distribution shift.

Intent-aware policies are trained on oracle-labeled traces from a custom Android data-collection pipeline.

## Impact

- Enables **real-time, intent-aligned path selection fully on-device** — entirely in user space on stock Android, no kernel modifications, integrating with existing user-space QUIC stacks
- Path-agnostic architecture that extends to arbitrary N-path combinations
- Manuscript **in preparation for IEEE Transactions on Mobile Computing**, with a live Android deployment strengthening the systems contribution
