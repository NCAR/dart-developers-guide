DART flow
==========


main branch (master)

.. code-block::
  
  git clone https://github.com/NCAR/DART.git
  git checkout master
  git checkout -b new-feature

To push your branch up to the main DART repo:
  
.. code-block::
  
   git push origin new-feature  


Keeping your feature branch up to date with the master. Make sure you have your
changes committed to your new-feature branch. 

.. code-block::
  
  git checkout master
  git pull 
  git checkout new-feature 
  git merge master new-feature
  

#. Create and issue. 
   What is the problem you are trying to fix. 
   

#. Add a label to the issue
   The label helps prioritize the issue.  Is it a bug fix, is it a new feature, is it refactoring existing code?
   Use the label 'back-burner' for something  that is low priority

#. Describe you solution in the issue. 

   Give an estimation of how much code this will effect. 

#. Get some feedback on your solution, the standup is a good place to ask for volunteers

#. Create a feature branch with your solution.  Once you are happy with your 
feature branch, push the branch up to the main DART repo and create a pull request. 
You 

Public development
------------------




Private development
-------------------

When is it ok to use a private repo?