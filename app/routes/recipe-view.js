import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.get('store').findRecord('recipe', params.recipe_id);
  }
});
