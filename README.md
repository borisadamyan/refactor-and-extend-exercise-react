# Refactor and Extension Exercise

The purpose of this exercise is to exercise multiple disciplines for creating a software product. There is a starter application, a list of practices and principles the developer is expected to follow, an architectural guideline to help the developer with the structure of the application, a set of personas to help identify the users of the application, a set of user stories that have been collected for potential functionality to add, some unorganized specifications that the business has requested, and some helpful resources that can be used to implement some of the functionality.

Before you and your team can begin refactoring and extending the one of the applications you will need to perform the following steps:

- Filter out bad stories using INVEST criteria or any other evaluation process the team chooses
- Story point each story
- Prioritize the user stories
- (Optional) Refine the items under the Specifications section

Once the stories have been properly refined your team will need to either fork this project into a new central repository, or copy the code in the App.js file into a new React template and post it to a central git repository.  This will serve as the starter project for the entire team.

## Starter application

This very basic application has been created to identify homes based on a state and year that the home was built. The purpose of this application is to either approve or deny whether or not the owner of the website (a realty agency) is interested in listing the home for sale based on that criteria. It is very poorly written and will require significant refactoring in order to make it possible to add functionality.

After the starter project is posted, you and your team can begin refactoring the existing application and adding the functionality listed in the remaining user stories. Be sure to follow the practices and principles listed below. Also you and your team may use the architectural guidelines to help you decide how to organize the application.

## Practices & Principles

Use the following practices and principles during this exercise.

- Iteration Planning
- Automated Testing
- Test Driven Development
  - Red, Green, Refactor
  - 3 Laws Of TDD
  - N-ZOMBIES
- DRY (Rule of 3)
- SOLID
- Clean Code
- YAGNI
- Stateful and Stateless components
- Architect the solution into appropriate layers
- Paired Programming (Optional)
- Feature foldering (optional)

## Architectural Guidelines (Optional)

Use the following optional architectural guidelines while refactoring and implementing user stories:

- Use a centralized git repository (GitHub, GitLab, BitBucket, etc...)
- Use a CI/CD pipeline for your builds
- Use a RESTful API for business rules and storing to a persistence layer
- Organize your application into appropriate domains and slice it into micro services
- Use message queues, events, and services buses to pass information between services
- Run your services in Docker containers
- Deploy the master branch of your application to a cloud host

## Personas

Below you will find some personas of people who will be interacting with your application.  Use them to help in making your decisions about the User Stories.

- **Mac**
  - **Roles**: Customer, User, Independent Realtor
  - **Goals**: Sell my portfolio of homes for the best value.  Buy new or used homes to add to my portfolio at the best value.
  - **Potholes**: Uses his phone a lot. Prefers to talk to people directly instead of through automated systems. Middle aged and not fond of technology.

- **Deandra**
  - **Roles**: Customer, Anonymous
  - **Goals**: Sell the home her ex-husband left her in a divorce.
  - **Potholes**: Doesn't want to haggle. Only uses her cell phone to go online.

- **Charlie**
  - **Roles**: Owner of the realty agency
  - **Goals**: Add to his portfolio of homes that have the best potential to make money.  Keep the portfolio stocked with enough listings to sell and draw in customers.
  - **Potholes**: Not very tech savvy.

## User Stories

Story point, prioritize, then complete these user stories:

#### User Stories

> **NOTE**: If being led by an instructor, use the first four stories to walk through INVEST, Story Pointing, and Prioritizing.

- As Mac I want to see a full list of homes the realty owns so I can see if I am interested in purchasing any of the homes available.
- As Mac I want to see a history of the homes I have submitted to the form so that I don't submit a home a second time.
- As Charlie I want to be able to create new state and year acceptance rules through the website so that I can accept homes from more territories and years.
- As Charlie I want to see the market value of each home in my inventory so I can price the home in my inventory.
- As Deandra I want to see a message that tells me why my home is not accepted so that I know why my submission is being rejected.
- As Mac I want to be able to see information about the realty I am submitting the house information to so that I know it is a legitimate business.
- As Mac I want to be able to send the business owner a message so that I can ask a follow up question if my home is accepted or rejected.
- As Deandra I want my choices of home state, city, and year built to be automatically populated so that I can easily enter my home information.
- As Charlie I want to be able to accept homes from specific cities within a state along with their year so that I can accept a wider range of homes.
- As Charlie I want to be able to know the colors of the houses being submitted to the form so that I can make better decisions about my inventory.
- As Charlie I want to be able to remove acceptance rules so that I can stop accepting homes that are already in my inventory if I have too many.
- As Charlie I want to be able to see a list of email addresses of customers who use the website so that I can send them a newsletter.
- As Charlie I want to be able to see pictures of the houses submitted by the customer so that I can manually reject a home if it has too much damage.

#### Specifications (Optional)

Assume that someone has written the following specifications.  Determine if each item should be a practice for the team to implement, something that needs to be rewritten as a user story, or it is a technical task that should be associated with a user story.

- Use MySQL to manage the persisted data.
- As a developer I want to store a list of homes in a database so that my back end service can persist the home data.
- The application shall allow users to attach pictures of their homes with their house submissions.
- The Zillow web Service (or another API) should be used to validate every house before accepting a user submission.
- Update the tests in the back end to ensure a minimum of 90% test coverage.
- The application shall allow users to export a list of home inventory to Excel.
- The back end service should not take more than 1 second to respond to a request.

## Helpful Resources

- [Zillow Web Services API](https://www.zillow.com/howto/api/APIOverview.htm)
- [RapidAPI Top 7 Real Estate API's](https://rapidapi.com/blog/best-real-estate-apis/)
  