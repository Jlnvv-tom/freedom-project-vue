<template>
  <a-button type="primary" @click="clickButton">flex布局</a-button>
  <Modal v-if="isShow" :is-show="isShow" @changeVisible="changeVisible" />
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
</script>