/*****************************************************************************/
/* SignIn: Event Handlers */
/*****************************************************************************/
Template.SignIn.events({
  'submit #sign-in-form': function(event, template) {
    event.preventDefault();

    // find DOM elements
    var emailElement = template.find('[name=email]');
    var passwordElement = template.find('[name=password]');

    // get values
    var email = emailElement.value;
    var password = passwordElement.value;

    // sign in
    Meteor.loginWithPassword(email, password, function (error) {
      if (error) {
        Alerts.set('Email & password mismatch!');
      } else {
        Router.go('dashboard');
      }
    })
  }
});

/*****************************************************************************/
/* SignIn: Helpers */
/*****************************************************************************/
Template.SignIn.helpers({
});

/*****************************************************************************/
/* SignIn: Lifecycle Hooks */
/*****************************************************************************/
Template.SignIn.created = function () {
};

Template.SignIn.rendered = function () {
};

Template.SignIn.destroyed = function () {
};
