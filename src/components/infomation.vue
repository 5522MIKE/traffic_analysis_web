<template>
    <div>
        <br><br>
        <Input  search enter-button v-model="value2" placeholder="搜索违规信息"  @keyup.enter.native="search"/>
        <!-- <br><br>
        <Button type="primary" @click="add">添加违规行为</Button> -->
        <br><br>
        <Table border :columns="columns1" :data="data1"></Table>
    </div>    
</template>
<script>
    const data1  = [];
    for(let i=0; i<10 ; ++i){
        data1.push({
            id:  i,
            plate: '粤B88888',
            upload_time: '5201-3-14',
            illegal_time: '20',
            illegal: '车太贵',
        })
    }
    export default {
        methods:{
                search(){
                    alert(this.value2+"搜索！")
                },
                // add(){
                //     alert("添加")
                // },
                delete(index){
                    alert("delete:"+index)
                    this.data1.splice(index,1)
                },
                show(){
                    alert("show")
                }
        },
        data () {
            return {
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
                        key: 'picture',
                        render: (h,params) => {
                            return(
                                <div>
                                    <i-button type="primary"   size="small" onClick={()=>{this.show(params.index)}}>显示图片</i-button>
                                </div>
                            );
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
