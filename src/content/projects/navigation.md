---
title: "Robot Navigation and Perception"
subtitle: "Learning for autonomous robot navigation and perception in the field"
date: 2023-09-01
dateUpdated: 2026-02-17
imageUrl: '/src/assets/research/WayFAST2.jpg'
imageAlt: "A robot navigating through outdoor terrain."
funding: "ARL W911NF2020184, the MITRE Corporation research agreement 126392, and ONR N00014-20-1-2249"
fundingSlugs: ["arl.jpeg", "mitre.png", "onr.png"]
past: True
---

We work on methods for autonomous robot navigation and perception in unstructured and uncertain environments, like outdoor areas.

<!-- This work was funded in part by Army W9132T-19-C-0006, the MITRE Corporation research agreement 126392, and ONR N00014-20-1-2249. -->

<div class="funding-logos">
    <a href="https://www.erdc.usace.army.mil/Locations/CERL/"><img src="{{ site.url }}{{ site.baseurl }}/assets/images/funding/cerl.webp"></a>
    <a href="https://www.mitre.org/"><img src="{{ site.url }}{{ site.baseurl }}/assets/images/funding/mitre.png"></a>
    <a href="https://www.onr.navy.mil/"><img src="{{ site.url }}{{ site.baseurl }}/assets/images/funding/onr.png"></a>
</div>

## Traversability for robot navigation in the field

<figure-full-caption>
	<a href="{{ site.url }}{{ site.baseurl }}/assets/images/research/WayFAST2.jpg"><img src="{{ site.url }}{{ site.baseurl }}/assets/images/research/WayFAST2.jpg"></a>
	<figcaption>Our system predicts traversable paths for autonomous visual navigation in offroad terrain.</figcaption>
</figure-full-caption>

This work presents a new method for robot navigation in unstructured, outdoor environments based on self-supervised traversability estimations. See our RA-L paper presenting our approach, named **Waypoint Free Autonomous Systems for Traversability (WayFAST)**, for more details.

<div class="row">
    <a href="https://arxiv.org/pdf/2203.12071.pdf" class="button_general">arXiv</a>
    <a href="https://doi.org/10.1109/LRA.2022.3193464" class="button_general">DOI</a>
    <a href="https://mateusgasparino.com/wayfast-traversability-navigation/" class="button_general">WEBSITE</a>
</div>

## Anomaly detection

<figure-full-caption>
	<a href="{{ site.url }}{{ site.baseurl }}/assets/images/research/d-anogan.jpg"><img src="{{ site.url }}{{ site.baseurl }}/assets/images/research/d-anogan.jpg"></a>
	<figcaption>Comparison of the disconnected latent space learned using our method (left) with the latent space learning using typical anomaly detection methods (right). We show that clustering in the latent space improves anomaly detection in multi-class datasets.</figcaption>
</figure-full-caption>

This work explores the problem of anomaly detection in disconnected data manifolds (i.e., multi-class anomaly detection) using a new combination of multi-generator generative adversarial networks (GANs) that leverages a learned bandit for clustering in the latent space. See our IJCNN 2022 paper presenting our approach, named **Disconnected Anomaly GAN (D-AnoGAN)**, for more details.

<div class="row">
    <a href="https://doi.org/10.1109/IJCNN55064.2022.9892270" class="button_general">DOI</a>
</div>
