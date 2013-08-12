App = Ember.Application.create();

App.ApplicationController = Ember.Controller.extend({
    liked: false,
    cliq: function() {
        this.set('liked', true);
    }
});
