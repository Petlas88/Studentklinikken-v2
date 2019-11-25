
const BookingPage = {
  template: `
    <div class="container-fluid">
      <div id="title-row" class="row">
        <div class="col-12">
          <h1>Velg tjeneste du ønsker å bestille</h1>
            <div id="trtmnt-btn-row" class="row">   

              <div id="buttons-container" class="col-12">

                <router-link to="akucalendar">
                  <button class="button-element" 
                  @click="modalOneVisible = !modalOneVisible, modalIsVisible = !modalIsVisible">{{modalOneTitle}}</button>
                </router-link>

                <router-link to="ostcalendar">
                  <button class="button-element" 
                  @click="modalTwoVisible = !modalTwoVisible, modalIsVisible = !modalIsVisible">{{modalTwoTitle}}</button>
                </router-link>

                <router-link to="kostcalendar">
                  <button class="button-element" 
                  @click="modalThreeVisible = !modalThreeVisible, modalIsVisible = !modalIsVisible">{{modalThreeTitle}}</button>
                </router-link>

                <router-link to="fyscalendar">
                  <button class="button-element"
                  @click="modalFourVisible = !modalFourVisible, modalIsVisible = !modalIsVisible">{{modalFourTitle}}</button> 
                </router-link> 
                
              </div>
            </div> 
        </div>
      </div>
      <div class="footer-menu">
        <i class="fas fa-chevron-circle-left"></i>
        <router-link to="home" class="menu-links">
          <i class="fas fa-home"></i>
        </router-link>
        <i class="fas fa-user"></i>
      </div>

    </div>
    
    
  `,

  data() {
    return {
      modalOneTitle: "Akupunktur",
      modalTwoTitle: "Osteopati",
      modalThreeTitle: "Kostholdsveiledning",
      modalFourTitle: "Fysiologisk testlab",

    }
  }


 
};

export default BookingPage;
