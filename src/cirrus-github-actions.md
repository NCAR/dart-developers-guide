# CIRRUS GitHub Actions

We can utilize [CIRRUS](https://ncar-hpc-docs.readthedocs.io/en/latest/compute-systems/cirrus/guides/01-intro/) (the NSF NCAR Cloud Infrastructure for Remote Research, Universities, and Scientists) to run GitHub Actions.

The current workflow implementation that uses CIRRUS is described in [Workflows](./github-actions-workflow.md).

These CIRRUS runner scale sets require permission to use them. To use CIRRUS runner scale sets with a new GitHub repository, reach out to the CIRRUS team by creating a ticket in JIRA. See the CIRRUS documentation on [Requesting a Runner Scale Set](https://ncar-hpc-docs.readthedocs.io/en/latest/compute-systems/cirrus/guides/05-github-actions/scale-sets/#requesting-a-runner-scale-set) for more information on how to create a ticket. However, despite what the documentation currently says (as of March 18 2026), it is recommended to reach out to the CIRRUS team BEFORE creating a GitHub PAT and adding it to NCAR OpenBao. This is due to the CIRRUS team starting to deploy shared organizational runners since this documentation has been updated.

Once the repository has been added to the list of permitted repositories, you can verify this by navigating to the home page of the repository in your browser. Then select `Actions` (at the top) -> `Runners` (on the left) -> `Self Hosted Runners`. You should now see a section "Shared with this repository". Under that you should see a couple options *-cirrus-4x8. If those appear, you are ready to use the CIRRUS runner scale sets.

Note that the DART repository already has access to the CIRRUS runner scale sets, so new GitHub Actions in DART can be setup to use CIRRUS simply by specifying the runner in the workflow. 

See [Workflow Runners](./workflow-runners.md) for instructions on howt to use the CIRRUS runners in a workflow. 

Sign up for the CIRRUS mailing list (ADD HERE) to get updates on CIRRUS and be notified when CIRRUS is down or under maintenance.
