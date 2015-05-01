(function(){

  angular
    .module('smoothie_app')
    .controller('ApplicationController', ApplicationController);

    ApplicationController.$inject = ['$http', '$stateParams'];

    function ApplicationController($http, $stateParams){

      // Capture variable
      var self = this;

      // Create a promise
		  var promise = $http.get('https://agile-woodland-4847.herokuapp.com/api/smoothies')
        .success(function(data, status, headers, config){
          return data;
        })
        .error(function(data, status, headers, config){
          return data;
        });

        promise.then(function(response){
          self.smoothies = response.data;
        });  

        
      // Check if the params has params

      if($stateParams.smoothieId){
        
        var smoothie = $http.get('https://agile-woodland-4847.herokuapp.com/api/smoothies/' + $stateParams.smoothieId).success(function(data){
            return data;
        }).error(function(data){
          return data;
        });

        smoothie.then(function(response){
          self.smoothie = response.data;
        });
        
      }
      


    }

})();

