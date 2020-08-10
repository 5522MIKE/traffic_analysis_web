<template>
<div class="data">
    <dv-active-ring-chart :config="config" style="width:200px;height:200px" />
</div>
</template>

<script>
export default {
    name: 'data',
    data(){
        return{
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
                }
            }
        }
    }
}
</script>

<style>
.data{
font-display: black;
background: #808695;
}
</style>