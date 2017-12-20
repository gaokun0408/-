window.onload = function(){
    function getrandom(num1,num2) {
      var ca = num2 - num1 + 1;
      return Math.floor(Math.random()*ca+num1);
    };
    //注册信息水平居中
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


    //注册手机号和密码
    var inPhone = document.getElementById('inphone');
    //验证码
    var fs = document.getElementsByClassName('fs')
    // 输入密码
    var onepwd = document.getElementById('onepwd');
    // 再次输入密码
    var twopwd = document.getElementById('twopwd');
    //信号判断
    var week = document.getElementById('week');
    var middle = document.getElementById('middle');
    var strong = document.getElementById('strong');
   

    //提示信息
    var tip = document.getElementById('tip');
    var tip1 = document.getElementById('tip1');

   //注册手机号失去焦点时
    inPhone.onblur = function(){ //失去焦点时触发
        var inphtxt = this.value;
        trim(inphtxt); //去空格
        if(!phone(inphtxt)){
            // tip5.innerHTML = "手机号输入错误,请更正";
        }else{
            // tip5.innerHTML = "";
            fs[0].removeAttribute("disabled");
        }
    }


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
    fs[0].onclick = function(){    
        if(inPhone.value!="" && phone(inPhone.value)){     
            timer(this); 
        }else{
            this.setAttribute("disabled", true);
            // tip5.innerHTML="请填写手机号";
        }
         
    }

    //输入密码
    onepwd.onkeyup = function(){
        var oneinpwd = onepwd.value;
        if(oneinpwd.length >= 6 && oneinpwd.length <= 20 ){
            return true;
        }else{
            return false;
        }
    }
   
    // 再次输入密码键盘弹起时
    twopwd.onkeyup = function(){ //失去焦点时触发
        var oneinpwd = onepwd.value;
        var twoinpwd = twopwd.value;
        if(oneinpwd == twoinpwd){
            if(letter(twoinpwd) || num(twoinpwd)){
                week.style.backgroundColor='#df7a7a';
                middle.style.backgroundColor='#787878';
                strong.style.backgroundColor = '#161616';
            }else if(pword(twoinpwd)){
                week.style.backgroundColor='#26dcec';
                middle.style.backgroundColor='#26dcec';
                strong.style.backgroundColor = '#161616';
            }else{
                week.style.backgroundColor='green';
                middle.style.backgroundColor='green';
                strong.style.backgroundColor = 'green';
            }
        }else{
            week.style.backgroundColor='#787878';
            return false;
            // tip7.innerHTML = "密码长度应为6~16个字符";
        }
    }


    //函数
    //去空格
    function trim(str){
        var reg = /(^\s*)|(\s*$)/g;
        return str.replace(reg,'');
    }

    //密码
    function pword(str){
        var reg = /^[A-Za-z0-9]+$/;
        return reg.test(str);
    }

    // 数字
    function num(str){
        var reg =  /^[0-9]*$/;
        return reg.test(str);
    }

    // 字母
    function letter(str){
        var reg =/^[A-Za-z]+$/;
        return reg.test(str);
    }

    // 任意字符
    function all(str){
        var reg = /[^%&',;=?$\x22]+/
        return reg.test(str);
    }

    // 11位手机号
    function phone(str){
        var reg =/0?(13|14|15|17|18)[0-9]{9}/;
        return reg.test(str);
    }


    //注册信息时,表单验证
    var subbtn = document.getElementById('subbtn');
    // var uname = document.getElementById('uname');
    var pwdsh = document.getElementById('pwd-sh');
    var checksh = document.getElementById('check-sh');
    // subbtn.onclick = function(){
    //     var uername = uname.value;
    //     if(uername.length >= 4 && uername.length <= 20 ){  
    //         if(onepwd.value == "" || (onepwd.value).length < 6){
    //             return false;
    //         } 

    //         if(pwdsh.value == ""){
    //             // tip9.innerHTML = "验证码不能为空";
    //             return false;
    //         }

    //         if((pwdsh.value).length < 6){
    //             // tip9.innerHTML = "请填写正确的验证码";
    //             return false;
    //         }

    //         if(!checksh.checked){
    //             // tip11.innerHTML = "请接受服务条款";
    //             return false;
    //         }
    //         return true; 
    //     }else{
    //         return false;
    //     }
    // }\
    var uname ='';
    $('#uname').blur(function(){
        if(!all($(this))){
            $('#uname').val('')
            $('#uname').attr('placeholder',"用户名不能有特殊字符！")
        }else{
            $.ajax({
                type:'POST',
                url:nameapi,
                data:'uname='+$('#uname').val(),
                success:function(data){
                    if(data.status==1){
                        $('#uname').val('');
                        $('#uname').attr('placeholder','用户名已注册！')
                    }else{
                        uname = $('#uname').val();
                    }
                }
            })
            
        }
    })
    $('#inphone').blur(function(){
      if(!phone($(this).val())){
        $('#inphone').val('')
        $('#inphone').attr('placeholder',"请输入正确的手机号！")
      }
    })
    var upwd ='';
    $('#twopwd').blur(function(){
        if($(this).val()!=$('#onepwd').val()){
            $(this).val('');
            $(this).attr('placeholder',"两次密码不一致")
        }else{
            upwd = $('#twopwd').val();
        }
    });
    var yzm =0;
    $('#yzm').click(function(){
      yzm = getrandom(100000,999999);     
      var lsph = $('#inphone').val();
      if(!phone(lsph)){
        $('#inphone').val('')
        $('#inphone').attr('placeholder',"请输入正确的手机号！")
      }else{
          var sqph = {"mobilet":lsph,"checkma":yzm};
          $.ajax({
            type:'POST',
            url:phapi,
            data:sqph,
            error:function(){
                alert('验证码发送失败！')
            },
            success:function(data){                
                var dat = JSON.parse(data);
                    if(dat.state==1) {
                        setTimeout(function(){
                            yzm = 0;
                        },120000)
                    }else{
                        alert(dat.msg)
                    }      
                }
          })
      }

    })
    var phonea = ''
    $('#pwd-sh').blur(function(){
        if($(this).val()==yzm){
            phonea = $('#inphone').val();
        }else{
            $(this).val('');
            $(this).attr('placeholder','验证码错误！')
        }
    })
    $('#subbtn').click(function(){
        if($('#uname').val()!=''&&$('#onepwd').val()!=''&&$('#twopwd').val()!=''&&$('#pwd-sh').val()!=''){
            if($('#check-sh').attr('checked')){
                var msgs = {
                    'uname':uname,
                    "uphone":phonea,
                    'upass':upwd,
                    'name':$('#name').val(),
                    'collage':$('#school').val(),
                    'profess':$('#student').val(),
                    'clas':$('#money').val()
                }
                $.ajax({
                    type:'POST',
                    url:zcapi,
                    data:msgs,
                    success:function(data){
                       if(data.status==1){
                          history.back()
                       }else{
                           alert(data.msg)
                       }
                    }
                })
            }else{
                alert('请同意惠达协议！')
            }
        }else{
            alert('请完善必填信息！')
        }
    })

}