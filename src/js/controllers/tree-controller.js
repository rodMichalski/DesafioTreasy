angular.module('warriors').controller('TreeController', function($scope){
    
    $scope.setOpened = function (no){
        no.opened = !no.opened;
    }

    angular.element("[data-toggle=tooltip]").tooltip({
        delay: 800
    });
    
}); 