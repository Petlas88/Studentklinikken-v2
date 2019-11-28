const EmployeesPage = {
    template: `
    <div class="container-fluid">
    <dark-mode-toggler @click.native="darkModeClicked = !darkModeClicked, checkDarkMode()" :class="{'dark-mode-toggler-dark': darkModeActive}"></dark-mode-toggler>
        <div id="title-row" class="row">
            <div class="col-12" id="employees-header">
                <h1>Våre ansatte</h1>
                <select name="" id="department-dropdown">
                    <option value="choose">Velg avdeling</option>
                    <option value="leader">Ledelsen</option>
                    <option value="ost">Osteopati</option>
                    <option value="aku">Akupunktur</option>
                    <option value="fys">Fysiologisk Testlab</option>
                    <option value="kost">Kostholdsveiledning</option>
                </select>
        </div>
        </div>
        <div class="row">
            <div id="list-col" class="col-12">
                <li v-for="employee in employees">
                    <employee-list-item :item="employee"></employee-list-item>
                </li>
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
            darkModeClicked: false,
            employees: [ 
                {
                    imgSrc: "Emp1.jpg",
                    employeeName: "Anna"
                },
                {
                    imgSrc: "Emp2.jpg",
                    employeeName: "Nicoline"
                },
                {
                    imgSrc: "Emp3.jpg",
                    employeeName: "Thomas"
                }
            ]
        }
    },

    props: {
        darkModeActive: Boolean,
      },
    
      methods: {
        checkDarkMode() {
            console.log("clicked" + this.darkModeClicked)
                this.$emit('dark-mode-change', this.darkModeClicked)   
    
        }
      },
}

export default EmployeesPage;
