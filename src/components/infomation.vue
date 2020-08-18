<template>
        <Layout :style="{margin:'10px',width:'1300px'}">
            <Input  search enter-button v-model="value2" placeholder="搜索违规信息"  @keyup.enter.native="search"/>
            <br>
            <div>
                <date-picker type="date" clearable="true" placeholder="请选择上传时间" @on-change="getDate"></date-picker>
            </div>
            <Table border :columns="columns1" :data="data1"></Table>
        </Layout>   
</template>
<script>
import {getIllegalData} from '../api/api.js'
    const data1  = [];
    export default {
        methods:{
            loaddata(){
                getIllegalData().then(response =>{
                    this.data1 = response.data
                })
            },
                search(){
                    alert(this.value2+" : ")
                },
                delete(index){
                    alert("delete:"+index)
                    this.data1.splice(index,1)
                },
                show(){
                    alert("show")
                },
                getDate(date){
                    this.date=date
                    alert(this.date)
                }
        },
        created: function () {
            this.loaddata()
        },
        data () {
            return {
                date:'2018-02-02',
                value2:'',
                columns1: [
                    {
                        title: 'ID',
                        key: 'id'
                    },
                    {
                        title: '车牌号',
                        key: 'plate'
                    },
                    {
                        title: '上传时间',
                        key: 'upload_time'
                    },
                    {
                        title: '违规时间',
                        key: 'illegal_time'
                    },
                    {
                        title: '违规行为',
                        key: 'illegal'
                    },
                    {
                        title: '违法图片',
                        key: 'img',
                        render: (h, params) => {
                            return h('viewer', [
                                h('img', {
                                    attrs: {
                                        src: params.row.img,
                                        style: 'width: 40px;height: 40px;'
                                    }
                                })
                            ])
                        },
                    },
                    {
                        title: '操作',
                        key: 'action',
                        render: (h,params) => {
                            return(
                                <div>
                                    <i-button type="error"   size="small" onClick={()=>{this.delete(params.index)}}>删除</i-button>
                                </div>
                            );
                        },
                    }
                ],
                data1: data1
            }
        }
    }
</script>