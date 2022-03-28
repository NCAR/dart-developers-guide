# Feature Branch Workflow

DART is using a Feature Branch Workflow. 

>"The core idea behind the
>Feature Branch Workflow is that all feature development should take
>place in a dedicated branch instead of the main branch. This
>encapsulation makes it easy for multiple developers to work on a
>particular feature without disturbing the main codebase."

It also means, ideally, that the main branch will never contain broken code.
Atlassian has a nice comparison of the various
[workflows](https://www.atlassian.com/git/tutorials/comparing-workflows)
people use.

## Branch naming conventions

**main**

This is the main branch. It should always work.

**feature-branch**

Your feature branch should have a descriptive name which indicates
what bug fix or feature the branch contains. For example, a feature
branch for adding a flu forecasting model could be called:
*flu-model*

**gh-pages**

This branch is used to serve the website dart.ucar.edu. It only has
the website content. To make changes to the website, follow the
instructions on <https://github.com/NCAR/dart-web>.
