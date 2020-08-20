<template>
        <Layout :style="{margin:'10px',width:'1300px',height:'680px'}">
            <Input  search enter-button v-model="searchData" placeholder="搜索违规信息"  @keyup.enter.native="search"/>
            <br>
            <div>
                <date-picker type="date" clearable="true" placeholder="请选择上传时间" @on-change="getDate"></date-picker>
                <!-- 测试参数传递用，版本投入使用前可删除（也可以保留） -->
                <Button type="info" @click="getData(searchData)">test</Button>
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
                getData(mydata){
                    alert(mydata)
                }
        },
        data () {
            return {
                date:'',
                searchData:'',
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