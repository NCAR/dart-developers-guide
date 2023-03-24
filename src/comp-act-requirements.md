# Requirements

Composite actions have the following structural requirements:

If the composite action is hosted within the main repository 
- a directory that signifies the name of the composite action is located in `.github/actions/`  
- inside that directory **must** exist a file named `action.yml`

For DART's `build_run_model` composite action, its path in DART is: `.github/actions/build_run_model`.  
The location of the `action.yml` is `.github/actions/build_run_model/action.yml`.

If you decide to host your composite action as its own GitHub repository:
- the name of the repository is the name of the composite action
- an `action.yml` file **must** exist in the top-most directory of the repository

For an example of a GitHub hosted composite action, see [actions/checkout](https://github.com/actions/checkout)'s repo, which is a composite action commonly used for checking out a GitHub repository into your GitHub Actions' runner instance.


This document will go over an example of how the composite action `build_run_model` is used inside the workflow `action_on_pull_request.yml` in [DART/.github/actions/](https://github.com/NCAR/DART/tree/main/.github/actions).

For a more detailed documentation, take a look at GitHub's getting started guide for composite actions: [https://docs.github.com/en/actions/creating-actions/creating-a-composite-action](https://docs.github.com/en/actions/creating-actions/creating-a-composite-action).
