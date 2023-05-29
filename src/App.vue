<script setup>
import NavBar from "@/components/NavBar.vue";
import {wrapper} from "@/router";

</script>

<template>
    <div id="nav">
        <NavBar class="content"></NavBar>
    </div>
    <div id="wrapper" class="content">
        <component :is="wrapper"></component>
    </div>
    <div class="footer bgw">

    </div>
</template>

<style>
*{
    padding:0;
    margin:0
}
.content{
    width: 68%;
    margin: auto;
}
#wrapper{
    margin-top: 75px;
    padding-top: 50px;
    padding-bottom: 50px;
    margin-bottom: 75px;
    background-color: rgba(255,255,255,.5);
    min-height: 50vh;
}
#nav{
    //border-bottom: #181818;
    //border-bottom-style: solid;
    height: 100px;
    background-color: rgba(255,255,255,.9);
}
.footer{
    height: 100px;
    background-color: rgba(255,255,255,.5);
    width: 100%;
    /*position: absolute;*/
    /*text-align: center;*/
    //line-height: 50px;
    //bottom: 0;
}
</style>
