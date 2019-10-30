const employeeItem = Vue.component('employee-list-item', {
    template: `
    <div class="employee-div">
        <div class="img-div"><img :src="item.imgSrc" class alt="A picture of one of our coworkers "/></div> 
        <p>{{item.employeeName}}</p>
        <hr/>
    </div>
    `,
    props: ['item']
});

export default employeeItem; 