$(document).ready(function(){
     // var dlf = sessionStorage.phone;
        // sessionStorage.phone=18332533879;
        // console.log(sessionStorage.getItem('phone'))
        var users = '';       
        if(sessionStorage.getItem('user')=="\"\""||sessionStorage.getItem('user')==null){
            $('.cover-bg').fadeIn();
        }else{
            users = JSON.parse(sessionStorage.getItem("user"))
            // var uimgs = users.uimg.replace(/\\/,'/')
            $('#uimg').attr('src',useimg+users.uimg);
            $('.name').html(users.uname);
            var spid = {'vid':window.location.hash.substr(1),"uphone":sessionStorage.getItem('phone')}
            $.ajax({
                type:'POST',
                url:spbf,
                data:spid,
                success:function(msg){
                    $('.ptitle').html(msg.data[0].ktitle);
                    $('.ptime').html(msg.data[0].time);
                    $('#gk').html(msg.data[0].seecount);
                    $('#dw').html(msg.data[0].downcount);
                    $('#ul').attr('id',msg.data[0].id)
                    $('.desc').html(msg.data[0].vbody);
                    var nodes = '';
                    for(var i= 0;i<msg.data.length;i++){
                        nodes+='<li id='+msg.data[i].id+' url='+msg.data[i].kurl+'>'
                            +       '<span id="">'+(i+1)+'</span>'
                            +        '<span>【视频】</span>'
                            +        '<a href="javascript:;">'+msg.data[i].ktitle+'</a>'       
                            +        '<span class="cont-time">[6:12]</span>'
                            +        '<i class="iconfont icon-guankan"></i>'
                            +        '<span>观看：</span><span class="cont-ti">'+msg.data[i].seecount+'</span>'
                            +        '<i class="iconfont icon-xiazai"></i>'
                            +        '<span>下载：</span><span>'+msg.data[i].downcount+'</span>'
                            +    '</li>'
                    }
                    $('#ml').html(nodes);
                    $('#ml').children('li').click(function(){
                        var kcbt = {"kid":$(this).attr('id'),'vid':window.location.hash.substr(1)}
                        var id = $(this).attr('id');
                        $.ajax({
                            type:'POST',
                            url:gklapi,
                            data:kcbt,
                            success:function(data){
                                for(var i =0;i<data.data.length;i++){
                                    if (data.data[i].id==id) {
                                        $('.ptitle').html(msg.data[i].ktitle);
                                        $('.ptime').html(msg.data[i].time);
                                        $('#gk').html(msg.data[i].seecount);
                                        $('#dw').html(msg.data[i].downcount);
                                        $('.desc').html(msg.data[i].vbody);
                                        $('#ul').attr('id',msg.data[i].id)
                                        break;
                                    }
                                }
                            }
                        })
                    })
                }
            })
            //增加下载量
            $('#ul').click(function(){
                var id = $(this).attr('id');
                $.ajax({
                    type:'POST',
                    url:dwapi,
                    data:"kid="+id,
                    success:function(){

                    }
                })
            })

            //推荐观看
            $('#tjk').click(function(){
                $.ajax({
                    type:"POST",
                    url:tuiapi,
                    success:function(msg){
                        var nodes = '';
                        for(var i= 0;i<msg.data.length;i++){
                            nodes+='<li id='+msg.data[i].id+' url='+msg.data[i].kurl+' vid = '+msg.data[i].vtid+'>'
                                +       '<span id="">'+(i+1)+'</span>'
                                +        '<span>【视频】</span>'
                                +        '<a href="javascript:;">'+msg.data[i].ktitle+'</a>'       
                                +        '<span class="cont-time">[6:12]</span>'
                                +        '<i class="iconfont icon-guankan"></i>'
                                +        '<span>观看：</span><span class="cont-ti">'+msg.data[i].seecount+'</span>'
                                +        '<i class="iconfont icon-xiazai"></i>'
                                +        '<span>下载：</span><span>'+msg.data[i].downcount+'</span>'
                                +    '</li>'
                        }
                        $('#tj').html(nodes);
                        $('#tj').children('li').click(function(){
                        var kcbt = {"kid":$(this).attr('id'),'vid':$(this).attr('vid')}
                        var id = $(this).attr('id');
                        $.ajax({
                            type:'POST',
                            url:gklapi,
                            data:kcbt,
                            success:function(data){
                                for(var i =0;i<data.data.length;i++){
                                    if (data.data[i].id==id) {
                                        $('.ptitle').html(msg.data[i].ktitle);
                                        $('.ptime').html(msg.data[i].time);
                                        $('#gk').html(msg.data[i].seecount);
                                        $('#dw').html(msg.data[i].downcount);
                                        $('.desc').html(msg.data[i].vbody);
                                        $('#ul').attr('id',msg.data[i].id)
                                        break;
                                    }
                                }
                            }
                        })
                    })
                    }
                })
            })
        }

        
       

		$('.iconfx').click(function(){
			var index = $('.iconfx').index($(this));
			console.log(index);
			$('.iconfx').eq(index).css('color','#3eb035');
			$('.fx').eq(index).css('display','block');
			$('.iconfx').eq(index).siblings('.iconfx').css('color','#939393');
			$('.fx').eq(index).siblings('.fx').css('display','none');
		})
	
		$('.ul-top .course').click(function(){
			var index = $('.course').index($(this));
			$('.contents').eq(index).css('display','block');
			$('.course').eq(index).addClass('bord');
			$('.contents').eq(index).siblings('.contents').css('display','none');
			$('.course').eq(index).siblings('.course').removeClass('bord');

		})

        $('.love').click(function(){
            var index = $('.love').index($(this));
            console.log(index);
            $('.like').eq(index).css('display','block');
            $('.love').eq(index).addClass('green');
            $('.like').eq(index).siblings('.like').css('display','none');
            $('.love').eq(index).siblings('.love').removeClass('green');

        });	


        $(".dllogo").click(function(){
             $(".dlnew").toggle();
        });

		$(function(){
            $('.M-box').pagination({
                callback:function(api){
                    $('.now').text(api.getCurrent());
                }
            },function(api){
                $('.now').text(api.getCurrent());
            });

            $('.M-box2').pagination({
                coping:true,
                homePage:'首页',
                endPage:'末页',
                prevContent:'上一页',
                nextContent:'下一页'
            });

            $('.M-box1').pagination({
                totalData:100,
                showData:5,
                coping:true
            });

            $('.M-box3').pagination({
                pageCount:12,
                jump:true,
                coping:true,
                homePage:'首页',
                endPage:'末页',
                prevContent:'上一页',
                nextContent:'下一页'
            });

            $('.M-box4').pagination({
                pageCount: 3, //初始化时总页数3页
                callback:function(api){
                    api.setPageCount(12);//动态修改总页数为12页
                }
            });

            $('.M-box5').pagination({
                pageCount: 50,
                jump: true,
                callback:function(api){
                    var data = {
                        page: api.getCurrent(),
                        name: 'mss',
                        say: 'oh'
                    };
                    $.getJSON('http://localhost:3000/data.json',data,function(json){
                        console.log(json);
                    });
                }
            });
         }); 




        //$('.cover-win').css('margin-left',$(window).height)
        var winHeight = $(window).height();
        winHeight = (winHeight - 368) / 2 + 'px';
        var winWidth = $(window).width();
        //alert(winWidth);
        winWidth = (winWidth - 554) / 2 + 'px';
        $('.cover-win').css('margin-left',winWidth).css('margin-top',winHeight);


        $('#close-btn').click(function(){
            $('.cover-bg').fadeOut();
        });

        //alert($('video').autoplay);
        //$('video').autoplay = true;

       
        
        
	})

