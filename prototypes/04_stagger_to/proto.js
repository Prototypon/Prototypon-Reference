// here you define the svg path
var svg_path = "ui.svg"

Proto.placeSVG(svg_path, init)

function init(){
    
    // Using stagger to animate a Group of items istead writing for each a TweenMax command.
    // Using .staggerTo the animation will start with the current property value and will end with the specified value, for each item in the list.
    // in this case it will begin at scale=1 and will end to scale=.5
    // notice the last parameter (.2) which is the delay between an item animation and the previous one.
    // The animation order will follow the stack position in the SVG
	TweenMax.staggerTo('#myItems > path', 4, {scale:.5, transformOrigin:'center center', ease:Expo.easeInOut}, .2)

} // this close bracket is important, don't mess it up