<script setup>
import {goodsArr} from "@/items";
import Item from "@/components/GoodsItem.vue";
import {computed, onMounted, reactive, ref, watch} from "vue";
const listDivRef = ref(HTMLElement);
const itemCanPut = ref(0)
function adjustItems(){
    itemCanPut.value = parseInt(listDivRef.value.clientWidth / 426);
}
onMounted(() =>{
    adjustItems()
    window.addEventListener("resize", adjustItems)
})


</script>

<template>
    <div id="goods-list-div" ref="listDivRef" :style="{gridTemplateColumns: `repeat(${itemCanPut}, auto`}">
        <div v-for="item in goodsArr" class="item-div">
            <Item :obj="item"></Item>
        </div>
    </div>
</template>

<style scoped>
#goods-list-div {
    width: 100%;
    display: grid;
    //flex-wrap:wrap;
    justify-content: center;
    grid-auto-rows: min-content;
}
.item-div{
    display: inline-block;
    padding: 10px
}
</style>