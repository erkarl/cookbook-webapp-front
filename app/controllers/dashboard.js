import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    searchByKeyword(param) {
      if (param !== '') {
        return this.get('store').query('recipe', { labels: param });
      } else {
        return this.get('store').findAll('recipe');
      }
    }
  }
});
