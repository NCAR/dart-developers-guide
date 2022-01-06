Creating a Release
==================

The DART releases are available on Github:

https://github.com/NCAR/DART/releases

The releases loosely follows the rules of `semantic versioning <https://semver.org/>`_
with a v at the start, e.g. v9.10.11. 

.. code-block::

   vMAJOR.MINOR.PATCH

Given a version number vMAJOR.MINOR.PATCH, increment the:

| MAJOR version when you make incompatible API changes,
| MINOR version when you add functionality in a backwards compatible manner, and
| PATCH version when you make backwards compatible bug fixes.

You may want to use additional labels for pre-release or other code as extensions to the vMAJOR.MINOR.PATCH format.

.. warning::

   Make sure your pull request is up-to-date with main before merging and creating a release.

To create a release on Github:

#. Decide on a tag number following the convention `vMAJOR.MINOR.PATCH`.
#. Update the CHANGELOG.rst with the tag and a brief desciption of the changes.
#. Change the version in `conf.py` 
#. Merge into main
#. Create a release on GitHub from the main branch, by clicking on `Draft a new release`.
    .. image:: new-release.png
      :width: 800
      :alt: draft-new-release
#. Enter the tag number.  Make sure the target branch is main.
#. Give the release a title and description.
#. Click publish to create the release.


For a major release or critical bug-fix releases, you may want to email the dart-users group.
