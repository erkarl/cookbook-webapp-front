import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('search-recipes', 'Unit | Component | search recipes', {
  unit: true
});

test('it triggers updateSearchQuery action with pancakes parameter', function(assert) {
  let component = this.subject();

  const actualSearchQuery = 'pancakes';
  const searchChanged = (searchQuery) => {
    assert.equal(searchQuery, actualSearchQuery, 'searchChanged is trigger with pancakes param');
  };

  component.set('searchChanged', searchChanged);

  component.actions.updateSearchQuery.bind(component)(actualSearchQuery);
});
