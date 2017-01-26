angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('BoardingCtrl', function($scope, $ionicModal, $timeout) {

	$scope.options = {
		  loop: false,
		  effect: 'fade',
		  speed: 500,
		}

$scope.$on("$ionicSlides.sliderInitialized", function(event, data){
  // data.slider is the instance of Swiper
  $scope.slider = data.slider;
  console.log("Init");
});

$scope.$on("$ionicSlides.slideChangeStart", function(event, data){
  console.log('change');
});

$scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
  // note: the indexes are 0-based
  $scope.activeIndex = data.slider.activeIndex;
  $scope.previousIndex = data.slider.previousIndex;
  console.log($scope.activeIndex);
  console.log("End");
  if($scope.activeIndex == 2){
  	var ele = document.getElementsByClassName("swiper-pagination");
  	ele[0].style.setProperty("bottom", "30%", "important");
  }
  else{
  	var ele = document.getElementsByClassName("swiper-pagination");
  	ele[0].style.setProperty("bottom", "20%", "important");
  }
});
})
