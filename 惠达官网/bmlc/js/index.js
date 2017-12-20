$(document).ready(function() {
  $('#phone').blur(function() {
    var reg=/(13\d|14[57]|15[^4,\D]|17[13678]|18\d)\d{8}|170[0589]\d{7}/;
    // console.log(reg.test($(this).val());
    if(!reg.test($(this).val())){
      $(this).val('');
      $(this).attr('placeholder','输入正确的手机号');
    }else{
      $(this).attr('placeholder','');
    }
  })
  $('#qq').blur(function() {
    var reg=/^[1-9]*[1-9][0-9]*$/;
    // console.log(reg.test($(this).val());
    if(!reg.test($(this).val())){
      $(this).val('');
      $(this).attr('placeholder','输入正确的QQ号');
    }else{
      $(this).attr('placeholder','');
    }
  })
  var zz = document.getElementById('zz');
  var off = document.getElementById('off');
  $('#tj').click(function(){
    var mz = $('#name').val();
    var sj = $('#phone').val();
    var q  = $('#qq').val();
    var cla = $('#cla').val();
    if(mz!=''&&sj!=''&&q!=''&&cla!=''){
      var bm = {
        'appid':'1234567956ab..',
        'qq':q,
        'name':mz,
        'phone':sj,
        'subject':cla
      };
      $.ajax({
        type:'POST',
        url:bmlcapi,
        data:bm,
        success:function(msg){
          if(msg.status ==1){
              zz.style.width = document.documentElement.clientWidth+'px';
              zz.style.height = document.documentElement.clientHeight+'px';
              zz.style.display = 'block';
              window.onresize = function(){
                zz.style.width = document.documentElement.clientWidth+'px';
                zz.style.height= document.documentElement.clientHeight+'px';
              }
              off.onclick = function() {
                  zz.style.display = 'none';
              }
          }else{
            alert(msg.msg)
          }         
        }
      })
    }else{
      $(this).html('请完善信息！')
      setTimeout(function(){
        $('#tj').text('提交')        
      },1500)
    }
    
  })

  //随机函数
  function getrandom(num1,num2) {
      var ca = num2 - num1 + 1;
      return Math.floor(Math.random()*ca+num1);
  };
  //QQ咨询
  var qqs = ['3061658629','3192352114','2918046621','1958909090','3156294875'];
      
  $('#zx').click(function(){
    window.location.href="tencent://message/?uin="+qqs[getrandom(0,4)]+"&Site=&Menu=yes";
  })
  
})

//遮罩
