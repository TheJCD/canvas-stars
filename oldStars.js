//create a variable that links to the canvas ID
var canvas = document.getElementById('myCanvas');
//create a variable called 'ctx' that adds the 2d context method to the ID
var ctx = canvas.getContext('2d');
//set the 2d element to fit the window innerWidth and innerHeight
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
//create a variable called stars and assign it the value of 200
var stars = 200;

//for every var 'i' is less than the number in the stars (200)
//variable, add a star into the page in a loop until reaches 200 then
//stop
for (var i = 0; i < stars; i++) {
	//
	x = Math.random() * canvas.offsetWidth;
	y = Math.random() * canvas.offsetHeight;
	// give the randomly created element a colour of white
	ctx.fillStyle = 'white';
	//fill the rectangle with a random assigned x and y value with a
	// width and height of 1px by 1px
	ctx.fillRect(x,y,1,1);
}