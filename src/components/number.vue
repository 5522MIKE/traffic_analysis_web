<template>
    <div id="myChart" :style="{width: '500px', height: '570px',position:'relative',top:'15px'}"></div>
</template>

<script>
// 数据接口
import GLOBAL from '../api/global.js'
import {getTrafficFlow} from '../api/api.js'
let time_list = ['5s', '10s', '15s', '20s', '25s', '30s', '35s']

export default {
    name: 'hello',
    data () {
    return {
        temp:'',
        people : [],
        car : [],
        motor : [],
        msg: '路口机动车数量',
    }
    },
    // created: function () {
    //         this.loaddata();
    // },
    // mounted(){
    //     this.drawLine();
    // },
    mounted() {
        this.$nextTick(() => {
            setInterval(this.idJudge, 500);
        })
    },
    methods: {
        idJudge(){
            if(this.temp!=GLOBAL.videoId){
                this.loaddata()
                this.temp = GLOBAL.videoId
                console.log("videoId"+GLOBAL.videoId)
            }else{
                this.temp = GLOBAL.videoId
            }
        },
        loaddata(){
            getTrafficFlow(GLOBAL.videoId).then(response =>{
                var dataLength = Object.keys(response.data)
                for(var i=0;i<dataLength.length;i++){
                    this.car.push(Object.entries(response.data[i])[0][1])
                    // console.log(Object.entries(response.data[i])[0][1])
                }
                for(var i=0;i<dataLength.length;i++){
                    this.motor.push(Object.entries(response.data[i])[1][1])
                    // console.log(Object.entries(response.data[i])[1][1])
                }
                for(var i=0;i<dataLength.length;i++){
                    this.people.push(Object.entries(response.data[i])[2][1])
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
                    data: ['行人', '汽车','摩托车']
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
                        name: '行人',
                        type: 'line',
                        // 数据接口
                        data: this.people,
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