<template>
  <h1>{{ msg }}</h1>
  <p>{{counter}}</p>
  <p>{{doubleCounter}}</p>
  <p>{{msg2}}</p>
  <p ref="desc"></p>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, reactive,  toRefs } from "@vue/runtime-core";
import { watch, ref } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props:{
    msg: String
  },
  setup(){
    
    const { counter, doubleCounter } = useCounter()
    const msg2 = ref('some message')

  // 使用元素的引用
    const desc = ref()

    watch(()=>counter, (val, oldVal)=>{
        const p = desc.value;
        p?.textContent && (p.textContent = `counter change from ${oldVal} to ${val}`)
    })

    return {
      counter,
      doubleCounter,
      msg2,
      desc
    }
  }
})


function useCounter(){
  const data:any  = reactive({
      counter:1,
      doubleCounter: computed(()=>data.counter * 2)
    })

    let timer:any = null
    onMounted(()=>{
      timer = setInterval(()=>{
        data.counter ++
      }, 500)
    })

    onUnmounted(()=>{
      timer && clearInterval(timer)
    })
    return toRefs(data)
}
</script>



<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
