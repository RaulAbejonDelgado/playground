

var app = new PLAYGROUND.Application({
		  /*
			.fillCircle(x, y, radius)
			.strokeStyle(color)
			.strokeLine(x, y, ex, ey)
			.strokeRect(x, y, width, height)
			.lineWidth(width)
			.fillRect(32, 32, 64, 64);
		*/
	create: function() {

    this.loadImage("ship");

  },

	ready: function() {

    /* 
      ready event listener - if you want to do something
      when loader has finished the job
    */

  },

	render: function() {

		this.layer.clear("#000088");
		this.layer.drawImage(this.images.ship, 580, 500)

  }

});
