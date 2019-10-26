const LogInPage = {
  template: `
    <div class="container">
        <!--REGISTRATION MODAL-->
        <div v-if="visibleMod" id="reg-modal">
            <div id="reg-modal-header">
                <div @click="visibleMod=!visibleMod" id="reg-modal-collapse-btn">&#10006</div>
            </div>
            <div id="reg-modal-body">
                <h1>Registrer deg</h1>
            </div>
        </div>
        <!--END REGISTRATION MODAL-->
        <div class="row">
            <div id="title-row" class="col-12">
                <h1>Studentklinikken</h1>
            </div>
        </div>
        <div id="login-input-row" class="row">
            <div class="col-12">
                <p><b>{{userTxt}}</b></p>
                <input type="text" class="login-input" id="username-input" placeholder="Brukernavn"/>
                <p><b>{{passTxt}}</b></p>
                <input type="password" class="login-input" id="password-input" placeholder="Passord"/>
                <br/>
                <button class="login-btns">Logg inn</button> 
                <hr/>
                <p>eller</p>
                <hr/>
                <p @click="visibleMod = !visibleMod" id="reg-link"><b>Registrer deg</b></p>
            </div>
        </div>
        
    </div>
    `,
  data() {
    return {
      userTxt: "Brukernavn",
      passTxt: "Passord",
      visibleMod: false
    };
  }
};

export default LogInPage;
