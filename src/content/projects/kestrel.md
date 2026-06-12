---
title: "KESTREL: Knowledge-Grounded Intent-Aware Multipath Scheduling"
summary: A multipath packet scheduling framework that grounds scheduling decisions in domain knowledge and high-level operator/application intents.
technologies: [Python, C++, LLMs, Knowledge Grounding, MPQUIC, Android]
researchArea: Intent-Based Networking
role: Lead researcher and developer
impact: "TODO: add headline results once evaluation is finalized."
links:
  github: ""
  paper: ""
featured: true
order: 4
---

## Overview

KESTREL connects two worlds that rarely meet: high-level **intents** (what the application or operator wants — e.g., "prioritize smoothness over peak quality") and low-level **multipath packet scheduling** (which packet goes on which path, right now).

The framework grounds scheduling decisions in structured domain knowledge, making the resulting behavior both intent-aligned and explainable — a contrast to black-box learned schedulers.

## Key ideas

- Knowledge-grounded decision making for packet scheduling
- Intent translation from high-level goals to scheduler behavior
- On-device evaluation, including an Android MPQUIC client

## Status

Active research project. TODO: add publication link and evaluation results when available.
