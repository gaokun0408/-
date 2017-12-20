
//banner动画
  var timeId1=  setTimeout(function(){
    //年薪20万动画
      $('.zhufu img').addClass('animated slideInUp  ')
      $('.zhufu img').css('display','inline-block')
      //螺旋动画
      $('.luo').css('display','inline-block')
      $('.luo').addClass('animated wobble')
      //金币和三角动画
      var timeId3 = setTimeout(function(){
        $('.jinbi1').css('display','inline-block');
        $('.jinbi1').addClass('animated shake');
        $('.jinbi2').css('display','inline-block');
        $('.jinbi2').addClass('animated shake');
        $('.sanjiao1').css('display','inline-block');
        $('.sanjiao2').css('display','inline-block');
        $('.sanjiao1').addClass('animated fadeInLeftBig')
        $('.sanjiao2').addClass('animated fadeInRightBig')
      },1200);

    },1200);


$('.designli-in').eq(2).addClass(' yincang ');
$('.designli-in').eq(3).addClass(' yincang ');


//设计理念动画
$(window).scroll(function(){
// 滚动条距离
var scrolltopV=$(document).scrollTop();
// 可视区高度
var seeHeight=$(window).height();
//中心圆位置
var zhongxinH=$('.designli').offset().top+($('.designli').offset().top)/2;

console.log('scrolltopV+seeHeight为'+(scrolltopV+seeHeight));
console.log('中心圆的位置为'+zhongxinH);
console.log('可视区高度为'+seeHeight);
if (zhongxinH<scrolltopV+seeHeight) {

 $('.zhongxin').addClass('animated zoomIn xianshi');
  var timeId2= setTimeout(function(){
     $('.designli-in').eq(2).addClass('animated rotateInUpLeft xianshi ');
     $('.designli-in').eq(3).addClass('animated rotateInUpRight xianshi ');
     $('.designli-in').eq(2).removeClass(' yincang ');
     $('.designli-in').eq(3).removeClass(' yincang ');

 },100)
}
console.log($(document).scrollTop());
})
