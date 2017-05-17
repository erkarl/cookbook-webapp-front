import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['search-recipes'],
  value: '',

  init() {
    this._super(...arguments);
    this.get('search')('').then((results) => this.set('results', results));
  },

  actions: {
    handleSearchEntry() {
      let searchInputValue = this.get('value');
      let searchAction = this.get('search');
      searchAction(searchInputValue).then((searchResults) => this.set('results', searchResults));
    }
  }

});
