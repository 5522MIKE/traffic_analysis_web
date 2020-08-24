<template>
    <div class="layout">
        <Layout>
            <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
                <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']" @on-select="getUrl">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            页面
                        </template>
                        <MenuItem name="index">首页</MenuItem>
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
            <div class="div-bar">
                <Layout>
                    <div>
                        <Header :style="{background: '#f8f8f9', height: '40px'}">
                            <p style=" font-size:24px; font-weight:bold; position: relative; left: 500px;" >
                                智 能 交 通 场 景 分 析
                            </p>
                        </Header>
                        <div>
                            <Layout>
                                <Content :style="{margin: '20px 20px 0'}">
                                    <VideoPlay/>
                                </Content>
                                <Sider :style="{margin: '20px 20px 0', background: '#dcdee2',minHeith: '580px', minWidth: '500px' , background: '#e8eaec'}">
                                        <p v-if="vIF == 0"><backGround/></p>
                                        <p v-else-if='vIf == 2'><vehicle/></p>
                                        <p v-else><number/></p>
                                </Sider>
                            </Layout>
                            <Footer>
                                <div>
                                    <!-- <Input   v-model="value1" clearable placeholder="请输入当前路段限速(km/h)" style="width:1075px; heigth:10px;" @keyup.enter.native="limit"/>  -->
                                    <Button  icon="ios-download-outline" type="primary"  @click="download">违规数据下载</Button>              
                                </div>           
                            </Footer>
                        </div>
                        <div><information/></div> 
                    </div>             
                </Layout>
            </div>
        </Layout>
    </div>
</template>
<script>
// import {postSpeedLimit} from '../api/api.js'
import number from '@/components/number'
import vehicle from '@/components/vehicle'
import VideoPlay from '@/components/VideoPlay'
import information from '@/components/infomation'
import backGround from '@/components/backGround'

/* eslint-disable */
export default {
    components: {
        number,
        vehicle,
        VideoPlay,
        information,
        backGround
    },
    data() {
        return {
            // value1:'',
            vIf:0,
        };
    },
    methods: {
        getUrl(name){
            this.showhone = false;
            console.log(name);
            switch(name){
                case "data1":
                    this.vIf=2;
                    break;
                case "data2":
                    this.vIf=3;
                    break;
                case "info":
                    this.page=0;
                    break;
                case "index":
                    this.page=1;
                    break;
            }
        },
        download(){
            alert("下载！")
        },
        // limit(){
        //     postSpeedLimit(this.value1).then(response => {
        //         console.log(response)
        //     })
        //     alert(this.value1)
        // }
    }
};
</script>

<style scoped>
    .layout{
        border: 0px solid #dcdee2;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .div-bar{
        margin-left: 200px;
    }
</style>
