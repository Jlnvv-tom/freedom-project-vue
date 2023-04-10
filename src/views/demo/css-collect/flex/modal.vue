<template>
  <a-modal :bodyStyle="{ padding: '0px' }" dialogClass="flex-modal" :visible="visible" title="flex布局" @cancel="cancel"
    width="800px">
    <div class="container" :style="refStyle">
      <div class="item item1">
        <div class="ball">1</div>
      </div>
      <div class="item item2">
        <div class="ball">2</div>
      </div>
      <div class="item item3">
        <div class="ball">3</div>
      </div>
      <div class="item item4">
        <div class="ball">4</div>
      </div>
      <div class="item item5">
        <div class="ball">5</div>
      </div>
      <div class="item item6">
        <div class="ball">6</div>
      </div>
    </div>
    <template #footer>
      <div>
        页脚
      </div>
    </template>
  </a-modal>
</template>
<script setup lang="ts">
import { ref, computed } from "vue"
import { flexContainerConfig } from "./flex-config"
const props = defineProps({
  isShow: { type: Boolean, default: false },
})
const emit = defineEmits(['changeVisible']);
let visible = ref(props.isShow);
let refStyle = ref({});

const cancel = () => {
  visible.value = false;
  emit('changeVisible', visible.value);
}
</script>
<style lang="less" scoped>
.container {
  display: flex;
  // align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 400px;
  background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);

  .item {
    width: 100px;
    height: 200px;
    background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
    display: flex;
    justify-content: center;
    align-items: center;

    .ball {
      width: 30px;
      height: 30px;
      background-image: linear-gradient(to right, #0acffe 0%, #495aff 100%);
      font-size: 24px;
      font-weight: 600;
      text-align: center;
      line-height: 30px;
      border-radius: 100%;
    }
  }
}
</style>
