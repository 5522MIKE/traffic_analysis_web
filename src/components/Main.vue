<template>
    <div class="layout">
        <Layout>
            <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
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
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            信息查询
                        </template>
                        <MenuItem name="info">信息查询</MenuItem>
                    </Submenu>
                </Menu>
            </Sider>

            <Layout :style="{marginLeft: '200px'}">
                <Header :style="{background: '#f8f8f9', height: '50px'}">
                    <p style=" font-size:24px; font-weight:bold; position: relative; left: 500px;" >
                        智 能 交 通 场 景 分 析
                    </p>
                </Header>
                <Layout>
                    <Content :style="{margin: '20px 20px 0', background: '#dcdee2', maxWidth: '1024px'}">
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
            vIf:1,
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
                case "info":
                    break;
            }
        },
        download(){
            alert("下载！")
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
