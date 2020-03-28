<template>
  <div class="flex-full login-main">
    <div class="login-form">
      <el-button>test</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.login-main {
  background: url("../assets/images/login/login-bg.jpg") 100% 100% no-repeat;
  justify-content: center;
  align-items: center;
  .login-form {
    height: 182px;
  }
}
</style>
