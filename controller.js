




matcherController = {

	
	view: matcherView,
	model: matcherModel,

	init: function(size) {
		this.model.init(size);
		this.view.init();
		this.view.addClickHandlers( this.selectCard, this );
	},


	selectCard: function(id){
	},
};
