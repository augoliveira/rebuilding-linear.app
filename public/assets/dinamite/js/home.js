$(document).ready(function(){
	//Rolagem
	$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
		if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
		&& location.hostname == this.hostname){
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if(target.length){
				event.preventDefault();
				if($(window).width() > 680){
					$('html, body').animate({
						scrollTop: target.offset().top-80
					}, 500, function() {
						var $target = $(target);
						$target.focus();
						if($target.is(":focus")) {
							return false;
						}else{
							$target.attr('tabindex','-1');
							$target.focus();
						};
					});
				}else{
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 500, function() {
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) {
							return false;
						}else{
							$target.attr('tabindex','-1');
							$target.focus();
						};
					});
				}
			}
		}
	});


	//Altura Item
	if($(window).width() > 680) {
		var alturaItem = $(window).height();
		$("#banner").css("height", alturaItem+"px");
		$("section#home").css("margin-top", "-"+alturaItem+"px");
		
		$(window).resize(function(){
			var alturaItem = $(window).height();
			$("#banner .item").css("height", alturaItem+"px");
			$("section#home").css("margin-top", "-"+alturaItem+"px");

			//Hover Serviços
			if($(window).width() > 1024) {
				$(".container-servico").hover(function(){
					$(".servico", this).hide();
					$(".servico-hover", this).fadeIn();
				}, function(){
					$(".servico-hover", this).hide();
					$(".servico", this).fadeIn();
				});
			}
		});
	}

	//Hover Serviços
	if($(window).width() > 1024) {
		$(".container-servico").hover(function(){
			$(".servico", this).stop().hide();
			$(".servico-hover", this).stop().fadeIn();
		}, function(){
			$(".servico-hover", this).stop().hide();
			$(".servico", this).stop().fadeIn();
		});
	}

	//Hover Cases
	$(".case").hover(function(){
		$(".case-ative", this).stop().hide();
		$(".case-hover", this).stop().fadeIn();
	}, function(){
		$(".case-hover", this).stop().hide();
		$(".case-ative", this).stop().fadeIn();
	});

	//Filter Galeria
	$("li.filter").click(function(){ 
		var id = $(this).attr("id");

		window.location.href="http://dinamitecriativa.com.br/index.php?pg=cases#"+id;
		$("#tipo_categoria").val(id);

		/*if(id != "todos"){ $("section#cases #container .todos").stop().hide(); }
		$("section#cases #container ."+id).stop().fadeIn();

		$("li.filter").removeClass("ativo");
		$(this).addClass("ativo");*/
	});

	$("section#cases #slct-home .cs-options li").click(function(){
		var id = $(this).attr("data-value");

		window.location.href="http://dinamitecriativa.com.br/index.php?pg=cases#"+id;
		$("#tipo_categoria").val(id);

		/*if(id != "todos"){ $("section#cases #container .todos").stop().hide(); }
		$("section#cases #container ."+id).stop().fadeIn();*/
	});

	$("#cases #slct").change(function(){
		var id = $(this).val(); 

		window.location.href="http://dinamitecriativa.com.br/index.php?pg=cases#"+id;
		$("#tipo_categoria").val(id);

		/*if(id != "todos"){ $("section#cases #container .todos").stop().hide(); }
		$("section#cases #container ."+id).stop().fadeIn();*/
	});

	//Banner
	var banner = $('#banner');
	banner.owlCarousel({
		animateOut: 'fadeOut',
    	animateIn: 'pulse',
	    loop: true,
	    nav: false,
	    autoplay: true,
	    items: 1,
    	slideSpeed: 5000 
	});
});