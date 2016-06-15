// here you define the svg path
var svg_path = "ui.svg"

Proto.placeSVG(svg_path, init)

function init(){
    
    // Using .from the animation will start with the specified value and will end with the initial current value
    // in this case it will begin at y=-200 and will end to y=0
	TweenMax.from('#myElement', 4, {y:-200})

} // this close bracket is important, don't mess it up