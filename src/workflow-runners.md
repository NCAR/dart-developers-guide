# Workflow Runners

Runners are the machines that execute jobs in a GitHub Actions workflow. Runners are hosted by GitHub and what is available depends on the GitHub orgainizaion tier ($$$). Each [workflow job](workflow-jobs.md) must specify their runner instance type.

The runners are specified by `runs-on:`  and can be chosen from this list of [Github-hosted runner instances](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources).

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

Alternatively, the CIRRUS self-hosted runners can be used. This can be done by specifying `runs-on:` as shown below.

```yaml
runs-on:
  group: cirrus-4x8                                                                 # runner type
    container:                                                                      # specifies a container to run on top of runner
      image: docker.io/ncarcisl/hpcdev-x86_64:almalinux9-gcc-openmpi-latest      # uses ncarcisl/hpcdev-x86_64 container image that is pulled from Dockerhub
```

The pull request workflow also loads pre-built Docker container that is hosted on Dockerhub. The usage of a container here is for speed. The libraries that DART depend on, netcdf and mpi, are installed in the container. The recipes for [DART Docker containers](containers.md) are stored in the [DART-containers](https://github.com/NCAR/DART-containers), while the pre-built container image is hosted and pulled from the Dockerhub repository [hkershaw/dart-dep:1.0](https://hub.docker.com/repository/docker/hkershaw/dart-dep/general).

The pre-built container images for the NCAR HPC containers are hosted and pulled from the Dockerhub repository [docker.io/ncarcisl/hpcdev-x86_64](https://hub.docker.com/r/ncarcisl/hpcdev-x86_64). See [NCAR HPC Containers](./ncar-hpc-containers.md) for more information.
