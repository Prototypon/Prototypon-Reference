// here you define the svg path
var svg_path = "ui.svg"

Proto.placeSVG(svg_path, init)

function init(){
    
    // we create a scaleIn effect using .from, scale property and transformOrigin to preserve the origin point in the center
	TweenMax.from('#myElement', 2, {delay:1, scale:2, transformOrigin:'center center', ease:Expo.easeInOut})

} // this close bracket is important, don't mess it up