# Public development

In general, all DART development is public, either on the DART
repository or a fork of the DART repository.

## Private development

When is it ok to use a private repo?

- Collaborators require a private repo for development.
- You want to have content for the DART team only.

If you want to use Github with a private version of the DART repo with
your collaborators. You can create a new private repository on Github,
for example <https://github.com/your-private-repo>, and use this new
private repo as a remote. Follow the same conventions for
[feature branch workflow](./feature-branch.md)
by creating a branch for you and your collaborators to use.

```
git clone https://github.com/NCAR/DART.git
cd DART
git checkout main
git checkout -b embargoed-feature
git remote add collab https://github.com/your-private-repo
git push -u collab embargoed-feature
```

In the above example,

<https://github.com/your-private-repo> is the private repository.

**embargoed-feature** is the branch where the private development will be done.

**collab** is the name of the remote.

To list all the remotes you have for a repository, use

```
git remote -v
```

