# Workflow Jobs
Workflow jobs are the specific sets of tasks that can be configured to run on your workflow. Multiple jobs with potentially different runner instance types can be configured to run in your workflow.

> Important: multiple jobs are run parallelly on **separate** runner instances. One job cannot see the details of another job. However, job dependencies can be configured in your workflow ([Using conditions to control job executions](https://docs.github.com/en/actions/using-jobs/using-conditions-to-control-job-execution)).

GitHub Actions offer additional design options for running multiple parallel jobs such as [job matrices](https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs).
