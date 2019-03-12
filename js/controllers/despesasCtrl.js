angular.module("despesas").controller("despesasCtrl", function($scope){

    $scope.data = new Date();

    // Constantes
    $scope.titulo = "Despesas";
    $scope.percentualCol1 = 0.70;
    $scope.percentualCol2 = 0.30;
    
    // Dados do modelo
    $scope.despesas = [ 
        { descricao: "Energia", valor: 10, valorCol1: 7, valorCol2: 3 },
        { descricao: "Aluguel", valor: 100, valorCol1: 70, valorCol2: 30 },
        { descricao: "Energia", valor: 1000, valorCol1: 700, valorCol2: 300 }
    ];
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

    // Ordenacao das colunas da tabela  
    $scope.ordenarPor = function (campo){
        $scope.criterioOrdenacao = campo;
        $scope.criterioAscDesc = !$scope.criterioAscDesc;
    };
});
