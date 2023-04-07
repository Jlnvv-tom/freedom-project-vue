<template>
  <h1>{{ displayCount }}</h1>
  <a-button type="primary" @click="Click">自定义事件</a-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const displayCount = ref(0)
const dispatchCount = ref(100)
const Click = () => {
  dispatchCount.value += 10;
  window.dispatchEvent(new CustomEvent('my-event', {
    detail: {
      value: dispatchCount.value,
      key: 'my-event-key'
    }
  }))
}

const listenFn = (e: any) => {
  console.log(e.detail)
  displayCount.value += e.detail.value
}

window.addEventListener('my-event', listenFn)

</script>