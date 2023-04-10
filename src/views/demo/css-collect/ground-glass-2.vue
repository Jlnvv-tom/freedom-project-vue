<template>
  <div class="container">
    <div class="card">
      <div class="title">玻璃拟态效果的卡片</div>
      <div class="content">这是内容</div>
      <div class="footer">2050年10月10日</div>
    </div>

    <div class="circle"></div>
    <div class="rect"></div>

    
    <div class="circle-1"></div>
    <div class="rect-1"></div>
  </div>
</template>

<style lang="less" scoped>
.container {

  background: radial-gradient(circle at 60% 90%,
      rgba(46, 103, 161, 1),
      transparent 60%),
    radial-gradient(circle at 20px 20px,
      rgba(46, 103, 161, 0.8),
      transparent 25%),
    #000;
  height: 100%;

}

.card {
  color: rgba(255, 255, 255, 0.8);
  position: absolute;
  right: 100px;
  bottom: 100px;
  z-index: 10;
  font-family: sans-serif;
  text-align: center;
  width: 300px;
  height: 500px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  border-left: 1px solid rgba(255, 255, 255, 0.4);
  background: linear-gradient(to top right,
      rgba(90, 149, 207, 0.5),
      rgba(58, 76, 99, 0.8));
  box-shadow: 10px -10px 20px rgba(0, 0, 0, 0.2),
    -10px 10px 20px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  border-radius: 20px;
  transform: rotate(-15deg);
}

.title {
  font-size: 24px;
  margin-top: 50px;
}

.content {
  margin-top: 100px;
}

.footer {
  margin-top: 200px;
}

.circle {
  width: 160px;
  height: 160px;
  position: absolute;
  right: 240px;
  bottom: 20px;
  background: linear-gradient(to top left, rgb(135 116 249), rgb(75 162 237));
  border-radius: 80px;
}

.rect {
  width: 160px;
  height: 160px;
  position: absolute;
  right: 110px;
  bottom: 520px;
  background: linear-gradient(to top left,
      rgba(135, 116, 249, 0.9),
      rgba(75, 162, 237, 0.9));
  border-radius: 20px;
}

.circle-1 {
  width: 160px;
  height: 160px;
  position: absolute;
  right: 440px;
  bottom: 60px;
  background: linear-gradient(to top left, rgb(135 116 249), rgb(75 162 237));
  border-radius: 80px;
}

.rect-1 {
  width: 160px;
  height: 160px;
  position: absolute;
  right: 810px;
  bottom: 60px;
  background: linear-gradient(to top left,
      rgba(135, 116, 249, 0.9),
      rgba(75, 162, 237, 0.9));
  border-radius: 20px;
}
</style>

