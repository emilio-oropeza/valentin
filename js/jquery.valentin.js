(function($){
	$.fn.quiz = function(){
		return this.each(function() {
			var element = $(this);						
			if (element.data('quiz')) return;
			var myplugin = new quiz(this);
			element.data('quiz', myplugin);
			element.data('quiz').methods.init();
			
		});
	};
	
	var quiz = function(target){
		var componentObj = {
			index: 1,
			cards: ["-1","-0px","-296px","-592px","-888px","-1184px",
			"-1480px","-1776px","-2072px","-2368px",
			"-2664px","-2960px","-3256px","-3552px",
			"-3848px","-4144px","-4440px"],
			methods:{
				init:function(){		
					console.log("hola");			
					componentObj.methods.resize();
					$(window).resize(function(){
						componentObj.methods.resize();
					});
					$("div.indepth_choose").each(function(){
						$(this).on("click", function(){
							componentObj.methods.show(this);
						});
					});
					$("div.indepth_cards").each(function(){
						$(this).on("click", function(){
							componentObj.methods.show(this);
						});
					});
					$("#indepth_arrow_rigth").on("click", function(){
						if(componentObj.index < 16){
							componentObj.index++;
							$("div#indepth_slider_imgs").css({"left":componentObj.cards[componentObj.index]});
							console.log(componentObj.index);
							if(componentObj.index == 16){
								$("#indepth_arrow_rigth").hide();
							}else if(componentObj.index == 2) {
								$("#indepth_arrow_left").show();
							}
						}
					});
					$("#indepth_arrow_left").on("click", function(){
						if(componentObj.index > 1){
							componentObj.index--;
							$("div#indepth_slider_imgs").css({"left":componentObj.cards[componentObj.index]});
						}
						if(componentObj.index == 1){
							$("#indepth_arrow_left").hide();
						}else if(componentObj.index == 15) {
							$("#indepth_arrow_rigth").show();
						}
					});
					$("#indepth_share_close").on("click", function(){
						$(this).on("click", function(){
							$(".indepth_overlay").each(function(){
								$(this).hide();
							});
						});
					});
					$("#indepth_face_btn").on("click", function(){
						componentObj.methods.share_facebook();
					});
					$("#indepth_tweet_btn").on("click", function(){
						componentObj.methods.share_twitter();
					});
				},
				show:function(id){
					componentObj.index = parseInt($(id).parent().attr("index"));
					$(".indepth_overlay").each(function(){
						$(this).show();
					});
					$("div#indepth_slider_imgs").css({"left":componentObj.cards[componentObj.index]});
					if(componentObj.index == 1){
						$("#indepth_arrow_left").hide();
						$("#indepth_arrow_rigth").show();
					}else if(componentObj.index == 16){
						$("#indepth_arrow_left").show();
						$("#indepth_arrow_rigth").hide();
					}else{
						$("#indepth_arrow_rigth").show();
						$("#indepth_arrow_left").show();
					}
				},

				share_twitter:function(){
					var text = encodeURIComponent("#JuanValentin");
					var url = location.href;
					var parts = url.split("?");
					parts = parts[0].split("#");
					url = parts[0];
					
					url = encodeURIComponent(url+"?cart="+componentObj.index+"&image="+urlIndepth + 'images/'+componentObj.index+'.jpg');
					window.open("https://twitter.com/share?via=juanfutbol&text="+text+"&url="+url,"","width=500, height=300");
				},
				share_facebook:function(){
					var url = location.href;
					var parts = url.split("?");
					parts = parts[0].split("#");
					url = parts[0];
					
					url = encodeURIComponent(url+"?cart="+componentObj.index+"&image="+urlIndepth + 'images/'+componentObj.index+'.jpg');
					window.open("https://www.facebook.com/sharer/sharer.php?u="+url,"","width=500, height=300");
				},
				resize:function(){
					$("#indepth_top").height($(window).height());	
				}
			}
		};
		return componentObj;
	};	
})(jQuery);

$(document).ready(function(){
	$("#indepth_content").quiz();
});
