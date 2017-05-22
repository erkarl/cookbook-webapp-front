import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('recipe-list', 'Integration | Component | recipe list', {
  integration: true
});

test('it renders recipe item thumbnails', function(assert) {
  const recipes = [
    {type: "recipe",
      attributes: {
        title: "pancakes",
        image: "img.jpg",
        labels: "tasty, dessert"
      }
    },
    {type: "recipe",
      attributes: {
        title: "pancakes",
        image: "img.jpg",
        labels: "tasty, dessert"
      }
    }
  ];
  this.set('recipes', recipes);

  this.render(hbs`{{recipe-list recipes=recipes}}`);
  assert.equal(this.$('.recipe-article').length, 2);

});
