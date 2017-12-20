
// $(document).ready(function(){
// 		$('.nav1').click(function(){
// 			var index = $('.nav1').index($(this));
// 			console.log(index);
// 			$('.nav1').eq(index).css('backgroundColor','#3eb035');
// 			$('.navnews').eq(index).css('display','block');
// 			$('.nav1').eq(index).siblings('.nav1').css('backgroundColor','#fff');
// 			$('.navnews').eq(index).siblings('.navnews').css('display','none');
// 		})
// })
$(document).ready(function(){
	$('.nav1').click(function(){
		var index = $('.nav1').index($(this));
		console.log(index);
		$('.nav1').eq(index).css('color','#fff').css('backgroundColor','#3eb035');
		$('.navnews').eq(index).css('display','block');
		$('.nav1').eq(index).siblings('.nav1').css('backgroundColor','#fff').css('color','#000');
		$('.navnews').eq(index).siblings('.navnews').css('display','none');
	})
})