<script setup>

import {addToCart} from "@/items";

defineProps({
    obj: Object,
    index: Number,
})

</script>

<template>
<div class="goods-item">
    <img :src="obj.imageSrc" :alt="obj.imageAlt">
    <div class="goods-item-info">
        <div>
            <p class="name">{{index}}{{ obj.name }}</p>
            <p class="des">{{ obj.des }}</p>
        </div>
        <div class="btn-div">
            <span><span class="symbol">¥</span><span class="price">{{ obj.price }}</span></span>
            <button type="submit" @click="addToCart(obj)">添加购物车</button>
        </div>
    </div>
</div>
</template>

<style scoped>
p{
    overflow: hidden;
    text-overflow: ellipsis;
}
.goods-item{
    height: 190px;
    width: 400px;
    border-color: gray;
    border-radius: 10px;
    border-style: solid;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

img{
    width: 30%;
    max-height: 87%;
}
.goods-item-info{
    height: 87%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.goods-item-info > *{
    height: 75%;
    overflow: hidden;
}
.name{
     padding-top: 5%;
     padding-bottom: 2%;
     font-size: larger;
     font-weight: bold;
     white-space: nowrap;
 }
.des {
    max-height: 60%;
    line-height: 24px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
.symbol{
    color: gray;
    font-size: smaller;
}
.price{
    text-align: center;
    color: red;
    font-weight: bolder;
    font-size: larger;
}
.btn-div{
    display: flex;
    height: 20%;
    justify-content: space-between;
    align-items: center;
}

button{
    color: white;
    cursor: pointer;
    display: inline-block;
    border: 1px solid transparent;
    font-size: .9rem;
    vertical-align: middle;
    line-height: 1.5;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    border-radius: 20px;
    padding: 8px 12px;
    font-weight: bold;
    background: #eb4400;
    //box-shadow: 0 0.375em 0 #f40
}
button:hover{
    background: #cd3000;
}
button:active{
    box-shadow: 0 0 0 .25rem rgba(255, 48, 0, .5);
}

</style>