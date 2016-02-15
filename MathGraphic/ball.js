var canvas; 
var context; 
var circles = []; 
var radius; 
var color; 
var time =1; 
var speed =1; 
var py; 
var px; 

window.onload = function () 
{ 
    canvas = document.getElementById("canvas"); 
    dataLines = canvas.getContext("2d"); 
    dataWidth = document.getElementById("lineWidth"); 
} 

function ChooseFunc(sender) 
{ 
    switch(sender.value) 
    { 
        case "Cosinus": 
            timer = setInterval(CosLine, 20); break; 
        case "Sinus": 
            timer = setInterval(SinLine, 20); break; 
        case "Exponent": 
            timer = setInterval(expon, 20); break; 
        case "Logariphm": 
            timer = setInterval(logar, 20); break; 
        case "Parabola^2": 
            timer = setInterval(Porabola, 20); break; 
        case "Parabola^3": 
            timer = setInterval(ParabVCube, 20); break; 
        case "Hyperbola": 
            timer = setInterval(HyperBola, 20); break; 
        case "Clear": 
            dataLines.clearRect(0,0,canvas.width,canvas.height); break; 
    } 
} 

function Circle(x, y, dex, dey, radius, color) 
{ 
    this.x = x; 
    this.y = y; 
    this.dex = dex; 
    this.dey = dey; 
    this.radius = radius; 
    this.color = color; 
} 

function CosLine() 
{ 
    time=time+2; 
    dataLines.clearRect(0,0,canvas.width,canvas.height); 
    dataLines.beginPath(); 
    dataLines.moveTo(0, canvas.height * 0.5); 
    for(var i =-1;i<=canvas.width;i++){ 
        dataLines.lineTo(i,canvas.height*0.5 - (Math.cos(speed+i*0.05)*40)); 
    } 
    dataLines.lineWidth = dataWidth.value * 0.1; 
    dataLines.strokeStyle = "#ff0000"; 
    dataLines.stroke(); 
    dataLines.beginPath(); 
    dataLines.arc(time,canvas.height*0.5 - (Math.random()*2+Math.cos(time/90+time/25)*40), 10, 0, Math.PI * 2); 
    dataLines.fillStyle = "black"; 
    dataLines.moveTo(canvas.width/2,0); 
    dataLines.lineTo(canvas.width/2,canvas.height); 
    dataLines.moveTo(0,canvas.height/2); 
    dataLines.lineTo(canvas.width,canvas.height/2); 
    dataLines.strokeStyle = "black"; 
    dataLines.fill(); 
    dataLines.stroke(); 
} 
function SinLine() 
{ 
    speed = speed + 1; 
    dataLines.clearRect(0,0,canvas.width,canvas.height); 

    dataLines.moveTo(0, canvas.height * 0.5); 
    for(var i =-1;i<=canvas.width;i++){ 
        dataLines.lineTo(i,canvas.height*0.5 - (Math.random()*2+Math.sin(time+i*0.05)*20)); 
    } 
    dataLines.lineWidth = dataWidth.value * 0.1; 
    dataLines.strokeStyle = "#ff0000"; 
    dataLines.stroke(); 
    dataLines.beginPath(); 
    dataLines.lineWidth = dataWidth.value * 0.1; 
    dataLines.arc(speed,canvas.height*0.5 - (Math.random()*2+Math.sin(speed/90+speed/25)*20), 10, 0, Math.PI * 2); 
    dataLines.fillStyle = "black"; 
    dataLines.moveTo(canvas.width/2,0); 
    dataLines.lineTo(canvas.width/2,canvas.height); 
    dataLines.moveTo(0,canvas.height/2); 
    dataLines.lineTo(canvas.width,canvas.height/2); 
    dataLines.strokeStyle = "black"; 
    dataLines.lineWidth = dataWidth.value * 0.1; 
    dataLines.fill(); 
    dataLines.stroke(); 
} 
function Porabola(){ 
    dataLines.clearRect(0,0,canvas.width,canvas.height); 
    speed=speed+0.2; 
    px = canvas.width/2-speed*10; 
    py = canvas.height/2-(Math.random()*5+Math.pow(speed,2)); 
    while( py<0 ) 
    { 
        px = px; 
        py = py; 
    } 
    for(var i=-20;i<20;i+=0.01) 
    { 
        dataLines.fillStyle="blue"; 
        dataLines.fillRect(canvas.width/2+i*10,canvas.height/2-Math.pow(i,2),1,1); 
    } 
    dataLines.beginPath(); 
    dataLines.lineWidth = dataWidth.value * 0.1; 
    dataLines.arc(canvas.width/2+speed*10,py, 10, 0, Math.PI * 2); 
    dataLines.fillStyle = "yellow"; 
    dataLines.fill(); 
    dataLines.stroke(); 
    dataLines.beginPath(); 
    dataLines.arc(px,py, 10, 0, Math.PI * 2); 
    dataLines.fillStyle = "black"; 
    dataLines.moveTo(canvas.width/2,0); 
    dataLines.lineTo(canvas.width/2,canvas.height); 
    dataLines.moveTo(0,canvas.height/2); 
    dataLines.lineTo(canvas.width,canvas.height/2); 
    dataLines.lineWidth = dataWidth.value * 0.1; 
    dataLines.fill(); 
    dataLines.stroke(); 

} 

function ParabVCube() 
{ 
    dataLines.clearRect(0,0,canvas.width,canvas.height); 
    speed=speed+0.1; 
    px = canvas.width/2+speed*10; 
    py=canvas.height/2-(Math.random()*5+Math.pow(speed,3)); 
    while( py<0 ) 
    { 
        px = px; 
        py = py; 
    } 
    for(var i=-20;i<20;i+=0.01){ 
    dataLines.fillStyle="red"; 
    dataLines.fillRect(canvas.width/2+i*10,canvas.height/2-Math.pow(i,3),1,1); 
    } 
dataLines.beginPath(); 
dataLines.lineWidth = dataWidth.value * 0.1; 
dataLines.arc(canvas.width/2-speed*10,canvas.height/2+(Math.random()*5+Math.pow(speed,3)), 10, 0, Math.PI * 2); 
dataLines.fillStyle = "yellow"; 
dataLines.fill(); 
dataLines.stroke(); 
dataLines.beginPath(); 
dataLines.arc(px,py, 10, 0, Math.PI * 2); 
dataLines.fillStyle = "black"; 
dataLines.moveTo(canvas.width/2,0); 
dataLines.lineTo(canvas.width/2,canvas.height); 
dataLines.moveTo(0,canvas.height/2); 
dataLines.lineTo(canvas.width,canvas.height/2); 
dataLines.lineWidth = dataWidth.value * 0.1; 
dataLines.fill(); 
dataLines.stroke(); 
} 

function HyperBola(){ 
    time = time+3; 
    for(var i=-20;i<20;i+=0.01){ 
        dataLines.fillStyle="red"; 
        dataLines.fillRect(canvas.width/2+i*i+40,canvas.height/2-Math.pow(i,2),1,1); 
        dataLines.fillRect(canvas.width/2-i*i-40,canvas.height/2-Math.pow(i,1.3),1,1); 
    } 
    dataLines.beginPath(); 
    dataLines.fillStyle = "black"; 
    dataLines.moveTo(canvas.width/2,0); 
    dataLines.lineTo(canvas.width/2,canvas.height); 
    dataLines.moveTo(0,canvas.height/2); 
    dataLines.lineTo(canvas.width,canvas.height/2); 
    dataLines.lineWidth = dataWidth.value * 0.1; 
    dataLines.fill(); 
    dataLines.stroke(); 
} 
function logar(){ 
    time = time + 1; 
    dataLines.clearRect(0,0,canvas.width,canvas.height); 
    py=(canvas.height/2-Math.exp(time/10)); 
    while( py<0 ) 
    { 
        px = px; 
        py = py; 
    } 
    for(var i=-20;i<20;i+=0.031) 
    { 
        dataLines.fillStyle="red"; 
        dataLines.fillRect(canvas.width/2+i*i+40,canvas.height/2-Math.log(Math.pow(5,i)),1,1); 
    } 
    dataLines.beginPath(); 
    dataLines.arc(canvas.width/2+Math.log(Math.pow(3,time)),canvas.height/2+time+40 , 10, 0, Math.PI * 2); 
    dataLines.fillStyle = "black"; 
    dataLines.moveTo(canvas.width/2,0); 
    dataLines.lineTo(canvas.width/2,canvas.height); 
    dataLines.moveTo(0,canvas.height/2); 
    dataLines.lineTo(canvas.width,canvas.height/2); 
    dataLines.lineWidth = dataWidth.value * 0.1; 
    dataLines.fill(); 
    dataLines.stroke(); 
} 
function expon(){ 
    time = time + 1; 
    dataLines.clearRect(0,0,canvas.width,canvas.height); 
    py=(canvas.height/2-Math.exp(time/10)); 
    while( py<0 ) 
    { 
        px = px; 
        py = py; 
    } 
    for(var i=-20;i<20;i+=0.001) 
    { 
        dataLines.fillStyle="red"; 
        dataLines.fillRect(canvas.width/2 + i, canvas.height/2-Math.pow(2.71,i),1,1); 

    } 
    dataLines.beginPath(); 
    dataLines.arc(canvas.width/2-95,py , 10, 0, Math.PI * 2); 
    dataLines.fillStyle = "black"; 
    dataLines.moveTo(canvas.width/2,0); 
    dataLines.lineTo(canvas.width/2,canvas.height); 
    dataLines.moveTo(0,canvas.height/2); 
    dataLines.lineTo(canvas.width,canvas.height/2); 
    dataLines.lineWidth = dataWidth.value * 0.1; 
    dataLines.fill(); 
    dataLines.stroke(); 
}