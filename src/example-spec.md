# Writing Specifications

> The goal is software engineering is to solve problems. 
> Code is one part of this.

A spec outlines how you are going to solve a particular technical
problem. Here are some questions to have in mind when you sit down to
write a spec:

-   What is the problem you are trying to solve?
-   Is this the right problem to be solving?
-   What are the possible solutions to the problem?
-   What are the trade-offs for the solution you chose?
-   How should you test your solution? For each test, what is a pass,
    what is a fail

A good spec, has many advantages:

-   You can get feedback on your design before you write a lot of code.
-   It allows other people to get an idea of the scope of your problem,
    and prioritize the most critical parts.
-   A good spec can be the base for your documentation.
-   A spec can be used when judging how successful a particular effort
    was.

The drawbacks of specs:

-   You might not really be able to think about the problem until you
    start writing the code.
-   You may plan in great detail, but encounter unexpected problems that
    take your code in a completely different direction.


Note

When you write a spec, put your name on it.

Below is an outline of what to put in a spec with some examples.


------------------------------------------------------------------------
## Front Matter

Title: Using Zarr files with DART

Author: Carol Shaw

Date: November 5th 1982

## Overview

Describe the goal of the project. The big picture, why it is important,
what problem is it going to solve. An example,

> DART needs to be able to work with Zarr files because data
> assimilation has become a key part of animating the next Toy Story
> movie and much of the computation will be done in the cloud.

## Terminology

Define any terminology that someone reading the spec needs to know. For
example,

**Zarr** : A file format for storing chunked, compressed arrays 
that plays nicely with cloud storage.

## Functional Specification

This describes the expected behavior of the system. Its purpose is to
describe how a user will interact with the system. One of the uses for a
functional spec is in designing tests, because the tests should check
the expected behavior of the system.

**Default behavior** : 

What the system will do.

**User options** : 

What options a user can choose, and what is the 
expected behavior for each option.

You may want to write the functional spec in the form of user stories:

>Angelica Pickles is simulating a tornado with WRF and wants to output
>Zarr files. She sets the namelist options `restart-format =
>Zarr` and runs filter.


>Details about how a user interacts with the code, are probably the part
>of the spec that gives you the most bang for your buck.

## Technical Specification

This describes how the solution will be implemented. This technical spec
can be used to design unit tests. The technical spec may include
performance requirements.

## Open Issues

List any unsolved issues. This helps people reading the spec to
understand the crux(es) for the project.

## Non Goals

This describes what is out of scope for this project. For example,

> The character design for Woody in the next Toy Story movie
