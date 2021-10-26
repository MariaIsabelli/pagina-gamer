var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {


  var cadastradas = [];
  

  $scope.salvar = function(){
	 
    cadastradas.push($scope.pessoa);
    console.log(cadastradas);
   
    
  }
  
  

  $scope.limpar = function(){
    $scope.pessoa = {};
  }
});