<template>
  <div :class="{ darkMode: isDarkMode }">
    <header>
      <button @click="toggleMode">Toggle Dark Mode</button>
      <img src="favicon.ico" alt="Logo" class="logo">
      <h1>My Portfolio</h1>
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/projects">Projects</router-link>
        </nav>
    </header>
      
    <router-view></router-view>
      
    <footer>
      <p>© 2023 by Me. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isDarkMode: false
    }
  },
  methods: {
    toggleMode() {
      this.isDarkMode = !this.isDarkMode;
    }
  }
}
</script>

<style scoped>
.darkMode {
  background-color: black;
  color: white;
}

header {
  background-color: #333;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}

nav a {
  margin: 0 10px;
  color: #fff;
  text-decoration: none;
}

footer {
  background-color: #222;
  color: #aaa;
  padding: 1rem 0;
  text-align: center;
}
</style>
