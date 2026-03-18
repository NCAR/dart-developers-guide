# NCAR HPC Containers

NCAR HPC containers are HPC-centric development containers encapsulating a basic NCAR-ish development environment (i.e. Derecho).

NCAR HPC Docker images are hosted on the [ncarcisl Docker Hub](https://hub.docker.com/r/ncarcisl).

There are images availble for the architctures x86_64 and aarch64. They are located at [ncarcisl/hpcdev-x86_64](https://hub.docker.com/r/ncarcisl/hpcdev-x86_64) and [ncarcisl/hpcdev-aarch64](https://hub.docker.com/r/ncarcisl/hpcdev-aarch64), respectively. 

Note that the `ncarcisl/cisldev` images are deprecated and should not be used. 

The [ncarcisl/hpcdev-x86_64](https://hub.docker.com/r/ncarcisl/hpcdev-x86_64) Docker images can be used to run GitHub Actions on CIRRUS runner scale sets. See [CIRRUS GitHub Actions](./cirrus-github-actions.md) for more information on CIRRUS-based GitHub Actions and how to utlize the containers in these workflows.

The [ncarcisl/hpcdev-aarch64](https://hub.docker.com/r/ncarcisl/hpcdev-aarch64) Docker images can be pulled and run locally on machines with an ARM processor. This is useful for testing and troubleshooting the desired workflow independent of the GitHub Actions framekwork and CIRRUS. 

The following is an example of how to pull and run an NCAR HPC container locally:
`docker run -it ncarcisl/hpcdev-aarch64:leap-gcc14-mpich-latest /bin/bash`

There are various tags available for these images to allow for the usage of different compilers and MPI implementations. You can see all the available image variations by navigating to the Docker Hub page for the desired architecture and then selecting `Tags`. The tag is specified following the name of the Docker image and a colon. In this example, `ncarcisl/hpcdev-aarch64:leap-gcc14-mpich-latest`, the tag is `leap-gcc14-mpich-latest`.

Upon setup, there are common issues that may be run into. The remainder of this page will go over some of these issues and how to go about fixing them.

The first is specifying an old or depreacted nomencalture for the conatiner image, since these containers are still in deveopment and are subject to changes. Currently (as of March 17 2026), the up-to-date nomenclature for the Docker image is `dockerhub.io/ncarcisl/hpcdev-x86_64:tag`, replacing `tag` with the acutal name of the desired tag. You can stay up-to-date with regards to such updated by signing up for the CIRRUS mailing list (ADD HERE).

Another common issue when utilizing NCAR HPC Containers is not correctly initializing the shell. This will cause the GitHub Action to fail in the `Initiaize containers` phase of the Action with the following error:
`Error: Executing the custom container implementation failed. Please contact your self hosted runner administrator.`

To fix this issue ensure the following code is added to the workflow file after 'runs-on:' and before the 'container:' definition:

    defaults:
      run:
        shell: bash -elo pipefail {0}

This forces the container to start a bash login shell, which causes the 'ncarcisl' containers to initialize their software environment by 'sourcing' a common configuration file (/container/config_env.sh).

To fix this issue when running a container image locally, source the configuration file manually with `source config_env.sh`.
