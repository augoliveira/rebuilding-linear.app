$(document).ready(function(){
	//Select
	(function(){
		[].slice.call( document.querySelectorAll('select.cs-select')).forEach( function(el) {	
			new SelectFx(el);
		} );
	})();

	//Sessão largura
	var widthScreen = $(window).width(); 
	document.cookie = "widthScreen="+widthScreen+"; expires=Thu, 31 Dec 2030 12:00:00 UTC; path=/";

	//Topo Fixo
	$(window).bind('scroll', function () {
	    if ($(window).scrollTop() > 500 && $(window).width() > 680) {
	        $('header#fixed-home').slideDown();
	    } else if ($(window).scrollTop() > 300 && $(window).width() < 680) {
	    	$('header#fixed-home').slideDown();
		}else {
	        $('header#fixed-home').slideUp();
	    }
	});

	//Formulário
	$("#contato #opcao1").click(function(){
		$("#contato #opcao1").css("color", "#ffcc00");
		$("#contato #opcao2").css("color", "#fff");
		$("section#contato .conteudo #envia-trabalho").hide();
		$("section#contato .conteudo #envia-contato").fadeIn();

		$("section#contato .conteudo h3").text("Em que podemos");
		$("section#contato .conteudo h2").text("ajudar você?");
		$("section#contato .conteudo p").html("Envie sua dúvida ou sugestão. Nossa equipe <br>responderá o mais breve possível.");

	});
	$("#contato #opcao2").click(function(){
		$("#contato #opcao2").css("color", "#ffcc00");
		$("#contato #opcao1").css("color", "#fff");
		$("section#contato .conteudo #envia-trabalho").fadeIn();
		$("section#contato .conteudo #envia-contato").hide();

		$("section#contato .conteudo h3").text("Faça parta da");
		$("section#contato .conteudo h2").text("nossa equipe");
		$("section#contato .conteudo p").html("Você é muito bom no que faz e não se sentiu intimidado<br>com nossos projetos? Chega aí e nos surpreenda.");
	});

	$("#contato #slct-footer .cs-options li").click(function(){
		var valor = $(this).attr("data-value");
	 	if(valor == 1){
	 		$("#contato #opcao1").css("color", "#ffcc00");
			$("#contato #opcao2").css("color", "#fff");
			$("section#contato .conteudo #envia-trabalho").hide();
			$("section#contato .conteudo #envia-contato").fadeIn();

			$("section#contato .conteudo h3").text("Em que podemos");
			$("section#contato .conteudo h2").text("ajudar você?");
			$("section#contato .conteudo p").html("Envie sua dúvida ou sugestão. Nossa equipe <br>responderá o mais breve possível.");
	 	}else{
	 		$("#contato #opcao2").css("color", "#ffcc00");
			$("#contato #opcao1").css("color", "#fff");
			$("section#contato .conteudo #envia-trabalho").fadeIn();
			$("section#contato .conteudo #envia-contato").hide();

			$("section#contato .conteudo h3").text("Faça parta da");
			$("section#contato .conteudo h2").text("nossa equipe");
			$("section#contato .conteudo p").html("Você é muito bom no que faz e não se sentiu intimidado<br>com nossos projetos? Chega aí e nos surpreenda.");
	 	}
	});

	//Filter Galeria Portfa
	$("#cases-menu li").click(function(){ 
		var id = $(this).attr("id");
		window.location.href="http://dinamitecriativa.com.br/index.php?pg=cases#"+id;
	});

	$("#cases-menu-interno li").click(function(){ 
		var id = $(this).attr("id");

		if(id != "todos"){ $("section#cases #container .todos").stop().hide(); }
		$("section#cases #container ."+id).stop().fadeIn();

		$("#cases-menu-interno li").removeClass("ativo");
		$(this).addClass("ativo");

		$("#acabou").hide();
		$("#ver-mais").fadeIn();

		$("#tipo_categoria").val(id);
	});

	$("#topo-portfolio #slct .cs-options li").click(function(){
		var id = $(this).attr("data-value"); 
		window.location.href="http://dinamitecriativa.com.br/index.php?pg=cases#"+id;

		$("#tipo_categoria").val(id);
	});

	$("#topo-portfolio #slct-cases .cs-options li").click(function(){
		var id = $(this).attr("data-value"); 
		if(id != "todos"){ $("section#cases #container .todos").stop().hide(); }
		$("section#cases #container ."+id).stop().fadeIn();

		$("#acabou").hide();
		$("#ver-mais").fadeIn();

		$("#tipo_categoria").val(id);
	});

	//Vindo do portfólio, recupera select do cases
	var url = window.location.href;
		url = String(url);

	var recuperaTipo = url.split('#');
	var tipoAncora   = recuperaTipo[1];
	
	if(tipoAncora != "" && tipoAncora == "todos"   ||
	   tipoAncora != "" && tipoAncora == "design"  ||
	   tipoAncora != "" && tipoAncora == "id"      ||
	   tipoAncora != "" && tipoAncora == "website" ||
	   tipoAncora != "" && tipoAncora == "redes"   ||
	   tipoAncora != "" && tipoAncora == "capa"){

		if(tipoAncora != "todos"){ $("section#cases #container .todos").stop().hide(); }
		$("section#cases #container ."+tipoAncora).stop().fadeIn();

		$("#acabou").hide();
		$("#ver-mais").fadeIn();

		$("#tipo_categoria").val(tipoAncora);
	}

	//Remove efeito em celulares
	if($(window).width() < 680) {
		$('.rightShow').removeClass('rightShow');
		$('.leftShow').removeClass('leftShow');
		$('.primeiro').removeClass('primeiro');
		$('.segundo').removeClass('segundo');
		$('.terceiro').removeClass('terceiro');
		$('.quarto').removeClass('quarto');
		$('.quinto').removeClass('quinto');
		$('.sexto').removeClass('sexto');
		$('.setimo').removeClass('setimo');
		$('.oitavo').removeClass('oitavo');
		$('.nono').removeClass('nono');
	}

	//Instancia ScrollReveal
	window.sr = ScrollReveal({ reset: true, distance: '80px' });
	sr.reveal('.efeito');

	//Efeitos
	sr.reveal('.fadeIn', { duration: 1000 });

	sr.reveal('.rightShow', { 
	  origin: 'right', 
	  duration: 1000 
	});

	sr.reveal('.leftShow', { 
	  origin: 'left', 
	  duration: 1000 
	});

	sr.reveal('.topShow', { 
	  origin: 'top', 
	  duration: 1000 
	});

	sr.reveal('.bottomShow', { 
	  origin: 'bottom', 
	  duration: 1000 
	});

	//Whatsapp
	// ScrollReveal (https://github.com/jlmakes/scrollreveal)

	(function scrollReveal() {
	  window.sx = ScrollReveal();
	  
	  sx.reveal('.primeiro', {
	    duration   : 600,
	    distance   : '20px',
	    easing     : 'ease-out',
	    origin     : 'left',
	    reset      : true,
	    scale      : 1,
	    viewFactor : 0,
	    afterReveal : revealChildren,
	  }, 150);
	  
	  var revealChildren = sx.reveal('.segundo', {
	    duration   : 500,
	    scale      : 1,
	    distance   : '20px',
	    origin     : 'left',
	    reset      : true,
	    easing     : 'ease-out',
	    viewFactor : 1,
	    afterReveal : revealChildren1,
	  }, 130);

	  var revealChildren1 = sx.reveal('.terceiro', {
	    duration   : 400,
	    scale      : 1,
	    distance   : '20px',
	    origin     : 'left',
	    reset      : true,
	    easing     : 'ease-out',
	    viewFactor : 2,
	    afterReveal : revealChildren2,
	  }, 110);

	  var revealChildren2 = sx.reveal('.quarto', {
	    duration   : 300,
	    scale      : 1,
	    distance   : '20px',
	    origin     : 'left',
	    reset      : true,
	    easing     : 'ease-out',
	    viewFactor : 3,
	    afterReveal : revealChildren3,
	  }, 90);

	  var revealChildren3 = sx.reveal('.quinto', {
	    duration   : 500,
	    scale      : 1,
	    distance   : '20px',
	    origin     : 'bottom',
	    reset      : true,
	    easing     : 'ease-out',
	    viewFactor : 4,
	    afterReveal : revealChildren4,
	  }, 70);
	  
	  var revealChildren4 = sx.reveal('.sexto', {
	    duration   : 500,
	    scale      : 1,
	    distance   : '20px',
	    origin     : 'right',
	    reset      : true,
	    easing     : 'ease-out',
	    viewFactor : 5,
	    afterReveal : revealChildren5,
	  }, 60);

	  var revealChildren5 = sx.reveal('.setimo', {
	    duration   : 500,
	    scale      : 1,
	    distance   : '20px',
	    origin     : 'right',
	    reset      : true,
	    easing     : 'ease-out',
	    viewFactor : 6,
	    afterReveal : revealChildren6,
	  }, 50);

	  var revealChildren6 = sx.reveal('.oitavo', {
	    duration   : 500,
	    scale      : 1,
	    distance   : '20px',
	    origin     : 'right',
	    reset      : true,
	    easing     : 'ease-out',
	    viewFactor : 7,
	    afterReveal : revealChildren7,
	  }, 40);

	  var revealChildren7 = sx.reveal('.nono', {
	    duration   : 500,
	    scale      : 1,
	    distance   : '20px',
	    origin     : 'right',
	    reset      : true,
	    easing     : 'ease-out',
	    viewFactor : 8
	  }, 30);
	})();


	//Centraliza Elementos
	function centralizarElementoFixed(elemento, diferenca, tipo){
		//Tipo
		if(tipo == "margem") { var propriedade = "margin-top"; } 
						else { var propriedade = "padding-top"; }

		var alturaTela = $(window).height()-diferenca; //Desconta a distância da borda do topo
		var alturaElem = $(elemento).height(); //Altura do elemento
		var margemElem = (alturaTela - alturaElem)/2;

		$(elemento).css(propriedade, margemElem);

		$(window).resize(function(){
			var alturaTelaAtt = $(window).height()-diferenca; //Desconta a distância da borda do topo
			var alturaElemAtt = $(elemento).height(); //Altura do elemento
			var margemElemAtt = (alturaTelaAtt - alturaElemAtt)/2;

			$(elemento).css(propriedade, margemElemAtt);
		});
	}

	centralizarElementoFixed("nav#redes-fixed", 90, "margem");
	centralizarElementoFixed("#menu-centralizar", 500, "padding");
	centralizarElementoFixed("#curriculo", 0, "margem");
	
	//Menu
	function menuDown(){ $('#menu-open #navegacao-open').slideDown(500); }
	function redesUp() { $('#menu-open #rs').fadeIn(500); }



	$(".hamburguer").click(function(){
	    $('header#fixed-home').slideUp();
		$("nav#menu-open").show("slide", { direction: "right" }, 600);

		setTimeout(menuDown, 800);
		setTimeout(redesUp, 900);
	});
	$("#close").click(function(){
		$("nav#menu-open").hide("slide", { direction: "right" }, 600);
		$('#menu-open #navegacao-open').slideUp(900);
		$('#menu-open #rs').fadeOut(900);
		
		if ($(window).scrollTop() > 500 && $(window).width() > 680) {
	    	$('header#fixed-home').slideDown();
		}else if ($(window).scrollTop() > 300 && $(window).width() < 680) {
	    	$('header#fixed-home').slideDown();
		}
	});
	$("nav#menu-open a").click(function(){
		$("nav#menu-open").hide("slide", { direction: "right" }, 600);
	    $('header#fixed-home').slideDown();
	});

	//Modais
	$("#close-curriculo").click(function(){
		$("#m-curriculo").fadeOut();
	});
	$("#close-contato").click(function(){
		$("#m-contato").fadeOut();
	});

	//Contato
	$('form#envia-contato').submit(function(e){
		e.preventDefault();

		var form = $(this);

		$('input[type="text"], input[type="email"], textarea', form).css("border-bottom", "1px solid #8b8b8b");

		if($('input[name="nome"]', form).val() == ""){
			$('input[name="nome"]', form).css("border-bottom", "1px solid #be0007").focus();
			return false;
		}

		if($('input[name="email"]', form).val() == "" || !checkMail($('input[name="email"]', form).val())){
			$('input[name="email"]', form).css("border-bottom", "1px solid #be0007").focus();
			return false;
		}

		if($('input[name="assunto"]', form).val() == ""){
			$('input[name="assunto"]', form).css("border-bottom", "1px solid #be0007").focus();
			return false;
		}

		if($('textarea[name="mensagem"]', form).val() == ""){
			$('textarea[name="mensagem"]', form).css("border-bottom", "1px solid #be0007").focus();
			return false;
		}

		var valores = form.serialize();
		
		$('input', form).attr('disabled', 'disabled');
		$('textarea', form).attr('disabled', 'disabled');
		$.ajax({
			type     : 'POST',
			url      : 'resources/envia-contato.php',
			data     : valores,
			dataType : 'json',
			success  : function(retorno){
				$('input', form).removeAttr('disabled');
				$('textarea', form).removeAttr('disabled');
				if(retorno == 1){
					$('#m-contato').fadeIn();
					return false;
				}else if(retorno == 0){
					alert("Ocorreu um erro, tente novamente mais tarde.");
				}
			}
		});
	});

	//Contato
	$('form#envia-trabalho').submit(function(e){
		e.preventDefault();

		var form = $(this);

		$('input[type="text"], input[type="email"], textarea', form).css("border-bottom", "1px solid #8b8b8b");

		if($('input[name="nome"]', form).val() == ""){
			$('input[name="nome"]', form).css("border-bottom", "1px solid #be0007").focus();
			return false;
		}

		if($('input[name="link"]', form).val() == ""){
			$('input[name="link"]', form).css("border-bottom", "1px solid #be0007").focus();
			return false;
		}

		if($('input[name="email"]', form).val() == "" || !checkMail($('input[name="email"]', form).val())){
			$('input[name="email"]', form).css("border-bottom", "1px solid #be0007").focus();
			return false;
		}

		if($('textarea[name="mensagem"]', form).val() == ""){
			$('textarea[name="mensagem"]', form).css("border-bottom", "1px solid #be0007").focus();
			return false;
		}

		var valores = form.serialize();
		
		$('input', form).attr('disabled', 'disabled');
		$('textarea', form).attr('disabled', 'disabled');
		$.ajax({
			type     : 'POST',
			url      : 'resources/envia-trabalho.php',
			data     : valores,
			dataType : 'json',
			success  : function(retorno){
				$('input', form).removeAttr('disabled');
				$('textarea', form).removeAttr('disabled');
				if(retorno == 1){
					$('#m-curriculo').fadeIn();
					return false;
				}else{
					alert("Ocorreu um erro, tente novamente mais tarde.");
				}
			}
		});
	});

	//Mascara URL
	$('.url').bind('click', function(e){
	    if($.trim($(e.target).val())==='') $(e.target).val('http://');
	});
});

//Máscaras
function Mascara(o,f){
	v_obj=o
	v_fun=f
	setTimeout("execmascara()",1)
}

function execmascara(){
	v_obj.value=v_fun(v_obj.value)
}

function leech(v){
	v=v.replace(/o/gi,"0")
	v=v.replace(/i/gi,"1")
	v=v.replace(/z/gi,"2")
	v=v.replace(/e/gi,"3")
	v=v.replace(/a/gi,"4")
	v=v.replace(/s/gi,"5")
	v=v.replace(/t/gi,"7")
	return v
}

function Integer(v){
	return v.replace(/\D/g,"")
}

function Telefone(v){
	v=v.replace(/\D/g,"")
	v=v.replace(/^(\d\d)(\d)/g,"($1) $2")
	v=v.replace(/(\d{4})(\d)/,"$1-$2")
	return v
}

function Data(v){
	v=v.replace(/\D/g,"")
	v=v.replace(/(\d{2})(\d)/,"$1/$2")
	v=v.replace(/(\d{2})(\d)/,"$1/$2")
	return v
}

function checkMail(mail){
	var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
	if(typeof(mail) == "string"){
		if(er.test(mail)){ return true; }
	}else if(typeof(mail) == "object"){
		if(er.test(mail.value)){ 
			return true; 
		}
	}else{
		return false;
	}
}