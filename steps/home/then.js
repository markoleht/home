const cucumber = require('cucumber');
const Then = cucumber.Then;


title => {
    assert(
      browser.getTitle() === title,
      `Title, ${browser.getTitle()} not equal to ${title}`
    );
  };

Then(/^the title of the page should be "(.*)"$/, title => {
    checkTitle(title);
});

