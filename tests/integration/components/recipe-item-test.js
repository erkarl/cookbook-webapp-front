import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('recipe-item', 'Integration | Component | recipe item', {
  integration: true
});

test('it renders recipe photo', function(assert) {
  const recipe = {
    image: "muna.jpg"
  };
  this.set('recipe', recipe);

  this.render(hbs`{{recipe-item recipe=recipe}}`);
  assert.equal(this.$('img').attr('src'), recipe.image);
});

test('it renders recipe title', function(assert) {
  var recipe = {
    title: "muna"
  };
  this.set('recipe', recipe);
  this.render(hbs`{{recipe-item recipe=recipe}}`);
  assert.equal(this.$('h3').first().text().trim(), recipe.title);
});

test('it renders recipe labels', function(assert) {
  var recipe = {
    labels: "food, edible"
  };
  this.set('recipe', recipe);
  this.render(hbs`{{recipe-item recipe=recipe}}`);
  assert.equal(this.$('p').first().text().trim(), recipe.labels);
});
