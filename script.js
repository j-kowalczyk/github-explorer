
var devs = [
    { login: "robconery", name: "Rob Conery"},
    { login: "shanselman", name: "Scott Henselman"},
    { login: "tomdale", name: "Tom Dale"},
    { login: "wycatz", name: "Yehuda Katz"},
    { login: "jongalloway", name: "Jon Falloway"},
    { login: "haacked", name: "Phil Haack"},
];
window.Github = Ember.Application.create({
    rootElement: '#github-app'
});

Github.IndexRoute = Ember.Route.extend({
    model: function() {
        return devs;
    }
});

Github.IndexController = Ember.ArrayController.extend({
    renderedOn: function(){
        return new Date();
    }.property(),
    actions: {
        clickMe: function () {
            alert("I been clicked");
        }
    }
});

Github.Router.map(function() {
    this.resource('user', { path: "/users/:login"});
    // this.route()
});

Github.UserRoute = Ember.Route.extend({
    model: function (params) {
        // add return to work in firefox
         return Ember.$.getJSON('http://api.github.com/users/' + params.login);
        //      , function(data) { // non-promise approach
        //     return data;
        // });
    }
});

Github.UserIndexRoute = Ember.Route.extend({
    model: function () {
        return this.modelFor('user');
    }
})
console.log(Github);
