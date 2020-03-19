const cucumber = require('cucumber');
const When = cucumber.When;


option => {
    home.selectMenuOption(option);
  };

When (/^the user clicks on the "(.*)"$ menu option in the menu/, option => {
    selectMenuOption(option);
});




 