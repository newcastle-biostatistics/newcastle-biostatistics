---
# An instance of the Blank widget.
# Documentation: https://wowchemy.com/docs/getting-started/page-builder/
widget: blank

# Activate this widget? true/false
active: true

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 15

title: Master Protocols
subtitle: 

design:
  columns: "1"
  spacing:
    padding: ["20px", "0", "20px", "0"]
---

### Background

Master protocol studies describe a class of novel innovative clinical trial designs to study multiple diseases, multiple therapies, or both all under a single trial infrastructure and protocol[1]. The principal aim of the master protocol is to enable accelerated evaluation of targeted therapies, answering multiple treatment-related questions efficiently and in less time[2]. There are three types of master protocol designs: umbrella, basket and platform trials.

### Umbrella trials

Umbrella trials evaluate multiple interventions within a single disease setting. Each unique experimental treatment is evaluated in a separate subtrial or sub-study commonly defined by a predictive biomarker. The ALCHEMIST[3] is a classic example with two substudies; ALCHEMIST-EGFR which is a randomized placebo-controlled trial of adjuvant erlotinib in patients with completely resected EGFR-mutant NSCLC; ALCHEMIST-ALK a randomized placebo-controlled trial of adjuvant crizotinib in patients with completely resected ALK-positive NSCLC.


### Basket trials

Basket trials evaluate a single intervention or therapy in several disease populations that share a common characteristic. An example is the VE-basket trial that evaluated the efficacy of Vemurafenib in six different cancers all harbouring the V600E BRAF mutations[4]. The strategy is to screen eligible patients for the common drug target and enrol them into one of the disease-specific subtrials. 

![Basket and Umbrella designs](/img/basket_and_umbrella.png)

### Platform trials

Platform trials evaluate multiple interventions within a single disease setting in a perpetual manner; that is, interventions can leave the trial if they don’t show efficacy and new interventions over the course of the trial. The RECOVERY trial, a large-scale platform trial in Covid-19 patients was initiated in 2020, and has evaluated 17 therapies to date, some of which have been shown to be ineffective. The platform trial commonly features an adaptive design, a common control treatment.

![Platform designs](/img/Platform_trials.png)

### Statistical issues in master protocol studies

Umbrella, basket and platform trials raise additional statistical complexities over a traditional two-arm RCT in their design, analysis and even conduct (i.e., logistics). 

The BRG has several statisticians/methodologists who are particularly interested in the statistical considerations of these trial designs, and developing improved statistical methods for their design and analysis. In particular, our work covers:
1.    Adaptive design considerations. 
2.    Bayesian methods to borrow information across subtrials in umbrella and basket trials. 
3.    Sample size determination in umbrella and basket trials.
4.    Using historical and synthetic controls in basket trials.
5.    Patient eligibility to multiple biomarker subgroups
6.    Error rate control.

While most umbrella, basket and platform trials have widely been implemented in cancer trials,  they have potential in bringing efficiency to precision medicine drug development in many non-oncology settings. As part of James Wason’s [NIHR professorship grant](/methodology_research/transforming_imid_trials/), his team is working on applying novel statistical methods in basket trials of inflammatory diseases such as rheumatoid arthritis.

We are keen to collaborate with other researchers and statisticians/methodologists aiming to apply these designs in various disease contexts.

### References & Resources

[1]    J. Woodcock and L. M. LaVange, “Master Protocols to Study Multiple Therapies, Multiple Diseases, or Both,” N. Engl. J. Med., vol. 377, no. 1, pp. 62–70, Jul. 2017, doi: 10.1056/nejmra1510062.
[2]    L. O. Ouma, J. M. S. Wason, H. Zheng, N. Wilson, and M. Grayling, “Design and analysis of umbrella trials: Where do we stand?,” Front. Med., vol. 9, 2022, doi: 10.3389/fmed.2022.1037439.
[3]    D. E. Gerber, G. R. Oxnard, and R. Govindan, “ALCHEMIST: Bringing genomic discovery and targeted therapies to early-stage lung cancer,” Clin. Pharmacol. Ther., vol. 97, no. 5, pp. 447–450, 2015, doi: 10.1002/cpt.91.
[4]    D. M. Hyman et al., “Vemurafenib in multiple nonmelanoma cancers with BRAF V600 mutations,” N. Engl. J. Med., vol. 373, no. 8, pp. 726–736, Aug. 2015, doi: 10.1056/NEJMoa1502309.

