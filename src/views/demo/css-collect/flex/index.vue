<template>
  <a-button type="primary" @click="clickButton">flex布局</a-button>
  <Modal v-if="isShow" :is-show="isShow" @changeVisible="changeVisible" />
  <p> Hello World</p>
</template>
<script setup lang="ts">
import { ref } from "vue"
import Modal from "./modal.vue";
const isShow = ref(false);
const clickButton = () => {

  isShow.value = true;
  // console.log(`output->click`, isShow.value)
}
const changeVisible = (val: boolean) => {
  isShow.value = val
}
const theme = ref('red');
const colors = ['blue', 'green', 'yellow', 'orange'];

setInterval(() => {
  theme.value = colors[Math.floor(Math.random() * 4)]
}, 1000);
</script>
<style scoped>
p {
  color: v-bind(theme);
}

:global(p) {
  font-size: 20px;
  color: red;
  text-align: center;
  line-height: 50px;
}

/* Make it work */
:global(body) {
  width: 100vw;
  height: 100vh;
  background-color: burlywood;
}
</style>
