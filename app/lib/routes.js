Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'dashboard',
  controller: 'DashboardController',
  action: 'action',
  where: 'client'
});

Router.route('sign-in', {
  name: 'sign.in',
  controller: 'AuthenticationController',
  action: 'signIn',
  where: 'client'
});

Router.route('players', {
  name: 'players',
  controller: 'PlayersController',
  action: 'action',
  where: 'client'
});
