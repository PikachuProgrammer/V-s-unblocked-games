
const canvas=document.getElementById("canvas")
const ctx=canvas.getContext("2d")


var Player = function(X,Y){
    this.X=X
    this.Y=Y
    
};

Player.prototype.draw=function() {
    ctx.rect(this.X,this.Y,100,100);

};

var player= new Player(2,2);

ctx.stroke