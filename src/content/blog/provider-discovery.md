---
title: Provider Discovery
published: 2023-08-28
featured: true
author: Paul Trevithick
tags: 
    - Identity
---

# Provider Discovery

While working on Mee digital wallet use cases (e.g. log in with wallet using SIOPv2, issuance of VC credentials, etc.) we encountered a familiar challenge: the RP needs to know about the person’s providers (e.g. OpenIDConnect provider, wallet provider, SIOPv2 provider, age verification provider, etc.) so it can display appropriate buttons/choices.

To solve this, we came up with a lightweight, general-purpose spec that can be used by any RP to learn about, adapt to, and take advantage of many kinds of providers that a person might have. It is at https://providerdiscovery.org. 

We'd love to get feedback and see if this is something that others can use. Send us an email at contact@mee.foundation. 

