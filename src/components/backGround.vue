<template>
    <div class="note" :style ="note">
        <Button type="info"> gan</Button>
    </div>
</template>
<script>
    export default {
        name: 'productdetailspage',
        data() {
            return {
                note: {
                    backgroundImage: require("../assets/save.png"),
                    // backgroundColor:  "#19be6b",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "25px auto",
                    marginTop: "5px",
                    height: "600px"
                },
            }
        },
    }
</script>
