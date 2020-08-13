<template>
    <div class="layout">
        <Layout>
            <Sider>
                <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']" @on-select="getUrl">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            首页
                        </template>
                        <MenuItem name="1-1">首页</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            数据
                        </template>
                        <MenuItem name="data1">机动车违规行为统计</MenuItem>
                        <MenuItem name="data2">机动车数量统计</MenuItem>
                    </Submenu>
                </Menu>
            </Sider>

            <Layout>
                <Layout>
                    <Content :style="{margin: '20px 20px 0', background: '#dcdee2', maxWidth: '1024px'}">
                        <!-- <video
                            id="myVideo"
                            class="video-js"
                            >
                            <source
                                src="../assets/1.mp4"
                                type="video/mp4"
                            >
                        </video> -->
                        <VideoPlay/>
                    </Content>
                    <Sider :style="{margin: '20px 20px 0', background: '#dcdee2',minHeith: '580px', minWidth: '500px' , background: '#e8eaec'}">
                            <p v-if='vIf == 1'><vehicle/></p>
                            <p v-else><number/></p>
                    </Sider>
                </Layout>
                <Footer>
                    <div>
                        <Input   v-model="value1"  placeholder="请输入当前路段限速(km/h)" style="width:1075px; heigth:10px;" @keyup.enter.native="limit"/> 
                        <Button  icon="ios-download-outline" type="primary"  @click="download">违规数据下载</Button>              
                        <br><br>
                        <Input  search enter-button v-model="value2" placeholder="搜索违规信息"  @keyup.enter.native="search"/>
                        <br><br>
                        <Table border :columns="columns1" :data="data1"></Table>
                    </div>           
                </Footer>
            </Layout>
        </Layout>
    </div>
</template>
<script>
import number from '@/components/number'
import vehicle from '@/components/vehicle'
import VideoPlay from '@/components/VideoPlay'
/* eslint-disable */
export default {
    components: {
        number,
        vehicle,
        VideoPlay
    },
    data() {
        return {
            value1:'',
            value2:'',
            vIf:1,
            columns1: [
                        {
                            title: '时间',
                            key: 'time'
                        },
                        {
                            title: '车牌号',
                            key: 'id'
                        },
                        {
                            title: '违规行为',
                            key: 'acident'
                        }
                    ],
                    data1: [
                        {
                            time: '5s',
                            id: '粤B88888',
                            acident: '车太贵了',
                            date: '2016-10-03'
                        },
                        {
                            time: '5s',
                            id: '粤B88888',
                            acident: '车太贵了',
                            date: '2016-10-03'
                        },
                        {
                            time: '5s',
                            id: '粤B88888',
                            acident: '车太贵了',
                            date: '2016-10-03'
                        },
                        {
                            time: '5s',
                            id: '粤B88888',
                            acident: '车太贵了',
                            date: '2016-10-03'
                        },
                        {
                            time: '5s',
                            id: '粤B88888',
                            acident: '车太贵了',
                            date: '2016-10-03'
                        },
                        {
                            time: '5s',
                            id: '粤B88888',
                            acident: '车太贵了',
                            date: '2016-10-03'
                        },
                        {
                            time: '5s',
                            id: '粤B88888',
                            acident: '车太贵了',
                            date: '2016-10-03'
                        },
                        {
                            time: '5s',
                            id: '粤B88888',
                            acident: '车太贵了',
                            date: '2016-10-03'
                        }
                    ],
        };
    },
    methods: {
        getUrl(name){
            this.showhone = false;
            console.log(name);
            switch(name){
                case "data1":
                    this.vIf=1;
                    break;
                case "data2":
                    this.vIf=0;
                    break;
            }
        },
        download(){
            alert("下载！")
        },
        search(){
            alert(this.value2+"搜索！")
        },
        limit(){
            alert(this.value1)
        }
    }
};
</script>

<style scoped>
    .layout{
        border: 1px solid #dcdee2;
        background: #dcdee2;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #dcdee2;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
</style>
