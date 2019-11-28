const OrdersPage = {
    template: `
        <div class="container-fluid">
            <div id="title-row" class="row">
                <div v-if="isLoggedIn == true" class="col-12 orders-container">
                    <h1>{{ordersTitle}}</h1>
                    <div id="scroll-container">

                        <div v-if="orderActive" class="active-orders orders">
                            <div v-if="orderActive" class="orders-header">
                                <h3>{{orders[2].service}}</h3>
                                <i @click="showCancellation = true, faderVisible = true" class="click-icon fas fa-calendar-times"></i>
                            </div>
                            <div v-if="orderActive" class="orders-date">
                                <i class="far fa-calendar-alt"></i><h4>{{orders[2].date}}</h4>
                            </div>
                            <div v-if="orderActive" class="orders-time">
                                <i class="far fa-clock"></i><h4>{{orders[2].time}}</h4>
                            </div>
                        </div>

                        <div v-if="showPrevOrders" class="past-orders orders">
                            <h3>{{orders[1].service}}</h3>
                            <div class="orders-date">
                                <i class="far fa-calendar-alt"></i><h4>{{orders[1].date}}</h4>
                            </div>
                            <div class="orders-time">
                            <i class="far fa-clock"></i><h4>{{orders[1].time}}</h4>
                            </div>
                        </div>

                        <div v-if="showPrevOrders" class="past-orders orders">
                            <h3>{{orders[0].service}}</h3>
                            <div class="orders-date">
                                <i class="far fa-calendar-alt"></i><h4>{{orders[0].date}}</h4>
                            </div>
                            <div class="orders-time">
                            <i class="far fa-clock"></i><h4>{{orders[0].time}}</h4>
                            </div>
                        </div>

                        <div v-if="showPrevOrders" class="past-orders orders">
                            <h3>{{orders[0].service}}</h3>
                            <div class="orders-date">
                                <i class="far fa-calendar-alt"></i><h4>{{orders[0].date}}</h4>
                            </div>
                            <div class="orders-time">
                            <i class="far fa-clock"></i><h4>{{orders[0].time}}</h4>
                            </div>
                        </div>

                    </div>
                    <label class="check-label">Vis utgåtte bestillinger
                        <input type="checkbox" checked="checked" v-model="showPrevOrders">
                        <span class="checkmark"></span>
                    </label>
                </div> 
                <br>
                <div id="orders-footer">
                    
                </div> 
            </div>
            <div id=removable-fader v-if="faderVisible" @click="showCancellation = false, faderVisible = false"></div>
                <div v-if="showCancellation" id="confirmation-modal" v-bind:class="{'modal-dark': this.darkModeActive}">
                    <h2>Er du sikker på at du vil kansellere din time hos {{orders[2].service}} <br>
                        på {{orders[2].date}} klokken {{orders[2].time}}
                    </h2>

                    <button class="cancel-btns"@click="orderActive = false, showCancellation = false, faderVisible = false">Kanseller timen</button>
                    <br>
                    <br>
                    <button class="cancel-btns" @click="showCancellation = false, faderVisible = false">Behold timen</button>
                </div>

            <div v-if="isLoggedIn == false">
                <h2>Logg inn eller registrer deg for å se dine bestillinger</h2>
                <br> <br>
                <router-link to="/">
                    <button class="button-element">Trykk her for å logge inn</button>
                </router-link>
            </div>

            <div class="footer-menu">
                <i class="fas fa-chevron-circle-left"></i>
                <router-link to="home" class="menu-links">
                    <i class="fas fa-home"></i>
                </router-link>
                <i class="fas fa-user"></i>
                <router-link to="booking" class="menu-links">
                    <i class="fas fa-plus-circle"></i>
                </router-link>
            </div>
        </div>
    
    `,

    data() {
        return {
            showPrevOrders: true,
            faderVisible: false,
            showCancellation: false,
            orderActive: true,
            ordersTitle: "Mine bestillinger",
            orders: [
                {
                    service: "Akupunktur",
                    date: "Fredag 4 Oktober",
                    time: "09.00 - 09.50",
                    active: false
                },
                {
                    service: "Osteopati",
                    date: "Onsdag 9 Oktober",
                    time: "11.00 - 11.50",
                    active: false
                },
                {
                    service: "Osteopati",
                    date: "Fredag 29 November",
                    time: "12.00 - 12.50",
                    active: true
                },
            ]
        };
    },
    
    props: {
    darkModeActive: Boolean,
    isLoggedIn: {
        default: false,
    }

    
},

}

export default OrdersPage;

// <i class="far fa-thrash-alt" 
// "far fa-calendar-alt"
// far fa-clock"