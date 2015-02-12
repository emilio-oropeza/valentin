
var cards = ["-1","-0px","-296px","-592px","-888px","-1183px",
			"-1479px","-1775px","-2071px","-2367px",
			"-2662px","-2958px","-3254px","-3550px",
			"-3846px","-4142px","-4438px"];

$(document).ready(function(){
	resize();
	$(window).resize(function(){
		resize();
	});

	var index = 1;
	$("div.indepth_choose").each(function(){
		$(this).on("click", function(){
			show(this);
		});
	});
	$("div.indepth_cards").each(function(){
		$(this).on("click", function(){
			show(this);
		});
	});
	$("#indepth_arrow_rigth").on("click", function(){
		if(index < 16){
			index += 1;
			$("div#indepth_slider_imgs").css({"left":cards[index]});
			if(index == 16){
				$("#indepth_arrow_rigth").hide();
			}else if(index == 2) {
				$("#indepth_arrow_left").show();
			}
		}
		console.log(cards[index]);
	});
	$("#indepth_arrow_left").on("click", function(){
		if(index > 1){
			index -= 1;
			$("div#indepth_slider_imgs").css({"left":cards[index]});
		}
		if(index == 1){
			$("#indepth_arrow_left").hide();
		}else if(index == 15) {
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
		share_facebook();
	});
	$("#indepth_tweet_btn").on("click", function(){
		share_twitter();
	});

});

function show(id){
	index = $(id).parent().attr("index");
	$(".indepth_overlay").each(function(){
		$(this).show();
	});
	$("div#indepth_slider_imgs").css({"left":cards[index]});
	if(index == 1){
		$("#indepth_arrow_left").hide();
	}else if(index == 16){
		$("#indepth_arrow_rigth").hide();
	}
}

function share_twitter(){
	var text = encodeURIComponent("#JuanValentin");
	var url = location.href;
	var parts = url.split("?");
	parts = parts[0].split("#");
	url = parts[0];
	
	url = encodeURIComponent(url+"?cart="+index+"&image="+urlIndepth + 'images/'+index+'.jpg');
	window.open("https://twitter.com/share?via=juanfutbol&text="+text+"&url="+url,"","width=500, height=300");
}
function share_facebook(){
	var url = location.href;
	var parts = url.split("?");
	parts = parts[0].split("#");
	url = parts[0];
	
	url = encodeURIComponent(url+"?cart="+index+"&image="+urlIndepth + 'images/'+index+'.jpg');
	window.open("https://www.facebook.com/sharer/sharer.php?u="+url,"","width=500, height=300");
}
function resize(){
	$("#indepth_top").height($(window).height());
		
}
