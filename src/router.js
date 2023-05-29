import {shallowRef} from "vue";
import GoodsList from "@/pages/GoodsList.vue";

export const wrapper = shallowRef(GoodsList);

export function changeWrapper(v) {
    wrapper.value = v;
}