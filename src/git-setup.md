# Using Git

DART is under version control with Git. 

## Setting up your git environment

Set your username and email that you want to be linked with git. What
you select here will be the 'author' information for your commits.

``` {.text}
git config --global user.name “Margaret Hamilton”
git config --global user.email mhamilton@nasa.gov
```

Set the editor you want to use for commit messages: vim, nano, emacs,
notepad++, whatever your favorite editor is. In this example, I am
setting my editor for commit messages to vim.

``` {.text}
git config --global core.editor vim
```

Note this doesn't mean you have to edit all code with vim. This just
means git will open vim when it wants you to write a commit message.

To display what your git settings are:

```
git config --list
```

## Setting your terminal prompt to display the branch

For bash users you can add the following to your `~/.profile` file to 
display the branch you have checked out.

```bash
# Git branch in prompt.

parse_git_branch() {
  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}

export PS1="\u@\h \W\[\033[31m\]\$(parse_git_branch)\[\033[00m\] $ "

```

