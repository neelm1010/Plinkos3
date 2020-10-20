const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var score=0;
var particle;
var turn=0;



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
	world = engine.world;
  ground=new Ground(240,800,480,20)
  for(var k=0;k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
    
      }
      for(var j=75;j<=width;j=j+50){
        plinkos.push(new Plinko(j,75))
      }
      for(var j=50;j<=width-10;j=j+50){
        plinkos.push(new Plinko(j,175))
      }
      for (var j = 75; j <=width; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,275));
      }
  
       for (var j = 50; j <=width-10; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,375));
      }
  
     
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  ground.display();
  noStroke();
  textSize(35)
  fill("black") 
  text("Score:"+ score,300,40)
  //if(particles.collide(ground)){
  //  score=score+500
 // }
if(particles!=null){

if(particles.body.position.y>760){
if(particle.body.position.x<800){
score=score+500;
particles=null;
}
}
}
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10,width/2-10),10,10))
  }
  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }
  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  
  drawSprites();
}
function keyPressed() { 
  if(keyCode==32) { 
    console.log(gameState); 
    console.log("i m here") 
if(gameState!=="end") { 
  score++; particle=new Particles(mouseX, 10, 10, 10); 
}
 }
 }