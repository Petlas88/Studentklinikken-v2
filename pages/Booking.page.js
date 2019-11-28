
const BookingPage = {
  template: `
    <div class="container-fluid">
    <dark-mode-toggler @click.native="darkModeClicked = !darkModeClicked, checkDarkMode()" :class="{'dark-mode-toggler-dark': darkModeActive}"></dark-mode-toggler>
      <div id="title-row" class="row">
      
        <div class="col-12">
          <h1>Velg tjeneste du ønsker å bestille</h1>
            <div id="trtmnt-btn-row" class="row">   

              <div id="buttons-container" class="col-12">

                <router-link to="akucalendar">
                  <button class="button-element">{{modalOneTitle}}</button>
                </router-link>

                <router-link to="ostcalendar">
                  <button class="button-element">{{modalTwoTitle}}</button>
                </router-link>

                <router-link to="kostcalendar">
                  <button class="button-element">{{modalThreeTitle}}</button>
                </router-link>

                <router-link to="fyscalendar">
                  <button class="button-element">{{modalFourTitle}}</button> 
                </router-link> 
                
              </div>
            </div> 
        </div>
      </div>
      <div class="footer-menu">
        <router-link to="home" class="menu-links">
          <i class="fas fa-chevron-circle-left"></i>
        </router-link>
        <router-link to="home" class="menu-links">
          <i class="fas fa-home"></i>
        </router-link>
        <i class="fas fa-user"></i>
        <router-link to="orders" class="menu-links">
          <i class="fas fa-calendar-check"></i>
        </router-link>
        
      </div>

    </div>
    
    
  `,

  data() {
    return {
      modalOneTitle: "Akupunktur",
      modalTwoTitle: "Osteopati",
      modalThreeTitle: "Kostholdsveiledning",
      modalFourTitle: "Fysiologisk testlab",
      darkModeClicked: false,

    }

    
  },

  props: {
    darkModeActive: Boolean
  },

  methods: {
    checkDarkMode() {
        console.log("clicked" + this.darkModeClicked)
            this.$emit('dark-mode-change', this.darkModeClicked)   

    }
  },


 
};

export default BookingPage;
