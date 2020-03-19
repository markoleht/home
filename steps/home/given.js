const cucumber = require('cucumber');
const Given = cucumber.Given;

Given('the browser is at the "Home" page', () => {
	browser.url('/Marko%20Leht/leht.html');
});

page => {
    switch (page) {
      case "Home":
        browser.url(home.url);
        break;
      default:
        console.log(`Invalid Page ${page}`);
    }
  };