<template>
  <div class="group" v-for="(group, g_idx) in arrayData" :key="g_idx">
    <h4>{{ group.group_name }}:</h4>
    <div class="group-label">
      <a-tag v-for="(label, l_idx) in group.group_children" :key="l_idx" :color="label.label_color"
        @click="selectTag(label)" :class="{ selected: isSelect(label) }">
        {{ label.label_name }}
      </a-tag>
    </div>
  </div>
  <h4>当前选中标签有：</h4>
  <div class="group-label">
    <a-tag v-for="(label, l_idx) in selectData" :key="l_idx" :color="label.label_color">
      {{ label.label_name }}
    </a-tag>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { arrayData } from '@/api/mock-data'
interface ILabel {
  label_id: string;
  label_name: string;
  label_color: string;
}
const selectData = ref<ILabel[]>([]);
const selectTag = (label: ILabel) => {
  if (selectData.value.find(item => item.label_id === label.label_id)) {
    selectData.value = selectData.value.filter(item => item.label_id !== label.label_id)
  } else {
    selectData.value.push(label);
  }
  console.log('label', selectData.value, label)
}

const isSelect = (label: ILabel) => {
  return selectData.value.find(item => item.label_id === label.label_id)
}

</script>

<style scope lang="less">
.group {
  width: 100%;

  &-label {
    display: flex;
    margin: 16px 0;

    .ant-tag {
      cursor: pointer;
      border: 2px solid transparent;
    }

    .selected {
      border: 2px solid black
    }
  }
}
</style>