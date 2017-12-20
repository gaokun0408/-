$(document).ready(function() {
			$.post(jszqimgapi,function(data){				
				var nodes = '';
				$('.banner-imgs').text('');
				for(var i =0;i<data.data.length;i++){
					var imgs = data.data[i].lbimg.replace(/\\/,"/");
					nodes+='<a href="#" class="banner-item" style="background:url('+jszqimgurl+imgs+') no-repeat center 0;"></a>'
				}
				console.log(nodes);
				$('.banner-imgs').html(nodes);
				var imgs = $(".banner-imgs a");

var spanStr = '';
var currentImg = 0;   //当前图片
var timeId = null;    //设置定时器




for(var i = 0; i < imgs.length; i++){
	spanStr += "<span></span>";
}
$(".banner-nav").html(spanStr);
$(".banner-nav span").eq(0).addClass('currentSpan');
imgs.eq(0).css("opacity","1");

// 下一张图片   播放   方法
function nextPlay(){
	imgs.eq(currentImg).animate({
		opacity:0	
	},600);
	$(".banner-nav span").eq(currentImg).removeClass("currentSpan");
	currentImg++;
	if(currentImg >= imgs.length){
		currentImg = 0;	
	}
	$(".banner-nav span").eq(currentImg).addClass("currentSpan");
	imgs.eq(currentImg).animate({
		opacity:1	
	},600);	
}


// 下一张按钮点击事件
$(".banner-next").click(function(){
	nextPlay();
});


// 上一张按钮点击事件
$(".banner-prev").click(function(){
	imgs.eq(currentImg).animate({
		opacity:0	
	},600);
	$(".banner-nav span").eq(currentImg).removeClass("currentSpan");
	currentImg--;
	if(currentImg < 0){
		currentImg = imgs.length - 1;	
	}
	$(".banner-nav span").eq(currentImg).addClass("currentSpan");
	imgs.eq(currentImg).animate({
		opacity:1	
	},600);	
});



// 导航 span  的点击事件
$(".banner-nav span").click(function(){

	if($(".banner-nav span").index($(this)) == currentImg){
		return;
	}
	imgs.eq(currentImg).animate({
		opacity:0	
	},600);
	$(".banner-nav span").eq(currentImg).removeClass("currentSpan");	
	$(this).addClass("currentSpan");
	var inow = $(".banner-nav span").index($(this));
	//as.css("opacity","0");
	imgs.eq(inow).animate({
		opacity:1	
	},600);
	currentImg = inow;
});



//开启定时器
timeId = setInterval(function(){
	nextPlay();
},2000);



$(".banner-imgs").hover(function(){
	clearInterval(timeId);
},function(){
	timeId = setInterval(function(){
		nextPlay();
	},2000);
});				
			})
		})