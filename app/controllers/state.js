import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['name', 'abv'],
  name: null,
  abv: null,
  state: Ember.computed('name', 'abv', function() {
    var name = this.get('name');
    var abv = this.get('abv');

    return {'name' : name, 'abv' : abv};
  })
});
