---
title: "ParaAdapt Workshop"
description: "ParaAdapt: Parametric User Modeling & Adaptation for Navigating Complex Interactive Domains"
---

{{< anchor "overview" >}}

## ParaAdapt: Parametric User Modeling & Adaptation for Navigating Complex Interactive Domains

**Theme:** Many interactive systems mediate **complex domains**—dynamic content, multi-layer workflows, and high-dimensional option spaces—where users must orient, explore, make sense, and decide. *ParaAdapt* frames these systems as **parameterized interaction spaces**. Parameters correspond to interaction qualities and properties—mappings, constraints, scaffolding, information density, feedback, pacing, and control surfaces—making adaptation an explicit design activity.

**Abstract:** This workshop explores **parametric interaction design** as a practical approach for understanding users, building **interpretable user models**, and enabling **adaptation/personalization** across interactive artefacts and interfaces (educational tools, creativity support systems, data/AI interfaces, XR, interactive installations, playful systems, and games). A core focus is on how users **navigate complex domains**: layered information, multi-step tasks, conceptual spaces, and large design/decision spaces.

We connect user modelling and adaption with interaction design by treating adaptation as **explicit, inspectable parametric reconfiguration**—tuning guidance, constraints, information density, mappings, feedback, pacing, and content variability—rather than opaque personalization. Inspired by hands-on design activities (interaction design studios, participatory design, iterative prototyping, in-the-wild evaluation; and as one motivating example, rapid game jams using the casual game creator **ParaVida**), we leverage parametric traces (parameter trajectories + interaction logs + design rationale) to model navigation strategies, expertise, uncertainty, and help-seeking.

The workshop also welcomes work where parametric controls govern **procedural content generation (PCG)** or other generative systems as important application domains. We will produce a shared taxonomy of “complexity controls”, adaptation pattern cards, and a community roadmap/whitepaper and repository. *Human-centered AI perspectives—transparency, agency, accessibility—will be integrated as design constraints to guide the development of the produced material.*

---

{{< anchor "rationale" >}}

## Workshop overview and rationale

**Rationale:** UMAP methods excel at user modeling and adaptation, but complexity-heavy domains create recurring challenges: interpretability, user/designer control, and evaluation when interaction spaces are open-ended. Parametric interaction design offers an explicit “control layer” for shaping how complexity is revealed and navigated, while producing structured traces that link:

> **design intent → parameter changes → user behavior → outcomes**

**Connecting domains:**
- **User modeling and personalization**
- **Interaction design practice** (prototyping, critique, participatory design, in-the-wild evaluation)
- **Procedural content generation and generative pipelines (PCG)** as an important—yet not exclusive—application area where parametric controls shape navigability and experience
- **Human-centered AI** perspectives as guardrails (transparency, agency, accessibility, contestability) for adaptive behavior

---

{{< anchor "objectives" >}}

## Objectives

1. **Design for complex-domain navigation:** Identify parametric strategies for wayfinding, sensemaking, and decision support (progressive disclosure, scaffolding, guardrails that preserve agency, navigation aids).
2. **Parameterization of interaction and variability:** Define reusable parameterizations grounded in interaction design semantics (affordances/signifiers, mappings, constraints, feedback, information architecture, “complexity controls”), including parameters governing **content variability** (e.g., via PCG or curated variation).
3. **Model navigation behavior and user state:** Develop pipelines linking parameters + interaction traces to user models capturing navigation strategies, uncertainty, expertise, goals, and help-seeking.
4. **Adaptation as legible reconfiguration:** Develop adaptation methods operating through explicit parameters with explanations, user control (override/undo), and calibration; include patterns for systems where **PCG parameters** are part of the adaptation surface.
5. **Evaluation & governance for complex adaptive domains:** Establish evaluation approaches (task success + sensemaking, longitudinal protocols, counterfactual analysis) and integrate HCAI-relevant constraints (consent, fairness, accessibility, transparency) as non-negotiable design requirements.

**Alignment with UMAP:** *ParaAdapt* advances the work presented in UMAP by (i) treating **navigation in complex spaces** as a first-class modeling target and (ii) grounding adaptation in **explicit parametric interaction design**, enabling transparent and controllable personalization across domains, including systems with PCG-driven variability.

---

{{< anchor "organization" >}}

## Workshop organization

**Format and duration:** ~2 hours, fully in-person.  
**Workshop type:** interactive studio/lab (artefact- and method-building, emphasizing collaboration).  
**Anticipated participants:** ~20–35.

**Expected contributions:**
- **Position statements (1–2 pages):** concepts, frameworks, early results, datasets, evaluation protocols, ethics/UX insights
- **Demo/tool submissions (1–2 pages + optional video):** parametric editors, configurable interface frameworks, PCG control surfaces, instrumentation pipelines, explanation/control dashboards
- **Design case studies (1–2 pages):** interaction design activities (participatory design, prototyping, critique, in-the-wild deployment); creative jams welcome but not required

---

{{< anchor "program" >}}

## Workshop program

**Planned outputs:**
1. Taxonomy of **complexity controls** (interaction + variability parameters, including PCG where relevant) and corresponding user-model targets
2. A set of **design pattern cards**
3. Post-workshop roadmap/whitepaper outline + open repository plan

### Detailed schedule (2 hours)

| Time | Activity |
|---:|---|
| 10 min | Welcome, framing, and setup |
| 45 min | **Lab 1: Complexity navigation mapping** (domain map + breakdown points; candidate “complexity controls”; measurable signals and hypothesized user states) |
| 10 min | Break |
| 45 min | **Lab 2: Scaffolding & adaptation design sprint** (adaptation pattern using explicit parameters; explanation UX; override/undo; constraints checklist: agency, accessibility, transparency) |
| 15 min | Cross-group critique & consolidation — pattern card presentations + clustering into taxonomy |


**Active engagement strategies:**
- Mixed-discipline group assignment
- Structured canvases and pattern cards to ensure tangible outputs
- Live taxonomy building to converge on shared language across communities

---

{{< anchor "submissions" >}}

## Submission and participation process

**Submission categories:**
1. Position statement (1-2 pages)
2. Demo/tool (1–2 pages + optional video)
3. Design case study (1–2 pages)

**Submission format:**
1. PDF
2. Single Column
3. [ACMART](https://www.overleaf.com/latex/templates/association-for-computing-machinery-acm-large-1-column-format-template/fsyrjmfzcwyy) 

**Review process:**
- Single-blind; aim for 2 reviews per submission (Program Committee)
- Criteria: relevance to parametric user modeling/adaptation for complex-domain navigation; clarity; novelty; contribution to discussion and artefact pool; consideration of human-centric design approaches; ethics

{{< button href="https://easychair.org/conferences/?conf=paraadapt2026" blank="1" >}}
Submit your contribution ↗
{{< /button >}}

**Program Committee:** **TBA**

**Participation without submission:** Limited attend-only seats will be available to include practitioners/students to contribute to the labs and create a critical mass.

---

{{< anchor "organizer" >}}

## Organizers

### Swen E. Gaudl — University of Gothenburg, Sweden (main point of contact; in-person)
Interests in interaction design and interactive artefacts, with focus on design-facing tools and methods that support iterative tuning and adaptation.  
**Role:** overall chair; facilitation lead; synthesis/whitepaper coordination.  
**Email:** swen.gaudl@gu.se

### Mark Nelson — American University, USA (in-person, intended)
Works at the intersection of AI and interactive systems, including automated design and **procedural content generation**, with relevance to parameterized design spaces and controllable variability.  
**Role:** connect PCG/generative systems to parametric user modeling; benchmark/task framing; review coordination.  
**Email:** mnelson@american.edu

### Günter Wallner — JKU Linz, Austria (in-person, intended)
Expertise in user research, behavioral analytics, and visualization—supporting interpretable user models and designer-facing understanding of navigation behavior.  
**Role:** telemetry/user-modeling methods; interpretability + visualization lead; lab-method design.  
**Email:** guenter.wallner@jku.at

**Organizers' diversity & commitment:** The chairs span three institutions in different countries and complementary expertise (interaction design, PCG/generative systems, analytics/visualization).

---

{{< anchor "promotion" >}}

## Promotion and dissemination

**Promotion:**
- Workshop website + CFP via UMAP channels
- Cross-community outreach emphasizing **UMAP × interaction design**, with explicit invitation to PCG/generative-content and complex-domain interface communities:
  - HCI/interaction design and accessibility networks
  - learning tech, creativity support tools, interactive media/XR
  - PCG/generative content venues and communities
  - games and playful systems communities (as one application domain among several)

{{< anchor "dissemination" >}}

**Dissemination:**
1. Workshop summary for UMAP proceedings (as applicable)
2. Open repository containing taxonomy, canvases/templates, and opt-in artefacts (papers, demos, dataset schemas)
3. Community whitepaper/roadmap:
   - priority research questions and benchmark tasks
   - dataset schema suggestions including parameter trajectories and optional design rationale fields
   - guidance for transparent, agency-preserving, accessibility-first adaptation (as constraints)