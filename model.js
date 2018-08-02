


matcherModel = {

	size: 4,
	cards: [],
	cardValues: [ "A", "B", "C", "D", "E", "F", "G", "H" ],

	totalCards: 0,

	currentId: 1,

	init: function(size) {
		this.size = size || this.size;
		var numPairs = Math.pow( this.size, 2) /2;
		for( var i = 0; i < numPairs; i++ ) this.addPair();
		this.shuffle();
	},


	addPair: function() {
		var value = this.cardValues[ Math.floor( Math.random() * this.cardValues.length )];
		this.cards.push( new this.Card( this.getId(), value ));
		this.cards.push( new this.Card( this.getId(), value ));
		this.totalCards += 2;
	},

	shuffle: function(){
		var currentIndex = this.totalCards, temp, rand;

		while(currentIndex > 0 ) {
			rand = Math.floor( Math.random() * currentIndex );
			currentIndex--;

			temp = this.cards[currentIndex];
			this.cards[currentIndex] = this.cards[rand];
			this.cards[rand] = temp;
		}
	},

	Card: function( id, value ) {
		this.id = id;
		this.value = value;
	},

	getId: function() {
		var myId = this.currentId;
		this.currentId++;
		return myId;
	},


};
