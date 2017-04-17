/*
* @Author: user
* @Date:   2017-04-17 17:04:04
*/

(function(){
  'use strict';
   
    !function(){
            // laydate({
            //   elem: '#assessover-data8',
            //   format: 'YYYY-MM-DD', //日期格式
            //   istime: true,
            //   istoday: false,
            // });//绑定元素
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
      }();
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
                         $elem.eq(2).html('<select  class="selectpicker" title="'+overVal+'"><option>1</option><option>1.5</option><option>2</option><option>2.5</option><option>3</option><option>3.5</option><option>4</option></select>');
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


})(jQuery)