# Pull requests

The main branch of DART is protected.  New code needs to be submitted as 
pull request.  At least one approval from a member of the DART team is needed
to merge code into main. The process to go from a pull request to released 
code is:

- review [reject, request changes, approve]
- make required changes
- merge
- tag a release

## Reviewing

The key questions to think about when reviewing pull requests:

1.  Does this pull request address the issue? If the pull request
    contains other changes that are not related, it is ok to close the
    pull request.
2.  Has the code passed the required tests?
3.  Has the documentation been updated?
4.  Does the pull request improve the existing code?
5.  Does this pull request break backwards compatibility? If so, now may
    not be the time to merge this feature.

When giving comments on code, try to give comments that:

-   are actionable.
-   differentiate between a *suggestion*, a *definite change*, or a
    point that needs a *discussion or clarification*.
-   are collaborative not accusatory.

If there are a lot of comments or questions on the code, schedule and in
person meeting.

### Checking out pull requests

For pull requests that are following
[DART flow](./dart-flow.md) you can checkout
the feature branch from the [DART repo](https://github.com/NCAR/DART)

```
git fetch origin
git checkout feature-branch
```

To checkout a pull request that is not from a branch on the DART
repository, for example a pull request from an external collaborator.

```
git fetch origin pull/ID/head:BRANCHNAME
git checkout BRANCHNAME
```

where ID is the number of the pull request and BRANCHNAME is your choice
for the name of the branch

## Being Reviewed

It can be quite difficult having someone review your code. Remember
software engineering is *programming integrated over time*. Code reviews
are a process to produce better code and better developers. Karl
Wieger's article [Humanizing Peer
Reviews](https://www.processimpact.com/articles/humanizing_reviews.pdf)
is a good read about overcoming some of the barriers to successful peer
review.

