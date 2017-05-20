import Ember from 'ember';
const { computed } = Ember;

export default Ember.Controller.extend({
  actions: {

    filterBySearch(searchQuery) {
      this.set('search', searchQuery);

    }
  },

  filteredRecipes: computed('model', 'search', function() {
    const recipes = this.get('model');
    const searchQuery = this.get('search');

    const bySearchQuery = (recipe) => {
      return recipe.get('title').toUpperCase().includes(searchQuery.toUpperCase());
    };

    if (searchQuery) {
      return recipes.filter(bySearchQuery)
    }
  }),
});
