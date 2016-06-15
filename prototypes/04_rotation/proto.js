// here you define the svg path
var svg_path = "ui.svg"

Proto.placeSVG(svg_path, init)

function init(){
    
    // here we are animating the rotation, the scale and the opacity at the same time
	TweenMax.from('#myElement', 3, {delay:1, opacity:0, rotation:180, scale:2, transformOrigin:'center center', ease:Expo.easeInOut})

} // this close bracket is important, don't mess it up