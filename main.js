var mouseEvent="empty";
var last_pos_x,last_pos_y;

canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color="red";
PenW=1;

canvas.addEventListener("mousedown", myMousedown);

function myMousedown(e){
    color= document.getElementById("color_input").value;
    PenW= document.getElementById("width_input").value;
    mouseEvent="mouseDown";
}

canvas.addEventListener("mousemove", myMousemove);

function myMousemove(e){
    mouse_x=e.clientX - canvas.offsetLeft;
    mouse_y=e.clientY - canvas.offsetTop;
    if (mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=PenW;
        console.log("x value is "+mouse_x);
        console.log("y value is "+mouse_y);
        ctx.moveTo(last_pos_x,last_pos_y);
        ctx.lineTo(mouse_x,mouse_y);
        ctx.stroke();
    }
    last_pos_x=mouse_x;
    last_pos_y=mouse_y;
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseEvent="mouseLeave";
}

function ClearCanvas(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}