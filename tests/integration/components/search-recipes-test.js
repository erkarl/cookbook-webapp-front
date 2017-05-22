import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('search-recipes', 'Integration | Component | search recipes', {
  integration: true
});

test('it triggers updateSearchQuery action with pancakes parameter', function(assert) {

  const expectedSearchQuery = 'pancakes';
  const onUpdateSearchQuery = (actualSearchQuery) => {
    console.log('onUpdateSearchQuery called with params', actualSearchQuery);
    assert.equal(actualSearchQuery, expectedSearchQuery, 'Search query equals to pancakes');
  };

  this.on('updateSearchQuery', onUpdateSearchQuery);

  const onFilterBySearch = (searchQuery) => {
    console.log('onFilterBySearch called with params', searchQuery);
  };
  this.set('filterBySearch', onFilterBySearch);


  this.render(hbs`{{search-recipes searchChanged=onFilterBySearch}}`);

  assert.equal(true, false);
});
