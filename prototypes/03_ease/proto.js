// here you define the svg path
var svg_path = "ui.svg"

Proto.placeSVG(svg_path, init)

function init(){

	TweenMax.to('#myElement', 4, {y:-200, ease:Elastic.easeInOut})

} // this close bracket is important, don't mess it up