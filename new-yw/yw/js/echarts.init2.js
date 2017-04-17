// 今日学员概况
var index_chart_xuyuan= echarts.init(document.getElementById('index_chart_xuyuan'));
index_chart_xuyuan.setOption({
    color:['#9bbb59'],

    //鼠标放上效果
    tooltip:{
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid:{
        top:'15%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
        shadowColor: '#f90',
        shadowBlur: 10
    },
    xAxis:[
        {
            type : 'category',
            data : ['今日新增学员', '今日退结学员', '今日续费学员', '今日新增资源'],
            axisTick: {
                alignWithLabel: true
            },
            splitLine:{
                show:false
            }
        }
    ],
    yAxis:[
        {
            type : 'value',
            name:'人数（个）',
            splitLine:{
                lineStyle:{
                    type:'dashed'
                }
            }
        }
    ],
    series:[
        {
            name:'人数',
            type:'bar',
            barWidth:50,
            data:[12,5,20,30]
        }
    ]
});

// 今日金额概况
var index_chart_jifei= echarts.init(document.getElementById('index_chart_jifei'));
index_chart_jifei.setOption({
    color:['#f2b806'],
    tooltip:{
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid:{
        top:'15%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:[
        {
            type : 'category',
            data : ['今日缴费金额', '今日退费金额', '今日课耗金额'],
            axisTick: {
                alignWithLabel: true
            },
            splitLine:{
                show:false
            }
        }
    ],
    yAxis:[
        {
            type : 'value',
            name:'金额（¥）',
            splitLine:{
                lineStyle:{
                    type:'dashed'
                }
            }
        }
    ],
    series:[
        {
            name:'金额',
            type:'bar',
            barWidth:50,
            data:[32000,5200,13000]
        }
    ]
});


//  在职人员概况
var index_chart_zhiyuan= echarts.init(document.getElementById('index_chart_zhiyuan'));
index_chart_zhiyuan.setOption({
    //color:['#4f81bd','#c0504d','#9bbb59','#8064a2'],
    color:['#999','#c0504d','#9bbb59','#4f81bd'],
    tooltip:{
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['部门总人数','咨询部','教务部','教师部']
    },
    toolbox: {
        top:'2%',
        right:'2%',
        feature: {            
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true,title:'刷新'},
            saveAsImage : {show: true},
        },
        iconStyle:{
            emphasis:{
                borderColor:'green'
            }
        },
        color:'green'
    },
    grid:{
        top:'15%',
        left: '1.5%',
        right: '2%',
        bottom: '15%',
        containLabel: true
    },
    xAxis:[
        {
            type : 'category',
            data: ['黄庄校区','望京校区','东城校区','公主坟校区','良乡校区','五道口校区','广渠门校区','理想校区','上地校区','金源校区','中鼎校区','人事部','行政部'],
            axisTick: {
                alignWithLabel: true
            },
            splitLine:{
                show:false
            }
        }
    ],
    yAxis:[
        {
            type : 'value',
            name:'人数（个）',
            splitLine:{
                lineStyle:{
                    type:'dashed'
                }
            }
        }
    ],
    dataZoom: [
            {
                show: true,
                bottom:0,
                start: 0,
                end: 100,
                height:20,
                handleStyle:{
                    color:'#393',
                },
                //backgroundColor:'#f5f5f5',
                left:'30%',
                right:'30%'   
            }  
        ],
    series:[
        {
            name:'部门总人数',type:'line',
            data:[28,21,15,25,20,32,18,24,33,10,22,6,4]
        },
        {
            name:'咨询部',type:'line',
            data:[5,3,2,3,2,4,1,3,3,1,2,0,0]
        },
        {
            name:'教务部',type:'line',
            data:[3,2,1,2,3,3,1,2,2,1,3,0,0]
        },
        {
            name:'教师部',type:'line',
            data:[20,16,12,18,15,25,16,19,28,8,17,0,0]
        }   
    ]
});

//  在职人员概况
var index_chart_zhiyuan= echarts.init(document.getElementById('index_chart_zhiyuanliudong'));
index_chart_zhiyuan.setOption({
    color:['#4f81bd','#c0504d','#9bbb59','#8064a2'],
    tooltip:{
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['入职人员','离职人员']
    },
    toolbox: {
        top:'2%',
        right:'2%',
        feature: {            
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true,title:'刷新'},
            saveAsImage : {show: true},
        },
        iconStyle:{
            emphasis:{
                borderColor:'green'
            }
        },
        color:'green'
    },
    grid:{
        top:'15%',
        left: '1.5%',
        right: '2%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:[
        {
            type : 'category',
            data: ['3月','4月','5月','6月','7月','8月'],
            axisTick: {
                alignWithLabel: true
            },
            splitLine:{
                show:false
            }
        }
    ],
    yAxis:[
        {
            type : 'value',
            name:'人数（个）',
            splitLine:{
                lineStyle:{
                    type:'dashed'
                }
            }
        }
    ],
    
    series:[
        {
            name:'入职人员',type:'bar',barWidth:50,
            data:[15,21,5,3,7,3]
        },
        {
            name:'离职人员',type:'bar',barWidth:50,
            data:[5,10,0,1,3,2]
        }
    ]
});



//  本月财务概况
var index_chart_benyuecaiwu= echarts.init(document.getElementById('index_chart_benyuecaiwu'));
index_chart_benyuecaiwu.setOption({
    //color:['#4f81bd','#c0504d','#9bbb59','#8064a2'],
    color:['#999','#c0504d','#9bbb59','#4f81bd'],
    tooltip:{
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['现金收','现金退','刷卡收','刷卡退','支票收','支票退','汇款收','汇款退','合计']
    },
    toolbox: {
        top:'2%',
        right:'2%',
        feature: {            
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true,title:'刷新'},
            saveAsImage : {show: true},
        },
        iconStyle:{
            emphasis:{
                borderColor:'green'
            }
        },
        color:'green'
    },
    grid:{
        top:'15%',
        left: '1.5%',
        right: '2%',
        bottom: '15%',
        containLabel: true
    },
    xAxis:[
        {
            type : 'category',
            data: ['黄庄校区','望京校区','东城校区','公主坟校区','良乡校区','五道口校区','广渠门校区','理想校区','上地校区','金源校区','中鼎校区','人事部','行政部'],
            axisTick: {
                alignWithLabel: true
            },
            splitLine:{
                show:false
            }
        }
    ],
    yAxis:[
        {
            type : 'value',
            name:'人数（个）',
            splitLine:{
                lineStyle:{
                    type:'dashed'
                }
            }
        }
    ],
    dataZoom: [
            {
                show: true,
                bottom:0,
                start: 0,
                end: 100,
                height:20,
                handleStyle:{
                    color:'#393',
                },
                //backgroundColor:'#f5f5f5',
                left:'30%',
                right:'30%'   
            }  
        ],
    series:[
        {
            name:'现金收',type:'line',
            data:[28,21,15,25,20,32,18,24,33,10,22,6,4]
        },
        {
            name:'现金退',type:'line',
            data:[5,3,2,3,2,4,1,3,3,1,2,0,0]
        },
        {
            name:'刷卡收',type:'line',
            data:[3,2,1,2,3,3,1,2,2,1,3,0,0]
        },
        {
            name:'刷卡退',type:'line',
            data:[20,16,12,18,15,25,16,19,28,8,17,0,0]
        },
        {
            name:'支票收',type:'line',
            data:[28,21,15,25,20,32,18,24,33,10,22,6,4]
        },
        {
            name:'支票退',type:'line',
            data:[5,3,2,3,2,4,1,3,3,1,2,0,0]
        },
        {
            name:'汇款收',type:'line',
            data:[3,2,1,2,3,3,1,2,2,1,3,0,0]
        },
        {
            name:'汇款退',type:'line',
            data:[20,16,12,18,15,25,16,19,28,8,17,0,0]
        },
        {
            name:'合计',type:'line',
            data:[20,16,12,18,15,25,16,19,28,8,17,0,0]
        }
    ]
});



$(function($) {
    $(window).resize(function(){
      setTimeout(function(){
            index_chart_xuyuan.resize();
            index_chart_jifei.resize();
            index_chart_zhiyuan.resize();
            
        }, 300)
    });
});

