import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  image: DS.attr(),
  labels: DS.attr(),
  preparation: DS.attr(),
  comments: DS.attr(),
  link: DS.attr()
});
