const darkModeToggleItem = Vue.component ('dark-mode-toggler', {
    template: `
        <div @click="slided = !slided, checkSlided()" class="dark-mode-toggler">
            <div class="dark-mode-thumb" id="thumb" :class="{'dark-mode-thumb-dark': slided}">
                <i v-if="!slided" class="fas fa-moon fa-2x"></i> <i v-if="slided" class="fas fa-sun fa-2x"></i>
            </div>
        </div>
    `,
    data() {
        return {
            slided: false
        }
    },
    methods: {
        checkSlided() {
            console.log(this.slided)
        }
    }


  
})

export default darkModeToggleItem; 