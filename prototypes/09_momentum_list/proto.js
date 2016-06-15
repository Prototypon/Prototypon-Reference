var svg_path = "ui.svg"

Proto.placeSVG(svg_path, init)

function init(){

	Proto.clip('#component', '#mask')
    
    Proto.Momentum({
        source: '#list_elem',
        boundY: [-469, 0], // 860-391 which is component.height - mask.height
        update:function(x, y){
            TweenMax.set('#list_elem', {y:y})
        }
    })

}