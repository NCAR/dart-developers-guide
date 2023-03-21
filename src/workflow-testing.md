# Workflow Testing
When developing a workflow, it is a good idea to create a separate repository for development as to not disturb anyone that follows the main repository. For DART, there exists the following test repository, [https://github.com/NCAR/github-actions-test](https://github.com/NCAR/github-actions-test), to develop and test-run your workflows. 

As you develop your workflow, you will notice that for test-runs, there will be a lot (potentially 100s) of commits made to your workflow feature branch. As a result, it is a good idea to rebase and square the commits made before merging into the main branch.

There are open-sourced tools available that help with the development process and even allow for workflows to run locally on your machine for testing:
- [https://github.com/nektos/act](https://github.com/nektos/act)
