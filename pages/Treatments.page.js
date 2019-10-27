
const TreatmentsPage = {
  mixins: [VueClickaway.mixin],
  template: `
        
        <div class="container">
            <div id="title-row" class="row">
                <div class="col-12">
                    <h1>{{title}}</h1>
                </div>    
            </div>
            <transition name="bounce">
            <div v-if="modalOneVisible" id="modal-one" class="modals" v-on-clickaway="hideModal">
                <div class="modal-header">
                    <button class="modal-collapse-btn" @click="modalOneVisible = !modalOneVisible">&#10006</button>
                </div>
                <div class="modals-body">
                    <br><br>
                    <h4>Akupunktur er en persontilpasset behandling der
                    diagnostikk, behandling og oppfølging er skreddersydd for
                    hver pasient med sine unike særtrekk og behov under hvert
                    trinn av behandlingen.
                    </h4><br>

                    <p>&#8226; Kronisk smerte</p>
                    <p>&#8226; Migrene og hodepine</p>
                    <p>&#8226; Lettere angst og depresjon</p>
                    <p>&#8226; Stress</p>
                    <p>&#8226; Allergi</p>
                    <p>&#8226; Kvinnehelse</p>
                    <p>&#8226; Fordøyelsesproblematikk</p>
                    <p>&#8226; Søvnproblemer</p><br>

                    <p>Enkelt fortalt virker akupunktur ved å stimulere perifere
                    nerver og bindevev som frigjør signalstofer som
                    har en efekt på det sentrale nervesystemet. Disse
                    signalstofene regulerer områder i hjernen som blant
                    annet påvirker det autonome nervesystemet.
                    Akupunktøren vil i førstegangskonsultasjonen ha fokus
                    på å få oversikt over symptomer og årsaksforhold. I
                    behandlingen settes tynne nåler i spesifikke punkter
                    på kroppen. I tillegg kan det gis annen behandling, for
                    eksempel kopping-massasje eller varmende behandling.
                    Det gis veiledning om kosthold og fysisk aktivitet når
                    dette er aktuelt.
                    </p>
                </div>
            </div>
            </transition>

            <transition name="bounce">
            <div v-if="modalTwoVisible" id="modal-two" class="modals" v-on-clickaway="hideModal">
                <div class="modal-header">
                    <button class="modal-collapse-btn" @click="modalTwoVisible = !modalTwoVisible">&#10006</button>
                </div>
                <div class="modals-body">
                    <br><br>
                    <h4>En osteopat undersøker og behandler muskel- og
                    skjelettsmerter med manuelle behandlingsteknikker
                    på benk. Terapeuten fokuserer på å avdekke
                    funksjons- og bevegelsesforstyrrelser som kan være
                    med på å skape smerte. Behandlingen egner seg for
                    pasienter i alle aldere.
                    </h4><br>

                    <p>&#8226; Ryggsmerter</p>
                    <p>&#8226; Nakkesmerter</p>
                    <p>&#8226; Hodepine</p>
                    <p>&#8226; Bekkensmerter</p>
                    <p>&#8226; Seneplager</p>
                    <p>&#8226; Leddplager</p>
                    <p>&#8226; Idrettsplager</p>
                    <p>&#8226; Belastningskader</p><br>

                    <h4>Osteopati som helseprofesjon</h4><br>
                    <p>Osteopati baseres på vitenskapelige og kliniske fag.
                    En osteopat undersøker og behandler ved hjelp av
                    den biopsykososiale modellen og tar utgangspunkt i
                    at god helse ikke bare er fravær av sykdom, men også
                    et velfungerende muskel- og skjelettsystem. Gjennom
                    osteopatibehandling ønsker en å fremme kroppens
                    evne til å hjelpe seg selv. Behandlingen er trygg og
                    individualisert.
                    Osteopaten vil sammen med deg lage en plan for dine
                    behandlinger, og fortelle hva du kan forvente og hva du
                    selv må ta ansvar for.
                    </p>
                </div>
            </div>
            </transition>

            <transition name="bounce">
            <div v-if="modalThreeVisible" id="modal-three" class="modals" v-on-clickaway="hideModal">
                <div class="modal-header">
                    <button class="modal-collapse-btn" @click="modalThreeVisible = !modalThreeVisible">&#10006</button>
                </div>
                <div class="modals-body">
                    <br><br>
                    <h4>Veiledning passer ypperlig for deg
                    som ønsker å forebygge sykdom,
                    gå ned eller opp i vekt, spise
                    optimalt med tanke på trening
                    og prestasjon, har allergier eller
                    intoleranser som krever tilpasning
                    av kosten eller ønsker å ha et
                    generelt sunt kosthold.</h4><br>

                    <p>Kostveiledningen gjøres av
                    avgangsstudenter som tar en
                    bachelorgrad i ernæring under
                    veiledning av autoriserte kliniske
                    ernæringsfysiologer.</p>
                </div>
            </div>
            </transition>

            <transition name="bounce">
            <div v-if="modalFourVisible" id="modal-four" class="modals" v-on-clickaway="hideModal">
                <div class="modal-header">
                    <button class="modal-collapse-btn" @click="modalFourVisible = !modalFourVisible">&#10006</button>
                </div>
                <div class="modals-body">
                    <br><br>
                    <h4>Høyskolen Kristianias fysiologiske testlaboratorium er et topp moderne
                    laboratorium som brukes til undervisning og forskning.
                    Også våre studenter, spesielt de på Bachelor i Fysisk aktivitet og ernæring,
                    har mye undervisning i laboratoriet.
                    </h4><br>

                    <p>Testing av egen helse er samtidig både motiverende
                    og gir verdifull informasjon for mange andre.
                    Derfor tilbyr vi tester til deg som ønsker å teste
                    din fysiske tilstand og prestasjonsevne.
                    På testlaboratoriet finner vi ut hva status er nå,
                    måler fremgang og gir deg videre råd og tilpasning av mosjon og trening.</p><br>

                    <h4>Test av maksimalt oksygenopptak</h4>
                    <p>Testen forteller hvor stor kroppsmotor man har – også kalt oksygenopptak.
                    Det maksimale oksygenopptaket er med på å bestemme din aerobe kapasitet,
                    og brukes til å vurdere om treningen gir resultater.</p><br>

                    <h4>Arbeids-EKG, inkl. blodtrykksmåling</h4>
                    <p>Et arbeids-EKG brukes først og fremst til å fremskaffe
                    kunnskap om det foreligger tegn til hjerte- og karsykdom
                    under fysiske anstrengelser.
                    Arbeids-EKGen utføres på sykkel under økende belastning,
                    og sammen med måling av blodtrykk får testpersonen festet
                    elektroder på kroppen som måler hjerteaktiviteten under testen.
                    Etter avsluttet test gjennomgås testresultatene med
                    lege/testpersonell som igangsetter tiltak, hvis behov.</p><br>

                    <h4>Spirometri - Lungefunksjonstest</h4>
                    <p>Spirometri er en lungefunksjonsprøve. Spirometri måler to
                    forskjellige egenskaper ved lungene; mengde (volum) luft som
                    pustes ut og strømningshastigheten til denne luften (flow).
                    Tilsammen gir målingene svært god informasjon om lungenes og
                    luftveienes funksjoner. Spirometri brukes svært mye hos f.eks.
                    astma- og KOLS-pasienter.
                    Målingene som gjøres ved spirometri er uavhengig av
                    muskelstyrke og fysisk kondisjon, og gir derfor et objektivt
                    mål på lungefunksjonen.
                    Høyskolen Kristiania er en ledende aktør i utviklingen av våre
                    fagfelt. Fysiologisk testlaboratorium er en del av et aktivt
                    læringsmiljø på høyskolen, med fokus på grundighet, kompetanse
                    og sikkerhet. Som student på våre bachelorstudier får du prøvd
                    ut dine kunnskaper i praksis.</p><br>

                    <h4>Laktatprofil</h4>
                    <p>Laktatprofiltesten brukes for å finne egnede intensitetssoner på
                    trening. Denne testen ble tidligere kalt anaerob terskel og
                    gjennomføres på tredemølle eller sykkel.
                    Her arbeides det med konstant belastning i fem minutter,
                    så tas det en blodprøve og belastningen økes. Dette fortsetter
                    til det er endel laktat i blodet, og belastningen oppleves som
                    moderat hard til hard.
                    I tillegg til blodlaktat måler vi hjertefrekvens og oksygenopptak.</p>

                </div>
            </div>
            </transition>
            <div id="trtmnt-btn-row" class="row">   
                <div id="buttons-container" class="col-12">
                    <button class="button-element" @click="modalOneVisible = !modalOneVisible, modalIsVisible = !modalIsVisible">{{modalOneTitle}}</button>
                    <button class="button-element" @click="modalTwoVisible = !modalTwoVisible, modalIsVisible = !modalIsVisible">{{modalTwoTitle}}</button>
                    <button class="button-element" @click="modalThreeVisible = !modalThreeVisible, modalIsVisible = !modalIsVisible">{{modalThreeTitle}}</button>
                    <button class="button-element" @click="modalFourVisible = !modalFourVisible, modalIsVisible = !modalIsVisible">{{modalFourTitle}}</button>  
                </div>
            </div> 
        </div>
    
    `,

  data() {
    return {
      title: "Våre behandlinger",
      modalOneVisible: false,
      modalTwoVisible: false,
      modalThreeVisible: false,
      modalFourVisible: false,
      modalIsVisible: false,
      modalOneTitle: "Akupunktur",
      modalTwoTitle: "Osteopati",
      modalThreeTitle: "Kostholdsveiledning",
      modalFourTitle: "Fysiologisk testlab"
    };
  },

  methods: {
    hideModal() {
        this.modalOneVisible = false;
        this.modalTwoVisible = false;
        this.modalThreeVisible = false;
        this.modalFourVisible = false;
    }
  }


};


export default TreatmentsPage;
