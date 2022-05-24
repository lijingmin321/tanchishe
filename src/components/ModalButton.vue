<template>
    <div>
        <button @click="modelOpen=true">弹出一个模态窗口</button>
        <teleport to="body">
            <div v-if="modelOpen" class="model">
                <div>
                    这是一个弹窗
                    我的父元素是<body>
                        <button @click="modelOpen=false"></button>
                    </body>
                </div>
            </div>
        </teleport>
    </div>
</template>

<script lang="ts">
    export default {
        name: "ModalButton",
        data(){
            return {
                modelOpen: true as Boolean
            }
        },
        methods: {
            openModel():void {
                this.modelOpen = true
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>