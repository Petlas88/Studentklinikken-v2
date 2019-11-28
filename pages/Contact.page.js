const ContactPage = {
    template: `
    <div class="container-fluid">
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
                    <br>
                    <button @click="showContactForm = true, faderVisible = true"id="contact-send-btn">Send oss en melding</button>           
                    
                </div>

                <div id=removable-fader v-if="faderVisible" @click="showContactForm = false, faderVisible = false"></div>

                    <div id="contact-modal" v-if="showContactForm" v-bind:class="{'modal-dark': this.darkModeActive}">

                    <div class="modal-head">
                        <button class="modal-close-btn click-icon" @click="showContactForm = false, faderVisible = false">&#10006</button>
                    </div>
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
                    <textarea  placeholder="Skriv din melding her"></textarea> <br/>
                    <button id="contact-send-btn">Send</button> <br/>
            </div>
            <dark-mode-toggler @click.native="darkModeClicked = !darkModeClicked, checkDarkMode()" 
            :class="{'dark-mode-toggler-dark': darkModeActive}"></dark-mode-toggler>
</div>
    </div>
    
    `,

data() {
    return {
        title: "Kontakt oss",
        darkModeClicked: false,
        showContactForm: false,
        faderVisible: false
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