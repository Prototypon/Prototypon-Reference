angular.module('app', ['ngSanitize'])

var converter = new showdown.Converter()

angular.module('app')
    .controller('main', function($scope, $http, $timeout, $sce){

        $scope.src = [
            '01_blank',
            '02_from', 
            '02_to', 
            '03_ease', 
            '04_delay', 
            '04_rotation', 
            '04_scale', 
            '04_stagger_from',
            '04_stagger_to',
            '04_stagger_each',
            '05_click', 
            '05_click_toggle', 
            '06_mask', 
            '06_stagger_masks', 
            '06_move_a_mask',
            '08_stepper', 
            '08_stepper_multiple', 
            '09_momentum', 
            '09_momentum_constraint',
            '09_momentum_list',
            '10_text_dyn',  
            '10_text_dyn_counter'
        ];

        $scope.reload = function(item){
            item.path = ''
            $timeout(function(){
                item.path = item.path_o
            })
            return false
        }
        
        $scope.view = function(item){
            return item.view
        }

        $scope.source = [];
        angular.forEach($scope.src, function(d, i){

            var ob = {
                folder: d,
                path: '',
                path_o: 'prototypes/' + d + '/index.html',
                view: 'prototypes/' + d + '/preview.html',
                src_proto: 'prototypes/' + d + '/proto.js',
                src_text: 'prototypes/' + d + '/README.md',
            }

            function ldr(_ob){
                $http.get(_ob.src_proto)
                    .success(function(data){
                        _ob.proto = data
                        if(i>=$scope.src.length-1) colorThem()                        
                    })
                $http.get(_ob.src_text)
                    .success(function(data){
                       _ob.text = data
                       _ob.md = $sce.trustAsHtml( converter.makeHtml(data) )
                    })
            }

            $timeout(function(){
                ldr(ob)
            }, i*100)
            

            function colorThem(){
                $timeout(function(){
                    $('pre code').each(function(j, block) {
                       hljs.highlightBlock(block);
                    });
                })
            }


            $scope.source.push(ob)
        })


})