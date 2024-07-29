<template>
  <keep-alive><component :is="pageView" /> </keep-alive>
</template>

<script lang="ts" setup>
  import type { RenderFunction } from 'vue';

  import { onBeforeMount } from 'vue';

  type Properties1 = {
    pageView: string;
  };
  type Properties = {
    key?: string | undefined;
  };

  const properties = defineProps<Properties1>();

  /**
   * 🔴 IMPORTANT PLACE
   * once fetch api to store
   * before render cards\apps
   */
  onBeforeMount(async () => {
    // await appStore.fetchApplications();
    // await favoritesStore.fetchFavorites();
  });

  function myFoo(Properties_: Properties) {
    console.log(`[LOG] Properties_`, `<${typeof Properties_}>`, Properties_);
  }

  const zxcxzc: RenderFunction = () => {};
  console.log(`[LOG] zxcxzc`, `<${typeof zxcxzc}>`, zxcxzc);
  function asd() {
    console.log('asdsad');
  }
</script>

<style lang="postcss" module>

</style>