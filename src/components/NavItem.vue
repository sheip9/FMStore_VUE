<script setup>
defineProps({
    obj: Object,
})
</script>

<template>

    <span class="nav-item-icon" v-html="obj.icon"></span>
        <span class="nav-item-text">
            {{ obj.text }}
        </span>


</template>

<style scoped>
.nav-item-text {
    font-size: larger;
    color: grey;
//font-weight: bold;
}

.nav-item-icon {
    display: inline-block;
    width: 30px;
    height: 30px;
}
</style>