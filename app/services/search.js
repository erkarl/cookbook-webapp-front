import Ember from 'ember';

export default Ember.Service.extend({
  init() {
    this._super(...arguments);
  },

  showResults(keyword) {
    // write code for transition to search results route here
    model() {
      return this.get('store').findAll('recipe');
    }
  }
});
