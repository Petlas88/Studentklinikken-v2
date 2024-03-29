const AkuCalendarPage = {
    template: `
        <div class="container-fluid">
        <dark-mode-toggler @click.native="darkModeClicked = !darkModeClicked, checkDarkMode()" :class="{'dark-mode-toggler-dark': darkModeActive}"></dark-mode-toggler>
            <div id="title-row" class="row">
                <div class="col-12">
                    <h1>Akupunktur</h1>
                    <h3>{{callendarTitle}}</h3>
                    <!--<button @click = "populateCalendar">Test</button>-->
                    <div id="calendar-container">
                        <div v-for="(day, index) in calendarDays" @click = "selectedDay = index, hoursVisible = true, highlight()" 
                        class="dateCells" :class="{'dateCells-dark': darkModeActive, cellSelected:calendarDays[index].clicked}">
                        {{dayNames[day.date.getDay()]}}<br>{{day.date.getDate()}}<br>{{monthNames[day.date.getMonth()]}}
                        </div>
                    </div>
                    <div id="hours-container" v-if="hoursVisible" >
                        <h3>{{dayNamesComplete[calendarDays[selectedDay].date.getDay()]}} 
                            {{calendarDays[selectedDay].date.getDate()}}
                            {{monthNamesComplete[calendarDays[selectedDay].date.getMonth()]}}</h3>
                        <div id="hours-wrapper">
                            <li v-for="(hour, index) in calendarDays[selectedDay].hours" 
                            v-bind:class="{ bookedHours: calendarDays[selectedDay].hours[index].booked }" 
                            @click = "selectedHour = index, showConfirm()">
                                {{hour.time}}
                            </li>
                        </div>
                    </div>
    
                </div> 
            </div>

            
            <div id=removable-fader v-if="faderVisible" @click="faderVisible = false, confModalVisible = false, promptLogIn = false"></div>
                <div id="confirmation-modal" v-if="promptLogIn" v-bind:class="{'modal-dark': this.darkModeActive}">
                    <h2 id="login-alert">Du må logge inn eller registrere deg for å kunne bestille time</h2>

                    <router-link to="/">
                        <button class="button-element">Trykk her for å logge inn</button>
                    </router-link>
                </div>

                <div id="confirmation-modal" v-if="confModalVisible" v-bind:class="{'modal-dark': this.darkModeActive}">
                    <h2>Du har valgt {{service}} <br>{{dayNamesComplete[calendarDays[selectedDay].date.getDay()]}}
                        {{calendarDays[selectedDay].date.getDate()}}
                        {{monthNamesComplete[calendarDays[selectedDay].date.getMonth()]}}<br>
                    Kl. {{calendarDays[selectedDay].hours[selectedHour].time}}</h2>
                    <br><br>
                    <h3>Ønsker du å bekrefte denne timen, {{userFullName}}?</h3><br>
                    <button id="order-conf-btn" @click="orderModalVisible = true, faderVisible = false, 
                    persistentVisible = true, confModalVisible = false">Jeg bekrefter</button>
                    <button id="order-conf-btn" @click="faderVisible = false, confModalVisible = false">Avbryt</button>

                </div>
                <div id=persistent-fader v-if="persistentVisible"></div>
                <div id="confirmed-order-modal" v-if="orderModalVisible" v-bind:class="{'modal-dark': this.darkModeActive}">
                    <h1>Takk for din bestilling {{userFullName}}</h1><h2>Vi sees<br>
                    {{dayNamesComplete[calendarDays[selectedDay].date.getDay()]}} 
                        {{calendarDays[selectedDay].date.getDate()}}
                        {{monthNamesComplete[calendarDays[selectedDay].date.getMonth()]}}<br>
                    Kl. {{calendarDays[selectedDay].hours[selectedHour].time}}</h2>
                    <router-link to="orders" id="order-conf-btn"><h4>Dine bestillinger</h4></router-link>
                    <router-link to="home" id="order-conf-btn"><h4>Hjem</h4></router-link>
                </div>
                <div class="footer-menu">
                    <router-link to="booking" class="menu-links">
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
        service: "akupunktur",
        selectedDay: null,
        selectedHour: null,
        faderVisible: false,
        persistentVisible: false,
        promptLogIn: false,
        callendarTitle: "Velg dag og tidspunkt",
        dayNames: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
        monthNames: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
        dayNamesComplete: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
        monthNamesComplete: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", 
        "November", "Desember"],
        calendarDays: [],
        hoursVisible: false,
        confModalVisible: false,
        orderModalVisible: false,
        currentUser: "test bruker",
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        date: new Date().getDate(),
        darkModeClicked: false,
        

    }

},
props: {
    darkModeActive: Boolean,
    isLoggedIn: Boolean,
    userFullName: String,

},

methods: {

    populateCalendar() {
        for(let i = 0; i < 30; i++) {
            this.calendarDays.push( {id: i, date: new Date(this.year, this.month, this.date + i), fullyBooked: false, 
                clicked: false, hours: [{ time: "08.00", booked: false }, 
            { time: "09.00", booked: false },{ time: "10.00", booked: false }, { time: "11.00", booked: false }, 
            { time: "12.00", booked: false },
            { time: "13.00", booked: false }, { time: "14.00", booked: false }, { time: "15.00", booked: false }]} );
            
        }

        for(let i = 0; i < 240; i++) {
            this.calendarDays[Math.floor(Math.random() * 30)].hours[Math.floor(Math.random() * 8)].booked = true;
            }
    },

    showConfirm($event) {
        if(this.isLoggedIn == true) {
            if (this.calendarDays[this.selectedDay].hours[this.selectedHour].booked == false) {
            this.confModalVisible = true; 
            this.faderVisible = true;
            } else {
                return;
            }
        } else {
            this.promptLogIn = true;
        }
    },
    
    highlight() {
        for(let i = 0; i < this.calendarDays.length; i++) {
            if(i == this.selectedDay) {
                this.calendarDays[this.selectedDay].clicked = true;
                
            } else {
                this.calendarDays[i].clicked = false;
            }
            
        }
    },

    checkDarkMode() {
        console.log("clicked" + this.darkModeClicked)
            this.$emit('dark-mode-change', this.darkModeClicked)   

    }
},
created: function() {
    this.populateCalendar()
}
}


export default AkuCalendarPage;