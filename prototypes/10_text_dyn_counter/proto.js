var svg_path = "ui.svg"

Proto.placeSVG(svg_path, init)

function init(){

	var counter = {value:0}

	TweenMax.to(counter, 10, {value:100, onUpdate:function(){

		$('#myText').text( parseInt( counter.value ) )

	}})

}