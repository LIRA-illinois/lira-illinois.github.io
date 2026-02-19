---
title: "Hierarchical RL"
subtitle: "Discovering and using hierarchies for autonomous agents"
date: 2023-09-01
dateUpdated: 2026-02-17
imageUrl: '/src/assets/research/hrl.png'
imageAlt: "A hierarchical decision policy."
funding: "DARPA FA8750-18C-0137 and ONR N00014-20-1-2249"
fundingSlugs: ["darpa.png", "onr.png"]
---

We work on hierarchical reinforcement learning (HRL) methods to create autonomous agents that can efficiently solve complex tasks.

<!-- This work was funded in part by DARPA FA8750-18C-0137 and ONR N00014-20-1-2249. -->

<div class="funding-logos">
    <a href="https://www.darpa.mil/"><img src="{{ site.url }}{{ site.baseurl }}/assets/images/funding/darpa.png"></a>
    <a href="https://www.onr.navy.mil/"><img src="{{ site.url }}{{ site.baseurl }}/assets/images/funding/onr.png"></a>
</div>

## Bioinspired discovery of hierarchical subtasks

<figure-full-caption>
	<a href="{{ site.url }}{{ site.baseurl }}/assets/images/research/snac.png"><img src="{{ site.url }}{{ site.baseurl }}/assets/images/research/snac.png"></a>
	<figcaption>Value maps for two learned sub-policies. The object-based option is learned using features specialized to focus on dynamic objects - it appears to have the blue agent prevent the enemy agent (E) from reaching the blue flag (blue star). The spatial-based option is learning using spatial features and is independent of the enemy.</figcaption>
</figure-full-caption>

Inspired by recent discoveries in neuroscience, this work explores the use of feature specialization and clustering to decompose environments into a useful task subspace for HRL. See our [ALA Workshop at AAMAS 2022](https://ala2022.github.io/#) paper presenting our approach, named **Specialized Neurons and Clustering (SNAC)**, for more details.

<div class="row">
    <a href="https://ala2022.github.io/papers/ALA2022_paper_41.pdf" class="button_general">PDF</a>
    <a href="https://youtu.be/XLEL1I5kaDM" class="button_general">YouTube</a>
</div>

## Adaptation in HRL

<video muted autoplay="autoplay" loop="loop" width="400px" controls>
  <source src="/assets/videos/hrl.mp4" type="video/mp4">
</video>

This work explores the benefits of using hierarchical architectures in RL for **adaptation to new dynamics**. The video shows an example of how our approach supports fast adaptation to new enemies in a game of capture-the-flag. See our ICRA 2022 paper for more details.

<div class="row">
    <a href="https://doi.org/10.1109/ICRA40945.2020.9197052" class="button_general">DOI</a>
    <!-- <a href="https://github.com/raide-project/ctf_public" class="button_general">GitHub</a> -->
    <a href="https://youtu.be/BijWGu9xIpU" class="button_general">YouTube (short)</a>
    <a href="https://youtu.be/xzJLUpFknbQ" class="button_general">YouTube (long)</a>
</div>