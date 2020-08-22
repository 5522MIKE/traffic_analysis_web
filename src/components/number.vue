<template>
    <div id="myChart" :style="{width: '500px', height: '570px',position:'relative',top:'15px'}"></div>
</template>

<script>
// 数据接口
import {getTrafficFlow} from '../api/api.js'
let time_list = ['5s', '10s', '15s', '20s', '25s', '30s', '35s']

export default {
    name: 'hello',
    data () {
    return {
        vehicle : [2,7,5,9,6,4,11],
        car : [],
        motor : [1,5,4,3,2,8,2],
        msg: '路口机动车数量',
    }
    },
    created: function () {
            this.loaddata();
    },
    // mounted(){
    //     this.drawLine();
    // },
    methods: {
        loaddata(){
            getTrafficFlow().then(response =>{
                var dataLength = Object.keys(response.data)
                for(var i=0;i<dataLength.length;i++){
                    this.car.push(Object.entries(response.data[i])[0][1])
                    // console.log(Object.entries(response.data[i])[0][1])
                }
                this.drawLine()
            })
        },
        drawLine(){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                title: {
                    text: '路口交通饱和度',
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
                        data: this.vehicle,
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
                        data: this.car,
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
                        data: this.motor,
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