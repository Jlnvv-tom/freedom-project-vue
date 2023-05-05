<template>
  <div class="container">
    <div class="box1" :class="{ 'toggle-status': isToggle }" @click="toggle"></div>

    <div class="animation-box"> </div>
    <div class="fish"> </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const isToggle = ref(false);
const toggle = () => {
  isToggle.value = !isToggle.value;
  console.log(`output->isToggle.value`, isToggle.value)
}
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;

  .box1 {
    width: 100px;
    height: 400px;
    border-radius: 10%;
    background-color: yellow;
    position: absolute;
    right: 30px;
    top: 150px;
    transition-duration: 1s;
    transition-property: width, background-color, height, border-radius, transform, opacity;

    &:active {
      background-color: green;
      width: 50px;
      height: 50px;
      // border-radius: 100%;
      opacity: .1;
      transform: translate(-200px, -100px);
      // transform: scale(2);
    }

    .toggle-status {
      background-color: green;
      width: 50px;
      height: 50px;
      // opacity: 0;
    }

  }

  .animation-box {
    width: 100px;
    height: 100px;
    border-radius: 10%;
    background-color: orange;
    position: relative;
    // right: 600px;
    // top: 300px;
    // animation: myanimation;
    animation: myanimation 4s infinite;
  }

  @keyframes myanimation {
    0% {
      background: red;
      left: 0px;
      top: 0px;
    }

    25% {
      background: yellow;
      left: 200px;
      top: 0px;
    }

    50% {
      background: blue;
      left: 200px;
      top: 200px;
    }

    75% {
      background: red;
      left: 0px;
      top: 200px;
    }

    100% {
      background: green;
      left: 0px;
      top: 0px;
    }
  }

  .fish {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: green;
    position: relative;
    animation: mymove 6s infinite;
    -webkit-animation: fishcMovie 5s infinite;
    /* Safari and Chrome */
  }

  @keyframes fishcMovie {
    from {
      left: 0px;
    }

    to {
      left: 333px;
    }
  }
}
</style>
