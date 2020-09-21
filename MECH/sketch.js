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
var y_mot = 450;

let torque;
let torque_max = 80;

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

let slider;
let inyec;
let slider2;
let presion;
let slider3;
let ensayo;

let co;
let co2;
let o2;
let h_c;
function setup() {
  createCanvas(1000, 1000);
  vel_rpm = 2000.0;
  slider = createSlider(50,100,25,25);
  slider.position(x_mot+530, y_mot-380);
  slider.style('width', '180px'); 
  inyec = slider.value();
  
  slider2 = createSlider(20,35,0,0);
  slider2.position(x_mot+200, y_mot-160);
  slider2.style('width', '100px'); 
  presion = slider2.value();
  
  slider3 = createSlider(1,2,1,1);
  slider3.position(x_mot-150, y_mot-220);
  slider3.style('width', '180px'); 
  ensayo = slider3.value();
  
  //slider.attribute('disabled','');
  co = 8*pow(vel_rpm,2)/pow(10,9) - 3*vel_rpm/pow(10,5) + 0.1198;
  co2 = 4*pow(vel_rpm,2)/pow(10,8) + 0.0005*vel_rpm + 11.454;
  o2 = 2*pow(vel_rpm,2)/pow(10,7) - 0.002*vel_rpm + 7.275;
  h_c = 6*pow(vel_rpm,2)/pow(10,6) - 0.0604*vel_rpm + 186.26;
  
 
}

//function ensayo1() {
  //vel_rpm = 2000.0;
   //presion = slider2.value();
  //torque = -0.0559*pow(presion,2) + 1.6768*presion +125.72;
 //} 

function draw() {

  background(220);
  
  ensayo = slider3.value();
  if(ensayo == 1){  
  
  inyec = slider.value();
  if(inyec == 50){
	
    //if (vel_rpm==2000){
      //presion = slider2.value();
     //p4 = -0.0559*pow(presion,2) + 1.6768*presion +125.72;
     // }else {
    torque = -0.008*vel_rpm + 62.667;
	dp = -4*pow(vel_rpm,2)/pow(10,6) + 0.096*vel_rpm - 7;
	p4 = 2*pow(vel_rpm,2)/pow(10,7) - 0.0095*vel_rpm + 5.1375;
	t4 = 5*pow(vel_rpm,2)/pow(10,7) + 0.00*vel_rpm + 14.425;
	flow_d = -3600*pow(vel_rpm,2)/pow(10,10) + 0.000001*vel_rpm*3600 - 0.0006*3600;
	co = 8*pow(vel_rpm,2)/pow(10,9) - 3*vel_rpm/pow(10,5) + 0.1198;
	co2 = 4*pow(vel_rpm,2)/pow(10,8) + 0.0005*vel_rpm + 11.454;
	o2 = 2*pow(vel_rpm,2)/pow(10,7) - 0.002*vel_rpm + 7.275;
	h_c = 252.62*pow(vel_rpm,0.1178);
    //}
        
  }else if(inyec == 75){
	torque = -0.0105*vel_rpm + 88.417;
	dp = -0.057*vel_rpm + 174;
	p4 = 3*pow(vel_rpm,2)/pow(10,6) - 0.0253*vel_rpm + 14.62;
	t4 = -2*pow(vel_rpm,2)/pow(10,7) + 0.0023*vel_rpm + 34.8;
	flow_d = -4*pow(vel_rpm,2)*3600/pow(10,11) + 0.0000007*3600*vel_rpm - 3600*0.0003;
	co = 2*pow(vel_rpm,2)/pow(10,8) - 7*vel_rpm/pow(10,5) + 0.1545;
	co2 = -4*pow(vel_rpm,2)*3600/pow(10,8) + 0.0009*vel_rpm*3600 + 3600*11.346;
	o2 = -9*pow(vel_rpm,2)/pow(10,8) - 0.0003*vel_rpm + 4.5184;
	h_c = 1300*pow(vel_rpm,-0.076);
  }else {
 	torque =  -3*pow(vel_rpm,2)/pow(10,6) + 0.0087*vel_rpm + 81.625;
	dp = -0.057*vel_rpm +174;
	p4 = 3*pow(vel_rpm,2)/pow(10,6) - 0.0253*vel_rpm + 14.62;
	t4 = -5*pow(vel_rpm,2)/pow(10,7) + 0.0069*vel_rpm +14.425;
	flow_d = 0.0008*log(vel_rpm)*3600-0.0051*3600;
	co = 4*pow(vel_rpm,2)/pow(10,8) - 0.0002*vel_rpm + 0.2714;
	co2 = 8*pow(vel_rpm,2)/pow(10,8) + 0.0001*vel_rpm + 12.537;
	o2 = -9*pow(vel_rpm,2)/pow(10,8) - 0.0002*vel_rpm + 3.958;
	h_c = -1*pow(vel_rpm,2)/pow(10,5) + 0.1205*vel_rpm + 429.6;
  }
  
  }else{
    presion = slider2.value();  
    torque = -0.0559*pow(presion,2) - 1.6768*presion +125.72;
    dp= 0.3031*pow(presion,2) - 22.245*presion + 492.59;
    p4=-presion;
    t4=61.946*exp(-1*0.0364*presion);
    flow_d = 3600*0.0009*exp(-0.034*presion);
    h_c=0.7392*pow(presion,2) - 53.128*presion + 1388.7;
  }  
    
  //else {
	//presion = slider2.value();
    //torque = -0.0559*pow(presion,2) + 1.6768*presion +125.72;
  
  //torque = 0.61*vel_rpm -0.0002*pow(vel_rpm,2) - 134.86;
  //dp = 0.0002*pow(vel_rpm,2) - 0.3135*vel_rpm + 297.03;
  //p2 = p1-(dp/1000);
  //p3 = (8*pow(vel_rpm,2)/pow(10,8) + 0.0004*vel_rpm - 0.3219)*100;
  //p4 = (4*pow(vel_rpm,2)/pow(10,8) + 0.0004*vel_rpm - 0.3709)*100;
  //p5 = (2*pow(vel_rpm,2)/pow(10,6) - 0.001*vel_rpm + 0.0033)*100;
  //p6 = (6*pow(vel_rpm,2)/pow(10,9) - 6*vel_rpm/pow(10,6) - 0.0065)*100;
  //t2 = 8*pow(vel_rpm,2)/pow(10,6) - 0.0178*vel_rpm + 28.829;
  //t3 = 2*pow(vel_rpm,2)/pow(10,5) - 0.0072*vel_rpm + 22.742;
  //t4 = 6*pow(vel_rpm,2)/pow(10,5) - 0.1227*vel_rpm + 106.16;
  //t5 = -0.0002*pow(vel_rpm,2) + 0.751*vel_rpm - 207.79;
  //t6 = -0.0002*pow(vel_rpm,2) + 0.7416*vel_rpm - 242.72;
  //flow_ref = 5*pow(vel_rpm,2)/pow(10,7) + 0.0031*vel_rpm + 0.6971;
  //t_in = -1*pow(vel_rpm,2)/pow(10,5) + 0.035*vel_rpm + 39.393;
  //t_out = -1*pow(vel_rpm,2)/pow(10,5) + 0.0375*vel_rpm + 41.172;
  //flow_d = -4*pow(vel_rpm,2)/pow(10,6) + 0.0198*vel_rpm - 9.9971;
  
  //Posición X y Y (para desarrollo)
	//text('X = ', 20 , 20);
	//text(mouseX, 60 , 20);//mouseX
    //text('Y =  ', 20 , 40);//mouseY
	//text(mouseY, 60 , 40);
	
	//text('X_REF = ', 400 , 20);
	//text(mouseX-x_mot, 440 , 20);//mouseX
    //text('Y_REF =  ', 400 , 40);//mouseY
	//text(mouseY-y_mot, 440 , 40);
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
  vel_rpm = 27.78*(10.0+float(degrees(calcAngle))/360.0*90.0)+1722.22;
  text(int(vel_rpm), x, y+r+20);
  text('RPM',x+40,y+r+20);
  
  }
  
   // CONTROL DE TORQUE--------------------------------------
  //Is it being dragged?
  /*if (drag_tor) {
    var dx_tor = mouseX - x_tor;
    var dy_tor = mouseY - y_tor;
    var mouseAngle_tor = atan2(dy_tor, dx_tor);
    angle_tor = mouseAngle_tor - offsetAngle_tor;
  }
  // Fill according to state
  if (drag_tor) {
    fill (175);
  } 
  else {
    fill(255);
  }
  // Draw ellipse for knob
  push();
  translate(x_tor, y_tor);
  rotate(angle_tor);
  ellipse(0, 0, r*2, r*2);
  line(0, 0, r, 0);
  pop();
  fill(0);
  // Map is an amazing function that will map one range to another!
  // Here we take the slider's range and map it to a value between 0 and 255
  // Our angle is either between
  var calcAngle_tor = 0; 
  if (angle_tor < 0) {
    calcAngle_tor = map(angle_tor, -PI, 0, PI, 0);
  } 
  else if (angle_tor > 0) {
    calcAngle_tor = map(angle_tor, 0, PI, TWO_PI, PI);
  }
  torque = degrees(calcAngle_tor)*torque_max/360;
  textAlign(CENTER);
  text(round(torque*100/torque_max,2), x_tor, y_tor+r+20);*/
  //DIBUJO DEL MOTOR------------------------------------------------------------
  push();
  translate(x_mot,y_mot)
  fill('gray');
  //noFill();
  rect(55,155,20,40);
  rect(35,135,20,80);
  
  //bancada - carcasa
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
  //noFill();
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
  //noFill();
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
  //noFill();
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
  //noFill();
  fill('gray');
  rect(125+90*3,140+(y1-25)*50/70,20,20);
  line(127.5+90*3,y1+50,127.5+90*3,140+(y1-25)*50/70);
  line(142.5+90*3,y1+50,142.5+90*3,140+(y1-25)*50/70);
  rect(105+90*3,130+(y1-25)*35/70,20,55);
  rect(145+90*3,130+(y1-25)*35/70,20,55);  
  noFill();
 
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
  //CARCASA DEL MOTOR--------------------------------------------------------
  
  //rect(75,20,390,300);
  //rect(85,20,370,-40);
  //rect(85,20,10,-30);
  //arc(85,-10,20,20,1.5*PI,0);
  //rect(175,20,10,-20);
  //arc(180,0,10,10,PI,0);
  //rect(265,20,10,-20);
  //arc(270,0,10,10,PI,0);
  //rect(355,20,10,-20);
  //arc(360,0,10,10,PI,0);
  //rect(445,20,10,-30);
  //arc(455,-10,20,20,PI,1.5*PI);
  
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
  arc(520,250,20,20,0.5*PI,PI);
  rect(520,250,170,10);
  arc(690,260,20,20,1.5*PI,0);
  rect(690,260,10,35);
  rect(465,295,10,10);
  arc(475,305,20,20,1.5*PI,0*PI);
  rect(475,305,10,150);
  arc(485,455,20,20,0.5*PI,1*PI);
  rect(485,455,125,10);
  arc(610,455,20,20,0,0.5*PI);
  rect(610,455,10,-20);
  //rect(545,295,10,-15);
  fill(180,152,222);
  ellipse(315,300,35,35);
  line(315-17.5,300,315,300-17.5);
  line(315-17.5,300,315,300+17.5);
  
  fill('black');
  text('SALIDA DE AGUA',700,220);
  
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
  rect(8,-420,4,25);
  rect(8,-385,4,25);
  //line(10,-410,10,-395);
  fill('yellow');
  rect(-0,-400,-120,20);
  rect(20,-400,140,20);
fill('yellow');
  arc(160,-380,40,40,1.5*PI,0);
  rect(160,-380,20,50);
  rect(160,-130,20,110);
  //rect(240,-250,10,-120);
  //rect(160,-110,10,90);
  rect(-30,-380,5,70);
  rect(50,-380,-5,70);
  //GASES
  fill(85,75,75);
  rect(420,-20,20,-380);
  //rect(420,-400,20,-200);
  //COMBUSTIBLE
  fill('black');
  rect(-170,-65,40,10);
  rect(-68,-65,218,10);
  arc(150,-55,20,20,1.5*PI,0);
  rect(150,-55,10,35);
  //Enfriador----------------------------------------------
  push();
  translate(450,550);
  //noFill();
  fill('orange');
  rect(140,-105,130,-150);
  fill(130,238,238);
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
  pop();
  //TURBOCOMPRESOR----------------------------------------------
  //fill('blue');
  //quad(270,-360,270,-410,140,-460,140,-310);
  //fill('red');
  //quad(270+180,-310,270+180,-460,140+180,-410,140+180,-360);
  //noFill();
  //rect(270,-395,50,25);
  //TANQUE PULMON----------------------------------------
  fill('blue');
  rect(110,-410,110,200);
  fill('yellow');
  rect(160,-210,20,30);
  //VALVULA MARIPOSA--------------------------------
  fill('black');
  strokeWeight(4);
  line(185,-135,155,-175);
  line(185,-135,155,-135);
  line(185,-175,155,-175);
  strokeWeight(1);
  fill('green');
  ellipse(170,-155,20,20);
  //SENSOR DE PRESION DIFERENCIAL--------------------------
  //fill('white');
  //quad(90,-610,90,-570,60,-540,60,-640);
  //rect(60,-640,-100,100);
  //quad(-70,-610,-70,-570,-40,-540,-40,-640);
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
  rect(180,-90,5,15); //t4
  rect(185,-85,10,5);
  rect(420,-250,-5,15);
  rect(415,-245,-10,5);

  //TEXTOS-------------------------------
  fill('black');
  text('COMBUSTIBLE',-150,-20);
  text('AIRE',-150,-380);
  text('SALIDA AL AMBIENTE',428,-420);
  push();
  fill('black');
  textStyle(BOLD);
  textSize(14);
  text('VELOCIDAD DE GIRO', 615 , -280);
  
  pop();
 
  //INDICADORES--------------------------
  //Ingreso
  indicador(-190,-350,'HR',hr,'%');
  indicador(-190,-310,'po',p1,'kPa');
  indicador(-190,-270,'To',t1,'°C');
  indicador(220,-60,'Tad',t4,'°C');
  indicador(220,-100,'pad',p4,'kPa');
  indicador(650,40,'T',torque,'N.m');
  //flujo de combustible
  indicador(-60,10,'mc',flow_d,'kg/h');
  indicador(260,-250,'Tg',h_c,'°C');
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
  indicador(-50,-310,'dP',dp,'Pa');
  
 //Factor de carga
  indicador(550,-350,'FC',inyec,'%');
  //indicador(550,-415,'pad',-presion,'kPa');
  indicador(-120,-200,'ENS',ensayo,'');
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
