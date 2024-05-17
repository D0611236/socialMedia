<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input type="text" v-model="username" placeholder="account" required>
      <input type="password" v-model="password" placeholder="password" required>
      <button type="submit">Register</button>
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
    async register() {
      try {
        await AuthService.register(this.username, this.password);
        this.$router.push('/login');
      } catch (error) {
        console.error('fail', error);
      }
    }
  }
}
</script>
