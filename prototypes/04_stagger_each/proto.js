// here you define the svg path
var svg_path = "ui.svg"

Proto.placeSVG(svg_path, init)

function init(){
    
	// unlike the stagger method, using each we can performe one tweenmax for each element
	// this means we can change property values for each item, (e.g. using random value)
	$('#myItems > path').each(function(i, e){

		TweenMax.to(e, 4, {scale: Math.random(), transformOrigin:'center center', ease:Expo.easeInOut, delay: i})

	})

} // this close bracket is important, don't mess it up