documentationDART web presence
==================


Documentation
--------------

The documentation for DART is written in reStructuredText, then converted to 
html using Sphinx.  The conversion to html is done automatically by readthedocs,
when new content is pushed to a branch. 

.. warning::

	Currently readthedocs is building from the ``sphinx-documentation`` branch.  

You can build the DART documentation locally using Sphinx. 


Installing Sphinx
^^^^^^^^^^^^^^^^^^^^^^^ 

 
To install Sphinx in a Python virtual environment:

.. code:: text

    python -m venv dev-guide
    source dev-guide/bin/activate
    pip install Sphinx


To make the docs, run:

.. code:: text

    make html

To view the docs:

.. code:: text

   open html/index.html 

with your favorite browser.


https://ncar.github.io/dart-developers-guide/

To deactivate the virtual environment

.. code:: text
   
    deactivate


Website 
--------