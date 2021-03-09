.. _reviewing:

Pull requests
========================


Reviewing
---------

The key question to ask when reviewing pull requests:

#. Does the pull request improve the existing code?

Checking out pull requests
^^^^^^^^^^^^^^^^^^^^^^^^^^^

For pull requests that are following :ref:`DART flow <DART-flow>` you can 
checkout the feature branch. 

.. code-block:: text

  git fetch origin
  git checkout feature-branch
	
To checkout a pull request that is not from a branch on the DART repository, for 
example a pull request from an external collaborator.

.. code-block:: text
 
  git fetch origin pull/ID/head:BRANCHNAME
  git checkout BRANCHNAME

where ID is the number of the pull request and BRANCHNAME is your choice for 
the name of the branch

Being Reviewed
---------------

.. note::

	You are not your code
  

  