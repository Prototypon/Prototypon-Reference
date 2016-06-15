var svg_path = "ui.svg"

Proto.placeSVG(svg_path, init)

function init(){
    
    // we need to clip the content within a specific viewport
    Proto.clip('#slider_component', '#slider_mask')
    
    // this is how to configure the Stepper component
    Proto.Stepper({
        source: '#slider', // the selector of the content
        steps:3, // the number of steps
        view_size: 400, // the size of the viewport
        direction:'x', // the direction of the scroll
        initStep:0, // the initial step, zero based
        update:function(val, norm){ // the update function to manipulate what you want
            
            // in this example we're going to move the content horizontally using 'val' which is the current position.
            // 'norm' is the normalized value of the current position. It can be useful in some situations.
            TweenMax.set('#slider', {x:val})
        }
    })





    Proto.clip('#slider_2_comp', '#slider_mask_2')
    
    Proto.Stepper({
        source: '#slider_2', // the selector of the content
        steps:6, // the number of steps
        view_size: 164, // the size of the viewport
        direction:'x', // the direction of the scroll
        initStep:0, // the initial step, zero based
        update:function(val, norm){ // the update function to manipulate what you want
            TweenMax.set('#slider_2', {x:val})
        }
    })



}