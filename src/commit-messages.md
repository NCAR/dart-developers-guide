# Commititing your code

How and when you commit your code can make life easier for other developers and your future self.
In general, you should aim to make your code changes easy for other members of the DART team
to review, cherry-pick, and revert. Ideally, you should:

- Separate functional changes from style changes
- Write good commit messages


## Writing Good Commit Messages

```
one line short summary of the change

more detail if needed on why you changed what
```

For example,

```
Place ring in Mount Doom

Ring is destroyed, Sauron loses his power forever. All he created collapses, 
the Nazgûl perish, and his armies are thrown into such disarray that Aragorn's
forces emerge victorious.
```

> **Be aware**: commit messages are visible to the whole world on Github.


You can link to github issues on <https://github.com/NCAR/DART/issues> from commit messages
using the #issue-number syntax, for example:

```
bug-fix for #245 namelist values need to be the same type as variable
```

We do not have a strict convention such as [commitizen](http://commitizen.github.io/cz-cli/)
enfored for commits, but you may want to start your commit with one of the following to make 
searching log files easier.  

```
bug-fix:
refactor:
style:
```



