<template>
  <a-input-search v-model:value="searchText" placeholder="输入搜索关键字" enter-button="搜索" size="large"
    style="width:400px;margin-bottom:16px;" @search="onSearch" />
  <a-tree :tree-data="treeData" v-model:selectedKeys="selectedKeys" v-model:expandedKeys="expandedKeys">
    <template #title="{ title, key }">
      <span v-html="highlightHandle(searchText, title)"></span>
    </template>
  </a-tree>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import { arrayData } from '@/api/mock-data';

const searchText = ref("")
const selectedKeys = ref<string[]>([]);
const expandedKeys = ref<string[]>([]);
const treeData = computed(() => {
  return arrayData.map((item:any) => {
    return {
      key: item.group_id,
      title: item.group_name,
      children: item.group_children.map((child:any) => {
        return { key: child.label_id, title: child.label_name }
      })
    }
  })
})
expandedKeys.value.push(treeData.value[0].key)
// selectedKeys.value.push(treeData.value[0].children[0].key)

const onSearch = () => {


}

const highlightHandle = (searchText: string = "", targetText: string = "") => {
  let reg = new RegExp(searchText, "gi");
  let highlight = (match: any) => `<span style="color:red;">${match}</span>`;
  return targetText.replace(reg, highlight);
}
console.log("treeData", treeData)
</script>
<style scoped lang="less"></style>