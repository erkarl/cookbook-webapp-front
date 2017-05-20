import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('page-header', 'Integration | Component | page header', {
  integration: true
});

test('it renders page header', function(assert) {
  this.render(hbs`{{page-header}}`);
  assert.equal(this.$('#page-header').length, 1);
});

test('it has login button when not logged in', function(assert) {
  this.render(hbs`{{page-header}}`);
  assert.equal(this.$('.button').length, 1);
});

test('it has page title', function(assert) {
  this.render(hbs`{{page-header}}`);
  assert.equal(this.$('#brand').length, 1);
});
