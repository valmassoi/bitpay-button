var animate = {
  init: function() {
    this.cacheDom();
    this.bindEvents();
    this.animating = false; // TODO
    this.speed = 1000;
  },
  cacheDom: function() {
    console.log("hi");
    this.$container = $('#btn-container');
    this.$logo = this.$container.find('#btc-logo');
    this.$background = this.$container.find('#orange-background');
    this.$text = this.$container.find('#click-here');
    this.$controls=$(".minus,.plus");
    this.$speed=$("[name=speed]");
  },
  bindEvents: function() {
    this.$container.hover(this.mouseIn.bind(this), this.mouseOut.bind(this));
    this.$speed.on('input', this.changeSpeed.bind(this))
  },
  changeSpeed: function() {
    var newSpeed = (parseInt(this.$speed.val()))
    if (Number.isInteger(newSpeed)) {
      console.log("new speed: " + newSpeed);
      this.speed=newSpeed;
    }
  },
  mouseIn: function() {
    console.log("in " + this.speed);
    // if(!this.animating) { //TODO
      this.animating = true;
      this.animateLogo();
      this.animateBackground();
      this.animateText();
    // }
  },
  animateLogo: function() {
    this.$logo.animate({
      left: ["+=142.5", "easeOutElastic"]
    }, this.speed, function(){
      console.log("done");
      this.animating = false;
    });

    this.$logo.rotate({
      angle:0,
      animateTo: 360,
      duration: this.speed*.35
    })
  },
  animateBackground: function() {
    this.$background.animate({
      width: ["335", ""],
      height: ["200", ""],
      left: ["-=10", ""],
      top: ["-75", ""],
      borderRadius: ["100", ""]
    }, this.speed*.1);
  },
  animateText: function() {
    this.$text.animate({
      left: ["-=50", ""]
    }, this.speed*.2)
  },

  mouseOut: function() { //TODO DRY up
    this.animating = true; //TODO
    console.log("out");
    this.$logo.animate({
      left: ["-=142.5", ""]
    }, this.speed*.5);
    this.$logo.rotate({
      angle:360,
      animateTo: 0,
      duration: this.speed*.9
    })

    this.$background.animate({
      width: ["30", ""],
      height: ["5", ""],
      left: ["+=10", ""],
      top: ["22.5", ""],
      borderRadius: ["10", ""]
    }, this.speed*.6, function(){
      console.log("done");
      this.animating = false;
    })

    this.$text.animate({
      left: ["+=50", ""]
    }, this.speed*.6)
  }
};

animate.init();
