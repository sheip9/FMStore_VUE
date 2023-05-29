<script setup>
import {computed, toRefs} from "vue";
import {addAmountToCart, reduceAmountToCart} from "@/items";

const props=defineProps({
    obj: Object,
    index: Number,
})
const goodsMultiPrice=computed(()=>props.obj.item.price * props.obj.amount);

</script>

<template>
    <div class="cart-item">
        <span style="width: 6%;text-align: left"><input type="checkbox" name="" id=""></span>
        <div class="cart-item-goods-info">
            <img src="src/assets/1.png" :alt="obj.imageAlt">
            <div class="info-text">
                <h1>{{obj.item.name}}</h1>
                <p>{{obj.item.des}}</p>
            </div>
        </div>
        <p><span class="symbol">￥</span><span class="unit-price">{{obj.item.price}}</span></p>
        <div class="item-amount">
                                <!--我测你的吗-->
                <button type="submit" @click="reduceAmountToCart(index)">-</button>
                <input type="text" :value="obj.amount">
                <button type="submit" @click="addAmountToCart(index)">+</button>
        </div>
        <p><span class="symbol">￥</span><span class="final-price">{{goodsMultiPrice}}</span></p>
        <span style="width: 5vw">删除</span>
    </div>
</template>

<style scoped>
.cart-item{
    height: 180px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.cart-item > input{
    width: 5%;
}

h1, p {
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
}
.cart-item > *{
    max-height: 80%;
}
.cart-item > p{
    width: 15%;
    text-align: center;
}
.cart-item-goods-info{
    height: 100%;
    display: flex;
    flex-direction: row;
    width: 43%;
    justify-content: space-around;
}
img{
    width: 28%;
    height: fit-content;
    margin-top: auto;
    margin-bottom: auto;
}
.info-text{
    height: 80%;
    width: 65%;
    display: flex;
    flex-direction: column;
}
.info-text > h1{
    padding-top: 5%;
    padding-bottom: 2%;
    font-size: larger;
    font-weight: bold;
    white-space: nowrap;
}
.info-text > p {
    line-height: 24px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}

.symbol{
    color: gray;
    font-size: smaller;
}
.final-price{
    text-align: center;
    color: red;
    font-weight: bolder;
}
.item-amount{
    width: 8%;
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
}
.item-amount > input{
    width: 20px;
}
button{
    width: 15px;
    height: 20px;
}



</style>