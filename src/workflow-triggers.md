# Workflow Triggers
GitHub Actions contains many possible triggers for starting your workflows. 

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

DART's `action_on_pull_request.yml` workflow is triggered upon the creation and reopening of any pull requests to DART. Additionally, the `synchronize` type specifies that the workflow should be triggered for any subsequent commits made to the pull request branch.


```yaml
on:
  pull_request:
    types: [ opened, reopened, synchronize, ready_for_review ]
```

More event trigger options can be found [here](https://docs.github.com/en/actions/using-workflows/triggering-a-workflow).
