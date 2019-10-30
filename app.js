import router from "./router.js";
import * as components from "./components/index.js"
new Vue({
  el: "#app",
  router: router,
  data() {
    return {
      isLoggedIn: false
    }
  },
  methods: {
    loggedInChange(value) {
      console.log(value)
      this.isLoggedIn = value
    }
  },
  components: {
    vuejsDatepicker
  },
  watch: {
    isLoggedIn() {
      console.log(this.isLoggedIn)
      if (!this.isLoggedIn) {
        this.$router.push('/')
      }
    }
  }

});
