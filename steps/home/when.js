const cucumber = require('cucumber');
const When = cucumber.When;
var option = [home, about, skills, portfolio, contact];

when (/^the user clicks on the "(.*)"$) menu option in the menu/, option => {
    selectMenuOption(option);
});


