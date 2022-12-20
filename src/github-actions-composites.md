# Composite Actions
Composite Github Actions are re-useable and shareable bits that can be packaged and inserted into workflows.

# Requirements
Composite actions have the following structural requirements:

If the composite action is hosted within the main repository:
- a directory that signifies the name of the composite action is located in `.github/actions/`
- inside that directory **must** exist a file named `action.yml`

For the example of DART's local `build_run_model` composite action, its path in DART is: `.github/actions/build_run_model`.
Then the location of the `action.yml` is `.github/actions/build_run_model/action.yml`.

If you decide to host your composite action as its own Github repository:
- the name of the repository is the name of the composite action
- an `action.yml` file **must** exist in the top-most directory of the repository

For an example of a Github hosted composite action, see [actions/checkout](https://github.com/actions/checkout)'s repo, which is a composite action commonly used for checking out a Github repository into your Github Actions' runner instance.


This document will go over an example of how the composite action `build_run_model` is used inside the workflow `action_on_pull_request.yml` in DART [https://github.com/NCAR/DART/tree/main/.github/actions](https://github.com/NCAR/DART/tree/main/.github/actions).

For a more detailed documentation, take a look at Github's getting started guide for composite actions: [https://docs.github.com/en/actions/creating-actions/creating-a-composite-action](https://docs.github.com/en/actions/creating-actions/creating-a-composite-action).

## Usage
Before going over the specifics of how a composite action is constructed, let's first take a look at how a composite action is used inside a workflow.

Inside `action_on_pull_request.yml`:
```yaml
jobs:
  build-run-lorenz_96:
    [...]
    steps:
    - name: Checkout repo into runner instance
      uses: actions/checkout@v3 
```
Invocation of a composite action is done by the `uses:` key. In the above example, the publically available `checkout` composite action is being invoked. When using a hosted composite action, the syntax is `<username>/<composite_name>[@v<release-version>]`. For the above case, we are using version 3 of the `checkout` composite action.

If the composite action being used has input parameters available, then invoking that action would look like this:
```yaml
jobs:
  build-run-lorenz_96:
    [...]
    steps:
    - name: Checkout repo into runner instance
      uses: actions/checkout@v3                 # invoking remotely hosted composite action
      with:                                     # for specifiying arguments passed to composite action
        path:  ...                              # specify the path for checkout action to be performed in  
        token: ...                              
```
where values assigned to the keys `path` & `token` would be passed to the composite action to be used.

If the composite action exists locally within your repository (inside `.github/actions/[composite_action_dir]`), invoking the composite would look like the following:
```yaml
jobs:
  build-run-lorenz_96:
    [...]
    steps:
      [...]
      - name: Build and run lorenz_96
        uses: ./.github/actions/build_run_model
        with: 
          model: lorenz_96
          run-program: ./filter
          use-mpi: true
          mpi-n-tasks: 2
```
For local composite actions, the `uses` key requires a full path from repository directory to the directory of your composite action containing the `action.yml` file. 

As the example indicates, the composite action `build_run_model` is being invoked with four arguments: `model`, `run-program`, `use-mpi`, and `mpi-n-tasks`. A composite action may contain arguments that are not required to be specified upon invocation.

## `action.yml` File
Now that we've taken a looked at how composite actions can be called, let's look at how the composite action file `action.yml` is constructed. Specifically, `build_run_model`'s `action.yml`.

```yaml
name: 'Build and run model'
description: 'Build and run given model'

# All possible input parameters that can be specified when using this composite action
inputs:
  models-directory:
    description: 'path to top-level directory containing the model to build and run'
    type: string
    required: false
    default: 'models/'
  model: 
    description: 'name of existing DART model'
    type: string
    required: true
    default: 'lorenz_96'
  [...]
```
Near the top of `action.yml`, is where the different input parameters are located. To references an argument passed to the composite action from a workflow, the syntax will look as follows: `${{ inputs.<parameter_name> }}`. 


Following the specified possible input parameters, is the meat of composite actions.
```yaml
runs:
  using: "composite"
  steps:
    # Steps to create Makefile template
    - name: Creating Makefile template :)
      run: |
        cd build_templates
        cp mkmf.template.gfortran mkmf.template
        echo 'FFLAGS = -g -Wuninitialized -Wunused -ffree-line-length-none -fbounds-check -fbacktrace -ffpe-trap=invalid,zero,overflow $(INCS)' >> mkmf.template
      shell: bash
    # Steps to compile and build model
    - name: Building ${{ inputs.model }} model
      run: |
        cd ${{ inputs.models-directory }}/${{ inputs.model }}/work
        ./quickbuild.sh
      shell: bash
  [...]
```

A composite action is initially defined the `using: "composite"` line after the `run:` label. A composite action is almost like a giant `run:` instruction from [workflows](./github-actions-workflow.md), but is more flexible with the use of input parameters. One key point to make is that `shell: bash` has to be specified for each run `step:` inside a composite action. 

