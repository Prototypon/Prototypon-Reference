var svg_path = "ui.svg"

Proto.placeSVG(svg_path, init)

function init(){
    
    // #myElement is the selector of the layer/group/element we want to clip
    // #myMask is the selector of the shape we want to use as mask
    var mymask = Proto.clip('#myElement', '#myMask')

}