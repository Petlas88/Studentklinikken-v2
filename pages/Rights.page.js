const RightsPage = {
    template: `
        
        <div class="container-fluid">
            <div id="title-row" class="row">
                <div class="col-12">
                    <h1>{{title}}</h1>
                </div>    
            </div>
            <div id="text-row" class="row">
                <p>
                Vi forholder oss til en rekke lover og regler som ivaretar dine pasientrettigheter. 
                Våre studenter må samtykke til å følge dette lovverket før de starter sin kliniske praksisperiode.
                Under følger en oversikt over de mest relevante bestemmelsen for deg som pasient ved Studentklinikken 
                tilhørende Institutt for Helsevitenskap.
                
                </p>
            </div>
            <transition name="slide-up">
            <div v-if="modalOneVisible" id="modal-one" class="modals">
                <div class="modal-header">
                    <button class="modal-collapse-btn" @click="modalOneVisible = !modalOneVisible">&#10006</button>
                </div>
                <div class="modals-body" v-bind:class="{'modal-dark': this.darkModeActive}">
                    <br><br>

                    <p>Studenter i praksis skal praktisere i henhold til gjeldene lovverk.
                    <br> <br>
                    Alle saker som angår klienter / pasienter er konfidensielle jfr. Helsepersonelloven §§ 21 til 25 og 
                    Lov om alternativ behandling av sykdom mv. §4.
                    </p>
                </div>
            </div>
            </transition>

            <transition name="slide-up">
            <div v-if="modalTwoVisible" id="modal-two" class="modals">
                <div class="modal-header">
                    <button class="modal-collapse-btn" @click="modalTwoVisible = !modalTwoVisible">&#10006</button>
                </div>
                <div class="modals-body" v-bind:class="{'modal-dark': this.darkModeActive}">
                    <br><br>
                    <p>Vi registrerer, behandler og lagrer personopplysninger om pasienter i henhold til pasientjournalloven, 
                        personvernforordningen (GDPR), personopplysningsloven, helsepersonelloven.
                    <br> <br>
                    Informasjonen lagres i en elektronisk pasientjournal. Den inneholder navn, fødselsdato og kontaktinformasjon, 
                    samt opplysninger om diagnose, sykdomsforløp, behandling, hvilken informasjon som er gitt og andre forhold 
                    som kan være av betydning.
                    <br> <br>
                    Alle som har tilgang til dine personalia og pasientjournal er underlagt taushetsplikt.
                    <br> <br>
                    Studentenes tilgang til journalprogrammet er begrenset til de ukene de har praksis.
                    <br> <br>
                    Utlevering av journaler krever signert samtykkeskjema fra klient/pasient.
                    <br> <br>
                    Journaler skal oppbevares frem til det ikke lenger antas å være bruk for dem. Når dette ikke lenger er tilfellet, 
                    skal som en hovedregel journalene makuleres på betryggende vis. Normalt er dette 10 år.
                    </p>
                </div>
            </div>
            </transition>
            <div id="rights-btn-row" class="row">   
                <div id="buttons-container" class="col-12">
                    <button class="rights-button-element" @click="modalOneVisible = !modalOneVisible">{{modalOneTitle}}</button>
                    <button class="rights-button-element" @click="modalTwoVisible = !modalTwoVisible">{{modalTwoTitle}}</button>
                </div>
            </div>
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
        </div>
    
    `,
  
    data() {
      return {
        title: "Dine Rettigheter",
        modalOneVisible: false,
        modalTwoVisible: false,
        modalOneTitle: "Hvordan vi ivaretar din sikkerhet",
        modalTwoTitle: "Hvordan vi behandler dine personopplysninger",
      };
    },
    props: {
        darkModeActive: Boolean
    },
    methods: {
        checkDarkMode() {
        console.log("clicked" + this.darkModeClicked)
        this.$emit('dark-mode-change', this.darkModeClicked)   
    }
    }
  
  
  };

export default RightsPage;