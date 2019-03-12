angular.module("despesas").controller("despesasCtrl", function($scope){

    // Constantes
    $scope.titulo = "Despesas";
    $scope.percentualCol1 = 0.70;
    $scope.percentualCol2 = 0.30;
    
    // Dados do modelo
    $scope.despesas = [];
    $scope.despesasSelecionadas = [];
    $scope.categorias = [ {codigo: 1, descricao: "Energia" }, {codigo: 2, descricao: "Alimentação" }, {codigo: 3, descricao: "Aluguel" }];

    // Funcoes utilitarias
    $scope.formataDinheiro = function (valor){
        return valor.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'});
    };

    // Funcoes para manipular dados

    // Adiciona uma despesa no array
    $scope.adicionarDespesa = function (categoria, valor){
        let valorItem =  (valor * 1.00);
        let valorItemCol1 = (valor * $scope.percentualCol1);
        let valorItemCol2 = (valor * $scope.percentualCol2);
        
        $scope.despesa = { descricao: categoria, valor: valorItem.toFixed(2), valorCol1: valorItemCol1.toFixed(2), valorCol2: valorItemCol2.toFixed(2) };
        $scope.despesas.push(angular.copy($scope.despesa));
        $scope.valor = "";
    };

    // Verifica se tem algum item "checkbox" marcado na tabela de despesas
    $scope.removerDespesas = function (){
        var novasDespesas = $scope.despesas.filter(function(despesa){
            return !despesa.selecionada;
        })
        $scope.despesas = novasDespesas;
    };

    // Verifica se tem algum item "checkbox" marcado na tabela de despesas
    $scope.isDespesaSelecionada = function (){
        var isSelecionada = $scope.despesas.some(function(despesa){
            return despesa.selecionada;
        });
        return isSelecionada;
    };
});
