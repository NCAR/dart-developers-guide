# action.yml File
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
