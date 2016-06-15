// here you define the svg path
var svg_path = "ui.svg"

Proto.placeSVG(svg_path, init)

function init(){
    
    // Using .to the animation will start with the current property value and will end with the specified value
    // in this case it will begin at y=0 and will end to y=-200
	TweenMax.to('#myElement', 4, {y:-200})

} // this close bracket is important, don't mess it up