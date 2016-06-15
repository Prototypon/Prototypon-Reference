var svg_path = "ui.svg"

Proto.placeSVG(svg_path, init)

function init(){
    
    Proto.Momentum({
        source: '#myElement',
        update:function(x, y){
            TweenMax.set('#myElement', {x:x, y:y})
        }
    })

}