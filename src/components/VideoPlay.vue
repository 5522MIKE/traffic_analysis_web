<template>
<div class="test_two_box">
    <video id="myVideo" class="video-js">
    <source
        :src="videoSrc"
        type="video/mp4"
    >
    </video>
    <Upload action="//jsonplaceholder.typicode.com/posts/" :before-upload="changeVideo" accept="mp4">
        <Button icon="ios-cloud-upload-outline" >选择上传文件</Button>
    </Upload>
    <Input   v-model="speed" clearable placeholder="请输入当前路段限速(km/h)" style="width:200px; heigth:10px;" @keyup.enter.native="limit"/> 
</div>
</template>

<script>
import {getVideo,postVideo} from '../api/api.js'
/* eslint-disable */
export default {
data() {
    return {
        // videoSrc:require("../assets/1.mp4"),
        // videoSrc:require("../assets/1.mp4"),
        speed:'',
        myPlayer:'',
        videoSrc:'',
        fileName:'',
    };
},
mounted() { 
    this.initVideo();
},
// created: function () {
//     this.loadVideo("1.mp4")
// },
methods: {
    limit(){
        postVideo(this.fileName,this.speed).then(response =>{
            // console.log(response)
        })
        this.loadVideo()
    },
    loadVideo(){
        getVideo(this.fileName).then(response =>{
            console.log(response.data)
            // this.myPlayer.dispose()
            console.log(Object.entries(response.data[0])[0][1])
            let path = Object.entries(response.data[0])[0][1]
            this.videoSrc = require('../assets/'+path)
            // console.log(this.videoSrc)
            var player = this.$video('myVideo')
            // console.log(player);
            player.src({
                src:this.videoSrc
            })
        })
    },
    changeVideo(file){
        // postVideo(file.name).then(response =>{
        // })
        // console.log("name"+file.name)
        // this.loadVideo(file.name);
        this.fileName = file.name
    },
    initVideo() {
        //初始化视频方法
        this.myPlayer = this.$video(myVideo, {
            //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
            controls: true,
            //自动播放属性,muted:静音播放
            // autoplay: "muted",
            autoplay: "false",
            //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
            preload: "auto",
            //设置视频播放器的显示宽度（以像素为单位）
            width: "600px",
            //设置视频播放器的显示高度（以像素为单位）
            height: "600px",
            //可选择的播放速度
            playbackRates : [ 0.5, 1.0, 1.5, 2.0 ], 
            notSupportedMessage : '请上传视频'
        });
    }
}};
</script>

<style scoped>
</style>