import Ember from 'ember';

export default Ember.Route.extend({
  return this.get('store').findAll('recipe');
});
