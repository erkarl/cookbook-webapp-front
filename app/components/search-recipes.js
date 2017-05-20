import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateSearchQuery(searchQuery) {
      this.get('searchChanged')(searchQuery);
    }
  }
});
