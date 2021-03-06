import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return $.getJSON("states.json");
  	},
  actions: {
    stateDetails(state) {
    	if (state.visited){
			this.transitionTo("/state?name="+state.name+ "&abv=" + state.abv);   		
    	}
    }
  }
});
