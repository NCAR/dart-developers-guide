# Workflow Triggers
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
