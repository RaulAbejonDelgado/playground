

var app = new PLAYGROUND.Application({
	  render: function() {
		  /*
			.fillCircle(x, y, radius)
			.strokeStyle(color)
			.strokeLine(x, y, ex, ey)
			.strokeRect(x, y, width, height)
			.lineWidth(width)
			.fillRect(32, 32, 64, 64);
		*/

    this.layer.clear("#000088");
	this.layer.fillStyle("#ffffff");
    this.layer.strokeLine(32, 32, 64, 64);
    this.layer.strokeRect(320, 320, 64, 64);
    
  }
});
