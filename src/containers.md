# DART Docker Containers


DART Docker files are stored in the [DART-containers](https://github.com/NCAR/DART-containers.git) repo. 

If you add containers to this repo, follow the convention of 

> one Dockerfile per directory.

NCAR has a dockerhub organization, but has used up its allotted number of users.  Possibly at some point NCAR will increase their dockerhub licenses. 

DART Docker images are hosted on the [hkershaw](https://hub.docker.com/repositories/hkershaw) dockerhub.  
If we make more use of containers, we may need to look at creating a DART organization.

NCAR HPC Docker images (to be used with CIRRUS-based actions), are hosted on the [ncarcisl/hpcdev-x86_64](https://hub.docker.com/r/ncarcisl/hpcdev-x86_64) dockerhub.
Note that there are also NCAR HPC Docker images for alternative architectures, such as the images in [ncarcisl/hpcdev-aarch64](https://hub.docker.com/r/ncarcisl/hpcdev-aarch64), that can be used to run the containers locally.
These images provide a number of various tags to allow for the usage of different compilers and MPI implementations.
