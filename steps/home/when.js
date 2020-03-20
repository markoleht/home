const cucumber = require('cucumber');
const When = cucumber.When;

When("the user clicks the facebook icon", () => {
    setTimeout(() => {
        $(".fa-facebook").click();
    }, 2000);
});

When("the user clicks the instagram icon", () => {
    setTimeout(() => {
        $(".fa-instagram").click();
    }, 2000);
});

When("the user clicks the imdb icon", () => {
    setTimeout(() => {
        $(".fa-imdb").click();
    }, 2000);
});

