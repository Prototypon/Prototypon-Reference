var svg_path = "ui.svg"

Proto.placeSVG(svg_path, init)

function init(){
    
    Proto.Momentum({
        source: '#myElement',
        boundY: [0, 100],
        update:function(x, y){
            TweenMax.set('#myElement', {y:y})
        }
    })

}