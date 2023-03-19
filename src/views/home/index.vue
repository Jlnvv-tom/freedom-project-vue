<template>
  <a-layout>
    <a-layout-header>
      <div class="layout-header">
        Header
      </div>
    </a-layout-header>
    <a-layout-content>
      <div class="layout-content">
        <div class="layout-content-bar">
          <a-carousel>
            <img height="400" width="100%" src="https://assets.sigoo.com/ghost/2018/12/1544543887899_31671.jpg" alt="城市">
            <img height="400" width="100%" src="https://assets.sigoo.com/ghost/2018/12/1544542487283_64764.jpg" alt="城市">
            <img height="400" width="100%" src="https://assets.sigoo.com/ghost/welcome-to-sigoo.jpg" alt="城市">
            <img height="400" width="100%" src="https://assets.sigoo.com/ghost/2018/12/1544543919088_97184.jpg" alt="城市">
          </a-carousel>
        </div>
        <div class="show-demo">
          <a-button type="dashed" size="large" style="width:200px" @click="clickShow">查看示例</a-button>
        </div>

      </div>
    </a-layout-content>
    <a-layout-footer>
      <div class="layout-footer">
        <div>热爱生活，喜好美食，追求未来！</div>
        <div> Copyright © 2023-present 焕然一新组合出版</div>
      </div>
    </a-layout-footer>
  </a-layout>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
const clickShow = (): void => {
  router.push("/show")
}
</script>bo'ke
<style scoped lang="less">
.layout {
  &-header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff
  }

  &-content {
    height: 100vh;
    text-align: center;

    &-bar {
      .ant-carousel :deep(.slick-slide) {
        text-align: center;
        height: 400px;
        line-height: 400px;
        background: #364d79;
        overflow: hidden;
      }
    }

    .show-demo {
      margin-top: 60px;
    }
  }

  &-footer {
    width: 100%;
    text-align: center;
  }
}
</style>