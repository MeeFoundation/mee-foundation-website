---
title: Provider Discovery, a proposal
published: 2023-08-28
featured: true
author: Paul Trevithick
tags: 
    - Identity
---

# Provider Discovery, a proposal

While working on Mee digital wallet use cases (e.g. login with wallet using SIOPv2, OpenID4VC issuance, etc.) we encountered a familiar challenge: the RP/VCissuer/VCverifier needs to know about the person's preferred/actual providers (e.g. OpenIDConnect provider, wallet provider, SIOPv2 provider, age verification provider, etc.) **before** the first screen/page of the RP renders. 

We think that others trying to build human-centric technologies will also run into this challenge. Rather than solve this in a Mee-specific or even wallet-specific way, we came up with a general-purpose spec that can be used for any kind of provider. 

The spec is at https://providerdiscovery.org. 

We'd love to get feedback and see if this is something that other human-centric technologies could use. Send us an email at contact@mee.foundation. 

