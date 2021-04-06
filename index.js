const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
var canvasImg = document.getElementById("image");

// getting details
var radius = canvas.width/2;
ctx.translate(radius,radius)
radius = radius*0.9
ctx.stroke()
setInterval(drawClock,1000)


// function for drawing circle
function drawClock(){
    drawCircle(ctx, radius)
    drawNumber(ctx, radius)
    drawTime(ctx,radius)
}

// Draw circle
function drawCircle(ctx,radius){
ctx.beginPath()
ctx.arc(0, 0, radius, 0, Math.PI*2)
ctx.lineWidth= 3
ctx.fillStyle="white";
ctx.fill()

grad =ctx.createRadialGradient(0,0,radius*0.90, 0,0,radius*1.05);
  grad.addColorStop(0, "black");
  grad.addColorStop(0.5, "white");
  grad.addColorStop(1, "black");
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();

// middle circle
ctx.beginPath();
ctx.arc(0,0,radius*.075, 0, Math.PI*2)
ctx.fillStyle= "black"
ctx.fill()

// Draw Hand
}
function drawNumber(ctx, radius){
    var angle;

    ctx.font= radius*0.15 + "px cursive";
    ctx.textAlign= "center";
    ctx.textBaseline= "middle"
    for (let i = 1; i< 13; i++){
        angle=  i* Math.PI/6
        ctx.rotate(angle)
        ctx.translate(0, -radius * .85);
        ctx.rotate(-angle)
        ctx.fillText(i.toString(),0,0)
        ctx.rotate(angle)
        ctx.translate(0, radius * .85);
        ctx.rotate(-angle)
    }
}

function drawTime(ctx, radius) {
        var date = new Date()
        var hour = date.getHours()
        var minutes =date.getMinutes();
        var seconds= date.getSeconds()
        hour = hour% 12;
        hour = hour * Math.PI/6 + (minutes * Math.PI/(6*60)) + (seconds * Math.PI/(6*60*60))
        drawHand(ctx,hour, radius*.5, radius*.04)
        // minutes
        minutes = (minutes * Math.PI/30)+ (seconds * Math.PI/(30*60))
        drawHand(ctx, minutes, radius*.7, radius*.05)
        // seconds
        seconds=(seconds * Math.PI/30)
        drawHand(ctx, seconds,radius*.75, radius*.028)


}

function drawHand(ctx,hand,length, width) {
        ctx.beginPath()
        ctx.lineWidth = width
        ctx.lineCap="round"
        ctx.moveTo(0,0)
        ctx.rotate(hand)
        ctx.lineTo(0, -length)
        ctx.stroke()
        ctx.rotate(-hand)
}
