<template>
  <div class="main">
    <!-- <div class="main-glass"></div> -->
  </div>
</template>

<style scope lang="less">
.main {
  background-image: url(@/assets/img/about-css/earth.jpg);
  background-repeat: no-repeat;
  position: absolute;
  top: 16px;
  left: 272px;
  right: 16px;
  bottom: 0;
  box-shadow: 4px 4px 6px 3px rgba(0, 0, 0, .3);
  &::before {
    background-image: url(@/assets/img/about-css/bg.png);
    background-position: top;
    background-size: contain;
    background-attachment: fixed;
    content: 'Hello World';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    filter: blur(5px);
    width: 50%;
    height: 50%;
    opacity: .6;
    transform: translate(50%, 40%);
    border-radius: 8%;
  }

}
</style>