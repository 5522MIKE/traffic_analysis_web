<template>
    <div id="myChart" :style="{width: '500px', height: '600px',position:'relative',top:'15px'}"></div>
</template>

<script>
// 数据接口
let category = ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
let violation = [
                    {value: 335, name: '直接访问'},
                    {value: 310, name: '邮件营销'},
                    {value: 234, name: '联盟广告'},
                    {value: 135, name: '视频广告'},
                    {value: 1548, name: '搜索引擎'}
                ]
export default {
    name: 'hello',
    data () {
    return {
        msg: '机动车违规行为统计',
    }
    },
    mounted(){
    this.drawLine();
    },
    methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: {
                text: '机动车违规行为统计',
                //subtext: '纯属虚构',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'right',
                data: category
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: violation,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        });
    }}
}
</script>