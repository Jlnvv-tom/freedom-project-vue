<template>
  <div class="box">
    <div class="box-frame">
      <div class="heart left"></div>
      <div class="heart right"></div>
      <div class="heart bottom"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.box {

  width: 100%;
  height: 100%;
  background-color: pink;
  position: absolute;
  z-index: -10;
  margin: -16px;

  &-frame {
    position: relative;
    width: 400px;
    height: 300px;
    margin: 250px auto;
  }
}



.left,
.right {
  top: 0;
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

.left {
  left: 35px;

}

.right {
  right: 35px;
  z-index: -1;
}

.bottom {
  bottom: 36px;
  left: 100px;
  width: 200px;
  height: 200px;
  transform: rotate(45deg);
  z-index: -1;

}

.heart {
  position: absolute;
  box-shadow: 0 0 40px #d5093c;
  animation: beat .8s ease infinite normal;
  background: linear-gradient(-90deg, #F50A45 0%, #d5093c 40%);
}

@keyframes beat {
  0% {
    transform: scale(1) rotate(225deg);
    box-shadow: 0 0 40px #d5093c;
  }

  50% {
    transform: scale(1.1) rotate(225deg);
    box-shadow: 0 0 70px #d5093c;
  }

  100% {
    transform: scale(1) rotate(225deg);
    box-shadow: 0 0 40px #d5093c;
    ;
  }
}
</style>