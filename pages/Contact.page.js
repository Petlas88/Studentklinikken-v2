const ContactPage = {
    template: `
    <div class="container-fluid" v-bind:class="[darkMode ? 'dark' : '']">
            <div id="title-row" class="row">
                <div class="col-12">
                    <h1>{{title}}</h1>
                </div>    
            </div>
            <div id="contact-input-row" class="row">
                <div class="col-12">
                    <h3>Ring oss</h3>
                    <form id="call-button" action="tel: +47 92820670">
                    <button id="call-btn" type="submit" value="971 17 690">971 17 690</button>
                    </form>
                    <br><br>            
                    <p>Ditt navn</p>
                    <input type="text" placeholder="Navn"/>
                    <p>Din e-post</p>
                    <input type="text" placeholder="E-post"/>
                    <p>Hva gjelder henveldelsen?</p>
                    <select>
                        <option id="placeholder-option" disabled selected value>Velg et alternativ</option>
                        <option>Bestilling av time</option>
                        <option>Spørsmål om tilbud</option>
                        <option>Klage</option>
                    </select>
                    <p>Din melding</p>
                    <textarea name="" id="" cols="35" rows="10" placeholder="Skriv din melding her"></textarea>
                    <button id="contact-send-btn">Send</button>
                </div>
            </div>
            <button @click="darkModeToggle()">Toggle Dark Mode</button>
    </div>
    
    `,

data() {
    return {
        title: "Kontakt oss",
        darkMode: false
    };
},
methods: {
    darkModeToggle() {
        if(this.darkMode) {
            this.darkMode = false;
        } else {
            this.darkMode = true;
        }
    }
}
};
export default ContactPage;