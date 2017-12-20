//完善个人信息框水平居中
$(document).ready(function(){
    //屏幕宽度
    var winWidth = $(window).width();
    //水平居中
    winWidth = (winWidth - 576) / 2 + 'px';
    $('.infor-box').css('margin-left',winWidth);
    
})


window.onload = function(){
    var subBtn = document.getElementById('subbtn');
    var name = document.getElementById('name');
    var sex = document.getElementById('sex');
    var phone = document.getElementById('phone');
    var school = document.getElementById('school');
    var stu = document.getElementById('student');
    var money = document.getElementById('money');

    subBtn.onclick  = function(){
        if(name.value == '' ||sex.value == ''||phone.value == ''||school.value == ''||stu.value == ''||money.value == ''){
            return false;
        }else{
            return true;
        }
    }
}