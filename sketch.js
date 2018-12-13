var dots = [20,40,80,160,200,160,80,40,20]
var index = 0
function setup (){
	createCanvas(windowWidth,windowHeight)
	
}

function draw (){
	background ('#fae')
	fill(255,196,5,5)
		
for (var A=40; A < windowWidth; A = A+50)
for (var B=40; B < windowHeight; B = B+50)

	ellipse (A,B,dots[index], dots[index])
//make into an object with this.width = dots[index], use for loop to make. 
//Use function that will change width
//move and display function would be here

	
}

function mousePressed (){
	index = index +1
if (index == 8)
	index = 0

}
