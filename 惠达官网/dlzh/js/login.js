window.onload = function(){ 
    function getrandom(num1,num2) {
      var ca = num2 - num1 + 1;
      return Math.floor(Math.random()*ca+num1);
    };
    //直接登录页面水平居中
    var loginBox = document.getElementById('login-box');
     size();
    var sWidth = document.documentElement.scrollWidth;
    window.onresize = function(){
        size();
    }

    function size(){
        var cWidth = document.documentElement.clientWidth;
        var fLeft = Math.floor((cWidth - 460) / 2);
        loginBox.style.left = fLeft + 'px';

    }

    //登录手机号
    var phonenum = document.getElementById('phonenum');
    //验证码
    var fs = document.getElementsByClassName('fs')


    //手机号注册时,倒计时
    var waits = 60;
    function timer(t) {
        if (waits == 0) {
            t.removeAttribute("disabled");
            t.value="获取验证码";
            waits = 60;
        }else{
            t.setAttribute("disabled", true);
            t.value="重新发送(" + waits + ")";
            waits--;
            setTimeout(function() {
                timer(t)
            },1000)
        }
    }


    //手机号注册时,发送验证码
    // fs[0].onclick = function(){    
    //     if(phonenum.value!="" && phone(phonenum.value)){     
    //         timer(this); 
    //     }else{
    //         this.setAttribute("disabled", true);
    //         // tip5.innerHTML="请填写手机号";
    //     }
         
    // }

    // 11位手机号
    function phone(str){
        var reg =/0?(13|14|15|17|18)[0-9]{9}/;
        return reg.test(str);
    }
    // var yzm =0;
    var user ='';
    // $('#yz').click(function(){
    //     if(!phone(phonenum.value)){
    //         $('#phonenum').val('')
    //         $('#phonenum').attr('placeholder',"请输入正确的手机号！")
    //     }else{
    //         $.ajax({
    //             type:'POST',
    //             url:dlapi,
    //             data:'uphone='+$('#phonenum').val(),
    //             success:function(data){
    //                 if(data.status==1){
    //                     user = data.data;
                        
    //                     // console.log(sessionStorage.getItem('user'))
    //                     var lsph = $('#phonenum').val();
    //                     yzm = getrandom(100000,999999);
    //                     var sqph = {"mobilet":lsph,"checkma":yzm};
    //                       $.ajax({
    //                         type:'POST',
    //                         url:phapi,
    //                         data:sqph,
    //                         success:function(data){
    //                             var dat = JSON.parse(data);
    //                             console.log(dat)
    //                             if(dat.state==1) {
    //                                 setTimeout(function(){
    //                                     yzm = 0;
    //                                 },120000)
    //                             }else{
    //                                 alert(dat.msg)
    //                             }                                
    //                         }
    //                       })
    //                 }else{
    //                     alert(data.msg);
    //                 }
    //             }
    //         });
            
    //     }
    // })

    // $('#dl').click(function(){
    //     if($('#pwd-sh').val()==yzm){
    //         if($('#pwd-sh').val()!=""){
    //             sessionStorage.user=JSON.stringify(user);
    //             history.back();
    //         }else{
    //             $('#pwd-sh').val('');
    //             $('#pwd-sh').attr('placeholder','验证码不能为空！')
    //         }            
    //     }else{
    //         $('#pwd-sh').val('');
    //         $('#pwd-sh').attr('placeholder','验证码错误！')
    //     }
    // })
    $('#dl').click(function(){
        if($('#phonenum').val()!=""&&$('#pwd').val()!=""){
            $.ajax({
                type:'POST',
                url:dlapi1,
                data:'uname='+$('#phonenum').val()+"&&"+"upass="+$('#pwd').val(),
                success:function(data){
                    if(data.status==1){
                        sessionStorage.user=JSON.stringify(data.data);
                        history.back();
                    }else{
                        alert(data.msg);
                    }
                }
            })
        }else{
            alert('请完善信息！');
        }
    })
}