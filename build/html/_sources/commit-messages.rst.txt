Writing Commit Messages
=======================

Setting up your git environment
--------------------------------

Set your username and email that you want to be linked with git. 
What you select here will be the ‘author’ information for your commits.

.. code-block:: text

  git config --global user.name “Margaret Hamilton”
  git config --global user.email mhamilton@nasa.gov

Set the editor you want to use for commit messages: vim, nano, emacs, notepad++, 
whatever your favorite editor is. In this example, I am setting my editor for 
commit messages to vim. 

.. code-block:: text
  
  git config --global core.editor vim

Note this doesn’t mean you have to edit all code with vim. This just means git 
will open vim when it wants you to write a commit message. 

To display what your git settings are:

.. code-block:: text
  
  git config --list
  
  
Writing Good Commit Messages
-----------------------------

.. code-block:: text

  one line short summary of the change

  more detail if needed on why you changed what

For example, 

.. code-block:: text 
  
  Place ring in Mount Doom
  
  Ring is destroyed, Sauron loses his power forever. All he created collapses, 
  the Nazgûl perish, and his armies are thrown into such disarray that Aragorn's
  forces emerge victorious.

.. warning::

	Commit messages are visible to the whole world on Github. 
        	
