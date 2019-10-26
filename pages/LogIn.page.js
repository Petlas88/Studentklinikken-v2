const LogInPage = {
  template: `
    <div class="container">
        <div class="row">
            <div id="title-row" class="col-12">
                <h1>Studentklinikken</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <p><b>{{userTxt}}</b></p>
                <input type="text" class="login-input" id="username-input" placeholder="Brukernavn"/>
                <p><b>{{passTxt}}</b></p>
                <input type="text" class="login-input" id="password-input" placeholder="Passord"/>
            </div>
        </div>
    </div>
    `,
  data() {
    return {
      userTxt: "Brukernavn",
      passTxt: "Passord"
    };
  }
};

export default LogInPage;
