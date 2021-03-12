.. _reviewing:

Pull requests
========================


Reviewing
---------

The key questions to think about when reviewing pull requests:

#. Does this pull request address the issue? If the pull request contains other 
   changes that are not related, it is ok to close the pull request.  
#. Has the code passed the required tests? 
#. Has the documentation been updated? 
#. Does the pull request improve the existing code?
#. Does this pull request break backwards compatibility? If so, now may not be 
   the time to merge this feature.  

When giving comments on code, try to give comments that:

* are actionable.
* differentiate between a *suggestion*, a *definite change*, or a point that 
  needs a *discussion or clarification*. 
* are collaborative not accusatory.  

If there are a lot of comments or questions on the code, schedule and in person 
meeting.  


Checking out pull requests
^^^^^^^^^^^^^^^^^^^^^^^^^^^

For pull requests that are following :ref:`DART flow <DART-flow>` you can 
checkout the feature branch from the `DART repo <https://github.com/NCAR/DART>`_

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

It can be quite difficult having someone review your code.  Remember software 
engineering is *programming integrated over time*. Code reviews are a process to 
produce better code and better developers.  
Karl Wieger's article `Humanizing Peer Reviews <https://www.processimpact.com/articles/humanizing_reviews.pdf>`_
is a good read about overcoming some of the barriers to successful peer review.  
  


  
