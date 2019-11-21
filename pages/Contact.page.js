const ContactPage = {
    template: `
    <div class="container-fluid">
            <div id="title-row" class="row">
                <div class="col-12">
                    <h1>{{title}}</h1>
                </div>    
            </div>
            <div id="contact-input-row" class="row">
                <div class="col-12">
                    <h3>Ring oss</h3>
                    <form id="call-button" action="tel:97117690">
                    <button id="call-btn" >971 17 690</button>
                    </form>
                    <br><br>            
                    <p>Ditt navn</p>
                    <input type="text" v-bind:value="this.userFullName" placeholder="Navn"/>
                    <p>Din e-post</p>
                    <input type="text" v-bind:value="this.username" placeholder="E-post"/>
                    <p>Hva gjelder henveldelsen?</p>
                    <select>
                        <option id="placeholder-option" disabled selected value>Velg et alternativ</option>
                        <option>Bestilling av time</option>
                        <option>Spørsmål om tilbud</option>
                        <option>Klage</option>
                    </select>
                    <p>Din melding</p>
                    <textarea name="" id="" cols="35" rows="10" placeholder="Skriv din melding her"></textarea> <br/>
                    <button id="contact-send-btn">Send</button> <br/>
                </div>
            </div>
            <dark-mode-toggler @click.native="darkModeClicked = !darkModeClicked, checkDarkMode()" 
            :class="{'dark-mode-toggler-dark': darkModeActive}"></dark-mode-toggler>
    </div>
    
    `,

data() {
    return {
        title: "Kontakt oss",
        darkModeClicked: false
    };
},

props: {
    isLoggedIn: Boolean,
    username: String,
    userFullName: String,
    darkModeActive: Boolean
},

methods: {
    checkDarkMode() {
        console.log("clicked" + this.darkModeClicked)
            this.$emit('dark-mode-change', this.darkModeClicked)   
    }
}

};
export default ContactPage;