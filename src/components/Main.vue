<style scoped>
    .layout{
        border: 1px solid #dcdee2;
        background: #2b85e4;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
</style>
<template>
    <div class="layout">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
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
                    <MenuItem name="2-1">Option 1</MenuItem>
                    <MenuItem name="2-2">Option 2</MenuItem>
                </Submenu>
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px'}">
            <video
                id="myVideo"
                class="video-js"
                
            >
                <source
                    src="../assets/1.mp4"
                    type="video/mp4"
                >
            </video>
            <Table :columns="columns1" :data="data1"></Table>
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

        columns1:[
                    {
                        title: '时间',
                        key: 'time'
                    },
                    {
                        title: '车牌号',
                        key: 'ID'
                    },
                    {
                        title: '违法行为',
                        key: 'acident'
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
    }
}
};
</script>
