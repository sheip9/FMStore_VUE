import {reactive} from "vue";

export const goodsArr =reactive([])
export const cartArr = reactive([]);


export function addToCart(obj){
    if(cartArr.some(value=>value.item===obj)) return

    cartArr.push({
        item: obj,
        amount: 1
    })
}
export function addAmountToCart(index){
    cartArr[index].amount++;
}
export function reduceAmountToCart(index){
    if(cartArr[index] > 1)  cartArr[index].amount--;
}