

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

  

  mousemove: function(data) {
	  
	
    this.text = "mouse move " + data.x +  " , " + data.y;    
	
  },

  mousedown: function(data) {
	
    this.text = "mouse down " + data.button + " " + data.x +  " , " + data.y;
    

  },

  mouseup: function(data) {
	
    this.text = "mouse up " + data.button + " " + data.x +  " , " + data.y;
    

  },
  


});
