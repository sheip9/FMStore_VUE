<script setup>

import {cartArr} from "@/items";
import CartItem from "@/components/CartItem.vue";
import {computed} from "vue";
const goodsNumber=computed(()=>cartArr.length);
const goodsTotalNumber=computed(()=>{
    let total = 0;
    for (const cartArrElement of cartArr) {
        total += cartArrElement.amount;
    }
    return total;
});
const goodsTotalPrice=computed(()=>{
    let total = 0;
    for (const cartArrElement of cartArr) {
        total += (cartArrElement.amount * cartArrElement.item.price);
    }
    return total;
});
</script>

<template>
    <div id="cart-list">
        <div id="cart-list-goods">
            <div id="cart-table">
                <span style="width: 10vw;text-align: left"><input id="" name="" type="checkbox">全选</span>
                <span style="width: 43%">商品信息</span>
                <span style="width: 15%">单价</span>
                <span style="width: 8%">数量</span>
                <span style="width: 15%">总价</span>
                <span style="width: 5vw">删除</span>
            </div>

            <div v-for="(item,index) in cartArr" :key="item.id" class="nav-item">
                <CartItem :index="index" :obj="item"></CartItem>
            </div>
        </div>
        <div id="cart-list-total">
            <div>
                <h1>订单摘要</h1>
                <div>
                    <p><span>商品件数</span><span></span>{{goodsNumber}}</p>
                    <p><span>商品总数</span><span></span>{{goodsTotalNumber}}</p>
                    <p><span>小计</span><span></span>{{goodsTotalPrice}}</p>
                    <hr/>
                    <p><span>总计</span><span>{{goodsTotalPrice}}</span></p>
                    <button type="submit">结账</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
span {
    text-align: center;
}

#cart-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

#cart-list-div > * {
    margin: 10px;
}

#cart-list-goods {
    min-width: 410px;
    width: -moz-available;
    width: -webkit-fill-available;
    width: fill-available;
    display: grid;
    grid-template-columns: auto;
    max-width: 70%;
    grid-template-rows: min-content;
}

#cart-table {
    height: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

#cart-list-total {
    min-width: min-content;
    display: flex;
    justify-content: center;
}

#cart-list-total > * {
    width: 225px;
    height: 300px;
    border-color: gray;
    border-radius: 10px;
    border-style: solid;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

#cart-list-total > div {
    padding-bottom: 20px;
}

#cart-list-total > * > * {
    padding: 5px 12px 5px 12px;
}

#cart-list-total > * > * > p {
    padding-top: 8px;
    padding-bottom: 8px;
    display: flex;
    justify-content: space-between;
}

#cart-list-total > * > h1 {
    text-align: center;
    padding-top: 10px;
}

button {
    float: right;
    margin-top: 20px;
    margin-right: 20px;
    padding: 8px 20px 8px 20px;
    color: white;
    cursor: pointer;
    display: inline-block;
    border: 1px solid transparent;
    font-size: .9rem;
    vertical-align: middle;
    line-height: 1.5;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    border-radius: 20px;
    font-weight: bold;
    background: #eb4400;
}

button:hover {
    background: #cd3000;
}

button:active {
    box-shadow: 0 0 0 .25rem rgba(255, 48, 0, .5);
}
</style>