import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('content-photo', 'Integration | Component | content photo', {
  integration: true
});

test('it renders content photo', function(assert) {

  this.render(hbs`{{content-photo}}`);
  assert.equal(this.$('.content-photo').length, 1);

});
