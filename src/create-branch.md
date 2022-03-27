# Creating a feature branch

Create your feature branch from the main branch.

```text
git clone https://github.com/NCAR/DART.git
cd DART
git checkout main
git checkout -b new-feature
```

where *new-feature* is the name of your feature branch.

Try not to name your branch after yourself, e.g
*barbara-liskov*. Pick a name that represents what you are
working on, e.g. *oop-version-of-filter*.

To push your branch up to the DART repo:

```
git push -u origin new-feature  
```

Note

The -u flag means your local copy will track the remote repo. It is no
big deal if you don't do it, but it is nice to have `git
status` tell you "your branch is up to date with
remote/new_branch_name" or "your branch is 2 commits behind
remote/new_branch_name"

## Keeping your feature branch up to date with the main

As you are working on your feature branch, the main branch may have been
updated.

To keep your feature branch up to date with the main:

```
git checkout main
git pull 
git checkout new-feature 
git merge main new-feature
```

Make sure you have committed any changes to your new-feature branch
before updating from the main

Once your feature is ready for review, submit a
[pull request](./reviewing.md)
