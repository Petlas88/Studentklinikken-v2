const LogInPage = {
  template: `
    <div class="container">
        <!--REGISTRATION MODAL-->
        <div v-if="visibleMod" id="reg-modal">
            <div id="reg-modal-header">
                <div @click="visibleMod=!visibleMod" id="reg-modal-collapse-btn">&#10006</div>
            </div>
            <div id="reg-modal-body">
                <h1 id="mod-title">{{modTitle}}</h1>
                <h2>Fullt navn</h2>
                <input type="text" name="" class="reg-input" placeholder="Fullt navn" id="reg-name"/>
                <h2>Fødselsdato</h2>
                <input type="date" class="reg-input" placeholder="Fødselsdato" id="reg-dob"/>
                <h2>E-post</h2>
                <input type="email" class="reg-input" placeholder="E-post" id="reg-mail"/>
                <h2>Passord</h2>
                <input type="password" class="reg-input" placeholder="Passord" id="reg-pass"/>
                <h2>Gjenta passord</h2>
                <input type="password" class="reg-input" placeholder="Gjenta passord" id="reg-rep-pass"/>
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
                <h2><b>{{userTxt}}</b></h2>
                <input type="text" class="login-input" id="username-input" placeholder="Brukernavn(e-post)"/>
                <h2><b>{{passTxt}}</h2></p>
                <input type="password" class="login-input" id="password-input" placeholder="Passord"/>
                <br/>
                <button class="login-btns">Logg inn</button> 
                <hr/>
                <p>eller</p>
                <hr/>
                <h2 @click="visibleMod = !visibleMod" id="reg-link">Registrer deg</h2>
                <router-link to="home">-></router-link>
            </div>
        </div>
        
    </div>
    `,
  data() {
    return {
      userTxt: "Brukernavn",
      passTxt: "Passord",
      visibleMod: false,
      modTitle: "Registrer deg"
    };
  }
};

export default LogInPage;
