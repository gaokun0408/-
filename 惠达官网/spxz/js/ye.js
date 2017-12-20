$(document).ready(function(){
  $.ajax({
     type: "POST",
     url: spxzall,
     success: function(msg){
       var pages = Math.ceil(msg.data.length/8);
       layui.use(['layer', 'laypage', 'element'], function(){
          var layer = layui.layer
          ,laypage = layui.laypage
          ,element = layui.element();
          
          //分页
          laypage({
            cont: 'page' //分页容器的id
            ,pages: pages //总页数
            ,skin: '#5FB878' //自定义选中色值
            //,skip: true //开启跳页
            ,jump: function(obj, first){
              var next = {'page':obj.curr};
              var nodes = '';
              $.ajax({
                type:'POST',
                url:spxzallpage,
                data:next,
                success:function(data){
                  for(var i =0;i<data.data.length;i++){
                    var imgs = data.data[i].vimg.replace(/\\/,"/");
                    nodes+='<ul class="wow bounceInLeft learn-img ">'
                      +'<a href="javascript:;">'
                      +'<img src="'+spxzimg+imgs+'">'
                      +'<div class="learn-text">'
                      +'<a href="javascript:;">'
                      +'<p>'+data.data[i].vtitle+'</p>'
                      +'</a>'
                      +' <span class="dlnum">下载量'+data.data[i].downcount+'</span>'
                      +'<span>已学习'+data.data[i].learncount+'</span>'
                      +'</div>'
                      +' <div class="layer">'
                      +'<a href="../spbf/#'+data.data[i].id+'"><i class="iconfont icon-1"></i></a>'
                      +'</div>'
                      +'</a></ul>'
                  }
                  $('.class-img').html(nodes);
                }
              })
            }
          });
        });
     }
  });

  $('.houtai').children('li').click(function(){
    var one = $(this).siblings('p').html();
    var two = $(this).html();
    var fl = {'vtype':one,'Vitem':two}
    $.ajax({
      type: "POST",
      url: spxzflall,
      data:fl,
      success:function(msg){
        var pages = Math.ceil(msg.data.length/8);
         layui.use(['layer', 'laypage', 'element'], function(){
            var layer = layui.layer
            ,laypage = layui.laypage
            ,element = layui.element();
            
            //分页
            laypage({
              cont: 'page' //分页容器的id
              ,pages: pages //总页数
              ,skin: '#5FB878' //自定义选中色值
              //,skip: true //开启跳页
              ,jump: function(obj, first){
                var next = {'vtype':one,'Vitem':two,'page':obj.curr};
                var nodes = '';
                $.ajax({
                  type:'POST',
                  url:spxzflallpage,
                  data:next,
                  success:function(data){
                    for(var i =0;i<data.data.length;i++){
                      var imgs = data.data[i].vimg.replace(/\\/,"/");
                      nodes+='<ul class="wow bounceInLeft learn-img ">'
                        +'<a href="javascript:;">'
                        +'<img src="'+spxzimg+imgs+'">'
                        +'<div class="learn-text">'
                        +'<a href="javascript:;">'
                        +'<p>'+data.data[i].vtitle+'</p>'
                        +'</a>'
                        +' <span class="dlnum">下载量'+data.data[i].downcount+'</span>'
                        +'<span>已学习78</span>'
                        +'</div>'
                        +' <div class="layer">'
                        +'<a href="../spbf/#'+data.data[i].id+'"><i class="iconfont icon-1"></i></a>'
                        +'</div>'
                        +'</a></ul>'
                    }
                    $('.class-img').html(nodes);
                  }
                })
              }
            });
          });
      }
    })
  })
})

