# Workflows

GitHub Actions workflows are configured with `YAML` files. 

Example GitHub Actions `YAML` file:

```yaml
name: Example GitHub Actions YAML Structure
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
Results and logs of your workflows are located in the ['Actions' tab](https://github.com/NCAR/DART/actions) of your GitHub Repository.

This document only aims to give a brief overview of GitHub action workflows. For indepth documentation visit [docs.github.com](https://docs.github.com/en/actions/using-workflows/about-workflows).




