angular.module('warriors').controller('MainController',  function($scope, tree){
   
    initialize();

    $scope.changeLineTree = function(action){
        $scope.action = action;

        if ($scope.action == "update" || $scope.action == "add"){
            if ($scope.action == "update")
                $scope.record = $scope.selectedLine;
            else if($scope.action == "add")
                $scope.record = {};        

            $("#modalCadastro").modal("show");
        }

        if ($scope.action == "delete"){
            $("#modalConfirma").modal("show");
        }
    }

     $scope.setSelected = function(no, noPai) {
        $scope.selectedLine = no;

        if (noPai == undefined)
            $scope.selectedLineDad = $scope;
        else    
            $scope.selectedLineDad = noPai;
    } 

    $scope.changeState = function (state){
        changeState($scope, state);

        if(state === false)
            $scope.selectedLine = $scope.tree[0];

    }

    function changeState(tree, state){        
        for(var index in tree.tree){
            tree.tree[index].opened = state;
            changeState(tree.tree[index],state);
        }
    }

     $scope.saveRecord = function(){
        if ($scope.action == "add"){
            $scope.record.tree = [];
            $scope.selectedLine.tree.push($scope.record);
            $scope.selectedLine.opened = true;
        }

        if ($scope.action == "update"){
            $scope.selectedLine.codigo     = $scope.record.codigo;
            $scope.selectedLine.descricao  = $scope.record.descricao;
            $scope.selectedLine.observacao = $scope.record.observacao;
        }
        
    }

    $scope.deleteRecord = function(){
        $scope.selectedLineDad.tree.splice($scope.selectedLineDad.tree.indexOf($scope.selectedLine),1);

        if ($scope.tree.length == 0){
            $scope.selectedLineDad = $scope;
            $scope.selectedLine = $scope;
        }
    }

    function initialize(){
        $scope.tree = tree;

        $scope.selectedLine = $scope.tree[0];
        $scope.selectedLineDad = $scope;
        $scope.action = "";
        $scope.record = {};
    };

}); 