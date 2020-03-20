const cucumber = require('cucumber');
const Then = cucumber.Then;


Then("the browser will redirect the user to the facebook page", () => {
    setTimeout(() => {
        browser.getUrl("https://www.facebook.com/markoleht/");
    },3000);
});


Then("the browser will redirect the user to the instagram page", () => {
    setTimeout(() => {
        browser.getUrl("https://www.instagram.com/markoleht/");
    },3000);
});




Then("the browser will redirect the user to the imdb page", () => {
    setTimeout(() => {
        browser.getUrl("https://www.imdb.com/name/nm4715250/");
    },3000);
});


Then("the browser will redirect the user to another page" , () => {
try {
    browser.call(() => eyes.open(browser));
    browser.call(() => eyes.check("page", Target.window().fully()));
    browser.call(() => eyes.close(false));
} catch (e) {
console.log(e);
} finally {
    browser.call(() => eyes.abortIfNotClosed());
}
});
