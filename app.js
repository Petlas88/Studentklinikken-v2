import router from "./router.js";
import * as components from "./components/index.js"


new Vue({
  el: "#app",
  router: router,
  data() {
    return {
      isLoggedIn: false,
      darkModeActive: false
    }
  },
  methods: {
    loggedInChange(value) {
      console.log(value)
      this.isLoggedIn = value
    },
    darkModeToggle(value) {
      this.darkModeActive = value
      console.log(this.darkModeActive)
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
    }, 
    darkModeActive() {
      //console.log(this.darkModeActive)
      if (this.darkModeActive) {
        document.body.classList.add("dark")
      } else {
        document.body.classList.remove("dark")
        document.body.classList.add("back-to-light")
      }     
    }
  }
})

export default app