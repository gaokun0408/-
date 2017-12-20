$(document).ready(function(){
	//轮播图
	//随机函数
	function getrandom(num1,num2) {
      var ca = num2 - num1 + 1;
      return Math.floor(Math.random()*ca+num1);
    };

    //轮播
    //轮播动画
	var dh =['slotzoom-horizontal','slotslide-horizontal','fade','slotfade-horizontal','slotfade-vertica','curtain-3'];

	$.post(indeximgapi, function(data){
		var nodes ='';
        for(var i = 0;i<data.data.length;i++){
        	var imgs = data.data[i].lbimg.replace(/\\/,"/");
     	     nodes+='<li data-transition='+dh[getrandom(0,5)]+' data-link="http://www.huidapeixun.com/bmlc/#bm" data-slotamount="7" data-masterspeed="300" >';
			nodes+='<img src="'+indeximgurl+imgs+'"  alt="darkblurbg"   data-fullwidthcentering="on"></li>';
		}
		$('#img').html(nodes);
		jQuery('.tp-banner').revolution({
			delay:5000,
			startwidth:1200,
			startheight:600,
			hideThumbs:10,
			fullWidth:"on",
			forceFullWidth:"on",
			onHoverStop:"on"
		});
	});

	//惠达专题
	$.post(indexztapi,function(data){
		$('.news-slide-box').text('');
		var nodes ='';
		for(var i =0;i<data.data.length;i++){
			var imgs = data.data[i].timg.replace(/\\/,"/");
			nodes+='<a href="'+data.data[i].id+'"><div class="info-con-center qwer">'
				  +'<img src="'
				  +indexztimg+imgs
				  +'" alt="">'
				  +'<div class="info-art">'
				  +'<p>'
				  +data.data[i].title
				  +'</p>'
				  +'<div class="info-art-con">'
				  +data.data[i].tcont
				  +'</div></div></div></a>'
		}
		$('.news-slide-box').html(nodes);	
		$('.news-slide-box').width(($('.qwer').length + 1) * 474 + 'px');
		//alert($('.qwer').length);
		var newsNowa = 0;

		if($('.qwer').length > 1){


			$("#ctrlLR-1").click(function(){
				var nowaaa = newsNowa + 475;
				if(nowaaa <= 0){
					$('.news-slide-box').animate({
						left:nowaaa + 'px'
					},600);
					newsNowa = nowaaa;
				}else{
					//nowa = -804;
					nowaaa = -($('.qwer').length - 1) * 475;
					$('.news-slide-box').animate({
						left:nowaaa + 'px'
					},600);
					newsNowa = nowaaa;
				}
				
			});

			$("#ctrlLR-2").click(function(){
				var nowaaa = newsNowa - 475;
				if(nowaaa >= -($('.qwer').length - 1) * 475){
					$('.news-slide-box').animate({
						left:nowaaa + 'px'
					},600);
					newsNowa = nowaaa;
				}else{
					nowaaa = 0;
					$('.news-slide-box').animate({
						left:nowaaa + 'px'
					},600);
					newsNowa = nowaaa;
				}
			});
		}		
	})


	//惠达头条
	$.post(indexttapi,function(data){		
		var nodes = '<div class="hdzt-news-list-no1P">惠达头条</div>';
	 	$('.hdzt-news-list').html('');
		for(var i = 0;i<data.data.length;i++){
			nodes+='<a href="'+data.data[i].id+'"><p><span>· '
			+'</span>'
			+data.data[i].title
			+'</p></a>'
		}

		$('.hdzt-news-list').html(nodes);
	})

	//学员故事
	$.ajax({
	   type: "POST",
	   url: indexstu,
	   data: "appid=1234567956ab..",
	   success: function(msg){
	     
	     var nodes = '<p class="study-story">学员故事</p>';
	     for(var i =0;i<msg.data.length;i++){
		     nodes+='<div class="story-nav xygsAnima"><div class="story-img1">'
				+'<img alt="" src="'+indexstuimg+msg.data[i].stuimg.replace(/\\/,'/')+'">'
				+'</div><a href="'+msg.data[i].stuname+'">'
				+'<div class="story-text">'
				+'<p>'+msg.data[i].stuname+'</p>'
				+'<p>'+msg.data[i].stuclass+'</p>'
				+'<p>单位：'+msg.data[i].stunit+'</p>'
				+'<p>月薪：<span>'+msg.data[i].salary+'</span></p></div></a></div>'
		 }
		 $('.story').html(nodes);
		 var  imgss=$(".story-nav");
		 $('.story-nav').eq(0).css('margin-left',0);
		 $('.story-nav').eq(4).css('margin-left',0);
			var  covers=$(".story-text");
			imgss.hover(function(){
				var index=imgss.index($(this));
				covers.eq(index).css('display','block');
			},function(){
				covers.css('display','none');
			});
	   }
	});


	//活动专区
	$.ajax({
		type:'POST',
		url:indexhdapi,
		data:"appid=1234567956ab..",
		success:function(msg){
			var nodes1 = '';
			var nodes2 = '';
			for(var i =0;i<msg.data.length;i++){
				if(i>2){
					nodes2+='<div class="top-pic3 bzrmAnima">'
					+'<img src="'+indexhdimg+msg.data[i].acimg+'" alt="">'
					+'<p><span>'+msg.data[i].actitle+'</span></p></div>'
				}else{
					nodes1+='<div class="top-pic3 bzrmAnima">'
					+'<img src="'+indexhdimg+msg.data[i].acimg+'" alt="">'
					+'<p><span>'+msg.data[i].actitle+'</span></p></div>'
				}
			}
			$('.pic-six-top').html(nodes1);
			$('.pic-six-bottom').html(nodes2);
		}
	})






	//QQ咨询
	var qqs = ['3061658629','3192352114','2918046621','1958909090','3156294875'];
	    
    $('#qq').click(function(){
    	window.location.href="tencent://message/?uin="+qqs[getrandom(0,4)]+"&Site=&Menu=yes";
    })

})




var windowHeight =  $(window).height();
var slidePosi = (windowHeight - 280) / 2;
// 导航条   下滑  事件



$('#kcjs').hover(function(){
	$('#kcjs ul').slideDown();
},function(){
	$('#kcjs ul').slideUp();
});


//底部  四个按钮  动画事件

// $('.footerBtn').hover(function(){
// 	$(this).addClass('animated wobble');
// },function(){
// 	$(this).removeClass('animated wobble');
// });

// 轮播图
// 


jQuery(document).ready(function() {
	// jQuery('.tp-banner').revolution({
	// 	delay:5000,
	// 	startwidth:1200,
	// 	startheight:500,
	// 	hideThumbs:10,
	// 	fullWidth:"on",
	// 	forceFullWidth:"on",
	// 	onHoverStop:"on"
	// });
});



/////////////////////////////////////// 就业 薪资  的  滚动 事件
var step = 402;
var lengthAll = $('.jyxz-info').length * step;
$('.jyxz-box').width(lengthAll * step);
var nowLeft = 0;
var runner = $(".jyxz-box");

if($('.jyxz-info').length > 3){
	$("#jyxz-prev").click(function(){
		var nowa = nowLeft + step;
		if(nowa <= 0){
			runner.animate({
				left:nowa + 'px'
			},600);
			nowLeft = nowa;
		}else{
			//nowa = -804;
			nowa = -($('.jyxz-info').length - 3) * step;
			runner.animate({
				left:nowa + 'px'
			},600);
			nowLeft = nowa;
		}
		
	});

	$("#jyxz-next").click(function(){
		var nowa = nowLeft - step;
		if(nowa >= -($('.jyxz-info').length - 3) * step){
			runner.animate({
				left:nowa + 'px'
			},600);
			nowLeft = nowa;
		}else{
			nowa = 0;
			runner.animate({
				left:nowa + 'px'
			},600);
			nowLeft = nowa;
		}
	});
}



//校园环境   左右  滚动  事件
var schoolNowA = 0;

$('.school-box-slide').width($('.school-box-img').length * 403 + 'px');

if($('.school-box-img').length > 3){
	$("#school-prev").click(function(){
		var nowaa = schoolNowA + 403;
		if(nowaa <= 0){
			$('.school-box-slide').animate({
				left:nowaa + 'px'
			},600);
			schoolNowA = nowaa;
		}else{
			//nowa = -804;
			nowaa = -($('.school-box-img').length - 3) * 403;
			$('.school-box-slide').animate({
				left:nowaa + 'px'
			},600);
			schoolNowA = nowaa;
		}
		
	});

	$("#school-next").click(function(){
		var nowaa = schoolNowA - 403;
		if(nowaa >= -($('.school-box-img').length - 3) * 403){
			$('.school-box-slide').animate({
				left:nowaa + 'px'
			},600);
			schoolNowA = nowaa;
		}else{
			nowaa = 0;
			$('.school-box-slide').animate({
				left:nowaa + 'px'
			},600);
			schoolNowA = nowaa;
		}
	});
}



//新闻模块的    左右  滚动  事件
	// $(document).ready(function(){
	// 	$.post(indexztapi,function(data){
	// 		$('.news-slide-box').text('');
	// 		var nodes ='';
	// 		console.log(data);
	// 		for(var i =0;i<data.data.length;i++){
	// 			var imgs = data.data[i].timg.replace(/\\/,"/");
	// 			nodes+='<div class="info-con-center qwer">'
	// 				  +'<img src="'
	// 				  +indexztimg+imgs
	// 				  +'" alt="">'
	// 				  +'<div class="info-art">'
	// 				  +'<p>'
	// 				  +data.data[i].title
	// 				  +'</p>'
	// 				  +'<div class="info-art-con">'
	// 				  +data.data[i].tcont
	// 				  +'</div></div></div>'
	// 		}
	// 		console.log(nodes);
	// 		$('.news-slide-box').html(nodes);	
	// 		$('.news-slide-box').width(($('.qwer').length + 1) * 474 + 'px');
	// 		//alert($('.qwer').length);
	// 		var newsNowa = 0;

	// 		if($('.qwer').length > 1){


	// 			$("#ctrlLR-1").click(function(){
	// 				var nowaaa = newsNowa + 475;
	// 				if(nowaaa <= 0){
	// 					$('.news-slide-box').animate({
	// 						left:nowaaa + 'px'
	// 					},600);
	// 					newsNowa = nowaaa;
	// 				}else{
	// 					//nowa = -804;
	// 					nowaaa = -($('.qwer').length - 1) * 475;
	// 					$('.news-slide-box').animate({
	// 						left:nowaaa + 'px'
	// 					},600);
	// 					newsNowa = nowaaa;
	// 				}
					
	// 			});

	// 			$("#ctrlLR-2").click(function(){
	// 				var nowaaa = newsNowa - 475;
	// 				if(nowaaa >= -($('.qwer').length - 1) * 475){
	// 					$('.news-slide-box').animate({
	// 						left:nowaaa + 'px'
	// 					},600);
	// 					newsNowa = nowaaa;
	// 				}else{
	// 					nowaaa = 0;
	// 					$('.news-slide-box').animate({
	// 						left:nowaaa + 'px'
	// 					},600);
	// 					newsNowa = nowaaa;
	// 				}
	// 			});
	// 		}		
	// 	})
	// })






//  。。。。。。学员故事 
var  imgss=$(".story-nav");
var  covers=$(".story-text");
imgss.hover(function(){
	var index=imgss.index($(this));
	covers.eq(index).css('display','block');
},function(){
	covers.css('display','none');
});




var open=$(".open");
var learna=$(".learna");
//console.log('生活不止眼前的苟且，还有诗和远方的田野。');
learna.mouseover(function(){
	if(open.eq(learna.index($(this))).css('display')=='block'){
		return;
	}else{
		open.fadeOut();
		// learna.removeClass('currentNavCol');
		open.eq(learna.index($(this))).fadeIn(300);
		// $(this).addClass('currentNavCol');
	}
	
});





// //////////////本周热门  模块


// $('.hot-week a').mouseover(function(){
// 	if($('.pic-six').eq($('.hot-week a').index($(this))).css('display')=='block'){
// 		return;
// 	}else{
// 		$('.pic-six').fadeOut();
// 		$('.hot-week a span').removeClass('currentNavCol');
// 		$('.pic-six').eq($('.hot-week a').index($(this))).fadeIn(300);
// 		$('.hot-week a span').eq($('.hot-week a').index($(this))).addClass('currentNavCol');
// 	}
	
// });


//  540   5540    之间
var windowType = 0;
if(windowHeight > 1000){
	$('.cebianl').css('top',slidePosi + 'px');
	$('.cebianl').css('display','block');
	windowType = 1;
}else{
	$('.cebianl').css('top',slidePosi + 'px');
}
//alert($('.cebianl').offset().top);

var flags = [true,true,true,true,true,true,true,true,true,true,true,true];

if(windowHeight > 692 && windowHeight < 922){
	$('.kuai-4 .kuai-list').eq(0).addClass('animated bounceInLeft');
	$('.kuai-4 .kuai-list').eq(1).addClass('animated bounceInLeft delay2');
	$('.kuai-4 .kuai-list').eq(2).addClass('animated bounceInRight delay2');
	$('.kuai-4 .kuai-list').eq(3).addClass('animated bounceInRight');
	flags[0] = false;
}else if(windowHeight > 922){
	$('.kuai-4 .kuai-list').eq(0).addClass('animated bounceInLeft');
	$('.kuai-4 .kuai-list').eq(1).addClass('animated bounceInLeft delay2');
	$('.kuai-4 .kuai-list').eq(2).addClass('animated bounceInRight delay2');
	$('.kuai-4 .kuai-list').eq(3).addClass('animated bounceInRight');
	flags[0] = false;
	$('.info .info-con').addClass('animated bounceInDown');
	flags[1] = false;
}


$(window).scroll(function(){
	if(windowType == 0){
		if($(window).scrollTop() >= 540 && $(window).scrollTop() <= 5540){
			$('.cebianl').fadeIn(200);
		}else{
			$('.cebianl').fadeOut(200);
		}
		var cebianTop = $(window).scrollTop() + slidePosi + 'px';
		$('.cebianl').css('top',cebianTop);
	}else{
		var cebianTop = $(window).scrollTop() + slidePosi + 'px';
		$('.cebianl').css('top',cebianTop);
	}


	var goBot = windowHeight + $(window).scrollTop();

	//海报下面的  四块 区域
	// if(goBot > 692 && goBot < 922 && flags[0]){
	// 	$('.kuai-4 .kuai-list').eq(0).addClass('animated bounceInLeft');
	// 	$('.kuai-4 .kuai-list').eq(1).addClass('animated bounceInLeft delay2');
	// 	$('.kuai-4 .kuai-list').eq(2).addClass('animated bounceInRight delay2');
	// 	$('.kuai-4 .kuai-list').eq(3).addClass('animated bounceInRight');
	// 	flags[0] = false;
	// }
	// //新闻  专题   信息  快
	// if(goBot > 912 && goBot < 1234 && flags[1]){
	// 	$('.info .info-con').addClass('animated bounceInDown');
	// 	flags[1] = false;
	// }
	// //就业 薪资  模块
	// if(goBot > 1334 && goBot < 1534 && flags[2]){
	// 	$('.jyxz .jyxz-info').eq(0).addClass('animated rollIn');
	// 	$('.jyxz .jyxz-info').eq(1).addClass('animated rollIn delay2');
	// 	$('.jyxz .jyxz-info').eq(2).addClass('animated rollIn delay4');
	// 	flags[2] = false;
	// }
	// //学员故事

	// if(goBot > 1604 && goBot < 2436 && flags[3]){
	// 	$('.xygsAnima').eq(0).addClass('animated rollIn');
	// 	$('.xygsAnima').eq(1).addClass('animated rollIn delay2');
	// 	$('.xygsAnima').eq(2).addClass('animated rollIn delay4');
	// 	$('.xygsAnima').eq(3).addClass('animated rollIn delay6');
	// 	$('.xygsAnima').eq(4).addClass('animated rollIn delay8');
	// 	$('.xygsAnima').eq(5).addClass('animated rollIn delay10');
	// 	$('.xygsAnima').eq(6).addClass('animated rollIn delay12');
	// 	$('.xygsAnima').eq(7).addClass('animated rollIn delay14');
	// 	flags[3] = false;
	// }	

	// //学习资源
	// if(goBot > 2436 && goBot < 3712 && flags[4]){
	// 	$('.learn-img:odd').addClass('animated bounceInRight');
	// 	$('.learn-img:even').addClass('animated bounceInLeft');
	// 	flags[4] = false;
	// }

	// //课程中心
	// if(goBot > 3160 && goBot < 3554 && flags[5]){
	// 	$('.javeEE').eq(0).addClass('animated fadeInLeft');
	// 	flags[5] = false;
	// }
	// if(goBot > 3554 && goBot < 3948 && flags[6]){
	// 	$('.javeEE').eq(1).addClass('animated fadeInRight');
	// 	flags[6] = false;
	// }
	// if(goBot > 3948 && goBot < 4448 && flags[7]){
	// 	$('.javeEE').eq(2).addClass('animated fadeInUp');
	// 	flags[7] = false;
	// }

	// // ben  zhou  re  men
	// if(goBot > 4448 && goBot < 5148 && flags[8]){
	// 	$('.bzrmAnima').eq(0).addClass('animated flipInX');
	// 	$('.bzrmAnima').eq(1).addClass('animated flipInX delay2');
	// 	$('.bzrmAnima').eq(2).addClass('animated flipInX delay4');
	// 	$('.bzrmAnima').eq(3).addClass('animated flipInY delay6');
	// 	$('.bzrmAnima').eq(4).addClass('animated flipInY delay8');
	// 	$('.bzrmAnima').eq(5).addClass('animated flipInY delay10');

	// 	$('.bzrmAnima').eq(6).addClass('animated flipInX');
	// 	$('.bzrmAnima').eq(7).addClass('animated flipInX delay2');
	// 	$('.bzrmAnima').eq(8).addClass('animated flipInX delay4');
	// 	$('.bzrmAnima').eq(9).addClass('animated flipInY delay6');
	// 	$('.bzrmAnima').eq(10).addClass('animated flipInY delay8');
	// 	$('.bzrmAnima').eq(11).addClass('animated flipInY delay10');

	// 	$('.bzrmAnima').eq(12).addClass('animated flipInX');
	// 	$('.bzrmAnima').eq(13).addClass('animated flipInX delay2');
	// 	$('.bzrmAnima').eq(14).addClass('animated flipInX delay4');
	// 	$('.bzrmAnima').eq(15).addClass('animated flipInY delay6');
	// 	$('.bzrmAnima').eq(16).addClass('animated flipInY delay8');
	// 	$('.bzrmAnima').eq(17).addClass('animated flipInY delay10');
	// 	flags[8] = false;
	// }

	// //   xiao  yuan  huan  jing
	// if(goBot > 5148 && goBot < 5472 && flags[9]){
	// 	$('.school-box-img').eq(0).addClass('animated zoomInDown');
	// 	$('.school-box-img').eq(1).addClass('animated zoomInUp');
	// 	$('.school-box-img').eq(2).addClass('animated zoomInDown');
	// 	flags[9] = false;
	// }


	//   footer
});

var returnTopFlag = true;

$('.return-top').click(function(){
	if(returnTopFlag){
		returnTopFlag = false;
		$('body,html').animate({scrollTop:0},500,function(){
			returnTopFlag = true;
		});
	}
});


//alert($(window).height());






// logo头部126px       
// 导航菜单56px    轮播图500px   692
// 海报下面四块180  上边距10 下边距50   922
// 新闻专题312px    1234
// 就业薪资 提示框    26  下边距40 上边距64  = 130    1334
// 就业薪资  内容模块200px   1534
// 学员故事  816px   - 70   
// 学习资源 325 + 370 = 690   2436 开始
// 课程中心  436 394  446  =  1276
// 本周热门  607  115  722    4448  kaishi 
// 校园环境  350    4448 + 700   kaishi 
// 校园环境 下  四个按钮182
// 
// 
// 
// 
//   动画    添加
// 校园环境 动画 animated zoomInDown  zoomInUp  zoomInDown



//学习资源  本周热门 校园环境   的  hover  图片放大一下
$('.school-box-img').hover(function(){
	$('.school-box-img img').eq($('.school-box-img').index($(this))).css('width','114%').css('height','114%').css('margin-left','-7%').css('margin-top','-7%');
},function(){
	$('.school-box-img img').eq($('.school-box-img').index($(this))).css('width','100%').css('height','100%').css('margin-left','0').css('margin-top','0');
});







//控制 新闻 模块  下P标签  内容的长度

//alert($('.hdzt-news-list p').eq(2).html().length);
// alert($('.hdzt-news-list p').eq(2).html().substring(0,31));

// if($('.hdzt-news-list p').html().length > 31){
// 	$(this).html().substring(0,30) + '...'
// }
// for(var i = 0; i < $('.hdzt-news-list p').length; i++){
// 	if($('.hdzt-news-list p').eq(i).html().length > 31){
// 		$('.hdzt-news-list p').eq(i).html($('.hdzt-news-list p').eq(i).html().substring(0,30) + '...');
// 	}
// }