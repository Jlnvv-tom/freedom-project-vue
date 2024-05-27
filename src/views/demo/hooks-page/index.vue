<template>
  <div>
    <a-tag>{{ getTip("aa") }}</a-tag>
    <a-button type="primary" @click="openModal">打开modal</a-button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { getCardTipData } from "@/api/service/index";
import { getTip } from "@/hooks/cache";
import { Modal } from "ant-design-vue";
export default defineComponent({
  setup() {
    getCardTipData().then((res: any) => {
      console.log(`output->res=========`, res);
    });

    console.log(`output->getTip=========`, getTip());
    const openModal = () => {
      Modal.confirm({
        title: "Confirm",
        content: () => "openModal",
      });
    };
    return {
      openModal,
      getTip,
    };
  },
});
</script>
