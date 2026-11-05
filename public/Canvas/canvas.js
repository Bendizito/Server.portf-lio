//primeiro desenho 

let canvas1 = document.getElementById('desenho1');
let ctx1 = canvas1.getContext('2d');

ctx1.fillStyle = '#0000FF';
ctx1.fillRect(0, 0, 52, 52);

ctx1.fillStyle = '#FF0000';
ctx1.fillRect(248, 0, 52, 52);

ctx1.fillStyle = '#FFFF00';
ctx1.beginPath();
ctx1.moveTo(0, 233);
ctx1.lineTo(26, 233);
ctx1.lineTo(26, 263);
ctx1.lineTo(64, 263);
ctx1.lineTo(64, 300);
ctx1.lineTo(0, 300);
ctx1.closePath();
ctx1.fill();

ctx1.fillStyle = '#00FFFF';
ctx1.fillRect(0, 120, 34, 56);     
ctx1.fillRect(263, 135, 37, 26);

ctx1.fillStyle = '#FF0000';
ctx1.fillRect(110, 150, 40, 38);


ctx1.fillStyle = '#00FFFF';
ctx1.strokeStyle = '#0000FF';
ctx1.lineWidth = 1.5;
ctx1.beginPath();
ctx1.arc(150, 113, 15, 0, 2 * Math.PI);
ctx1.fill();
ctx1.stroke();

ctx1.fillStyle = '#000000';
ctx1.beginPath();
ctx1.moveTo(300, 233);
ctx1.lineTo(274, 233);
ctx1.lineTo(274, 263);
ctx1.lineTo(236, 263);
ctx1.lineTo(236, 300);
ctx1.lineTo(300, 300);
ctx1.closePath();
ctx1.fill();

ctx1.fillStyle = '#FFFF00';
ctx1.strokeStyle = '#00AA00';
ctx1.lineWidth = 1.5;

ctx1.beginPath();
ctx1.arc(71, 214, 14, 0, 2 * Math.PI);
ctx1.fill();
ctx1.stroke();

ctx1.fillStyle = '#FFFF00';
ctx1.strokeStyle = '#00AA00';
ctx1.lineWidth = 1.5;

ctx1.beginPath();
ctx1.arc(216, 214, 14, 0, 2 * Math.PI);
ctx1.fill();
ctx1.stroke();


ctx1.strokeStyle = '#666666';
ctx1.lineWidth = 1.5;
ctx1.beginPath();
ctx1.moveTo(150, 150);
ctx1.lineTo(150, 214);
ctx1.lineTo(150, 300);
ctx1.stroke();

ctx1.fillStyle = '#00FFFF';
ctx1.strokeStyle = '#00AA00';
ctx1.lineWidth = 1.5;
ctx1.beginPath();
ctx1.arc(150, 300, 38, Math.PI, 2 * Math.PI);
ctx1.fill();
ctx1.stroke();

ctx1.strokeStyle = '#00AA00';
ctx1.lineWidth = 1.5;
ctx1.beginPath();
ctx1.moveTo(0, 150);
ctx1.lineTo(300, 150);
ctx1.stroke();

ctx1.strokeStyle = '#0000FF';
ctx1.lineWidth = 1.5;
ctx1.beginPath();
ctx1.moveTo(52, 52);
ctx1.lineTo(150, 150);
ctx1.stroke();



ctx1.strokeStyle = '#FF0000';
ctx1.lineWidth = 1.5;
ctx1.beginPath();
ctx1.moveTo(248, 52);
ctx1.lineTo(150, 150);
ctx1.stroke();

ctx1.strokeStyle = '#00AA00';
ctx1.lineWidth = 1.5;

ctx1.beginPath();
ctx1.arc(150, 150, 55, Math.PI, 2 * Math.PI);
ctx1.stroke();

ctx1.beginPath();
ctx1.arc(150, 150, 85, Math.PI, 2 * Math.PI);
ctx1.stroke();

ctx1.beginPath();
ctx1.arc(150, 300, 75, Math.PI + 0.5, 2 * Math.PI);
ctx1.stroke();

ctx1.beginPath();
ctx1.arc(150, 300, 80, Math.PI, 1.5 * Math.PI);
ctx1.stroke();

ctx1.beginPath();
ctx1.arc(150, 300, 80, 1.8 * Math.PI, 2 * Math.PI);
ctx1.stroke();

ctx1.fillStyle = '#333333';
ctx1.font = '18px Arial, sans-serif';
ctx1.textAlign = 'center';
ctx1.fillText('Canvas', 150, 52);

//segundo desenho 

let canvas2 = document.getElementById(`desenho2`);
let ctx2 = canvas2.getContext(`2d`);

ctx2.fillStyle = '#80F0D8';
ctx2.fillRect(0, 0, 300, 300);

ctx2.fillStyle = '#FFEE33';
ctx2.beginPath();
ctx2.arc(225, 75, 40, 0, 2 * Math.PI);
ctx2.fill();

ctx2.fillStyle = '#888888';
ctx2.fillRect(0, 180, 300, 120);

ctx2.fillStyle = '#3388FF';
ctx2.fillRect(0, 180, 50, 120);
ctx2.beginPath();
ctx2.arc(50, 240, 60, 0.5 * Math.PI, 1.5 * Math.PI);
ctx2.fill();


ctx2.fillStyle = '#8B5A2B'; 
ctx2.fillRect(65, 115, 20, 65);
ctx2.fillStyle = '#2E8B57'; 
ctx2.beginPath();
ctx2.arc(75, 110, 25, 0, 2 * Math.PI);
ctx2.fill();

ctx2.fillStyle = '#8B5A2B'; 
ctx2.fillRect(255, 180, 20, 50);
ctx2.fillStyle = '#2E8B57'; 
ctx2.beginPath();
ctx2.arc(265, 170, 25, 0, 2 * Math.PI);
ctx2.fill();

  
ctx2.fillStyle = '#8B5A2B';
ctx2.fillRect(110, 90, 80, 90);

  
ctx2.fillStyle = '#6B4423';
ctx2.fillRect(140, 135, 20, 45);

  
ctx2.fillStyle = '#33CCFF';
ctx2.fillRect(116, 110, 25, 25);
ctx2.fillRect(160, 110, 25, 25);

  
ctx2.fillStyle = '#FF5733';
ctx2.beginPath();
ctx2.moveTo(110, 90);
ctx2.lineTo(150, 55);
ctx2.lineTo(190, 90);
ctx2.closePath();
ctx2.fill();