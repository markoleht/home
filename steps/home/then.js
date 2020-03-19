const cucumber = require('cucumber');
const Then = cucumber.Then;
var title = ["#home", "#about", "#skills", "#portfolio", "#contact"];

Then(/^the title of the page should be "(.*)"$/, title => {
    checkTitle(title);
});

