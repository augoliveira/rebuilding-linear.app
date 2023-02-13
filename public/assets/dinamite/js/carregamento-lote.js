/*************
Carregamento em Lotes 1.0
Ueek Ag Digital - Aryana Daboit Valcanaia (22/11/2017)
*************/

$(document).ready(function(){
	$("#ver-mais").click(function() {
		$("#ver-mais").hide();
		$("#carregando").fadeIn();

        // Informações
        var categoria    = $("#tipo_categoria").val();  /*Caategoria*/
        var qtdRegistros = $("section#cases #container ."+categoria).length; /*Conta quantas vezes a Class aparece*/
        var idCases   	 = $("#idCases").val();  /*Array de Resultados*/
        var limit        = $("#limit").val();  /*Limit da query*/
        
        // Faz requisição ajax e envia o ID do último registro via método POST
        $.post("resources/carrega-registros.php", {qtdRegistros: qtdRegistros, idCases: idCases, limit: limit, categoria: categoria}, 
        	function(resposta) {
			// Coloca o conteudo na DIV
			$("#carregando").hide();
			$(resposta).hide().appendTo("section#cases #container").fadeIn(800);

			//Hover Cases
			$(".case").hover(function(){
				$(".case-ative", this).stop().hide();
				$(".case-hover", this).stop().fadeIn();
			}, function(){
				$(".case-hover", this).stop().hide();
				$(".case-ative", this).stop().fadeIn();
			});
			
			var stopScript = $("#stop").val();
			
			if(stopScript == 1) {
				$("#ver-mais").hide();
				$("#acabou").fadeIn();
			}else{
				$("#ver-mais").show();
			}
        });
	});

	$("#ver-mais-clientes").click(function() {
		$("#ver-mais-clientes").hide();
		$("#carregando").fadeIn();

        // Informações
        var qtdRegistros = $("section#clientes #container .marca").length; /*Conta quantas vezes a Class aparece*/
        var idClientes   = $("#idClientes").val();  /*Array de Resultados*/
        var limit        = $("#limitClientes").val();  /*Limit da query*/
        
        // Faz requisição ajax e envia o ID do último registro via método POST
        $.post("resources/carrega-clientes.php", {qtdRegistros: qtdRegistros, idClientes: idClientes, limit: limit, offset: 12}, 
        	function(resposta) {
			// Coloca o conteudo na DIV
			$("#carregando").hide();
			$(resposta).hide().appendTo("section#clientes #container").fadeIn(800);

			var stopScript = $("#stop").val();
			
			if(stopScript == 1) {
				$("#ver-mais-clientes").hide();
				$("#acabou").fadeIn();
			}else{
				$("#ver-mais-clientes").show();
			}
        });
	});
});