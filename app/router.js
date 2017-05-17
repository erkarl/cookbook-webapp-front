import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('landing-page');
  this.route('login');
  this.route('signup');
  this.route('dashboard');
  this.route('add-recipe');
  this.route('recipe-view', { path: '/:recipe_id' });
  this.route('edit-recipe');
});

export default Router;
