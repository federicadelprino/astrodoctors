var myData;
var astronauts = []; //list of balls-astronauts

function preload() {
	myData = loadJSON('assets/peopleinspace.json');
}

function setup() {

	createCanvas(500, 500);
	
	for (var i = 0; i < myData.people.length; i++) { 
	  
	  var astroData = myData.people[i];
	  
		var newAstronaut = new Astronaut(astroData.name, astroData.launchdate); 
		//nome della mia varibaile + nome nell'oggetto JSON
		astronauts.push(newAstronaut);
	}
}

function draw() {
	background(240);

	for (var i = 0; i < astronauts.length; i++) {
		var astro = astronauts[i];
		astro.move();
		astro.display();
	}

}

function Astronaut(name, date) { //write in in capital letters

  this.name = name;
  this.launchDate = date;
  
  var daysInSpace = (Date.now() - Date.parse(this.launchDate))/1000/60/60/24; //ms spent in space transformed in days
  //"date.parse" standard funciton in javascript - it takes a string a transforms in a date
  
 this.radius = daysInSpace; // "this" for variables related specifically to the object

	this.x = random(this.radius, width - this.radius);
	this.y = random(this.radius, height - this.radius);

	this.incrementX = 1;
	this.incrementY = 1;

	this.display = function() {

fill(170,30,83);
		ellipse(this.x, this.y, this.radius * 2);
		textAlign(CENTER);
		text(this.name, this.x, this.y+ this.radius + 15); // give space to the text
	}

	this.move = function() {

		this.x += this.incrementX;
		this.y += this.incrementY;

		if (this.x > width - this.radius || this.x < this.radius) {
			this.incrementX *= -1
			print(this.x);
			print(this.radius);
		}

		if (this.y > height - this.radius || this.y < this.radius) {
			this.incrementY *= -1
			print(this.y);
			print(this.radius);
		}
	}
}