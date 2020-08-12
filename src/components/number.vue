<template>
    <div id="myChart" :style="{width: '500px', height: '570px',position:'relative',top:'15px'}"></div>
</template>

<script>
// 数据接口
let time_list = ['5s', '10s', '15s', '20s', '25s', '30s', '35s']
let vehicle = [2,7,5,9,6,4,11,4]
let car = [1,2,5,3,2,3,2]
let motor = [1,5,4,3,2,8,2]

export default {
    name: 'hello',
    data () {
    return {
        msg: '路口机动车数量',
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
                text: '路口机动车数量',
                // subtext: '纯属虚构'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['机动车', '汽车','摩托车']
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: {readOnly: false},
                    //magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                // 数据接口
                data: time_list
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            series: [
                {
                    name: '机动车',
                    type: 'line',
                    // 数据接口
                    data: vehicle,
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'},
                            [{
                                symbol: 'none',
                                x: '90%',
                                yAxis: 'max'
                            }, {
                                symbol: 'circle',
                                label: {
                                    position: 'start',
                                    formatter: '最大值'
                                },
                                type: 'max',
                                name: '最高点'
                            }]
                        ]
                    }
                },
                {
                    name: '汽车',
                    type: 'line',
                    // 数据接口
                    data: car,
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name: '摩托车',
                    type: 'line',
                    // 数据接口
                    data: motor,
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                },
            ]
        });
    }}
}
</script>