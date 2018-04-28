var app = new PLAYGROUND.Application({
create: function() {

    this.ship_values = { 
      x: 0, 
      y: this.center.y, 
      width: 64,
      height: 64,  
      speed: 100 ,
      img: this.loadImage("ship")
    };
    

  },

  step: function(dt) { 
		this.ship_values.x += this.ship_values.speed * dt; 
		if(this.ship_values.x > this.width) this.ship_values.x = -this.ship_values.width;		
  },

  render: function(dt) {

    var ship = this.ship_values;

    this.layer.clear("#000");
     this.layer.drawImage(this.images.ship, ship.x, ship.y)

  },

});
