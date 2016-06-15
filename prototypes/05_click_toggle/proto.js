// here you define the svg path
var svg_path = "ui.svg"

Proto.placeSVG(svg_path, init)

function init(){
    
    // we need to store the status of the element
    var isBig = false
    
    // we are going to use jQuery to handle the interaction event
    $('#myElement').on('click', onClickMe)
    
    // we need to define the function that will be called on click
    function onClickMe(){
        
        // we use a condition to execute the right action based on the status value
        if(isBig == true){
            TweenMax.to('#myElement', 1, {scale:1, transformOrigin:'center center', ease:Expo.easeInOut})
            isBig = false
        }else{
            TweenMax.to('#myElement', 1, {scale:2, transformOrigin:'center center', ease:Expo.easeInOut})
            isBig = true
        }
        
        
    } // this closes the function body
	

} // this close bracket is important, don't mess it up