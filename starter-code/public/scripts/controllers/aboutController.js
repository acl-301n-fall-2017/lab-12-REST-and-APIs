'use strict';
////////here we use article.js library 
(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#about').show().siblings().hide(); // REVIEW: We have a slight refactor in selectors here, which has reduced the amount of code from the last lab.
    repos.requestRepos(repoView.index);///////////repoView.index is the callback? QUESTION
    //ARE WE CALLING THE FUNCTION THAT GETS THE API INFORMATION, WIRTH REPOVIEW.INDEX WHICH IS A CALLBACK FUNCTION THAT DOES A MAP AND COMPILES THE HANDLEBARS FOR EACH REPO// couldnt we just call repos.all and pass repo.View through it?

    // TODO: Call a function to load all the data.
    // Pass a view function as a callback, so the view will render after the data is loaded.

  };

  module.aboutController = aboutController;
})(window);
