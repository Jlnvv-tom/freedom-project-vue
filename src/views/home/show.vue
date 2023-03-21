<template>
  <div class="show">
    <div class="show-menu">
      <a-menu id="dddddd" v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys"
        style="width: 256px; min-height: 100%;" mode="inline" @click="handleClick">
        <a-sub-menu key="sub1" @titleClick="titleClick">
          <template #icon>
            <MailOutlined />
          </template>
          <template #title>常见前端业务示例</template>
          <a-menu-item key="/demo/highlight">搜索高亮</a-menu-item>
          <a-menu-item key="/demo/select">选中多个标签</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2" @titleClick="titleClick">
          <template #icon>
            <AppstoreOutlined />
          </template>
          <template #title>常见前端业务示例</template>
          <a-menu-item key="/demo/highlight">搜索高亮</a-menu-item>
          <a-menu-item key="/demo/select">选中多个标签</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <template #icon>
            <SettingOutlined />
          </template>
          <template #title>常见前端业务示例</template>
          <a-menu-item key="/demo/highlight">搜索高亮</a-menu-item>
          <a-menu-item key="/demo/select">选中多个标签</a-menu-item>
          <a-menu-item key="/demo/heart">心脏跳动</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
    <div class="show-content">
      <router-view />
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, watch } from 'vue';
import { MailOutlined, QqOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { useRouter, useRoute } from 'vue-router';

export default defineComponent({
  components: {
    MailOutlined,
    QqOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  setup() {
    const selectedKeys = ref(['/demo/highlight']);
    const openKeys = ref(['sub1']);
    const router = useRouter();
    const route = useRoute();
    const handleClick = e => {
      router.push(e.key)
    };
    const titleClick = e => {
      console.log('titleClick', e);
    };
    watch(() => openKeys, val => {
      console.log('openKeys', val);
    });
    return {
      selectedKeys,
      openKeys,
      handleClick,
      titleClick,
    };
  },
});
</script>
<style  lang="less" scoped>
.show {
  display: flex;
  width: 100%;
  min-height: 100%;

  &-menu {
    min-width: 256px;
    min-height: 100%;

  }

  &-content {
    flex: 1;
    padding: 16px;
  }
}
</style>