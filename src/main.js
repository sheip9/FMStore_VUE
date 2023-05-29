import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import {goodsArr} from "@/items";
// alert("我测你妈")
for (let i = 0; i < 4; i++) {
    goodsArr.push(
        {
        name: `特质牌假马\`${i}\``,
        des: "这是一个假马，可以保护你的真马1231231",
        price: "1145.00",
        imageSrc: "src/assets/1.png",
        imageAlt: ""
    })
}

createApp(App).mount('#app')
