Feature: Redirect to imdb account
                        
    Scenario: Redirect to imdb account
        Given the user is at home
        When the user clicks the imdb icon
        Then the browser will redirect the user to the imdb page