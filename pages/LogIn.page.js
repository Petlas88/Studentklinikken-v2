const LogInPage = {
  template: `
    <div class="container">
        <!--REGISTRATION MODAL-->
        <transition name="overlay-fade" @after-enter="overlayActive = true">
        <div v-if="visibleMod" id="reg-modal">
            <transition name="slide-up" @after-leave="visibleMod= false">
            <div v-if="overlayActive" id="reg-modal-content">
              <div id="reg-modal-header">
                  <div @click="overlayActive = !overlayActive" id="reg-modal-collapse-btn">&#10006</div>
              </div>
              <div id="reg-modal-body">
                  <h1 id="mod-title">{{modTitle}}</h1>
                  <p class="input-labels" id=full-name>Fullt navn</p>
                  <input type="text" name="" class="reg-input" placeholder="Fullt navn" id="reg-name"/>
                  <p class="input-labels">Fødselsdato</p>
                  <input type="date" class="reg-input" placeholder="Fødselsdato" id="reg-dob"/>
                  <p class="input-labels">E-post</p>
                  <input type="email" class="reg-input" placeholder="E-post" id="reg-mail"/>
                  <p class="input-labels">Passord</p>
                  <input type="password" class="reg-input" placeholder="Passord" id="reg-pass"/>
                  <p class="input-labels">Gjenta passord</p>
                  <input type="password" class="reg-input" placeholder="Gjenta passord" id="reg-rep-pass"/>
                  <button id="reg-btn" class="login-modal-btns">Registrer deg</button>
              </div>
            </div>
          </transition>
        </div>
        </transition>
        <!--END REGISTRATION MODAL-->
        <div id="login-title-row" class="row">
            <div class="col-12">
                <h1>Studentklinikken</h1>
            </div>
        </div>
        <div id="login-input-row" class="row">
            <div id="login-input-col" class="col-12">
                <h2 class="input-labels"><b>{{userTxt}}</b></h2>
                <input type="text" class="login-input" id="username-input" placeholder="Brukernavn(e-post)"/>
                <h2 class="input-labels"><b>{{passTxt}}</b></h2>
                <input type="password" class="login-input" id="password-input" placeholder="Passord"/>
                <br/>
                <button id="login-btn" class="login-modal-btns" @click="checkInput">Logg inn</button>
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
      modTitle: "Registrer deg",
      loggedIn: false,
      overlayActive: false, 
      users: [
        {
          username: "kek@kek.no",
          password: "kek123"
        },
        {
          username: "bjarne@kek.no",
          password: "bjarne"
        }
      ]
    };
  },
  methods: {
  checkInput() {
      let username = document.getElementById("username-input").value;
      let password = document.getElementById("password-input").value;
      for (let i = 0; i < this.users.length; i++) {
        if (username.toLowerCase() == this.users[i].username) {
          if (password == this.users[i].password) {
            this.loggedIn = true;
          }
        }
      }
      this.validateLogin();

    },
  validateLogin() {
    if(this.loggedIn == true) {
      console.log("Logged in");
    } else {
      console.log("Fail");
    }
  }  
  
  }
};

export default LogInPage;
