const InformationPage = {
    template: `
    <div class="container-fluid">
      <div id="title-row" class="row">
        <div class="col-12">
          <h1>Informasjon</h1>
            <div id="trtmnt-btn-row" class="row">   

              <div id="buttons-container" class="col-12">

                <router-link to="contact">
                  <button class="button-element">Kontakt Oss</button>
                </router-link>

                <router-link to="rights">
                  <button class="button-element">Rettigheter</button>
                </router-link>

                <router-link to="employees">
                  <button class="button-element">Våre ansatte</button>
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
                <router-link to="booking" class="menu-links">
                    <i class="fas fa-plus-circle"></i>
                </router-link>
                <router-link to="orders" class="menu-links">
                    <i class="fas fa-calendar-check"></i>
                </router-link>
    </div>


</div>
    
    
    
    `,

    data() {
        return {

        }

    },


};

export default InformationPage;

