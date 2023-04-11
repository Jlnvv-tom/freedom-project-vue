<template>
  <a-modal :bodyStyle="{ padding: '0px' }" dialogClass="flex-modal" :visible="visible" title="flex布局" @cancel="cancel"
    width="800px">
    <div class="container" :style="refStyle">
      <div class="item " v-for="(item, index) in itemCountData" :key="index">
        <div class="ball">{{ index + 1 }}</div>
      </div>
    </div>
    <template #footer>
      <div class="footer">
        <div>
          <a-dropdown>
            <a class="ant-dropdown-link" @click.prevent>
              请选择容器项目个数
              <DownOutlined />
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item v-for="(item, index) in Array(12).fill(1)" :key="index">
                  <a href="javascript:;" @click="clickItemCount(index)">{{ index + 1 }}</a>
                </a-menu-item>

              </a-menu>
            </template>
          </a-dropdown>
          <a-dropdown>
            <a class="ant-dropdown-link" @click.prevent>
              请选择容器属性
              <DownOutlined />
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item v-for="(item, index) in flexContainerConfigData" :key="index">
                  <a href="javascript:;" @click="clickAttrs(item)">{{ item.key }}</a>
                </a-menu-item>

              </a-menu>
            </template>
          </a-dropdown>
          <a-dropdown v-if="flexContainerValueData.length">
            <a class="ant-dropdown-link" @click.prevent>
              请选择属性值
              <DownOutlined />
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item v-for="(item, index) in flexContainerValueData" :key="index">
                  <a href="javascript:;" @click="clickValue(item)">{{ item }}</a>
                </a-menu-item>

              </a-menu>
            </template>
          </a-dropdown>
        </div>
        <div>当前选中的属性是:<span>{{ flexAttr }}</span>; 值是：<span>{{ flexValue }}</span></div>
      </div>
    </template>
  </a-modal>
</template>
<script setup lang="ts">
import { ref, watch, Ref, computed } from "vue"
import { DownOutlined } from '@ant-design/icons-vue';
import { flexContainerConfig, IFlexConfig } from "./flex-config"
const props = defineProps({
  isShow: { type: Boolean, default: false },
})
const emit = defineEmits(['changeVisible']);
let visible = ref(props.isShow);
let refStyle = ref({});
let flexAttr = ref('无');
let flexValue = ref('无');
let itemCount = ref(6);
let itemCountData = computed(() => Array(itemCount.value).fill(0))
const flexContainerConfigData: Ref<IFlexConfig[]> = ref(flexContainerConfig)
let flexContainerValueData = ref<string[]>([]);

watch(() => flexValue.value, (val) => {
  refStyle.value = { [flexAttr.value]: flexValue.value }
})
const cancel = () => {
  visible.value = false;
  emit('changeVisible', visible.value);
}

const clickAttrs = (record: IFlexConfig) => {
  console.log('record', record);
  flexContainerValueData.value = record.value;
  flexAttr.value = record.key;
}

const clickValue = (val: string) => {
  flexValue.value = val;
}

const clickItemCount = (index: number) => {
  itemCount.value = index + 1;
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
    height: 100px;
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

.footer {
  display: flex;
  justify-content: space-around;
}
</style>
