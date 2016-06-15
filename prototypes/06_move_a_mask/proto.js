var svg_path = "ui.svg"

Proto.placeSVG(svg_path, init)

function init(){
    
    var mymask = Proto.clip('#component', '#mask')
    
    // we got the reference of the newly generated mask in order to manipulate it
    // in this case we are going to move horizontally the mask
    TweenMax.to(mymask, 2, {x:200})

}