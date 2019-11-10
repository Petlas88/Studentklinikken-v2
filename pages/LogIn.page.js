const LogInPage = {
  template: `
    <div id="login-cont" class="container-fluid">
        <!--REGISTRATION MODAL-->
        <transition name="overlay-fade" @after-enter="overlayActive = true">
        <div v-if="visibleMod" id="reg-modal">
            <transition name="slide-up" @after-leave="visibleMod= false">
            <div v-if="overlayActive" id="reg-modal-content">
              <div id="reg-modal-header">
                  <div @click="overlayActive = !overlayActive" id="reg-modal-collapse-btn">&#10006</div>
              </div>
              <div id="reg-modal-body">
                  <h1 id="mod-title">Registrer deg</h1>
                  <p class="input-labels" id=full-name>Fullt navn</p>
                  <input type="text" name="" class="reg-input"  placeholder="Fullt navn" id="reg-name" v-model="fullName"/>
                  <p class="input-labels">Fødselsdato</p>
                  <input type="date" class="reg-input" placeholder="Fødselsdato" id="reg-dob" v-model ="birthdate"/>
                  <p class="input-labels">E-post</p>
                  <input type="email" class="reg-input" placeholder="E-post" id="reg-mail" v-model="username"/>
                  <p class="input-labels">Passord</p>
                  <input type="password" class="reg-input" placeholder="Passord" id="reg-pass" v-model="password"/>
                  <p class="input-labels">Gjenta passord</p>
                  <input type="password" class="reg-input" placeholder="Gjenta passord" id="reg-rep-pass" v-model="repPassword"/>
                  <br/>
                  <button id="reg-btn" class="login-modal-btns" @click="checkRegInput()">Registrer</button>
              </div>
            </div>
          </transition>
        </div>
        </transition>
        <transition name="popUp">
          <div v-if="regSuccessful" id="reg-confirmation-box"><p>Registrering<br>fullført!</p><p id="check-mark">&check;</p></div>
        </transition>

        
        <!--END REGISTRATION MODAL-->
        <div id="login-title-row" class="row">
            <div class="col-12">
                <h1>Studentklinikken</h1>
            </div>
        </div>
        <div id="login-input-row" class="row">
            <div id="login-input-col" class="col-12">
                <p class="input-labels" >Brukernavn</p>
                <input type="text" class="login-input" :class="{'error-class': logInFailed}" id="username-input" placeholder="Brukernavn(e-post)" v-model="username"/>
                <p class="input-labels">Passord</p>
                <input type="password" class="login-input" :class="{'error-class': logInFailed}" id="password-input" placeholder="Passord" v-model="password"/>
                <br/>
                <div id="error-div" v-if="logInFailed">
                <p id="login-error-message"><b>{{loginErrorMessage}}</b></p>
                </div>
                
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
      visibleMod: false,
      loginErrorMessage:"Feil brukernavn eller passord",
      logInFailed: false,
      overlayActive: false,
      invalidFullname: false, 
      fullName: '',
      birthdate: '',
      username: '',
      password: '',
      repPassword: '',
      regSuccessful: false,
      users: [
        { 
          fullName: "Kekemeister Keksen",
          username: "kek@kek.no",
          password: "kek123"
        },
        {
          fullName: "Bjarne Brøndbo",
          username: "bjarne@kek.no",
          password: "bjarne"
        }
      ]
    };
  },
  props: {
    isLoggedIn: Boolean
  },
  methods: {
  checkInput() {
      for (let i = 0; i < this.users.length; i++) {
        if (this.username == this.users[i].username) {
          if (this.password == this.users[i].password) {
            this.$emit('logged-in-change', true)
            this.$router.push('/home')
          } 
        } else {
          this.logInFailed = true;
        }
        
      }

    },
  checkRegInput() {
      if (this.fullName.length > 2 && this.username.length > 5) {
        this.users.push({fullName: this.fullName, username: this.username, password: this.password});
        //console.log(this.users);
        this.visibleMod = false;
        this.regSuccessful = true;
        setTimeout(() => this.regSuccessful = false, 2000);
      } else {
        this.invalidFullname = true
      }
      
    }
    
  }
  
};

export default LogInPage;

//:class="{'error-class' : invalidFullName}"