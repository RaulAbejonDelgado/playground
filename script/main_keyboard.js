

var app = new PLAYGROUND.Application({
 create: function() {

    this.loadImage("ship");

  },
render: function() {
    this.layer
      .clear("#000088")
      .font("32px Arial")      
      .fillStyle("#fff")
      .fillText(this.text, 16, 32)
      .drawImage(this.images.ship, 400,400);

  },

  
keydown: function(event) {

    event.key  /* pressed key name */
    this.text = "La tecla pulsada es  " + event.key ;    

  },

  keyup: function(event) {

    event.key  /* pressed key name */
	this.text = "La tecla pulsada es  " + event.key ;
  }
  
  
  


});
