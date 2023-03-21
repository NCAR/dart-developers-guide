# Workflows

Workflows are the configured pipelines that automatically run depending on triggers specified for a workflow. Configuration of a Github Actions workflow is done in a `YAML` file containing key-value pairs. Keys are the labels that the Github Action [runners](#workflow-runners) interpret, and the values are arguments for the specific labels.

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

## Workflow Triggers
Github Actions contains many possible triggers for starting your workflows. Many of which contain additional configuration options for more precise triggers. 

Example trigger events to start your workflow include:
- on push
- on pull requests
    - opening/closing
    - subsequent commits to pull requests
    - ready_for_review
- on issues
    - new issue creation
    - comment added to an issue
    - closing of an issue
- on fork
- etc...

For DART's `action_on_pull_request.yml` workflow, as seen the following lines:
```yaml
on:
  pull_request:
    types: [ opened, reopened, synchronize, ready_for_review ]
```
is triggered upon the creation and reopening of any pull requests inside the repo. Additionally, the `synchronize` type specifies that the workflow should be triggered for any subsequent commits made to the pull request branch.

More event trigger options can be found [here](https://docs.github.com/en/actions/using-workflows/triggering-a-workflow).

## Workflow Runners
Github Actions refers to the virtual machines that your workflows run on top of as runners. These are hosted by Github and their availability depends on the repo's organization tier. Each [workflow job](#workflow-jobs) must specify their runner instance type.

Specific types of runners is specified by the `runs-on:` key and can be chosen from this list of [runner instances](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources).

For DART's `action_on_pull_request.yml` workflow, 

```yaml
runs-on: ubuntu-latest                  # runner type
    container:                          # specifies a container to run on top of runner
      image: hkershaw/dart-dep:1.0      # uses dart-dep:1.0 container that is pulled from Dockerhub
      options: "--cap-add=SYS_PTRACE"   # nasty argument required for OpenMPI to work correctly in containers
```

the instance chosen is `ubuntu-latest` which loads an Ubuntu operating system on into your runner. The hardware specifications of runner instances can be found [here](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources). At the time of writing, Linux-based runners have:
- 2 x84_64 CPU cores
- 7 GB of RAM
- 14 GB of local scratch storage

The pull request workflow also loads pre-built Docker container that is hosted on Dockerhub. The usage of a container here is for the portability of the libraries that DART depend on. The recipes for DART Docker containers are hosted in the repo here: https://github.com/NCAR/DART-containers, while the pre-built container image is hosted and pulled from the Dockerhub repository `hkershaw/dart-dep:1.0`.

## Workflow Jobs
Workflow jobs are the specific sets of tasks that can be configured to run on your workflow. Multiple jobs with potentially different runner instance types can be configured to run in your workflow.

> Important to note that multiple jobs are run parallelly on **separate** runner instances. One job cannot see the details of another job, however, job dependencies can be configured in your workflow ([Using conditions to control job executions](https://docs.github.com/en/actions/using-jobs/using-conditions-to-control-job-execution)).

Github Actions offer additional design options for running multiple parallel jobs such as [job matrices](https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs).


## Workflow Testing
When developing a workflow, it is a good idea to create a separate repository for development as to not disturb anyone that follows the main repository. For DART, there exists the following test repository, [https://github.com/NCAR/github-actions-test](https://github.com/NCAR/github-actions-test), to develop and test-run your workflows. 

As you develop your workflow, you will notice that for test-runs, there will be a lot (potentially 100s) of commits made to your workflow feature branch. As a result, it is a good idea to rebase and square the commits made before merging into the main branch.

There are open-sourced tools available that help with the development process and even allow for workflows to run locally on your machine for testing:
- [https://github.com/nektos/act](https://github.com/nektos/act)

## Tidbits
- using a `YAML` validator available online ([such as this](https://jsonformatter.org/yaml-validator)) is instrumental for catching syntactical errors with `YAML` files
- after each `run:` step, you will be placed back to the top-most directory of the runner and will have to `cd` back to your working directory if you split your tasks across multiple `run:` steps.
- for every run of a Github Actions workflow, a Github token is generated for the runner instances to use such that it is able to perform tasks such as checking out your repo. For DART, the default permissions of the generated Github token has been set  to read-only, however, it can be changed in a workflow. If your workflow requires additional permissions, consult with someone for if it is necessarily needed. 
    - the following pages are useful for securing your workflow:
        - [https://docs.github.com/en/actions/security-guides/automatic-token-authentication](https://docs.github.com/en/actions/security-guides/automatic-token-authentication)
        - [https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)