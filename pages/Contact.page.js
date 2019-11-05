const ContactPage = {
    template: `
    <div class="container-fluid">
            <div id="title-row" class="contact-row">
                <div class="col-12">
                    <h1>{{title}}</h1>
                </div>    
            </div>
            <div class="contact-row">
                <p>Ring oss</p>
                <form id="call-button" action="tel: +47 92820670">
                    <input type="submit" value="971 17 690" />
                </form>
                <br><br>            
                <p>Ditt navn</p>
                <input type="text"/>
                <p>Din e-post</p>
                <input type="text"/>
                <p>Hva gjelder henveldelsen?</p>
                <select>
                    <option id="placeholder-option" disabled selected value>Velg et alternativ</option>
                    <option>Bestilling av time</option>
                    <option>Spørsmål om tilbud</option>
                    <option>Klage</option>
                </select>
                <p>Din melding</p>
                <input type="textarea"/>
            </div>
    </div>
    `,

data() {
    return {
        title: "Kontakt oss"
    };
}
};
export default ContactPage;