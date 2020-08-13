<template>
<div class="test_two_box">
    <video id="myVideo" class="video-js" :src="videoSrc" type="video/mp4">
    <!-- <source
        src="../assets/1.mp4"
        type="video/mp4"
    > -->
    </video>
</div>
</template>

<script>
/* eslint-disable */
export default {
data() {
    return {
        // videoSrc:require("../assets/1.mp4"),
        videoSrc:require("../assets/1.mp4"),
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
        src: "../assets/1.mp4",
        type: "video/mp4",
        //自动播放属性,muted:静音播放
        // autoplay: "muted",
        autoplay: "false",
        //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
        preload: "auto",
        //设置视频播放器的显示宽度（以像素为单位）
        width: "800px",
        //设置视频播放器的显示高度（以像素为单位）
        height: "400px",
        //可选择的播放速度
        playbackRates : [ 0.5, 1.0, 1.5, 2.0 ], 
        notSupportedMessage : '此视频暂无法播放，请稍后再试'
    });
    }
}};
</script>

<style scoped>
</style>