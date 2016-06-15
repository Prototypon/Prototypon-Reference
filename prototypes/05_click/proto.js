// here you define the svg path
var svg_path = "ui.svg"

Proto.placeSVG(svg_path, init)

function init(){
    
    // we are going to use jQUery to handle the interaction event
    $('#myElement').on('click', onClickMe)
    
    // we need to define the function that will be called on click
    function onClickMe(){
        
        TweenMax.to('#myElement', 1, {scale:2, transformOrigin:'center center', ease:Expo.easeInOut})
        
    } // this closes the function body
	

} // this close bracket is important, don't mess it up