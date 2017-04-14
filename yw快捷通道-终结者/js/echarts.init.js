var index_chart_xianjinliu = echarts.init(document.getElementById('chart_xianjinliu'));
index_chart_xianjinliu.setOption({
    color:['#999','#5585d7','#8d6cd1','#f04343','#393'],
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        data:['签单数','签约金额','签约实到金额','退费金额','现金流']
    },
    grid: {
        left: '2%',
        right: '3%',
        bottom: '2%',
        containLabel: true,
        top:70
    },
    toolbox: {
        feature: {            
            magicType : {show: true, type: ['line', 'bar',  'tiled']},
            restore : {show: true},
            saveAsImage : {show: true},
        },
        iconStyle:{
            emphasis:{
                borderColor:'green'
            }
        },
        color:'green'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,       	
       	splitLine:{
       		show:false
       	},       	
        name:'日期',
        data: ['2016-6-27','2016-6-28','2016-6-29','2016-6-30','2016-6-31','2016-7-1','2016-7-2']
    },
    yAxis: [   	
        { 
	        type: 'value',
	        name:'金额（元）',
	        splitLine : {lineStyle : {type:'dashed'}}
        },
        {
	        type: 'value',
	        name:'签单数（单）',
	        splitLine : {lineStyle : {type:'dashed'}},
        }
    ],
    series: [

        {
            name:'签单数',type:'line', yAxisIndex:1,
            data:[3, 1,2,3,1,2,3]
        },
        {
            name:'签约金额',type:'line',
            data:[30000, 15000, 30000, 60000, 23000, 18000,30000]
        },
        {
            name:'签约实到金额',type:'line',
            data:[30000, 10000, 25000, 46500, 18000,30000, 10000]
        },
        {
            name:'退费金额',type:'line',
            data:[100, 6000, 2000, 8000, 10000, 3000,100]
        },
        {
            name:'现金流',type:'line',
            data:[15000, 30000, 50000, 30000, 15000, 18000, 30000]
        }
    ]
})


var index_chart_kehao = echarts.init(document.getElementById('chart_kehao'));
index_chart_kehao.setOption({

    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['课耗总金额','实际耗课金额','课耗优惠券金额']
    },
    grid: {
        left: '2%',
        right: '3%',
        bottom: '2%',
        containLabel: true
    },
    toolbox: {
        feature: {            
            magicType : {show: true, type: ['line', 'bar', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        },
        iconStyle:{
            emphasis:{
                borderColor:'green'
            }
        },
        color:'green'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,       	
       	splitLine:{
       		show:false
       	},       	
        data: ['2016-6-27','2016-6-28','2016-6-29','2016-6-30','2016-6-31','2016-7-1','2016-7-2']
    },
    color:['#393 ','#ea7125','#666'],
    yAxis: [   	
        { 
	        type: 'value',
	        name:'金额（元）',
	        splitLine : {lineStyle : {type:'dashed'}}
	        
        }
    ],
    series: [
        {
            name:'课耗总金额',type:'line',
            data:[ 30000, 15000, 30000, 60000, 23000, 18000,38000]
        },
        {
            name:'实际耗课金额',type:'line',
            data:[30000, 10000, 25000, 46500, 20000, 18000,25000]
        },
        {
            name:'课耗优惠券金额',type:'line',
            data:[100, 6000, 2000, 8000, 10000, 3000, 12000]
        }
    ]
})


var index_chart_student= echarts.init(document.getElementById('chart_student'));
index_chart_student.setOption({
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['新增学员数','结课学员数','报名班级数']
    },
    grid: {
        left: '2%',
        right: '3%',
        bottom: '2%',
        containLabel: true,
        top:70
    },
    toolbox: {
        feature: {            
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            dataView:{show:true,readOnly:false,color:'black'},
            restore : {show: true},
            saveAsImage : {
                show: true,
            }
        },
        iconStyle:{
            emphasis:{
                borderColor:'green'
            }
        },
        color:'green'
        
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,       	
       	splitLine:{
       		show:false
       	},       	
        data: ['2016-6-27','2016-6-28','2016-6-29','2016-6-30','2016-6-31','2016-7-1','2016-7-2']
    },
    
    color:['#393 ','#ea7125','#ccc'],
    yAxis: [   	
        { 
	        type: 'value',
	        name:'人数（人）',
	        splitLine : {lineStyle : {type:'dashed'}}
	        
        },
        {
	        type: 'value',
	        name:'报名班级数（个）',
	        splitLine : {lineStyle : {type:'dashed'}},
        }
    ],
    series: [

        {
            name:'新增学员数',type:'line', 
            data:[160, 250, 170, 100, 80, 180]
        },
        {
            name:'结课学员数',type:'line',
            data:[100, 120, 80, 70, 60, 130]
        }, 
        {
            name:'报名班级数',type:'line',yAxisIndex:1,
            data:[10, 30, 20, 50, 30, 20]
        },      
    ]
})


var index_chart_ziyuan = echarts.init(document.getElementById('chart_ziyuan'));
index_chart_ziyuan.setOption({
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['较差意向','一般意向','强烈意向']
    },
    grid: {
        left: '2%',
        right: '3%',
        bottom: '2%',
        containLabel: true
    },
    toolbox: {
        feature: { 
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        },
        iconStyle:{
            emphasis:{
                borderColor:'green'
            }
        },
        color:'green'
    },
    xAxis: {
        type: 'category',
      	
       	splitLine:{
       		show:false
       	},       	
        data: ['2016-6-27','2016-6-28','2016-6-29','2016-6-30','2016-6-31','2016-7-1','2016-7-2']
    },
    
    color:['#393','#66cc66','#999',],
    yAxis: [   	
        { 
	        type: 'value',
	        name:'人数（人）',
	        splitLine : {lineStyle : {type:'dashed'}}
	        
        }
    ],
    series: [
        {
            name:'强烈意向',type:'bar',stack: '意向',barWidth:"50",
            data:[ 300, 200, 330, 170, 160, 100, 130]
        },
        {
            name:'一般意向',type:'bar',stack: '意向',barWidth:50,
            data:[200, 150, 150, 100, 150, 70, 80]
        },
        {
            name:'较差意向',type:'bar',stack: '意向',barWidth:50,
            data:[100,50, 100, 20, 30, 50, 20]
        }
    ]
})

$(function($) {
    $(window).resize(function(){
      setTimeout(function(){
            index_chart_xianjinliu.resize();
            index_chart_kehao.resize();
            index_chart_student.resize();
            index_chart_ziyuan.resize();
            
        }, 300)
    });
});
