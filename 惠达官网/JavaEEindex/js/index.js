$(document).ready(function(){
  $('#phone').blur(function(){
    var reg=/(13\d|14[57]|15[^4,\D]|17[13678]|18\d)\d{8}|170[0589]\d{7}/;
    // console.log(reg.test($(this).val());
    if(!reg.test($(this).val())){
      $(this).val('');
      $(this).attr('placeholder','输入正确的手机号');
    }else{
      $(this).attr('placeholder','');
    }
  })
})
