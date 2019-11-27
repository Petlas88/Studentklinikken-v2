const HomePage = {
  template: `
      <div id="home-cont" class="container-fluid">
          <div id="title-row" class="row">
              <div class="col-12">
                  <h1>{{title}}</h1>
              </div>
          </div>
          <div id="btn-row" class="row">
              <div class="col-12">
                  <router-link to="booking">
                      <button id="booking-btn" role="button">Bestill time</button>
                  </router-link>
              </div>
          </div>
          <div id="link-row" class="row">
              <div class="col-12">
                  <router-link to="orders" class="home-links" :class="{'home-links-dark': darkModeActive}">
                      Mine bestillinger</router-link> <br> 
                  <br>
                  <router-link to="prices" class="home-links" :class="{'home-links-dark': darkModeActive}" >
                      Priser</router-link> <br>
                  <br>
                  <router-link to="treatments" class="home-links" :class="{'home-links-dark': darkModeActive}">
                      Våre behandlinger</router-link>
              </div>
          </div>
          <div id="home-footer"><router-link to="rights" class="footer-links" :class="{'footer-links-dark': darkModeActive}">
              Rettigheter</router-link> | <router-link to="contact" class="footer-links" 
              :class="{'footer-links-dark': darkModeActive}">Kontakt oss</router-link> | <router-link to="employees" class="footer-links" :class="{'footer-links-dark': darkModeActive}">
              Ansatte</router-link>
        </div>
          <dark-mode-toggler @click.native="darkModeClicked = !darkModeClicked, checkDarkMode()" 
          :class="{'dark-mode-toggler-dark': darkModeActive}"></dark-mode-toggler>
      </div>
      `,
  data() {
    return {
      title: "Studentklinikken",
      darkModeClicked: false
    };
  },
    props: {
        darkModeActive: Boolean
    },
    methods: {
        checkDarkMode() {
            console.log("clicked" + this.darkModeClicked)
                this.$emit('dark-mode-change', this.darkModeClicked)   
    }
}
};

export default HomePage;
