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
              <form v-on:submit.prevent action="" id="reg-modal-body">
                  <h1 id="mod-title">Registrer deg</h1>
                  <p class="input-labels" id=full-name>Fullt navn</p>
                  <input type="text" name="" class="reg-input" :class="{'error-class': invalidFullname}" placeholder="Fullt navn" id="reg-name" v-model="fullName"/>
                  <i v-if="invalidFullname" class="fas fa-exclamation-circle"></i>
                  <div id="error-div" v-if="invalidFullname">
                    <p v-if="invalidFullname" id="login-error-message"><b>{{invalidFullnameMessage}}</b></p>
                  </div>
                  <p class="input-labels">Fødselsdato</p>
                  <input type="date" class="reg-input" placeholder="Fødselsdato" id="reg-dob" v-model ="birthdate"/>
                  <p class="input-labels">E-post</p>
                  <input type="email" class="reg-input" :class="{'error-class': invalidEmail}" placeholder="E-post" id="reg-mail" v-model="username"/>
                  <i v-if="invalidEmail" class="fas fa-exclamation-circle"></i>
                  <div id="error-div" v-if="invalidEmail">
                    <p id="login-error-message"><b>{{invalidEmailMessage}}</b></p>
                  </div>
                  <p class="input-labels">Passord</p>
                  <input type="password" class="reg-input" :class="{'error-class': invalidPasswordLength || invalidRepPassword}"  placeholder="Passord" id="reg-pass" v-model="password"/>
                  <i v-if="invalidPasswordLength || invalidRepPassword" class="fas fa-exclamation-circle"></i>
                  <div id="error-div" v-if="invalidPasswordLength">
                    <p v-if="invalidPasswordLength" id="login-error-message"><b>{{invalidPasswordLengthMessage}}</b></p>
                  </div>
                  <div id="error-div" v-if="invalidRepPassword">
                    <p v-if="invalidRepPassword" id="login-error-message"><b>{{invalidRepPasswordMessage}}</b></p>
                  </div>
                  <p class="input-labels">Gjenta passord</p>
                  <input type="password" class="reg-input" :class="{'error-class': invalidPasswordLength || invalidRepPassword}" placeholder="Gjenta passord" id="reg-rep-pass" v-model="repPassword"/> 
                  <i v-if="invalidPasswordLength || invalidRepPassword" class="fas fa-exclamation-circle"></i>
                  <div id="error-div" v-if="invalidPasswordLength">
                    <p v-if="invalidPasswordLength" id="login-error-message"><b>{{invalidPasswordLengthMessage}}</b></p>
                  </div>
                  <div id="error-div" v-if="invalidRepPassword">
                    <p v-if="invalidRepPassword" id="login-error-message"><b>{{invalidRepPasswordMessage}}</b></p>
                  </div>
                  <br/>
                  <button id="reg-btn" class="login-modal-btns" @click="checkRegInput()">Registrer</button>
              </form>
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
        <form v-on:submit.prevent action="" id="login-input-row" class="row">
            <div id="login-input-col" class="col-12">
                <p class="input-labels" >Brukernavn</p>
                <input type="text" class="login-input" :class="{'error-class': logInFailed}" id="username-input" 
                placeholder="Brukernavn(e-post)" v-model="username"/> <i v-if="logInFailed" class="fas fa-exclamation-circle"></i>
                <p class="input-labels">Passord</p>
                <input type="password" class="login-input" :class="{'error-class': logInFailed}" id="password-input"  
                placeholder="Passord" v-model="password"/> <i v-if="logInFailed" class="fas fa-exclamation-circle"></i>
                <br/>
                <div id="error-div" v-if="logInFailed">
                <p id="login-error-message"><b>{{loginErrorMessage}}</b></p>
                </div>
                
                <button id="login-btn" class="login-modal-btns" @click="checkInput">Logg inn</button>
                <hr/>
                <p>eller</p>
                <hr/>
                <h2 @click="visibleMod = !visibleMod" id="reg-link">Registrer deg</h2>
                <router-link to="home">Fortsett uten å logge inn</router-link>
            </div>
        </form>  
    </div>
    `,
  data() {
    return {
      visibleMod: false,
      loginErrorMessage:"Feil brukernavn eller passord",
      logInFailed: false,
      overlayActive: false,
      invalidFullname: false,
      invalidFullnameMessage: "Ufullstendig navn",
      invalidPasswordLength: false,
      invalidPasswordLengthMessage: "Passord må være 8 karakterer langt",
      invalidRepPassword: false,
      invalidRepPasswordMessage: "Passord samstemmer ikke",
      invalidEmail: false,
      invalidEmailMessage: "Ugyldig epostadresse",
      emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
          password: "kek123456"
        },
        {
          fullName: "Bjarne Brøndbo",
          username: "bjarne@kek.no",
          password: "bjarne123"
        },
        { 
          fullName: "Christian Sin Test Bruker",
          username: "1",
          password: "1"
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
            this.$emit('logged-in-change', true, this.users[i].fullName, this.users[i].username)
            this.$router.push('/home')
          } 
        } else {
          this.logInFailed = true;
        }
        
      }

    },
    checkRegInput() {
      if(this.fullName.length > 3) {
        this.invalidFullname = false;
      } else {
        this.invalidFullname = true;
      }
      if(this.emailRegex.test(this.username)) {
        this.invalidEmail = false;
      } else {
        this.invalidEmail = true;
      }
      if(this.password.length >= 8 && this.repPassword.length >= 8) {
        this.invalidPasswordLength = false;
        if(this.password == this.repPassword) {
          this.invalidRepPassword = false;
        } else {
          this.invalidRepPassword = true;
        }
      } else {
        this.invalidPasswordLength = true;
      }

      if(this.invalidFullname == false && this.invalidEmail == false && this.invalidPasswordLength == false && this.invalidRepPassword == false) {
        this.users.push({fullName: this.fullName, username: this.username, password: this.password});
        this.visibleMod = false;
        this.regSuccessful = true;
      }
    }
  }
  
};

export default LogInPage;