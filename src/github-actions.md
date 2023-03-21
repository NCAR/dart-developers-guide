# Github Actions

Github Actions is a software development automation platform that is integrated into Github repositories. The platform allows for the creation of several types of automated tasks such as build, test, and deployment. A set of these tasks is referred to as a [workflow](./github-actions-workflow.md).

## Quick Start Guide

[Official Github Actions quick start guide](https://docs.github.com/en/actions/quickstart)

## Github Actions for DART

DART utilizes Github Actions to start automated tests for smaller models such as `lorenz_96` & `lorenz_64`. These tests are run at the early stages of development, usually upon a code commit to the remote repo. The goal of executing tests in the earlier stages of development is to catch and resolve bugs before they persist into a production environment, only to be found at a later date. Letting bugs fester over time in production will usually result in a higher labor cost to resolve the bug, rather than if caught early. 

The following documentation pages for Github Actions in DART will go over:
- [example construction of a workflow in DART](github-actions-workflow.md)
- [composite Github Actions](github-actions-composites.md)


