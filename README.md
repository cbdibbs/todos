# salesforce-unlocked-package-template

[![Salesforce](https://img.shields.io/badge/salesforce-%230097D8?&style=for-the-badge&logo=salesforce&logoColor=white&Color=white)](https://img.shields.io)

## Problem Statement

Our team is working on a project to build a todo list app for Salesforce. We have already created a custom object called `Todo__c` with the following fields: `Name`, `DueDate__c`, `IsComplete__c`. We need your help to build the frontend of the app using LWC.

We have already created a simple LWC component called `todos` that displays a hardcoded list of todos. Please follow the setup steps below and make sure you can navigate to the `Todos` app.

## Setup

1. Clone this repository
2. Run `sf org create scratch -d -f config/project-scratch-def.json -v devhub` to create a scratch org
3. Run `sf project deploy start` to deploy the source to your scratch org
4. Run `sf org open` to open the scratch org
5. Navigate to the `Todos` app
6. You should see a list of todos that looks like this:

    ![Todos](/docs/assets/Start.jpeg?raw=true)

## 1. Fetch todos from database

The first new requirement is that we fetch our todos from the database instead of using the hardcoded list. We have already created a placeholder Apex method for you to use. The method is called `getTodos` and it is located in the `TodoService` class.

<details>
  <summary>Hints</summary>

-   Use the `@wire` decorator to call the `getTodos` method

If you get stuck, go ahead and check out the branch `feature/data-fetching` to see the solution and move on to the next step.

</details>

## 2. Display each todo as a card

We finally heard from our designers, and they want to display each todo as shown in the screenshot below. Please follow these requirements to complete this step:

-   Each todo should be displayed as a card
-   The card should have a title, due date, and the text either 'Complete' or 'Incomplete' based on the `IsComplete__c` field
-   If the todo is complete, the 'Complete' text should be green. If it is incomplete, the 'Incomplete' text should be red
-   The number of incomplete todos should be added to the page header as shown

<details>
  <summary>Hints</summary>

-   It may be helpful to create a new child component to display each todo as a card
-   You can use the `lightning-card` component to create the card
-   Use getters to calculate things like the number of incomplete todos, as well as the text and color for the 'Complete' or 'Incomplete' text

If you get stuck, go ahead and check out the branch `feature/layout` to see the solution and move on to the next step.

</details>

![Todos](/docs/assets/Layout.jpeg?raw=true)

## 3. Let users mark each todo as complete

The last new feature we need to add is the ability for users to mark each todo as complete. Please follow these requirements to complete this step:

-   Add a button to each card that says 'Mark Complete'
-   When the button is clicked, the `IsComplete__c` field should be updated to `true`
-   The page should automatically update to reflect the change

<details>
  <summary>Hints</summary>

-   Use the `lightning-button` component to create the 'Mark Complete' button
-   Use the `updateRecord` wire adapter to update the `IsComplete__c` field
-   Dispatch a custom event when the todo is marked complete to trigger a refresh of the todos
-   Use the `refreshApex` function to refresh the todos

If you get stuck, go ahead and check out the branch `feature/markComplete` to see the final solution.

</details>

![Mark Complete](/docs/assets/MarkComplete.gif?raw=true)
