<template>
  <div class="show">
    <div class="show-menu">
      <a-button class="show-menu-toggle" type="primary" @click="toggleCollapsed">
        <MenuUnfoldOutlined v-if="collapsed" />
        <MenuFoldOutlined v-else />
      </a-button>
      <a-menu class="show-menu-self" v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="inline"
        :inline-collapsed="collapsed" @click="handleClick">
        <a-sub-menu key="sub1" @titleClick="titleClick">
          <template #icon>
            <MailOutlined />
          </template>
          <template #title>常见前端业务示例</template>
          <a-menu-item key="/demo/highlight">搜索高亮</a-menu-item>
          <a-menu-item key="/demo/select">选中多个标签</a-menu-item>
          <a-menu-item key="/demo/heart">心脏跳动</a-menu-item>
          <a-menu-item key="/demo/1024-game">1024小游戏</a-menu-item>

        </a-sub-menu>
        <!-- <a-sub-menu key="sub2" @titleClick="titleClick">
          <template #icon>
            <AppstoreOutlined />
          </template>
          <template #title>常见前端业务示例</template>
          <a-menu-item key="/demo/highlight">搜索高亮</a-menu-item>
          <a-menu-item key="/demo/select">选中多个标签</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <template #icon>
            <QqOutlined />
          </template>
          <template #title>常见前端业务示例</template>
          <a-menu-item key="/demo/highlight">搜索高亮</a-menu-item>
          <a-menu-item key="/demo/select">选中多个标签</a-menu-item>
          <a-menu-item key="/demo/heart">心脏跳动</a-menu-item>
        </a-sub-menu> -->
        <a-sub-menu key="sub4" @titleClick="titleClick">
          <template #icon>
            <SettingOutlined />
          </template>
          <template #title>测试示例页面</template>
          <a-menu-item key="/test-page/tree">tree拖拽</a-menu-item>
          <a-menu-item key="/test-page/custom-event">customEvent自定义事件</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
    <div class="show-content">
      <router-view />
    </div>
  </div>
</template>
<script setup  lang="ts">
import { ref, watch } from 'vue';
import { MailOutlined, QqOutlined, AppstoreOutlined, SettingOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
const selectedKeys = ref(['/demo/highlight']);
const openKeys = ref(['sub1']);
const router = useRouter();

const collapsed = ref(false)
const handleClick = e => {
  router.push(e.key)
};
const titleClick = e => {
  console.log('titleClick', e);
};
watch(() => openKeys, val => {
  console.log('openKeys', val);
});
const toggleCollapsed = () => {
  collapsed.value = !collapsed.value;
}
</script>
<style  lang="less" scoped>
.show {
  display: flex;
  width: 100%;
  height: 100%;

  &-menu {
    min-width: 256px;
    min-height: 100%;

    &-toggle {
      position: relative;
      left: 0;
    }

    &-self {
      width: 256px;
      height: 100%
    }
  }

  &-content {
    flex: 1;
    padding: 16px;
  }
}
</style>