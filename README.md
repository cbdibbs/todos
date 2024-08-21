# salesforce-unlocked-package-template

[![Salesforce](https://img.shields.io/badge/salesforce-%230097D8?&style=for-the-badge&logo=salesforce&logoColor=white&Color=white)](https://img.shields.io)

> A template repository to give a starting point for new unlocked package repositories.

## How To Use

1. Create the new package repository using this repo as the [template repository](https://docs.github.com/en/enterprise-server@3.8/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template). The new package name should be used as the repo name.

> NOTE: Be sure to create it within the `thrivent` github organization.

2. Add the [appropriate github team](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository) as an admin to the new repository.

3. Add the [required github variables/secrets](https://thrivent.atlassian.net/wiki/x/z4CmIQ) to the new repo.

4. Run the [Prep](./.github/workflows/prep-repo.yml) github action workflow **in the new repository**. This workflow will require the package name as well as the package prefix. A variety of tasks will be completed in this workflow

    - Update the [scratch def](./config/project-scratch-def.json) to have future scratch orgs created with unlocked package name.

    - Update the [sfdx project](./sfdx-project.json) file to use the package prefix and package name provided.

    - Rename the `force-app` directory to the package prefix.

    - Create the package within the devhub.

    - Tweak the [sfdx project](./sfdx-project.json) file to remove unncessary properties added during package creation and set the semantic version to `1.0.0.NEXT`

5. It is highly recommended to adjust the [CODEOWNERS](./.github/CODEOWNERS) file to have the team(s) that owns the unlocked package become the code owner. More info can be found [here](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners).

6. The new repository needs to be imported into the static analysis tools. These tools include:

   -   [Snyk](https://thrivent.atlassian.net/wiki/x/f4BrHQ)
   -   [Sonarcloud](https://thrivent.atlassian.net/wiki/x/MoobF)
  
7. (Recommended) Set [General Repository Settings](https://thrivent.atlassian.net/wiki/x/5QhFH)

8. (Recommended) Set [Branch Protection Rules](https://thrivent.atlassian.net/wiki/x/wYhRH) 

9. Happy programming!

> NOTE: After the initial workflow run it is possible to delete the [Prep](./.github/workflows/prep-repo.yml) file. The file should never have to be ran again.

