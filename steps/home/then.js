const cucumber = require('cucumber');
const Then = cucumber.Then;


Then("the browser will redirect the user to the facebook page", () => {
    setTimeout(() => {
        browser.getUrl("https://www.facebook.com/markoleht/");
    },2000);
});


Then("the browser will redirect the user to the instagram page", () => {
    setTimeout(() => {
        browser.getUrl("https://www.instagram.com/markoleht/");
    },2000);
});




Then("the browser will redirect the user to the imdb page", () => {
    setTimeout(() => {
        browser.getUrl("https://www.imdb.com/name/nm4715250/");
    },2000);
});



