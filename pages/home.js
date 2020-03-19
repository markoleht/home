class Home {
    get url() {
      return "/Marko%20Leht/leht.html";
    }

get homeMenuOption() {
    return $('#myNavbar > ul > li >a[href="#home"]');
  }

  get aboutMenuOption() {
    return $('#myNavbar > ul > li >a[href="#about"]');
  }

  get skillsMenuOption() {
    return $('#myNavbar > ul > li >a[href="#skills"]');
  }

  get portfolioMenuOption() {
    return $('#myNavbar > ul > li >a[href="#portfolio"]');
  }

  get contactMenuOption() {
    return $('#myNavbar > ul > li >a[href="#contact"]');
  }

 

  selectMenuOption(option) {
    switch (option) {
      case "home":
        this.homeMenuOption.click();
        break;
      case "about":
        this.aboutMenuOption.click();
        break;
      case "skills":
        this.skillsMenuOption.click();
        break;
        case "portfolio":
        this.portfolioMenuOption.click();
        break;
        case "contact":
        this.contactMenuOption.click();
        break;
      default:
        console.log(`Invalid Option ${option}`);
    }
  }
}

module.exports = new Home();