// here you define the svg path
var svg_path = "ui.svg"

Proto.placeSVG(svg_path, init)

function init(){
    
    // the animation will wait 2 sec before to start
	TweenMax.to('#myElement', 4, {delay:2, y:-200, ease:Elastic.easeInOut})

} // this close bracket is important, don't mess it up