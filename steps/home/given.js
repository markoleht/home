const cucumber = require('cucumber');
const Given = cucumber.Given;

Given("the user is at home", () => {
  browser.url('/Marko%20Leht/leht.html');
});
