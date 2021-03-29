 canvas=document.getElementById("my_canvas");
 ctx=canvas.getContext("2d");
 color="red";
 ctx.beginPath();
 ctx.strokeStyle=color;
 ctx.lineWidth=2;
 ctx.arc(200, 200, 40, 0, 2*Math.PI);
 ctx.stroke();
 canvas.addEventListener("mousedown", mymousedown);

 function mymousedown(e)
 {
color=document.getElementById("color").value;
console.log(color);
mouseX=e.clientX-canvas.offsetLeft;
mouseY=e.clientY-canvas.offsetTop;
circle(mouseX, mouseY);
 }
 
function circle(X, Y)
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(X, Y, 40, 0, 2*Math.PI);
    ctx.stroke();
}