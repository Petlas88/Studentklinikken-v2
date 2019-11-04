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
                  <router-link to="orders" class="home-links">Mine bestillinger</router-link> <br> 
                  <br>
                  <router-link to="prices" class="home-links">Priser</router-link> <br>
                  <br>
                  <router-link to="treatments" class="home-links">Våre behandlinger</router-link>
              </div>
          </div>
          <div id="home-footer"><router-link to="rights" class="footer-links">Rettigheter</router-link> | <router-link to="contact" class="footer-links">Kontakt oss</router-link></div>
      </div>
      `,
  data() {
    return {
      title: "Studentklinikken"
    };
  }
};

export default HomePage;
