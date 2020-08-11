<template>
    <div class="layout">
        <Sider  :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
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
                    <MenuItem name="data1">数据1</MenuItem>
                    <MenuItem name="data2">数据2</MenuItem>
                </Submenu>
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px',height: '100vh' }">
            <Layout>
            <Content :style="{margin: '20px 20px 0', background: '#dcdee2', maxWidth: '1024px'}">
                <video
                    id="myVideo"
                    class="video-js"
                    >
                    <source
                        src="../assets/1.mp4"
                        type="video/mp4"
                    >
                </video>
            </Content>
            <Sider :style="{margin: '20px 20px 0', background: '#dcdee2',minHeith: '580px', minWidth: '500px' , background: '#e8eaec'}">
                    <p v-if='vIf == 1'><dv-active-ring-chart :config="config" style="width:200px;height:200px" /></p>
                    <p v-else>Hello v-else</p>
            </Sider>
        </Layout>
        <Footer>
            <div>
                <Input   v-model="value1"  placeholder="请输入当前路段限速(km/h)" style="width:400px; heigth:10px;" @keyup.enter.native="limit"/> 
                <Button :size="buttonSize" icon="ios-download-outline" type="primary" style="position: relative; left:1024px; heigth:10px;" @click="download">违规数据下载</Button>              
                <br><br>
                <Input  search enter-button v-model="value2" placeholder="搜索违规信息" style="width:400px; heigth:10px; left:500px" @keyup.enter.native="search"/>
                <br><br>
                <Table border :columns="columns1" :data="data1"></Table>
            </div>           
        </Footer>
        </Layout>
    </div>
</template>
<script>
/* eslint-disable */
export default {
/**视频 */
name: "TestTwo",
data() {
    return {
        value1:'',
        value2:'',
        vIf:1,
        config:{
                data:[
                    {
                        name:'1',
                        value:12,
                    },
                    {
                        name:'2',
                        value:17
                    },
                    {
                        name:'3',
                        value:23
                    }
                ],
                digitalFlopStyle: {
                    fontSize: 25,
                    fill: '#42b983'
                },
            },

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

        videoSrc:require("../assets/1.mp4") 
    };
},
mounted() { 
    this.initVideo();
},
methods: {
    initVideo() {
    //初始化视频方法
    let myPlayer = this.$video(myVideo, {
        //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
        controls: true,
        //自动播放属性,muted:静音播放
        // autoplay: "muted",
        autoplay: "false",
        //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
        preload: "auto",
        //设置视频播放器的显示宽度（以像素为单位）
        width: "1024px",
        //设置视频播放器的显示高度（以像素为单位）
        height: "588px",
        //可选择的播放速度
        playbackRates : [ 0.5, 1.0, 1.5, 2.0 ], 
        notSupportedMessage : '此视频暂无法播放，请稍后再试'
    });
    },
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
