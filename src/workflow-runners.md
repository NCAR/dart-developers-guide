# Workflow Runners

Runners are the machines that execute jobs in a GitHub Actions workflow. Runners are hosted by GitHub and what is available depends on the GitHub orgainizaion tier ($$$). Each [workflow job](workflow-jobs.md) must specify their runner instance type.

The runners is specified by `runs-on:`  and can be chosen from this list of [runner instances](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources).

For DART's `action_on_pull_request.yml` workflow, the instance chosen is `ubuntu-latest` which loads an Ubuntu operating system on into your runner. 


```yaml
runs-on: ubuntu-latest                  # runner type
    container:                          # specifies a container to run on top of runner
      image: hkershaw/dart-dep:1.0      # uses dart-dep:1.0 container that is pulled from Dockerhub
      options: "--cap-add=SYS_PTRACE"   # nasty argument required for OpenMPI to work correctly in containers
```

At the time of writing, Linux-based runners have:
- 2 x84_64 CPU cores
- 7 GB of RAM
- 14 GB of local scratch storage

The pull request workflow also loads pre-built Docker container that is hosted on Dockerhub. The usage of a container here is for speed. The libraries that DART depend on, netcdf and mpi, are installed in the container. The recipes for [DART Docker containers](containers.md) are stored in the [DART-containers](https://github.com/NCAR/DART-containers), while the pre-built container image is hosted and pulled from the Dockerhub repository [hkershaw/dart-dep:1.0](https://hub.docker.com/repository/docker/hkershaw/dart-dep/general).
