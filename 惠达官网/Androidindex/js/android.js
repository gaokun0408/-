$(document).ready(function(argument) {
	setTimeout(function(){
		$('.ban-img-can').animate({
			opacity:0.5
		},1000);
	},100);

	$('.ban-btn').mouseenter(function(){		
        $(this).children('span').addClass('jackInTheBox')	
	})
	$('.ban-btn').mouseleave(function(){
		$(this).children('span').removeClass('jackInTheBox');
	})
	$('.ban-btn').click(function(){
		$(this).children('span').removeClass('jackInTheBox');
		$(this).children('span').addClass('rollOut')
	})
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
		if(top>750){
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
		if(top>3900){		
			cs++;
			if (cs<2) {
				$('.choiceTitle').css('opacity',1);				
				$('.choiceTitle').addClass('bounceInLeft');				
				var dh1 = setTimeout(function(){
					console.log('dh1')
					$('.choiceLine').children('p').animate({
						left:'120px'
					},1000);
					// console.log($('.choiceLine').children('p').children('span'))
					$('.choiceLine').children('p').children('span').animate({
						backgroundColor:'#f66f8e',
						borderColor:'#f66f8e'
					},1000);
					$('.choiceLine').children('p').eq(0).children('span').animate({
						backgroundColor:'#f66f8e',
						borderColor:'#f66f8e'
					},1000,function(){
						$('.choice-list-con').eq(0).animate({
							marginTop:0
						},500);
					})
					$('.choiceLine').children('p').animate({
						borderColor:'#f66f8e'
					},100)
				},10)
				var dh2 = setTimeout(function(){
					console.log('dh2')

					$('.choiceLine').children('p').eq(1).animate({
						left:'430px'
					},1000);
					$('.choiceLine').children('p').eq(1).children('span').animate({
						'background-color':'#9f4aea',
						borderColor:'#9f4aea'
					},1000,function(){
						$('.choice-list-con').eq(1).animate({
							marginTop:0
						},500);
					});
					$('.choiceLine').children('p').eq(1).animate({
						borderColor:'#9f4aea'
					},1000)
					$('.choiceLine').children('p').eq(2).animate({
						left:'430px'
					},1000);
					$('.choiceLine').children('p').eq(3).animate({
						left:'430px'
					},1000);
					$('.choiceLine').children('p').eq(3).children('span').animate({
						'background-color':'#9f4aea',
						borderColor:'#9f4aea'
					},1000);
				},1510)
				var dh3 = setTimeout(function(){
					console.log('dh3')

					$('.choiceLine').children('p').eq(2).animate({
						left:'750px'
					},1000);
					$('.choiceLine').children('p').eq(2).children('span').animate({
						'background-color':'#2cd0cf',
						borderColor:'#2cd0cf'
					},1000);
					$('.choiceLine').children('p').eq(2).animate({
						borderColor:'#2cd0cf'
					},1000)
					$('.choiceLine').children('p').eq(3).animate({
						left:'750px'
					},1000);
					$('.choiceLine').children('p').eq(3).children('span').animate({
						'background-color':'#2cd0cf',
						borderColor:'#2cd0cf'
					},1000,function(){
						$('.choice-list-con').eq(2).animate({
							marginTop:0
						},500);
					});
				},1510)
				var dh4 = setTimeout(function(){
					console.log('dh4')

					$('.choiceLine').children('p').eq(3).animate({
						left:'1055px'
					},1000);
					$('.choiceLine').children('p').eq(3).children('span').animate({
						'background-color':'#f77c3d',
						borderColor:'#f77c3d'		
					},1000,function(){
						$('.choice-list-con').eq(3).animate({
							marginTop:0
						},500);
					});
					$('.choiceLine').children('p').eq(3).animate({
						borderColor:'#f77c3d'
					},1000)
				},1510)	
			}
					
		}

		if(top>4750){
			cs4++;
			if(cs4<2){
				setTimeout(function(){
					$('.from-con').addClass('fadeInDown');
					$('.from-con').css('opacity',1)
				})				
			}
		}
	}
	
	

// 后半部分
$(".lright").addClass("tada");
$(".lright").addClass("jackInTheBox");
$(".lleft").addClass("tada");
$(".lleft").addClass("jackInTheBox");

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



	//宇宙特效
"use strict";
var canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d'),
  w = canvas.width = window.innerWidth,
  h = canvas.height = 600,

  hue = 217,
  stars = [],
  count = 0,
  maxStars = 1300;//星星数量

var canvas2 = document.createElement('canvas'),
  ctx2 = canvas2.getContext('2d');
canvas2.width = 100;
canvas2.height = 100;
var half = canvas2.width / 2,
  gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
gradient2.addColorStop(0.025, '#CCC');
gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
gradient2.addColorStop(1, 'transparent');

ctx2.fillStyle = gradient2;
ctx2.beginPath();
ctx2.arc(half, half, half, 0, Math.PI * 2);
ctx2.fill();

// End cache

function random(min, max) {
  if (arguments.length < 2) {
    max = min;
    min = 0;
  }

  if (min > max) {
    var hold = max;
    max = min;
    min = hold;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function maxOrbit(x, y) {
  var max = Math.max(x, y),
    diameter = Math.round(Math.sqrt(max * max + max * max));
  return diameter / 2;
  //星星移动范围，值越大范围越小，
}

var Star = function() {

  this.orbitRadius = random(maxOrbit(w, h));
  this.radius = random(60, this.orbitRadius) / 8; 
  //星星大小
  this.orbitX = w / 2;
  this.orbitY = h / 2;
  this.timePassed = random(0, maxStars);
  this.speed = random(this.orbitRadius) / 50000; 
  //星星移动速度
  this.alpha = random(2, 10) / 10;

  count++;
  stars[count] = this;
}

Star.prototype.draw = function() {
  var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
    y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
    twinkle = random(10);

  if (twinkle === 1 && this.alpha > 0) {
    this.alpha -= 0.05;
  } else if (twinkle === 2 && this.alpha < 1) {
    this.alpha += 0.05;
  }

  ctx.globalAlpha = this.alpha;
  ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
  this.timePassed += this.speed;
}

for (var i = 0; i < maxStars; i++) {
  new Star();
}

function animation() {
  ctx.globalCompositeOperation = 'source-over';
  ctx.globalAlpha = 0.5; //尾巴
  ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)';
  ctx.fillRect(0, 0, w, h)

  ctx.globalCompositeOperation = 'lighter';
  for (var i = 1, l = stars.length; i < l; i++) {
    stars[i].draw();
  };

  window.requestAnimationFrame(animation);
}

animation();
})