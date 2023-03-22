# Workflow Runners
GitHub Actions refers to the virtual machines that your workflows run on top of as runners. These are hosted by GitHub and their availability depends on the repo's organization tier. Each [workflow job](workflow-jobs.md) must specify their runner instance type.

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
