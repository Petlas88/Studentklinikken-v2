const PricesPage = {
  template: `
      <div class="container-fluid">
          <div id="title-row" class="row">
              <div class="col-12">
                  <h1>Priser</h1>
              </div>    
          </div>
          <div class="row">
              <div id="prices-btn-row" class="col-12">
                <button class="prices-btns" @click="showOrdinary = !showOrdinary, showDiscount = false" :class="{'prices-btns-clicked': showOrdinary}">Ordinær
                </button> 
                <button class="prices-btns" @click="showDiscount = !showDiscount, showOrdinary = false" :class="{'prices-btns-clicked': showDiscount}">Rabatt*
                </button>
                <div id="ordinary-price-text" class="prices-text" v-if="showOrdinary"><p v-for="value in ordinaryPrice">{{value}}</p></div>
                <div id="discount-price-text" class="prices-text" v-if="showDiscount"><p v-for="value in discPrice">{{value}}</p></div>
                <div><p v-for="value in priceInfo">{{value}}</p></div>
              </div>    
          </div>
      </div>
      `,
  data() {
    return {
      ordinaryPrice: {
        firstTreatment: "Første behandling 300,-",
        nextTreatment: "Oppfølgende behandling 220,-"
      },
      showOrdinary: false,
      discPrice: {
        firstTreatment: "Første behandling 150,-",
        nextTreatment: "Oppfølgende behandling 100,-"
      },
      showDiscount: false,
      priceInfo: {
        otherPrices1: "Kostveiledning er gratis",
        otherprices2:
          "Sommerklinikken for akupunktur og osteopati har egen priser",
        discWho:
          "*Rabatten gjelder: Honnør over 60 år, ungdom under 18 år, studenter og HK ansatte"
      }
    };
  }
};

export default PricesPage;
