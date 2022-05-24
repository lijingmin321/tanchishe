<template>
    <div>
        {{counter}}
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

    export default defineComponent({
        data(){
            return {
                counter: 1 as Number
            }
        },
        
    })
</script>

<style lang="less" scoped>

</style>