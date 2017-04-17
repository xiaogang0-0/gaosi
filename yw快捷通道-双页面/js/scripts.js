

(function() {
    "use strict";

    // custom scrollbar

    $("html").niceScroll({styler:"fb",cursorcolor:"#393", cursorwidth: '6', cursorborderradius: '0px', background: '#fff', spacebarenabled:false, cursorborder: '0',  zindex: '1000',hidemode:false});

    $(".left-side").niceScroll({styler:"fb",cursorcolor:"#393", cursorwidth: '3', cursorborderradius: '0px', background: '#fff', spacebarenabled:false, cursorborder: '0'});
    $(".J_bianqian").niceScroll({styler:"fb",cursorcolor:"#393", cursorwidth: '3', background: '#ccc',cursorborder: '0'});

    $(".left-side").getNiceScroll();
    if ($('body').hasClass('left-side-collapsed')) {
        $(".left-side").getNiceScroll().hide();
    }
    


    // Toggle Left Menu
   jQuery('.menu-list > a').click(function() {
      
      var parent = jQuery(this).parent();
      var sub = parent.find('> ul');
      
      if(!jQuery('body').hasClass('left-side-collapsed')) {
         if(sub.is(':visible')) {
            sub.slideUp(200, function(){
               parent.removeClass('nav-active');
               jQuery('.main-content').css({height: ''});
               mainContentHeightAdjust();
            });
         } else {
            visibleSubMenuClose();
            parent.addClass('nav-active');
            sub.slideDown(200, function(){
                mainContentHeightAdjust();
            });
         }
      }
      return false;
   });

   function visibleSubMenuClose() {
      jQuery('.menu-list').each(function() {
         var t = jQuery(this);
         if(t.hasClass('nav-active')) {
            t.find('> ul').slideUp(200, function(){
               t.removeClass('nav-active');
            });
         }
      });
   }

   function mainContentHeightAdjust() {
      // Adjust main content height
      var docHeight = jQuery(document).height();
      if(docHeight > jQuery('.main-content').height())
         jQuery('.main-content').height(docHeight);
   }

   //  class add mouse hover
   jQuery('.custom-nav > li').hover(function(){
      jQuery(this).addClass('nav-hover');
   }, function(){
      jQuery(this).removeClass('nav-hover');
   });


   // Menu Toggle
   jQuery('.toggle-btn').click(function(){
       $(".left-side").getNiceScroll().hide();
       
       if ($('body').hasClass('left-side-collapsed')) {
           $(".left-side").getNiceScroll().hide();
       }
      var body = jQuery('body');
      var bodyposition = body.css('position');

      if(bodyposition != 'relative') {

         if(!body.hasClass('left-side-collapsed')) {
            body.addClass('left-side-collapsed');
            jQuery('.custom-nav ul').attr('style','');

            jQuery(this).addClass('menu-collapsed');

         } else {
            body.removeClass('left-side-collapsed chat-view');
            jQuery('.custom-nav li.active ul').css({display: 'block'});

            jQuery(this).removeClass('menu-collapsed');

         }
      } else {

         if(body.hasClass('left-side-show'))
            body.removeClass('left-side-show');
         else
            body.addClass('left-side-show');

         mainContentHeightAdjust();
      }

   });
   

   searchform_reposition();

   jQuery(window).resize(function(){

      if(jQuery('body').css('position') == 'relative') {

         jQuery('body').removeClass('left-side-collapsed');

      } else {

         jQuery('body').css({left: '', marginRight: ''});
      }

      searchform_reposition();

   });

   function searchform_reposition() {
      if(jQuery('.searchform').css('position') == 'relative') {
         jQuery('.searchform').insertBefore('.left-side-inner .logged-user');
      } else {
         jQuery('.searchform').insertBefore('.menu-right');
      }
   }

    // panel collapsible
    $('.panel .tools .fa').click(function () {
        var el = $(this).parents(".panel").children(".panel-body");
        if ($(this).hasClass("fa-chevron-down")) {
            $(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
            el.slideDown(200);
        } else {
            $(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
            el.slideUp(200);
        }
    });

    $('.todo-check label').click(function () {
        $(this).parents('li').children('.todo-title').toggleClass('line-through');
    });

    $(document).on('click', '.todo-remove', function () {
        $(this).closest("li").remove();
        return false;
    });

   
    // panel close
    $('.panel .tools .fa-times').click(function () {
        $(this).parents(".panel").parent().remove();
    });


    // 搜索   
    $("#J_searchcon li").click(function(){
    	var text=$(this).html();
    	var num=$(this).index()+1;
    	$("#J_searchnav i").html(text);
    	$("#J_searchtype").val(num);
    });
    $("#J_search_allinfo_btn").click(function(){
    	$(this).parent().hide();
    	$("#J_search_btn").parent().parent().show();
    })
    $("#J_search_btn").click(function(){
    	$(this).parent().parent().hide();
    	$("#J_search_allinfo_btn").parent().show();
    })




    //时间筛选 介绍
	!function(){
		laydate.skin('molv');//切换皮肤，请查看skins下面皮肤库
		laydate({
			elem: '#assessover-data1',
			format: 'YYYY-MM-DD', //日期格式
			istime: true,
			istoday: false,
		});//绑定元素

		laydate({
			elem: '#assessover-data2',
			format: 'YYYY-MM-DD', //日期格式
			istime: true,
			istoday: false,
		});//绑定元素

		laydate({
			elem: '#assessover-data3',
			format: 'YYYY-MM-DD', //日期格式
			istime: true,
			istoday: false,
		});//绑定元素
		laydate({
			elem: '#assessover-data4',
			format: 'YYYY-MM-DD', //日期格式
			istime: true,
			istoday: false,
		});//绑定元素
		laydate({
			elem: '#assessover-data5',
			format: 'YYYY-MM-DD', //日期格式
			istime: true,
			istoday: false,
		});//绑定元素
		laydate({
			elem: '#assessover-data6',
			format: 'YYYY-MM-DD', //日期格式
			istime: true,
			istoday: false,
		});//绑定元素

		laydate({
			elem: '#assessover-data7',
			format: 'YYYY-MM-DD', //日期格式
			istime: true,
			istoday: false,
		});//绑定元素

		laydate({
			elem: '#assessover-data8',
			format: 'YYYY-MM-DD', //日期格式
			istime: true,
			istoday: false,
		});//绑定元素

		laydate({
			elem: '#assessover-data9',
			format: 'YYYY-MM-DD', //日期格式
			istime: true,
			istoday: false,
		});//绑定元素
		laydate({
			elem: '#assessover-data10',
			format: 'YYYY-MM-DD', //日期格式
			istime: true,
			istoday: false,
		});//绑定元素
		laydate({
			elem: '#assessover-data11',
			format: 'YYYY-MM-DD', //日期格式
			istime: true,
			istoday: false,
		});//绑定元素
		laydate({
			elem: '#assessover-data12',
			format: 'YYYY-MM-DD', //日期格式
			istime: true,
			istoday: false,
		});//绑定元素

		laydate({
			elem: '#assessover-data1-ym',
			format: 'YYYY-MM', //日期格式
			istime: true,
			istoday: false,
		});//绑定元素

		laydate({
			elem: '#assessover-data13',
			format: 'YYYY-MM-DD hh:mm', //日期格式
			istime: true,
			istoday: false,
		});//绑定元素

        laydate({
          elem: '#assessover-data14',
          format: 'YYYY-MM-DD hh:mm', //日期格式
          istime: true,
          istoday: false,
        });//绑定元素

        // 这是新的时间方法到时候绑定id就可以 newdata

        $('#assessover-data15').datetimepicker({
            datepicker:true,
            minHours:6,
            maxHours:23,
            format:'Y-m-d H:i',
            step:10
          });
        $('#assessover-data16').datetimepicker({
            datepicker:true,
            minHours:6,
            maxHours:23,
            format:'Y-m-d H:i',
            step:10
          });
        $('#assessover-data17').datetimepicker({
            datepicker:true,
            minHours:6,
            maxHours:23,
            format:'Y-m-d H:i',
            step:10
          });
        $('#assessover-data18').datetimepicker({
            datepicker:true,
            minHours:6,
            maxHours:23,
            format:'Y-m-d H:i',
            step:10
          });
        // $('.laydate-icon').datetimepicker({
        //     datepicker:true,
        //     minHours:6,
        //     maxHours:23,
        //     format:'Y-m-d H:i',
        //     step:10
        //   });


	}();

	function selecttabs(classname,n) {
    	var con=$(classname);
            con.addClass("hide");
            con.eq(n).removeClass("hide");
    }

	$("#J_selecttabs").change(function(){
		var n=$(this).val();
		selecttabs(".J_selecttabscon",n)
    });

  $("#J_kaipiao_select").change(function(){
      var n=$(this).val();
      if (n==2 || n==3) {n=0}else{n=1};
      selecttabs(".J_kaipiao_selectcon",n)
    });

  //消息中心 备忘录 添加
  $("#J_tixingpinlv input").on('ifClicked', function(event){ //ifCreated 事件应该在插件初始化之前绑定 
      var n=$(this).val();
      if (n==1) {n=1}else{n=0};
        selecttabs(".J_tixingpinlv_con",n)
    });

  //班组课 课次管理 考勤审核
  $("#jwjx-shenhe-tabs input").on('ifClicked', function(event){ 
        var n=$(this).val();
        var con=$("#jwjx-shenhe-tabscon .tabs-con");
        con.addClass("hide");
        con.eq(n).removeClass("hide");
    });

  $("#jwjx-shenhe-tabs input").on('ifClicked', function(event){ 
        var n=$(this).val();
        var con=$("#jwjx-shenhe-tabscon .tabs-con");
        con.addClass("hide");
        con.eq(n).removeClass("hide");
    });

  $("#j_jwjx-shenhe_tianjiahang").on("click",function(){
     var list=$("#j_jwjx-shenhe_list");
     var listid=1+list.attr("listid")*1;         
     var id="J_li"+listid;
     var delit="delectit('"+id+"')";
     var spicker="#"+id+" .selectpicker";
     var html='<tr id="'+id+'"><td><select  class="selectpicker bfb50 text-left" data-live-search="true" title="请搜索"></select></td><td><select  class="selectpicker text-left"  title="请选择"><option >学员病假</option><option>学员事假</option><option>其他</option><option>无</option></select></td><td><i onclick="'+delit+'" class="fa fa-times-circle f22 c-red"></i></td></tr>';
         list.attr("listid",listid);
         list.append(html);
         $(spicker).selectpicker('refresh');
  })

  $("#j_xtsz_xinzi_tianjiahang , #j_xtsz_xinzi_edithang").on("click",function(){
     var list,thisid=$(this).attr('id');
     (thisid=="j_xtsz_xinzi_edithang")?list=$("#j_xtsz-xinzi_editlist"):list=$("#j_xtsz-xinzi_list");
     var listid=1+list.attr("listid")*1;         
     var id="J_li"+listid;
     var delit="delectxinzi('"+id+"')";
     var arr=list.find("tr").last().find("input");
     var v1=arr.eq(0).val(),v2=arr.eq(1).val(),v3=arr.eq(2).val();
     var html='<tr id="'+id+'"><td><input class="form-control w100 fl  center" type="text" value="'+(v2*1+1)+'" disabled="disabled" ><span class="fl ml10 mr10 lh30">-</span><input class="form-control w100 fl  center" type="text" ></td><td><input class="form-control w100 mauto center" type="text" ></td><td><i onclick="'+delit+'" class="fa fa-times-circle f22 c-red"></i></td></tr>';
         list.attr("listid",listid);

     var einfo="每行课时范围：第2输入框的数值 要大于 第1输入框数值！"
        if (v1==""||v2==""||v3=="" || isNaN(v2) || isNaN(v3) || v3<=0) {
          alert("输入大于0数字！")
        }else if(v2*1<=v1*1){
          alert(einfo)         
        }else{
             
          list.append(html);
          arr.eq(1).on("focusout",function(){
            var it=list.find("input");
            var n=it.index($(this))*1;
            var v1=it.eq(n-1).val();
            var v2=it.eq(n).val();

            function huanyuan(it,n){
              if (it.eq(n+2).val()>1) {
                it.eq(n).val(it.eq(n+2).val()-1)
              }else{
                it.eq(n).val("")
              };
            }

            if (isNaN(v2)) {
              alert(einfo)
              huanyuan(it,n)
            }else if(v1*1>v2*1){
              alert(einfo)
              huanyuan(it,n)
            }else{
              it.eq(n+2).val(v2*1+1);
              for (var i = n+3; i < it.size(); i++) {
                it.eq(i).val("")
              };
            }
            
          })

        };  
  })


  




  //首页 添加便签
  $("#index-bwlOpen-tabs input").on('ifClicked', function(event){ //ifCreated 事件应该在插件初始化之前绑定 
        var n=$(this).val();
        var con=$("#index-bwlOpen-tabscon");
        con.addClass("hide");
        con.eq(n).removeClass("hide");
    });

  $("#J_bianqianlookover").click(function(){
    var span=$(this).find('span');
    var i=$(this).find('i');
    var ul=$("#J_bianqianlookovercon ul")

    if (span.text()=="查看已完成") {

      span.text('查看未完成');
      i.addClass("fa-toggle-off");
      i.removeClass("fa-toggle-on");
      ul.eq(0).addClass("hide");
      ul.eq(1).removeClass("hide");
    }else {
      span.text('查看已完成');
      i.addClass("fa-toggle-on");
      i.removeClass("fa-toggle-off");
      ul.eq(1).addClass("hide");
      ul.eq(0).removeClass("hide");
    };
  })

  


  //班组课 添加编辑班级
  $("#jwjx-classOpen-tabs input").on('ifClicked', function(event){ //ifCreated 事件应该在插件初始化之前绑定 
        var n=$(this).val();
        var con=$("#jwjx-classOpen-tabscon .tabs-con");
        con.addClass("hide");
        con.eq(n).removeClass("hide");
    });

  $("#jwjx-editclassOpen-tabs input").on('ifClicked', function(event){ //ifCreated 事件应该在插件初始化之前绑定 
        var n=$(this).val();
        var con=$("#jwjx-editclassOpen-tabscon .tabs-con");
        con.addClass("hide");
        con.eq(n).removeClass("hide");
    });

  //班组课 添加编辑班级 添加校区 全选 
  $('#checkall').on('ifClicked', function(event){
      $('#jwjx-addschools input').iCheck('check');
  });
  $('#checkall').on('ifUnchecked', function(event){
    $('#jwjx-addschools input').iCheck('uncheck');
  });

  $("#J_zuzhijiagou .zzli-default .zz-title").on( "click",function(){
    $(this).parent().toggleClass("on");
    $(this).parent().next("ul").fadeToggle(100);
  })

  $(".J_rygl_jiaoshitelreg").focusout(function() {
    $("#rygl-jiaoshitelregconModal").modal("show");
    $("#rygl-addteacherModal").modal("hide");
  });

  $(".J_rygl_editjiaoshitelreg").focusout(function() {
    $("#rygl-editjiaoshitelregconModal").modal("show");
    $("#rygl-editteacherModal").modal("hide");
  });

  $(".J_rygl_xqrytelreg").focusout(function() {
    $("#rygl-xqrytelregconModal").modal("show");
    $("#rygl-addSTeacherModal").modal("hide");
  });

  $(".J_rygl_editxqrytelreg").focusout(function() {
    $("#rygl-editxqrytelregconModal").modal("show");
    $("#rygl-editSTeacherModal").modal("hide");
  });



  //信息中心  updown
  $('.J_xxzx_downup').click(function(){
    var it=$(this);
    if (it.hasClass("wellipsis")) {
        it.removeClass("wellipsis")
    }else{
        it.addClass("wellipsis")
    };
  })

  //教务教学 班级管理
  $('.bjgl-list ul').delegate("li","click",function(){
    var it=$(this);
    var li=$('.bjgl-list ul li');
    li.removeClass("on");
    it.addClass("on");
  })

  
// 班级通道

    banjitongdao();
    xueyuanguanli();

    function banjitongdao(){
        var $btn = $(".kjtd-b #js-btn");
        var $btn1 = $(".kjtd-b #js-btn1");
        var $bianji = $(".kjtd-b #js-bianji");
        var $baocun = $(".kjtd-b #js-baocun");
        var $table = $(".kjtd-b #js-table");
        var $banji = $(".kjtd-b #js-tianjiabanji");
        var $tiaoke = $(".kjtd1 #js-table");
        var $checkbox = $("#tjxy-table").find('input');
        var $jstishi = $(".kjtd1 #js-checkds");
        var numr = 0;
        var keshi =0;

      
       $banji.click(function(){ 
           $baocun.hide();
           $bianji.show()
        })
        $btn.click(function(){ 
           $baocun.hide();
           $bianji.show()
        })
        $btn1.click(function(){ 
           $baocun.show();
           $bianji.hide()
        })

    //checkbox选中
       $checkbox.on('ifClicked', function (event) {
              if ($(this).is(':checked')) {
                numr-- ;   
              } else {
                numr++;
              }
               $jstishi.html(numr);
       });
    //checkbox 选中over   



        $table.click(function(ev){
                var ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                if(target.nodeName.toLocaleLowerCase() == 'a'){
                        var $elem = $(ev.target).parents('tr').children();
                    switch(target.innerHTML){
                        case '删除' :
                            $(ev.target).parents('tr').remove();
                            //ajax请求
                            break;
                        case '复课' :
                            $(target).html('停课');
                            $elem.eq(1).html('<span class="green">正常</span>');
                             $elem.eq(2).children().eq(1).remove();
                             $elem.eq(2).append('<sapn class="c-999" data-toggle="modal" href="###" >删除</sapn>');
                            break;
                        case '停课' :
                            $(target).html('复课');
                            $elem.eq(1).html('<span class="red">停课</span>')
                            $elem.eq(2).children().eq(1).remove();
                             $elem.eq(2).append('<a class="green" data-toggle="modal" href="###" >删除</a>');
                            break;
                    }
                }       
        })

        $('#tjxy-addKechengModal input').iCheck({// 复选框样式
            checkboxClass: 'icheckbox_square-green',
        })

      //调课弹窗
        $tiaoke.click(function(ev){
            var ev = ev || window.event;
            var target = ev.target || ev.srcElement;

            if(target.nodeName.toLocaleLowerCase() == 'a'){
                    var $elem = $(ev.target).parents('tr').children();
                    var val ="";
                    var overVal="";
                switch(target.innerHTML){
                    case '保存' :
                        val =$elem.eq(1).find('input').val();
                        overVal =$elem.eq(2).find('button').attr('title');
                       
                        $elem.eq(1).html(val);
                        $elem.eq(2).html(overVal);
                        $(target).html('修改');
                        break;
                    case '删除' :
                        $(ev.target).parents('tr').remove();
                        //ajax请求
                        break;
                    case '修改' :
                        $(target).html('保存');
                        val = $elem.eq(1).html().trim();
                        overVal = $elem.eq(2).html().trim();
                        
                        $elem.eq(1).html('<input class="laydate-icon assessover-data17 center" type="text" value="'+val+'" placeholder="选择时间" style="width:100%">')
                         $elem.eq(2).html('<select  class="selectpicker" title="'+overVal+'"><option>请选择</option><option>1</option><option>1.5</option><option>2</option><option>2.5</option><option>3</option><option>3.5</option><option>4</option></select>')
                        datetimepickerRes('.assessover-data17') //这个加载出来  还得调方法
                         $('.selectpicker').selectpicker();// 插入后重载样式 否则样式丢失

                        break;
        
                }
            }                   
        })
    
      //时间插件的初始化
        function datetimepickerRes(dateres){
          $(dateres).datetimepicker({
                      datepicker:true,
                      minHours:6,
                      maxHours:23,
                      format:'Y-m-d H:i',
                      step:10
                    });
        }

    };

        
    function xueyuanguanli(){
            var $btn = $(".kjtd-x #js-btn");
            var $btn1 = $(".kjtd-x #js-btn1");
            var $bianji = $(".kjtd-x #js-bianji");
            var $baocun = $(".kjtd-x #js-baocun");
            var $add = $(".kjtd-x #js-add");
            var $table = $(".kjtd-x #js-table");
            var $addxueyuan = $(".kjtd-x #js-addxueyuan");
            

           $addxueyuan.click(function(){ 
               $baocun.hide();
               $bianji.show()
            })
           
            $btn.click(function(){ 
               $baocun.hide();
               $bianji.show()
            })
            $btn1.click(function(){ 
               $baocun.show();
               $bianji.hide()
            })

           
            $add.click(function(){
                $table.prepend('<tr><td width="15%"><select class="selectpicker"><option>小学语文</option><option>小学数学</option><option>小学英语</option><option>小学物理</option></select></td><td width="15%">/</td><td width="13%"><select class="selectpicker"><option>李老师</option><option>张老师</option></select> </td> <td  width="10%">一对一</td><td  width="10%"><span class="green">正常</span></td><td  width="40%">                                        <a class="green-a inline-block" data-toggle="modal" href="" >停课</a><a class="green-a" data-toggle="modal" href="" >保存</a><a class="green" data-toggle="modal" href="" >删除</a></td></tr>');
                $('.selectpicker').selectpicker();// 插入后重载样式 否则样式丢失
            })


            $table.click(function(ev){
                var ev = ev || window.event;
                var target = ev.target || ev.srcElement;

                if(target.nodeName.toLocaleLowerCase() == 'a'){
                        var $elem = $(ev.target).parents('tr').children();
                        var val ="";

                    switch(target.innerHTML){
                        case '保存' :
                            val =$elem.eq(0).find('select').val();
                            $elem.eq(0).html(val);
                            $elem.eq(2).html($elem.eq(2).find('select').val());
                            $(target).html('更换教师');
                            break;
                        case '删除' :
                            $(ev.target).parents('tr').remove();
                            //ajax请求
                            break;
                        case '更换教师' :
                            $(target).html('保存');
                            val = $elem.eq(2).html();
                            $elem.eq(2).html('<select class="selectpicker"><option>'+val+'</option><option>张老师</option></select>');
                            $('.selectpicker').selectpicker();// 插入后重载样式否则样式丢失
                            break;

                        case '复课' :
                            $(target).html('停课');
                            $elem.eq(4).html('<span class="green">正常</span>')
                             $elem.eq(5).children().eq(2).remove();
                             $elem.eq(5).append('<sapn class="c-999" data-toggle="modal" href="" >删除</sapn>');
                            break;
                        case '停课' :
                            $(target).html('复课');
                            $elem.eq(4).html('<span class="red">停课</span>');
                            $elem.eq(5).children().eq(2).remove();
                             $elem.eq(5).append('<a class="green" data-toggle="modal" href="" >删除</a>');

                            break;
                    }
                } 
                
            })
    }



})(jQuery);

function delectit(id){
      $("#"+id).remove();
}

function delectxinzi(id){
      var it=$("#"+id);
      var v1=it.prev().find("input").eq(1).val();      
      var v2=it.next().find("input").eq(0).val(v1*1+1);
      it.remove();
}

