<template>
  <div>
    <h2>登入</h2>
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="account" required>
      <input type="password" v-model="password" placeholder="password" required>
      <button type="submit"></button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        // 調用登入服務
        await AuthService.login(this.username, this.password);
        // 登入成功後導向發文頁面
        this.$router.push('/create-post');
      } catch (error) {
        console.error('fail', error);
      }
    }
  }
}
</script>