---
title: "KESTREL: On-Device Intent-Aware Multipath Scheduling for MPQUIC"
authors: "A. Sepahi, et al."
venue: "IEEE Transactions on Mobile Computing"
year: 2026
status: in-preparation
doi: ""
arxiv: ""
pdf: ""
tags: [Multipath Transport, MPQUIC, On-Device Scheduling, Intent-Aware Networking, Mobile QoS]
abstract: "Modern smartphones routinely maintain simultaneous Wi-Fi and cellular connectivity, yet deployed multipath transport schedulers (minRTT, ECF, BLEST) are application-blind and cannot exploit knowledge of what the transport is actually carrying. Learning-based schedulers have shown promise in simulation but have not been deployed at scale because online exploration is unsafe on user devices and cloud-based control adds latency and exfiltrates telemetry. We present KESTREL, an on-device intent-aware multipath scheduler for MPQUIC that addresses both barriers via three complementary mechanisms. First, a two-timescale split-loop architecture keeps learned inference and policy retrieval entirely off the per-chunk dataplane critical path, with a formal coupling bound that limits policy staleness in steady state and under regime shift. Second, a QoS-slack-driven runtime weight rule connects offline utility-based training to online per-chunk path scoring as a Lagrangian relaxation of a constrained QoS optimization; the runtime weights are interpretable as estimated KKT multipliers of the QoS constraints. Third, a compact structured policy library — indexed by intent, active path combination, QoS profile, and network regime — is queried with safety-first ordering (hard rules before similarity) and a confidence-gated fallback that defaults to a known-safe template under distribution shift. KESTREL runs entirely in user space on stock Android, requires no kernel modifications, and integrates with existing user-space QUIC stacks. The architecture and policy library are path-agnostic and extend to arbitrary N-path combinations."
featured: false
---
