<template>
        <Layout :style="{margin:'10px',width:'1300px',height:'680px'}">
            <br>
            <div>
                <date-picker type="date" clearable="true" placeholder="请选择上传时间" @on-change="getDate" :style="{float:'left',width:'300px'}"></date-picker>
                <i-select v-model="illegalMassage" clearable placeholder="请选择违规行为" @on-change="getIllegal" :style="{width:'300px'}">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </i-select>
                <Input  search enter-button v-model="plate" placeholder="搜索违规车牌"  @keyup.enter.native="search" :style="{float:'left',width:'300px'}"/>
                <Button type="info" @click="clear">清空</Button>
            </div>
            <Table border :columns="columns1" :data="data1"></Table>
        </Layout>   
</template>
<script>
    const data1  = [];
    for(let i=0; i<2 ; ++i){
        data1.push({
            id:  i,
            plate: '粤B88888',
            upload_time: '5201-3-14',
            illegal_time: '20',
            illegal: '车太贵',
            img: 'https://dev-file.iviewui.com/YSlcnG8cnT6zMRGskMn4F5E0sghiFB9w/large'
        })
    }
    export default {
        methods:{
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
                },
                // ! 测试参数传递的函数，正式使用前删除
                getData(mydata){
                    alert(mydata)
                },
                getIllegal(){
                    alert(this.illegalMassage)
                },
                clear(){
                    this.plate = ''
                }
        },
        data () {
            return {
                date:'', // *  日期数据
                plate:'',  // * 搜索输入框数据
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
                data1: data1,
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                illegalMassage: ''
            }
        }
    }
</script>