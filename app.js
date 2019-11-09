import router from "./router.js";
import * as components from "./components/index.js"


new Vue({
  el: "#app",
  router: router,
  data() {
    return {
      isLoggedIn: false,
      darkMode: true
    }
  },
  methods: {
    loggedInChange(value) {
      console.log(value)
      this.isLoggedIn = value
    },
    darkModeToggle() {
      if(this.darkMode) {
        this.darkMode = false;
      } else {
        this.darkMode = true;
      }
    }
  },
  components: {
  },
  watch: {
    isLoggedIn() {
      console.log(this.isLoggedIn)
      if (!this.isLoggedIn) {
        this.$router.push('/')
      }
    }
  }
})

export default app