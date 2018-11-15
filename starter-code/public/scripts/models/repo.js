'use strict';

(function(module) {
  const repos = {};

  repos.all = [];
  //repos.reqestRepos(repoView.index); 
  repos.requestRepos = function(callback) {
    // TODO: How would you like to fetch your repos? Don't forget to call the callback.
    //       Remember that the callback function we'll want to call relies on repos.all
    //       being an array with a bunch of repo objects in it, so you'll need to
    //       populate it with the response from Github before you call the callback.
    $.getJSON('https://api.github.com/users/katedam/repos')
    .then(data =>{
      // data.map(data =>{ repos.all.push(data)}); //we can also use this instead of repos.all
      repos.all = data
      callback();

    })
    // .then(callback);
    ///////////this is essentially repos.requestRepos(repoView.index)? why do we need to call it here again when were calling it in aboutController.js? QUESTION
    
  }

  // REVIEW: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);

/////////////EXPLANATION
////repos.requestRepos is saving a call back function which were going to run later, which will be the repoView.index function which displays the information to the browser. 

