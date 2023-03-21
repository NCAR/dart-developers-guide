# Workflows

Workflows are the configured pipelines that automatically run depending on triggers specified for a workflow. Configuration of a Github Actions workflow is done in a `YAML` file containing key-value pairs. Keys are the labels that the Github Action [runners](workflow-runners.md) interpret, and the values are arguments for the specific labels.

Example Github Actions `YAML` file:

```yaml
name: Example Github Actions YAML Structure
run-name: ${{ github.actor }} triggered workflow via Push

on: push                                     # trigger workflow on Push to repo

jobs:
  echo-hello-world:                          # name of current workflow job
    runs-on: ubuntu-latest                   # choose operation system for workflow to run on
    steps:
      - name: Echo 'Hello World!' to shell   # Divide instruction sets by categories or 'names'
        run: echo 'Hello World!'             # 'run' label executes the paired value in the runner shell
```

Workflow `YAML` files must be placed inside the repository's `.github/workflows/` directory.
Results and logs of your workflows are located in the ['Actions' tab](https://github.com/NCAR/DART/actions) of your Github Repository.

This document only aims to give a brief overview of Github Action Workflows. Further documentation can be officially found [here](https://docs.github.com/en/actions/using-workflows/about-workflows).

The following sections will refer to DART's `action_on_pull_request.yml` workflow, which can be view [here](https://github.com/NCAR/DART/tree/main/.github/workflows). This workflow builds and runs two models in a container that is loaded onto the Github Runner instance.





