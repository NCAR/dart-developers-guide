# Usage

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
