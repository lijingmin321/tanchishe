<template>
    <div :class="['cell-wrapper', cellClass]">
        <template v-if=" type ===-1 ">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </template>
    </div>
</template>

<script setup lang="ts">
// import { toRefs, defineProps } from "vue"

import { computed } from "vue";

    const props = defineProps({
        type:{
            type: Number,
            require: true
        }
    })

    const cellClass= computed(() => {
        return {
            head: props.type === 1,
            body: props.type === 2,
            food: props.type === -1,
        };
    })


</script>

<style scoped lang="less">
    @import url('../../style/cell.less');
</style>