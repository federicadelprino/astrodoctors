var myData;
var space;
var img;
var astronauts = [];
var usa;
var russia;
var italy;
var a = true;


function preload() {
	myData = loadJSON('assets/peopleinspace.json');
	space = loadImage("assets/doctorspace.jpg");
	img = loadImage("assets/tardis.png");
	enemies = loadImage("assets/enemies.png");
	usa = loadImage("assets/usa.jpg");
	russia = loadImage("assets/russia.jpg");
	italy = loadImage("assets/italy.jpg");
}


function setup() {
   createCanvas(500,500);

  	for (var i = 0; i < myData.people.length; i++) {
	   var astroData = myData.people[i];
		var newAstronaut = new Astronaut(astroData.name, astroData.launchdate, astroData.country);
		astronauts.push(newAstronaut);
	}
}


// DRAW
function draw() {
   
   background(space);
   
  	for (var i = 0; i < astronauts.length; i++) {
	
		var astronaut = astronauts[i];
		astronaut.move();
		astronaut.display();

  	}
  	
  	textSize(20);
  	textAlign(CENTER);
  text("CLICK to know more about these Doctors", 250, 25);
	}
	

function mousePressed() {
  
}


function Astronaut(name, date, country) {
   
	this.name = name;
	this.launchdate = date;
	this.country = country;


var daysInSpace = (Date.now() - Date.parse(this.launchdate))/ (1000*60*60*24)/2;

   this.radius = daysInSpace;
   
	this.x = random(this.radius+1, width+1 - this.radius);
	this.y = random(this.radius+1, height+1 - this.radius);

	this.incrementX = 1;
	this.incrementY = 1;
	
	
	this.display = function() {

image(img, this.x-50, this.y-50);
	
textAlign(CENTER);
fill('white');
		
      
     if(mouseIsPressed) {
       noStroke();
         fill('white');
         textSize(13);
         text(this.name, this.x, this.y+105);
         stroke(7, 9, 119);
         strokeWeight(2);
         fill(136, 167, 216);
         text(parseInt(this.radius)+" days in space", this.x, this.y+90);
         fill(136, 160, 200);
         if(this.country == "usa") {
         image(usa, this.x-25, this.y-50);
          }
          
          else if(this.country =="russia") {
            image(russia, this.x-25, this.y-50);
         
          }
          
          else if(this.country == "italy") {
          image(italy, this.x-25, this.y-50);
          }
		   	} 
		   	
		   	if(keyIsPressed) {
        image(enemies);
        text("PRESS to see the enemies", 250, 50);
		   	}
		
		
	}

	this.move = function() {
	   
      
		this.x += this.incrementX;
		this.y += this.incrementY;

		if (this.x > width - this.radius || this.x < this.radius) {
			this.incrementX *= -1;
		}

		if (this.y > height - this.radius || this.y < this.radius) {
			this.incrementY *= -1;
		}
		
		
	}}
