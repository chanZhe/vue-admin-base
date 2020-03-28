<template>
  <div
    id="app"
    v-loading="loading"
    element-loading-text="加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <router-view />
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "app",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ loading: "loading" })
  }
};
</script>
<style lang="less">
#app {
  display: flex;
  height: 100%;
}
</style>
