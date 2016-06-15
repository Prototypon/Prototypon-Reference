var svg_path = "ui.svg"

Proto.placeSVG(svg_path, init)

function init(){
    
    var circles = Proto.clip('#bgd', '#mask')
    
    TweenMax.staggerFrom(circles, 2, {scale:.01, transformOrigin:'center center'}, .2)

}