Feature: Redirect to facebook account

    Scenario: Redirect to facebook media account
        Given the user is at home
        When the user clicks the facebook icon
        Then the browser will redirect the user to the facebook page