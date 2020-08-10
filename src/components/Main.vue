<style scoped>
    .layout{
        border: 1px solid #dcdee2;
        background: #0859fc;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #dcdee2;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
</style>
<template>
    <div class="layout">
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
                    <MenuItem name="data1">数据1</MenuItem>
                    <MenuItem name="data2">数据2</MenuItem>
                </Submenu>
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px'}">
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
            <Sider :style="{margin: '20px 20px 0', background: '#dcdee2',minHeith: '580px', minWidth: '500px'}">
                <!-- <iframe src="http://www.baidu.com" width="600px" height="588px" frameborder="0"></iframe> -->
                <data/>
            </Sider>
        </Layout>
        <Footer><Table :columns="columns1" :data="data1"></Table></Footer>
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

        // columns1:[
        //             {
        //                 title: '时间',
        //                 key: 'time'
        //             },
        //             {
        //                 title: '车牌号',
        //                 key: 'ID'
        //             },
        //             {
        //                 title: '违法行为',
        //                 key: 'acident'
        //             }
        //         ],
        // data1: [
        //             {
        //                 time: '0.03s',
        //                 ID: '粤',
        //                 acident: 'asdjfo'
        //             }
        //         ],

        columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],

        videoSrc:require("../assets/1.mp4") 
    };c
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
       this.src=null;
       switch(name){
           case "data1":
               this.src="http://localhost:8080/#/data"
               break;
            case "data2":
                this.src="http://www.baidu.com"
                break;
       }
       alert(this.src)
    }
   
}
};
</script>
