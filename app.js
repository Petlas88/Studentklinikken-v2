const homePage = {
  template: `
    <div id="home-cont" class="container">
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
                <router-link to="my-orders" class="home-links">Mine bestillinger</router-link> <br> 
                <br>
                <router-link to="prices" class="home-links">Priser</router-link> <br>
                <br>
                <router-link to="treatments" class="home-links">Våre behandlinger</router-link>
            </div>
        </div>
        <footer id="home-footer"><router-link to="rights" class="footer-links">Rettigheter</router-link> | <router-link to="contact" class="footer-links">Kontakt oss</router-link></footer>
    </div>
    `,
  data() {
    return {
      title: "Studentklinikken"
    };
  }
};

const prices = {
  template: `
    <div class="container">
        <div id="title-row" class="row">
            <div class="col-12">
                <h1>Priser</h1>
            </div>    
        </div>
        <div class="row">
            <div id="prices-btn-row" class="col-12">
              <button class="prices-btns" @click="showOrdinary = !showOrdinary, showDiscount = false" :class="{'prices-btns-clicked': showOrdinary}">{{ordinaryPriceBtn}}</button> 
              <button class="prices-btns" @click="showDiscount = !showDiscount, showOrdinary = false" :class="{'prices-btns-clicked': showDiscount}">{{discPriceBtn}}</button>
              <div id="ordinary-price-text" class="prices-text" v-if="showOrdinary"><p>{{ordinaryPrice}}</p></div>
              <div id="discount-price-text" class="prices-text" v-if="showDiscount"><p>{{discPrice}}</p></div>
              <div><p>{{priceInfo}}</p></div>
            </div>    
        </div>
    </div>
    `,
  data() {
    return {
      ordinaryPriceBtn: "Ordinær",
      ordinaryPrice: "Normal pris",
      showOrdinary: false,
      discPriceBtn: "Rabatt*",
      discPrice: "Rabbatert pris",
      showDiscount: false,
      priceInfo: "*Rabatten gjelder for disse"
    };
  }
};

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: homePage
    },
    {
      path: "/prices",
      component: prices
    }
  ]
});

new Vue({
  el: "#app",
  router: router
});
