# WEB Technologies 2 (Back End)

This is the documentation for the WEB Technologies 2 (Back End) assignment application.

## Installation

1. Clone the repository:

    You should clone this repository using the following command:
    ```shell
        git clone <repository-url>
    ```

    Replace <repository-url> with the URL of this repository.

2. Navigate to the project directory:

    After cloning, navigate to the project directory using the command:
    ```shell
        cd <project-directory>
    ```

    Replace <project-directory> with the path to the cloned repository on your system.

3. Install the dependencies:

    To install the required dependencies, run the following command:
    ```shell
        npm install
    ```

    This will install all the necessary libraries and packages for the project.

## Running the Application

To run the application, use the following command:

npm start


## Explanation
By running server you will see index.html(main page). Move to the Tours page
When you click "Show tour" button it will Display outputs with your result for the Travel agency.
When you click "Edit tour" button it will edit with your result for the Travel agency.
Here I have implemented the cost of tour calculation logic, the weather conditions of the chosen tour. API. 

Also i addes additional input fields for date arrival, and quantity of persons (adult and children) for a more comprehensive Tour calculation. These affects the results.
I Included a dropdown for selecting and city. after that i dasplay all info about tour

## Routes

/travelagency route will send us to folder routes/travelRoutes.js where i have implemented GET, POST, PUT, DELETE requests. 
/weather route is used for retriving weather for choosen tour
/tours send to the tours.html where you can check and edit available tours
