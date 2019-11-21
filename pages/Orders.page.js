const OrdersPage = {
    template: `
        <div class="container-fluid">
            <div id="title-row" class="row">
                <div class="col-12 orders-container">
                    <h1>{{ordersTitle}}</h1>
                    <div class="active-orders orders">
                        <div class="orders-header">
                            <h3>{{orders[2].service}}</h3>
                            <button id="cancel-order-btn">Avbestill</button>
                        </div>
                        <h4>{{orders[2].date}}</h4>
                        <h4>{{orders[2].time}}</h4>
                    </div>
                    <div v-if="showPrevOrders" class="past-orders orders">
                        <h3>{{orders[1].service}}</h3>
                        <h4>{{orders[1].date}}</h4>
                        <h4>{{orders[1].time}}</h4>
                    </div>
                    <div v-if="showPrevOrders" class="past-orders orders">
                        <h3>{{orders[0].service}}</h3>
                        <h4>{{orders[0].date}}</h4>
                        <h4>{{orders[0].time}}</h4>
                    </div>
                    
                </div> 
                <br>
                <div id="orders-footer">
                    <input id="show-btn" type="checkbox" v-model="showPrevOrders">&nbsp Vis utgåtte bestillinger
                    <span class="checkmark"></span>
                </div>
            </div>
        </div>
    
    `,

    data() {
        return {
            showPrevOrders: true,
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

}

export default OrdersPage;