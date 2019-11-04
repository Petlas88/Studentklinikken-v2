const EmployeesPage = {
    template: `
    <div class="container-fluid">
        <div id="title-row" class="row">
            <div class="col-12">
                <h1>Våre ansatte</h1>
                <select name="" id="department-dropdown">
                    <option value="choose">Velg avdeling</option>
                    <option value="leader">Ledelsen</option>
                    <option value="ost">Osteopati</option>
                    <option value="accu">Akkupunktur</option>
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
    </div>
    `,
    data() {
        return {
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
    }
}

export default EmployeesPage;
