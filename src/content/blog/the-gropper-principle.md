---
title: The Gropper Principle
published: 2022-08-13
author: Paul Trevithick
tags: 
    - Privacy
---



![Bundle of Model Mats](../../assets/blog/bundle-of-model-mats.webp)

In [A Human Rights Approach to Personal Information Technology](https://blog.petrieflom.law.harvard.edu/2022/04/12/a-human-rights-approach-to-personal-information-technology/) Adrian Gropper makes two interrelated points. The first is that we should build personal information infrastructure based on the human right to privacy. No argument there. But it’s his second point, about an architectural principle that must be adhered to in order to respect human rights, that I’d like to highlight.

He starts by explaining that there are “three universal components of the personal information commons”:

1. **Authentication** (signing-in and signing documents)
2. **Request** for information (e.g. forms, searches, conversations)
3. **Storage** (e.g. labs, prescriptions, social contracts, transactions [, other human information])

What we could call the *Gropper Principle* is this (my words, his ideas):

> Any system that respects the human right to privacy must not bundle authentication, request, and storage.

[His presentation](https://identiverse.com/idv2022/session/841489/) at the 2022 Identiverse conference provides additional detail (see [slides](https://drive.google.com/file/d/1lwaMVkG4kLi7z6cXhqMx-DGkUww9azW3/view?usp=sharing)). It explains that only a decentralized architecture can implement the Gropper Principle because each of the three concerns needs to be implemented separately. For this to work in an open world with multiple alternative component providers, we as a development community will need to converge on open standards between and among these three components. [GNAP](https://datatracker.ietf.org/wg/gnap/about/) seems well positioned to enable this interoperability.