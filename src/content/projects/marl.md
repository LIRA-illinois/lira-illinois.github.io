---
title: "Multi-Agent RL"
subtitle: "Learning coordination in multi-agent systems."
date: 2020-08-16
dateUpdated: 2024-09-20
imageUrl: '/src/assets/research/dissc.png'
imageAlt: "Using MARL to control 27 agents in Starcraft II."
---

We work on multi-agent reinforcement learning (MARL) algorithms for coordinating agents in cooperative tasks, such as search-and-rescue, surveillance missions, and warehouse robotics.

This work was funded in part by ARL W911NF2020184, NASA 80NSSC23M0221, and ONR N00014-20-1-2249.

<!-- <div class="funding-logos">
    <a href="https://www.arl.army.mil/"><img src="{{ site.url }}{{ site.baseurl }}/assets/images/funding/arl.jpeg"></a>
    <a href="https://www.nasa.gov/"><img src="{{ site.url }}{{ site.baseurl }}/assets/images/funding/nasa.jpg"></a>
    <a href="https://www.onr.navy.mil/"><img src="{{ site.url }}{{ site.baseurl }}/assets/images/funding/onr.png"></a>
</div> -->

## Coordination machines for minimizing communications in MARL

<!-- <figure-full-caption>
	<a href="{{ site.url }}{{ site.baseurl }}/assets/images/research/cms.png"><img src="{{ site.url }}{{ site.baseurl }}/assets/images/research/cms.png"></a>
	<figcaption>Our method optimizes policies to make decisions within a high-level probabilistic finite automaton (PFA) model and low-level decentralized partially observable Markov decision processes (Dec-POMDPs) included within the PFA.</figcaption>
</figure-full-caption> -->

This work proposes **coordination machines (CMs)**, a hierarchical model for minimizing communications in MARL subject to a desired overall task success rate. Our key idea is that each subtask may require different levels of communication, and varying the level of communication allowed for each subtask can lower overall communication costs. See our [CoCoMARL RLC 2024 Workshop](https://sites.google.com/view/cocomarl-2024/home?authuser=0) paper presenting our method for more details.

<!-- <div class="row">
    <a href="https://openreview.net/forum?id=SnTvlVU7xr" class="button_general">PDF</a>
</div> -->

## Addressing multi-agent credit assignment with successor features

<video muted autoplay="autoplay" loop="loop" width="400px" controls>
  <source src="/assets/videos/dissc.mp4" type="video/mp4">
</video>

This work leverages successor features (SFs) to disentangle an individual agent’s impact on a shared reward from that of all other agents, thus addressing multi-agent credit assignment when training decentralized agents. The video shows an example of gameplay from the Starcraft Multi-Agent Challenge (SMAC) where the red agents learned to surround the blue agents and win the game, despite being at a numbers disadvantage (27 vs. 30 agents). See our AAMAS 2022 paper presenting our approach, named **DISentangling Successor features for Coordination (DISSC)**, for more details.

<!-- <div class="row">
    <a href="https://www.ifaamas.org/Proceedings/aamas2022/pdfs/p751.pdf" class="button_general">PDF</a>
    <a href="https://youtu.be/B-mRD1lGrfI" class="button_general">YouTube</a>
    <a href="https://www.unite.ai/ai-helps-train-teams-of-collaborative-robots-and-drones/" class="button_general">Press</a>
</div> -->

<!-- ## Learning multi-agent roles

This work builds from [DISSC](#improving-decentralized-training-with-successor-features) by leveraging SFs to learn **roles** that individual agents can use within a team, inspired by the use of different positions in team sports like football and basketball. Our preliminary results show **TODO**. -->

<!-- ## Leveraging communication through coordination graphs

This work aims to **TODO**. -->
