---
title: "Ericsson GAIA: GenAI & Predictive AI for 5G/6G Networks"
summary: End-to-end GenAI and predictive modeling systems built as a Machine Learning Engineer Intern at Ericsson's Global AI Accelerator, spanning RAG-based enterprise search, intent-based network automation, and a centralized AI benchmarking platform.
technologies: [Python, LangChain, Weaviate, Amazon Bedrock, DeepEval, Docker, Kubeflow, GitLab CI/CD, InfluxDB, Grafana, LightGBM]
researchArea: LLM & RAG Systems
role: "Machine Learning Engineer Intern (Jan – Dec 2025), Montreal, Canada"
impact: "Cut solution discovery from hours to seconds; eliminated hours of manual configuration per deployment cycle; accelerated AI model selection across GAIA teams."
links: {}
featured: true
order: 6
---

As a Machine Learning Engineer Intern at **Ericsson's Global AI Accelerator (GAIA)** in Montreal, I led end-to-end development of GenAI and predictive modeling solutions for 5G/6G networks across three flagship projects.

## Enterprise RAG-Based Search Engine

**Goal:** Engineers lost hours searching millions of JIRA tickets and fragmented documentation for known fixes.

**My Solution:** Architected a hybrid search system (LangChain + Weaviate) combining keyword and semantic retrieval with cross-encoder reranking; containerized with Docker, orchestrated via Kubeflow, and deployed through GitLab CI/CD.

**Impact:** Cut solution discovery from hours to seconds; a DeepEval pipeline with an engineer-curated ground-truth set benchmarked hallucination and retrieval accuracy before production rollout.

## Intent-Based Network Automation (Mission-Critical Networks)

**Goal:** Manual RAN/Core configuration consumed hours per deployment cycle and reacted to SLA violations only after degradation.

**My Solution:** Integrated LLMs to translate natural-language intents into executable network policies, and built time-series forecasting models (AutoReg, LightGBM, ARIMA) for throughput, latency, and user-mobility KPIs, served through a real-time InfluxDB + Grafana telemetry pipeline.

**Impact:** Eliminated hours of manual configuration per deployment and exposed prediction APIs that let operators preemptively reroute resources in high-mobility scenarios.

## Centralized AI Platform ("AI Hub")

**Goal:** Fragmented, team-by-team evaluation workflows slowed telecom AI model selection and research-to-production handoff.

**My Solution:** Collaborated with Université de Montréal to build a centralized single-pane-of-glass dashboard for benchmarking AI models across teams.

**Impact:** Accelerated model selection and measurably reduced research-to-production handoff time across GAIA teams.
