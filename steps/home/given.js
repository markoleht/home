const cucumber = require('cucumber');
const Given = cucumber.Given;

Given('the browser is at the "Home" page', () => {
	browser.url('/Marko%20Leht/leht.html');
});