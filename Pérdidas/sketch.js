var y1=25
var y2=95
var m=2
var dragging = false; // Is the slider being dragged?
var drag_tor = false;
var rollover = false; // Is the mouse over the slider?
var rollover_tor = false;
// Circle variables for knob
//Velocidad
var x = 820;
var y = 260;
var r = 75;
//Torque
var x_tor = 820;
var y_tor = 490;
// Knob angle
//Velocidad
var angle = 0;
var count = 0;
// Torque
var angle_tor = 0;
var count_tor = 0;
// Offset angle for turning knob
//Velocidad
var offsetAngle = 0;
//Torque
var offsetAngle_tor = 0;

var x_mot = 200;
var y_mot = 650;

let torque;
let torque_max = 350;

//VALORES----------------------------------
let hr = 80.0;
let t1 = 25.0;
let t2 = 0.0;
let t3 = 0.0;
let t4 = 0.0;
let t5 = 0.0;
let t6 = 0.0;
let p1 = 101.325;
let p2 = 0.0;
let p3 = 0.0;
let p4 = 0.0;
let p5 = 0.0;
let p6 = 0.0;
let vel_rpm = 0.0;
let dp = 0.0;
let flow_d = 0.0;
let flow_ref = 0.0;
let t_in = 0.0;
let t_out = 0.0;
let FC = 100;
let velocidad=1;
let momento=1;


function setup() {
  createCanvas(1000, 1000);
  vel_rpm = 1000.0;
  
  slider = createSlider(1,2,1,1);
  slider.position(x_mot+535, y_mot-240);
  slider.style('width', '100px'); 
  velocidad = slider.value();
  
  slider = createSlider(1,8,1,1);
  slider.position(x_mot+665, y_mot+15);
  slider.style('width', '100px'); 
  momento = slider.value();
}

function draw() {

  background(220);
velocidad = slider.value();
//momento = slider.value(); 
 
  if(velocidad == 1){ 
   
    momento = slider.value(); 
    FC=1800;    
    if(momento == 1){
      torque = 40;
      dp = 386;
      p2=101
      p3 = 0.167;
      p4=p3-0.01*momento;
      p5 = 2.969;
     
      p6 = -0.0036;
      t2 = 20.6;
      t3 = 43.86;
      t4= 39.23
      t5 = 217.66;
      t6 = 198.63;
      
      t_in = 64.45;
      t_out = 66.4;
      flow_ref=8;
      flow_d = 4.5; 
   }else if(momento == 2){
   
     torque = 65;
      dp = 294;
      p2=101;
      p3 = 0.095;
      p4=p3-0.01*momento;
      p5 = 1.684;
      p6 = -0.0054;
      t2 = 18.6;
      t3 = 33.54;
      t4= 33.19
      t5 = 193.11;
      t6 = 176.15;
     
      t_in = 71.45;
      t_out = 72.62;
      flow_ref=6.5;
      flow_d = 3.535; 
   }else if(momento == 3){
     
     torque = 80;
      dp = 303;
      p2=101;
      p3 = 0.106;
      p4=p3-0.01*momento;
      p5 = 1.794;
      p6 = -0.0052;
      t2 = 18.61;
      t3 = 34.41;
      t4= 32.48
      t5 = 209.68;
      t6 = 188.28;
     
      t_in = 70;
      t_out = 71.4;
      flow_ref=6.5;
      flow_d = 4; 
    }else if(momento == 4){
     
     torque = 100;
      dp = 314;
      p2=101;
      p3 = 0.12;
      p4=p3-0.01*momento;
      p5 = 1.881;
      p6 = -0.005;
      t2 = 19.15;
      t3 = 35.67;
      t4= 32.66
      t5 = 228.24;
      t6 = 203.3; 
      
      t_in = 70;
      t_out = 71.7;
      flow_ref=6.5;
      flow_d = 4.462; 
     }else if(momento == 5){
     
     torque = 120;
      dp = 340;
      p2=101;
      p3 = 0.134;
      p4=p3-0.01*momento;
      p5 = 1.933;
      p6 = -0.0049;
      t2 = 19.22;
      t3 = 37.1;
      t4= 33.35;
      t5 = 248.15;
      t6 = 219.65;
       
      t_in = 64.68;
      t_out = 67.07;
      flow_ref=6.5;
      flow_d = 5.071; 
       
    }else if(momento == 6){    
       torque = 140;
      dp = 387;
      p2=101;
      p3 = 0.149;
      p4=p3-0.01*momento;
      p5 = 2.06;
      p6 = -0.0047;
      t2 = 19.75;
      t3 = 38.97;
      t4= 34.49;
      t5 = 269.17;
      t6 = 237.19;
             
      t_in = 65.6;
      t_out = 68.1;
      flow_ref=6.5;
      flow_d = 5.6; 
             
    }else if(momento == 7){    
      torque = 160;
      dp =400 ;
      p2=101;
      p3 = 0.168;
      p4=p3-0.01*momento
      p5 = 2.159;
      p6 = -0.0045;
      t2 = 19.94;
      t3 = 40.96;
      t4= 35.86;
      t5 = 291.49;
      t6 = 257.23;
    
      t_in = 66.2;
      t_out = 68.9;
      flow_ref=6.5;
      flow_d = 6.175; 
             
    }else{    
      
      torque = 180;
      dp =415 ;
      p2=101;
      p3 = 0.189;
      p4=p3-0.01*momento
      p5 = 2.309;
      p6 = -0.0045;
      t2 = 20.18;
      t3 = 43.17;
      t4= 37.4;
      t5 = 312.4;
      t6 = 276;
      
      t_in = 65.7;
      t_out = 68.9;
      flow_ref=6.5;
      flow_d = 6.767; 
     }
    
    
 }else {

 momento = slider.value(); 
  
   if(momento == 1){
      torque = 40;
      dp = 386;
      p2=101
      p3 = 0.167;
      p4=p3-0.01*momento;
      p5 = 2.969;
     
      p6 = -0.0036;
      t2 = 20.6;
      t3 = 43.86;
      t4= 39.23
      t5 = 217.66;
      t6 = 198.63;
      
      t_in = 64.45;
      t_out = 66.4;
      flow_ref=8;
      flow_d = 4.5; 
   }else if(momento == 2){
     
     torque = 60;
      dp = 395;
      p2=101;
      p3 = 0.189;
      p4=p3-0.01*momento
      p5 = 3.067;
      p6 = -0.0036;
      t2 = 20.61;
      t3 = 45.11;
      t4= 40.26;
      t5 = 239.55;
      t6 = 211.35;
     
      t_in = 65.47;
      t_out = 67.41;
      flow_ref=8;
      flow_d = 5.176; 
   }else if(momento == 3){
      FC=1800;
     torque = 80;
      dp = 402;
      p2=101;
      p3 = 0.209;
      p4=p3-0.01*momento
      p5 = 3.194;
      p6 = -0.0036;
      t2 = 21.48;
      t3 = 47.68;
      t4= 41.91
      t5 = 259.76;
      t6 = 226.91;
     
      t_in = 66.49;
      t_out = 68.55;
      flow_ref=8;
      flow_d = 5.804; 
    }else if(momento == 4){
     
     torque = 100;
      dp = 314;
      p2=101;
      p3 = 0.231;
      p4=p3-0.01*momento
      p5 = 3.385;
      p6 = -0.0031;
      t2 = 22.06;
      t3 = 50.05;
      t4= 43.39;
      t5 = 280.24;
      t6 = 244.85; 
      
      t_in = 66.39;
      t_out = 68.61;
      flow_ref=8;
      flow_d = 6.545; 
     }else if(momento == 5){
     
     torque = 120;
      dp = 416;
      p2=101;
      p3 = 0.26;
      p4=p3-0.01*momento
      p5 = 3.553;
      p6 = -0.0031;
      t2 = 22.77;
      t3 = 52.97;
      t4= 45.59;
      t5 = 301.69;
      t6 = 263.76;
       
      t_in = 67.02;
      t_out = 69.49;
      flow_ref=8;
      flow_d = 7.292; 
       
    }else if(momento == 6){    
       torque = 140;
      dp = 422;
      p2=101;
      p3 = 0.291;
      p4=p3-0.01*momento
      p5 = 3.762;
      p6 = -0.003;
      t2 = 23.01;
      t3 = 56.19;
      t4= 48.04;
      t5 = 323.92;
      t6 = 281.75;
             
      t_in = 66.48;
      t_out = 69.2;
      flow_ref=8;
      flow_d =8; 
             
    }else if(momento == 7){    
      torque = 160;
      dp =427 ;
      p2=101;
      p3 = 0.322;
      p4=p3-0.01*momento
      p5 = 4;
      p6 = -0.0024;
      t2 = 23.48;
      t3 = 59.5;
      t4= 50.86;
      t5 = 345.72;
      t6 = 299.95;
    
      t_in = 64.14;
      t_out = 37.2;
      flow_ref=8;
      flow_d = 8.754; 
             
    }else{    
      
      torque = 180;
      dp =458 ;
      p2=101;
      p3 = 0.347;
      p4=p3-0.01*momento
      p5 = 4.392;
      p6 = -0.0021;
      t2 = 23.68;
      t3 = 64.44;
      t4= 54.64;
      t5 = 372.97;
      t6 = 320.03;
      
      t_in = 65.78;
      t_out = 68.73;
      flow_ref=8;
      flow_d = 9.724; 
     }
   }
      
  //Posición X y Y (para desarrollo)
	//text('X = ', 20 , 20);
	//text(mouseX, 60 , 20);//mouseX
    //text('Y =  ', 20 , 40);//mouseY
	//text(mouseY, 60 , 40);
	
	text('X_REF = ', 400 , 20);
	text(mouseX-x_mot, 440 , 20);//mouseX
    text('Y_REF =  ', 400 , 40);//mouseY
	text(mouseY-y_mot, 440 , 40);
  if (count === 0) {
  // CONTROL DE VELOCIDAD--------------------------------------
  //Is it being dragged?
  if (dragging) {
    var dx = mouseX - x;
    var dy = mouseY - y;
    var mouseAngle = atan2(dy, dx);
    angle = mouseAngle - offsetAngle;
  }

  // Fill according to state
  if (dragging) {
    fill (175);
  } 
  else {
    fill(255);
  }
  // Draw ellipse for knob
  push();
  translate(x, y);
  rotate(angle);
  ellipse(0, 0, r*2, r*2);
  line(0, 0, r, 0);
  pop();
  fill(0);
  // Map is an amazing function that will map one range to another!
  // Here we take the slider's range and map it to a value between 0 and 255
  // Our angle is either between
  var calcAngle = 0; 
  if (angle < 0) {
    calcAngle = map(angle, -PI, 0, PI, 0);
  } 
  else if (angle > 0) {
    calcAngle = map(angle, 0, PI, TWO_PI, PI);
  }

  textAlign(CENTER);
  vel_rpm = 11.1111*(10.0+float(degrees(calcAngle))/360.0*90.0)+888.89;
  text(int(vel_rpm), x, y+r+20);
  text('RPM',x+40,y+r+20);
  
  }
  
  //DIBUJO DEL MOTOR------------------------------------------------------------
  push();
  translate(x_mot,y_mot)
  noFill();
  //CARCASA DEL MOTOR--------------------------------------------------------
  fill(200,180,100)
  rect(75,20,390,300);
  rect(85,20,370,-40);
  rect(85,20,10,-30);
  arc(85,-10,20,20,1.5*PI,0);
  rect(175,20,10,-20);
  arc(180,0,10,10,PI,0);
  rect(265,20,10,-20);
  arc(270,0,10,10,PI,0);
  rect(355,20,10,-20);
  arc(360,0,10,10,PI,0);
  rect(445,20,10,-30);
  arc(455,-10,20,20,PI,1.5*PI);
  
  fill('gray');
  rect(55,155,20,40);
  rect(35,135,20,80);
  //bancada
  //primera
  var a=0;
  line(85+90*a,20,85+90*a,150);
  line(85+90*a,150,75+90*a,150);
  line(75+90*a,150,75+90*a,200);
  line(75+90*a,200,105+90*a,200);
  line(105+90*a,200,105+90*a,150);
  line(105+90*a,150,105+90*a,150);
  line(105+90*a,150,95+90*a,150);
  line(95+90*a,150,95+90*a,20);
  line(95+90*a,20,85+90*a,20);
  line(75+90*a,160,105+90*a,160);
  line(75+90*a,190,105+90*a,190);
  line(95+90*a,20,175+90*a,20);
  //segunda
  a=1;
  line(85+90*a,20,85+90*a,150);
  line(85+90*a,150,75+90*a,150);
  line(75+90*a,150,75+90*a,200);
  line(75+90*a,200,105+90*a,200);
  line(105+90*a,200,105+90*a,150);
  line(105+90*a,150,105+90*a,150);
  line(105+90*a,150,95+90*a,150);
  line(95+90*a,150,95+90*a,20);
  line(95+90*a,20,85+90*a,20);
  line(75+90*a,160,105+90*a,160);
  line(75+90*a,190,105+90*a,190);
  line(95+90*a,20,175+90*a,20);
  //tercera
  a=2;
  line(85+90*a,20,85+90*a,150);
  line(85+90*a,150,75+90*a,150);
  line(75+90*a,150,75+90*a,200);
  line(75+90*a,200,105+90*a,200);
  line(105+90*a,200,105+90*a,150);
  line(105+90*a,150,105+90*a,150);
  line(105+90*a,150,95+90*a,150);
  line(95+90*a,150,95+90*a,20);
  line(95+90*a,20,85+90*a,20);
  line(75+90*a,160,105+90*a,160);
  line(75+90*a,190,105+90*a,190);
  line(95+90*a,20,175+90*a,20);
  //cuarta
  a=3;
  line(85+90*a,20,85+90*a,150);
  line(85+90*a,150,75+90*a,150);
  line(75+90*a,150,75+90*a,200);
  line(75+90*a,200,105+90*a,200);
  line(105+90*a,200,105+90*a,150);
  line(105+90*a,150,105+90*a,150);
  line(105+90*a,150,95+90*a,150);
  line(95+90*a,150,95+90*a,20);
  line(95+90*a,20,85+90*a,20);
  line(75+90*a,160,105+90*a,160);
  line(75+90*a,190,105+90*a,190);
  line(95+90*a,20,175+90*a,20);
  //quinta
  a=4;
  line(85+90*a,20,85+90*a,150);
  line(85+90*a,150,75+90*a,150);
  line(75+90*a,150,75+90*a,200);
  line(75+90*a,200,105+90*a,200);
  line(105+90*a,200,105+90*a,150);
  line(105+90*a,150,105+90*a,150);
  line(105+90*a,150,95+90*a,150);
  line(95+90*a,150,95+90*a,20);
  line(95+90*a,20,85+90*a,20);
  line(75+90*a,160,105+90*a,160);
  line(75+90*a,190,105+90*a,190);
  //pistones
  //primero
  line(95,y1,175,y1);
  line(95,y1+5,175,y1+5);
  line(96,y1+5,96,y1+10);
  line(174,y1+5,174,y1+10);
  line(95,y1+10,175,y1+10);
  line(95,y1+15,175,y1+15);
  line(96,y1+15,96,y1+40);
  line(174,y1+15,174,y1+40);
  line(96,y1+40,106,y1+50);
  line(106,y1+50,164,y1+50);
  line(164,y1+50,174,y1+40);
  fill('gray');

  rect(125,140+(y1-25)*50/70,20,20);
  line(127.5,y1+50,127.5,140+(y1-25)*50/70);
  line(142.5,y1+50,142.5,140+(y1-25)*50/70);
  rect(105,130+(y1-25)*35/70,20,55);
  rect(145,130+(y1-25)*35/70,20,55);
  //segundo
  line(95+90,y2,175+90,y2);
  line(95+90,y2+5,175+90,y2+5);
  line(96+90,y2+5,96+90,y2+10);
  line(174+90,y2+5,174+90,y2+10);
  line(95+90,y2+10,175+90,y2+10);
  line(95+90,y2+15,175+90,y2+15);
  line(96+90,y2+15,96+90,y2+40);
  line(174+90,y2+15,174+90,y2+40);
  line(96+90,y2+40,106+90,y2+50);
  line(106+90,y2+50,164+90,y2+50);
  line(164+90,y2+50,174+90,y2+40);
  fill('gray');

  rect(125+90,140+(y2-25)*50/70,20,20);
  line(127.5+90,y2+50,127.5+90,140+(y2-25)*50/70);
  line(142.5+90,y2+50,142.5+90,140+(y2-25)*50/70);
  rect(105+90,130+(y2-25)*35/70,20,55);
  rect(145+90,130+(y2-25)*35/70,20,55);
  //tercero
  line(95+90*2,y2,175+90*2,y2);
  line(95+90*2,y2+5,175+90*2,y2+5);
  line(96+90*2,y2+5,96+90*2,y2+10);
  line(174+90*2,y2+5,174+90*2,y2+10);
  line(95+90*2,y2+10,175+90*2,y2+10);
  line(95+90*2,y2+15,175+90*2,y2+15);
  line(96+90*2,y2+15,96+90*2,y2+40);
  line(174+90*2,y2+15,174+90*2,y2+40);
  line(96+90*2,y2+40,106+90*2,y2+50);
  line(106+90*2,y2+50,164+90*2,y2+50);
  line(164+90*2,y2+50,174+90*2,y2+40);
   fill('gray');

  rect(125+90*2,140+(y2-25)*50/70,20,20);
  line(127.5+90*2,y2+50,127.5+90*2,140+(y2-25)*50/70);
  line(142.5+90*2,y2+50,142.5+90*2,140+(y2-25)*50/70);
  rect(105+90*2,130+(y2-25)*35/70,20,55);
  rect(145+90*2,130+(y2-25)*35/70,20,55);
  //cuarto
  line(95+90*3,y1,175+90*3,y1);
  line(95+90*3,y1+5,175+90*3,y1+5);
  line(96+90*3,y1+5,96+90*3,y1+10);
  line(174+90*3,y1+5,174+90*3,y1+10);
  line(95+90*3,y1+10,175+90*3,y1+10);
  line(95+90*3,y1+15,175+90*3,y1+15);
  line(96+90*3,y1+15,96+90*3,y1+40);
  line(174+90*3,y1+15,174+90*3,y1+40);
  line(96+90*3,y1+40,106+90*3,y1+50);
  line(106+90*3,y1+50,164+90*3,y1+50);
  line(164+90*3,y1+50,174+90*3,y1+40);
  fill('gray');

  rect(125+90*3,140+(y1-25)*50/70,20,20);
  line(127.5+90*3,y1+50,127.5+90*3,140+(y1-25)*50/70);
  line(142.5+90*3,y1+50,142.5+90*3,140+(y1-25)*50/70);
  rect(105+90*3,130+(y1-25)*35/70,20,55);
  rect(145+90*3,130+(y1-25)*35/70,20,55);  
  y1=y1+m;
  y2=y2-m
  if(y1>=95){
    m=-1*m
  }
  if(y1<=25){
    m=-1*m
  }
  if(m>0){
    m=((degrees(calcAngle))/360*4+1)*2;
    push();
    strokeWeight(5);
    point(45,135+(y1-25)*80/70);
    point(90+90*0,160+(y1-25)*30/70);
    point(115+90*0,130+(y1-25)*90/70);
    point(155+90*0,130+(y1-25)*90/70);
    point(90+90*1,160+(y1-25)*30/70);
    point(90+90*2,160+(y1-25)*30/70);
    point(90+90*3,160+(y1-25)*30/70);
    point(115+90*3,130+(y1-25)*90/70);
    point(155+90*3,130+(y1-25)*90/70);
    point(90+90*4,160+(y1-25)*30/70);
    pop();
  }
  if(m<0){
    m=-((degrees(calcAngle))/360*4+1)*2;
    push();
    strokeWeight(5);
    point(115+90*1,130+(y2-25)*90/70);
    point(155+90*1,130+(y2-25)*90/70);
    point(115+90*2,130+(y2-25)*90/70);
    point(155+90*2,130+(y2-25)*90/70);
    pop();
  }
  
  
  //SISTEMA DE REFRIGERACIÓN------------------------------------------------------------
  fill(130,238,238);
  rect(465,230,-350,10);
  arc(115,240,20,20,PI,1.5*PI);
  rect(115,240,-10,10);
  arc(115,250,20,20,0.5*PI,1*PI);
  rect(115,250,310,10);
  arc(425,260,20,20,1.5*PI,0*PI);
  rect(425,260,10,10);
  arc(425,270,20,20,0*PI,0.5*PI);
  rect(425,270,-310,10);
  arc(115,280,20,20,1*PI,1.5*PI);
  rect(115,280,-10,15);
  arc(115,295,20,20,0.5*PI,1*PI);
  rect(115,295,350,10);
  rect(465,230,45,10);
  arc(510,240,20,20,1.5*PI,0*PI);
  rect(510,240,10,10);
  rect(465,295,80,10);
  arc(545,295,20,20,0,0.5*PI);
  rect(545,295,10,-15);
  fill('white');
  ellipse(315,300,35,35);
  line(315-17.5,300,315,300-17.5);
  line(315-17.5,300,315,300+17.5);
  fill('blue');
  rect(580,240,10,55);
  arc(590,240,20,20,1*PI,1.5*PI);
  rect(590,240,50,-10);
  arc(590,295,20,20,0.5*PI,1*PI);
  rect(590,295,50,10);
  fill('black');
  text('SALIDA DE AGUA',700,230);
  text('INGRESO DE AGUA',700,305);
  fill('red');
  rect(500,250,100,30);
  arc(500,265,30,30,0.5*PI,1.5*PI);
  arc(600,265,30,30,1.5*PI,0.5*PI);
  rect(560,248,10,34);
  //DINAMOMETRO----------------------------------------------
  noFill();
  fill('brown');
  rect(465,160,60,30);
  rect(525,120,50,110);
  rect(535,120,30,-50);
  fill('white');
  ellipse(550,50,120,120);
  push();
  strokeWeight(1);
  for (let i=0;i<5;i++){
	  line(550,50,550+60*cos((0.9+i*0.3)*PI),50+60*sin((0.9+i*0.3)*PI));
  }
  strokeWeight(0);
  fill('white');
  ellipse(550,50,90,90);
  fill('red');
  arc(550,50,120,120,(0.25-0.15)*PI,0.25*PI);
  strokeWeight(2);
  for (let i=0;i<6;i++){
	  line(550,50,550+60*cos((0.75+i*0.3)*PI),50+60*sin((0.75+i*0.3)*PI));
  }
  strokeWeight(0);
  fill('white');
  ellipse(550,50,80,80);
  strokeWeight(2);
  line(550,50,550+60*cos((0.75+1.5*torque/torque_max)*PI),50+60*sin((0.75+1.5*torque/torque_max)*PI));
  pop();
  fill('black');
  for (let i=0;i<6;i++){
	  text(round(i*torque_max/5),550+75*cos((0.75+i*0.3)*PI),50+75*sin((0.75+i*0.3)*PI));
  }
  text('N.m',550,95);
  fill('blue');
  rect(575,210,65,10);
  rect(575,140,65,10);
  fill('black');
  text('INGRESO DE AGUA',700,150);
  //TUBERIAS-----------------------------------------------------
  //AIRE
  fill('yellow');
  rect(-70,-600,-50,20);
  rect(90,-600,65,20);
  arc(155,-580,40,40,1.5*PI,0);
  rect(155,-580,20,50);
  rect(155,-480,20,50);
  rect(240,-250,10,-120);
  rect(160,-110,10,90);
  rect(-30,-540,5,30);
  rect(50,-540,-5,30);
  //GASES
  fill(85,75,75);
  rect(330,-20,20,-360);
  rect(420,-400,20,-200);
  //COMBUSTIBLE
  fill('black');
  rect(-170,-65,40,10);
  rect(-68,-65,218,10);
  arc(150,-55,20,20,1.5*PI,0);
  rect(150,-55,10,35);
  //Enfriador----------------------------------------------
  noFill();
  fill('purple');
  rect(140,-105,130,-150);
  fill('orange');
  rect(240,-255,10,130);
  for(let i=0;i<3;i++){
	  rect(220-i*20,-235,10,110);
  }
  for(let i=0;i<2;i++){
	  arc(240-i*40,-125,20,20,0,0.5*PI);
	  arc(230-i*40,-125,20,20,0.5*PI,1*PI);
	  rect(230-i*40,-125,10,10);
	  arc(220-i*40,-235,20,20,1.5*PI,0*PI);
	  arc(210-i*40,-235,20,20,1.0*PI,1.5*PI);
	  rect(210-i*40,-235,10,-10);
  }
  rect(220-3*20,-235,10,130);
  for (let i=0;i<6;i++){
	  push();
	  fill('black');
	  line(150,-230+i*20,260,-230+i*20);
	  pop();
  }
  fill('green');
  ellipse(120,-105-(1.5*75),20,75);
  ellipse(120,-105-(0.5*75),20,75);
  ellipse(80,-105-75,65,65);
  //TURBOCOMPRESOR----------------------------------------------
  fill('blue');
  quad(270,-360,270,-410,140,-460,140,-310);
  fill('red');
  quad(270+180,-310,270+180,-460,140+180,-410,140+180,-360);
  fill('black');
  rect(270,-395,50,25);
  //VALVULA MARIPOSA--------------------------------
  fill('black');
  strokeWeight(4);
  line(180,-485,150,-525);
  line(180,-485,150,-485);
  line(180,-525,150,-525);
  strokeWeight(1);
  fill('green');
  ellipse(165,-505,20,20);
  //SENSOR DE PRESION DIFERENCIAL--------------------------
  fill('pink');
  quad(90,-610,90,-570,60,-540,60,-640);
  rect(60,-640,-100,100);
  quad(-70,-610,-70,-570,-40,-540,-40,-640);
  //INGRESO DE COMBUSTIBLE ----------------------------
  //CORIOLLIS
  fill(100);
  triangle(10,-80,-40,0,60,0);
  fill('blue');
  ellipse(10,-30,50,50);
  //VALVULA
  fill('black');
  triangle(-60,-40,-60,-80,-100,-60);
  triangle(-100,-60,-140,-40,-140,-80);
  rect(-110,-60,20,-30);
  fill('red');
  rect(-130,-90,60,-10);
  //TERMOPARES-------------------------------------------
  fill('grey');
  rect(175,-570,5,15); //T2
  rect(180,-565,10,5);
  rect(175,-475,5,15); //p2
  rect(180,-470,10,5);
  rect(240,-300,-5,15); //p3 y t3
  rect(235,-295,-10,5);
  rect(170,-90,5,15); //t4
  rect(175,-85,10,5);
  rect(350,-100,5,15); //p5 y t5
  rect(355,-95,10,5);
  rect(440,-580,5,15); //p6 y t6
  rect(445,-575,10,5);

  //TEXTOS-------------------------------
  fill('black');
  text('COMBUSTIBLE',-150,-20);
  text('AIRE',-150,-580);
  text('SALIDA AL AMBIENTE',428,-620);
  push();
  fill('black');
  textStyle(BOLD);
  textSize(14);
  text('VELOCIDAD DE GIRO', 615 , -480);
  text('REFRIGERANTE', -50 , 215);
  //text('CARGA DEL DINAMÓMETRO', 615 , -250);
  pop();
  //INDICADORES--------------------------
  //Ingreso
  indicador(-190,-550,'HR',hr,'%');
  indicador(-190,-510,'Po',p1,'kPa');
  indicador(-190,-470,'Ta',t1,'°C');
  //Punto 2
  indicador(200,-575,'T2',t2,'°C');
  indicador(200,-480,'P2',p2,'kPa');
  //Punto 3
  indicador(-70,-300,'T3',t3,'°C');
  indicador(80,-300,'P3',p3,'kPa');
  //Punto 4
  indicador(190,-100,'T4',t4,'°C');
  indicador(190,-60,'P4',p4,'kPa');
  //Punto 5
  indicador(370,-100,'T5',t5,'°C');
  indicador(370,-60,'P5',p5,'kPa');
  //Punto 6
  indicador(460,-590,'T6',t6,'°C');
  indicador(460,-550,'P6',p6,'kPa');
  //torque
  indicador(650,40,'T',torque,'N.m');
  //flujo de combustible
  indicador(-60,10,'mc',flow_d,'kg/h');
  //velocidad de giro
  //indicador(-120,155,'n',vel_rpm,'RPM');
  push();
	fill('black');
	rect(-120, 155, 30, 30);
	rect(-120+40,155,100,30);
	fill(0, 255, 0);
    textSize(14);
    textStyle(BOLD);
	text('n', -120+15, 155+20); 
	text(nf(vel_rpm,0,2),-120+70,155+20);
	text('RPM',-120+115,155+20);
  pop();
  //PRESION DIFERENCIAL
  indicador(-50,-510,'dP',dp,'Pa');
  //refrigerante salida al motor
  indicador(-120,230,'To',t_out,'°C');
  //refrigerante ingreso al motor
  indicador(-120,270,'Ti',t_in,'°C');
  //flujo de refrigerante ingreso al motor
  indicador(-120,310,'Vr',flow_ref,'m3/h');
  indicador(525,-200,'N',FC,'%');
  pop();
}
function mousePressed() {
  // Did I click on slider?
  if (dist(mouseX, mouseY, x, y) < r) {
    dragging = true;
    // If so, keep track of relative location of click to corner of rectangle
    var dx = mouseX - x;
    var dy = mouseY - y;
    offsetAngle = atan2(dy, dx) - angle;
  }else if(dist(mouseX, mouseY, x_tor, y_tor) < r){
	 drag_tor = true;
    // If so, keep track of relative location of click to corner of rectangle
    var dx_tor = mouseX - x_tor;
    var dy_tor = mouseY - y_tor;
    offsetAngle_tor = atan2(dy_tor, dx_tor) - angle_tor;
  }
  
}

function mouseReleased() {
  // Stop dragging
  dragging = false;
  drag_tor = false;
}

function indicador(x,y,simbol,value,unit){
	push();
	fill('black');
	rect(x, y, 30, 30);
	rect(x+40,y,90,30);
	fill(0, 255, 0);
    textSize(14);
    textStyle(BOLD);
	text(simbol, x+15, y+20); 
	let a = nf(value,0,2);
	text(a,x+65,y+20);
	text(unit,x+105,y+20);
	pop();
}
