Feature: Menu Navigation

As a user, I want to be able to navigate through out the website using the menu links to get to various pages

Scenario Outline: Navigating through the main menu options from the home page

        Given the browser is at the "Home" page
        When the User clicks on the "<option>" menu option in the menu
        Then The title of the page should be "<title>"

Examples:

        | MenuOption | MenuTitle |
        | home       | #home     |
        | about      | #about    |
        | skills     | #skills   |
        | portfolio  | #portfolio|
        | contact    | #contact  |