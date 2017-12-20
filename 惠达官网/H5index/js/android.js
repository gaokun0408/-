$(document).ready(function(argument) {
	setTimeout(function(){
		$('.ban-img-can').animate({
			opacity:0.5
		},1000);
	},100);
	$('.kktime-tit-box').children("img").addClass('tada');
	$('.android-tit-box').children("img").addClass('tada');
	
	var cs =0; //动画初始化
	var cs1 = 0;
	var cs2 = 0;
	var cs3 = 0;
	var cs4 = 0;

	window.onscroll = function () {
		var top = document.body.scrollTop || document.documentElement.scrollTop;
		console.log(top)
		if(top>300){
			cs3++;
			if(cs3<2){
				setTimeout(function(){
					console.log($('.kktime-bg-icon').children('img').eq(2))
					$('.kktime-bg-icon').children('img').eq(2).animate({
						top:'130px',
						marginLeft:'-300px'
					},1000);
				},500);
				setInterval(function(){
					$('.kktime-bg-icon').children('img').eq(0).removeClass('flipInX');
					$('.kktime-bg-icon').children('img').eq(0).removeClass('swing');
					var timeid = setTimeout(function(){
						$('.kktime-bg-icon').children('img').eq(0).addClass('swing');
					},10)
				},5000);

				setTimeout(function(){
					$('.kktime-list-right ul').children('li').css('opacity',1);					
					$('.kktime-list-left ul').children('li').addClass('fadeInLeft');
					$('.kktime-list-left ul').children('li').css('opacity',1);
					$('.kktime-list-right ul').children('li').addClass('fadeInRight');		
				},10)
							
			}
		}
		if(top>375){
			cs1++;
			if(cs1<2){
				setTimeout(function(){
					$('.android-tit-box').eq(0).addClass('bounceInLeft')
					$('.android-tit-box').eq(1).addClass('bounceInRight')
					$('.android-tit-box').eq(2).addClass('fadeInDown')
					$('.android-tit-box').css('opacity','1')
				},100);	
			}			
		}
		if(top>800){
			$('.web-tit').children('div').eq(0).addClass('bounceInLeft')
			$('.web-tit').children('div').eq(1).addClass('bounceInRight')
			$('.web-tit').children('div').eq(2).addClass('fadeInDown')
			$('.web-tit').css('opacity','1')
		}
		if(top>1700){
			$('.slyboxx-tit').children('div').eq(0).addClass('bounceInLeft')
			$('.slyboxx-tit').children('div').eq(1).addClass('bounceInRight')
			$('.slyboxx-tit').children('div').eq(2).addClass('fadeInDown')
			$('.slyboxx-tit').css('opacity','1')

			setTimeout(function(){
				$('.job').addClass('fadeInLeft');
				$('.kbox').addClass('fadeInRight');
				$('.kbox').css('opacity','1')			
				$('.job').css('opacity','1')			
			},1000)
			setTimeout(function(){
				$('.data').addClass('flipInX');
				$('.data').css('opacity','1')	
			},1500)
			setTimeout(function(){
				$('.kcon').children('span').eq(1).animate({
					width:'10px'
				},500);
				$('.kcon1').children('span').eq(1).animate({
					width:'24px'
				},500);
				$('.kcon2').children('span').eq(1).animate({
					width:'58px'
				},500);
				$('.kcon3').children('span').eq(1).animate({
					width:'18px'
				},500);
				$('.kcon4').children('span').eq(1).animate({
					width:'64px'
				},500);
				$('.kcon5').children('span').eq(1).animate({
					width:'94px'
				},500);
				$('.kcon6').children('span').eq(1).animate({
					width:'40px'
				},500);
			},2000)
		}
		if(top>3500){
			cs2++;
			if(cs2<2){
				$('.android-list-bg1').addClass('zd');
				$('.android-list-con').eq(0).animate({
					top:0,
					left:0,
					opacity:1
				},800)
				$('.android-list-con').eq(1).animate({
					top:0,
					left:'900px',
					opacity:1
				},800)
				$('.android-list-con').eq(2).animate({
					top:'420px',
					left:0,
					opacity:1
				},800)
				$('.android-list-con').eq(3).animate({
					top:'420px',
					left:'900px',
					opacity:1
				},800)
			}				
		}
		if(top>2700){
			cs4++;
			if (cs4<2) {
				$('.h5-happy-list').addClass('bounceInLeft');
				$('.h5-happy-list').css('opacity','1');
				setTimeout(function(){
					$('.h5-happy-list').animate({
						'height':'550px'
					},1000);
				},1000)
			}
		}
		if(top>4500){
			setTimeout(function(){
				$('.qnrc-list-con').eq(0).animate({
					height:'410px'
				},500)
			},500)
			setTimeout(function(){
				$('.qnrc-list-con').eq(1).animate({
					height:'410px'
				},500)
			},600)
			setTimeout(function(){
				$('.qnrc-list-con').eq(2).animate({
					height:'410px'
				},500)
			},700)
			setTimeout(function(){
				$('.qnrc-list-con').eq(3).animate({
					height:'410px'
				},500)
			},800)
			setTimeout(function(){
				$('.qnrc-list-con').eq(5).animate({
					height:'410px'
				},500)
			},900)
			setTimeout(function(){
				$('.qnrc-list-con').eq(6).animate({
					height:'410px'
				},500)
			},1000)
		}
		
	}



//列表循环
setInterval(function(){
	$('.h5-hword-list').children('ul').first().insertAfter($('.h5-hword-list').children('ul').last());

	$('.h5-hword-list').children('ul').first().animate({
		'margin-top':'-50px'
	},2000,function(){
		$(this).css('margin-top','0');
		$(this).insertAfter($('.h5-hword-list').children('ul').last())
	})	
},1810)


	

//表单验证

//表单验证动画
var fromdh = function(msg){
	console.log(msg)
	setTimeout(function(){
		$(".from-bth-msg").addClass('zoomOut')
	},10)
	setTimeout(function(){
		$(".from-bth-msg").css('opacity',0);
		$(".from-bth-msg").removeClass('zoomOut')
	},10)
	setTimeout(function(){
		$(".from-bth-msg").html(msg)			
		$(".from-bth-msg").addClass('zoomIn')
		$(".from-bth-msg").css('opacity',1);
	},10)
	setTimeout(function(){
		$(".from-bth-msg").removeClass('zoomIn')
	},800)	
}
//初始化
var q = 0;
var p = 0;
var n = 0;
var x = 0;

var num  = 0;
$('#name').blur(function(){
	if ($(this).val() != '') {
		if(n==0){
			num+=25;
			if(num==100){
				fromdh('提交');
			}else{
				fromdh(num);
			}
			n++;
		}		
	}else{
		fromdh('名字？')	
	}
})
$('#qq').blur(function(){
	if ($(this).val() != '') {
		if(q==0){
			num+=25;
			if(num==100){
				fromdh('提交');
			}else{
				fromdh(num);
			}
			q++;
		}			
	}else{
		fromdh('QQ？')	
	}
})
$('#phone').blur(function(){
	if ($(this).val() != '') {
		var reg=/(13\d|14[57]|15[^4,\D]|17[13678]|18\d)\d{8}|170[0589]\d{7}/;
		if(!reg.test($(this).val())){
			fromdh('这是？手机号？')
			$(this).focus();
	    }else{
	    	if(p==0){
	    		num+=25;
				if(num==100){
					fromdh('提交');
				}else{
					fromdh(num);
				}
				p++;
	    	}		      	
	    }
	}else{
		fromdh('电话？')	
	}
})
$('#xk').blur(function(){
	if ($(this).val() != '') {
		if(x==0){
			num+=25;
			if(num==100){
				fromdh('提交');
			}else{
				fromdh(num);
			}			
			x++;
		}			
	}else{
		fromdh('学科？')	
	}
})

})