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
    <br><br>
    <Button  icon="ios-download-outline" type="primary"  @click="download">违规数据下载</Button> 
</div>
</template>

<script>
import GLOBAL from '../api/global.js'
import {getVideo,postVideo} from '../api/api.js'
/* eslint-disable */
export default {
data() {
    return {
        // videoSrc:require("../assets/1.mp4"),
        // videoSrc1:require("../assets/video_result1.mp4"),
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
    download(){
        getVideo().then(response =>{
            // GLOBAL.videoId = Object.entries(response.data[0])[2][1]
            GLOBAL.videoId = 1
            console.log(GLOBAL.videoId)
            let path = Object.entries(response.data)
            // let path = "1.mp4"
            console.log(path[0][0])
            console.log(path[0][1])
        })
    },
    limit(){
        postVideo(this.fileName,this.speed).then(response =>{
            // console.log(response)
        })
        this.$nextTick(() => {
            setInterval(this.loadVideo(), 5000);
        })
    },
    loadVideo(){
        getVideo(this.fileName,this.speed).then(response =>{
            // GLOBAL.videoId = Object.entries(response.data[0])[2][1]
            GLOBAL.videoId = 1
            console.log(GLOBAL.videoId)
            // let path = Object.entries(response.data[0])[0][1]
            // let path = "1.mp4"
            let path = response.data
            console.log(response.data)
            this.videoSrc = require('../assets/'+path)
            var player = this.$video('myVideo')
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
            width: "960px",
            //设置视频播放器的显示高度（以像素为单位）
            height: "640px",
            //可选择的播放速度
            playbackRates : [ 0.5, 1.0, 1.5, 2.0 ], 
            notSupportedMessage : '请上传视频'
        });
    }
}};
</script>

<style scoped>
</style>