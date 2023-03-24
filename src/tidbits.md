# Tidbits
- using a `YAML` validator available online ([such as this](https://jsonformatter.org/yaml-validator)) is instrumental for catching syntactical errors with `YAML` files
- after each `run:` step, you will be placed back to the top-most directory of the runner and will have to `cd` back to your working directory if you split your tasks across multiple `run:` steps.
- for every run of a GitHub Actions workflow, a GitHub token is generated for the runner instances to use such that it is able to perform tasks such as checking out your repo. For DART, the default permissions of the generated GitHub token has been set  to read-only, however, it can be changed in a workflow. If your workflow requires additional permissions, consult with someone about if it is necessarily needed.
- the following pages are useful for securing your workflow:  
     - [https://docs.github.com/en/actions/security-guides/automatic-token-authentication](https://docs.github.com/en/actions/security-guides/automatic-token-authentication)
     - [https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)
