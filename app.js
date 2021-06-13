// Lesson #1 - Introduction [ 🚀 ]
/*
const { createApp } = Vue

const App = {
    data: () => ({
        message: "Hello world!"
    })
}

Vue.createApp(App).mount('#app')
*/

// Lesson #2 - Application & Component Instances [ 🐣 ]
/*
// Register 'globals'
const app = Vue.createApp({})
app.component('SearchInput', SearchInputComponent)
app.directive('focus', FocusDirective)
app.use(LocalePlugin)

// Chaining
Vue.createApp({})
    .component('SearchInput', SearchInputComponent)
    .directive('focus', FocusDirective)
    .use(LocalePlugin)

// Component Instance Properties
const app = Vue.createApp({
    data() {
        return { count: 4 }
    }
})

const vm = app.mount('#app')

console.log(vm.count) // => 4
*/
// Lifecycle Hooks
const { createApp } = Vue

const App = {
    data: () => ({
        counter: 0
    }),
    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        console.log('created')
    },
    beforeMount() {
        console.log('beforeMount')
    },
    mounted() {
        console.log('mounted')
    },
    beforeUpdate() {
        console.log('beforeUpdate' + ' counter -> ' + this.counter)
    },
    updated() {
        console.log('updated' + ' counter -> ' + this.counter)
    }
}

Vue.createApp(App).mount('#app')