import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('search-recipes', 'Integration | Component | search recipes', {
  integration: true
});

test('it triggers searchChanged action with pasta parameter', function(assert) {
  const actualSearchQuery = 'pasta';
  const searchChanged = (searchQuery) => {
    assert.equal(searchQuery, actualSearchQuery, 'Search query equals to pasta');

  };
  this.set('searchChanged', searchChanged);

  this.render(hbs`{{search-recipes searchChanged=searchChanged}}`);

  this.$('input').val(actualSearchQuery);
  this.$('input').trigger('keyup');
});
