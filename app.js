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
/*
// Lesson #2 - Application & Component Instances [ 🐣 ]
// Register 'globals'
const app = Vue.createApp({
    // options
})
app.component('header', Header)
app.use(Chat)
app.directive('focusing', FocusingName)

// Chaining
Vue.createApp({})
    .component('header', Header)
    .use(Chat)
    .directive('focusing', FocusingName)

// Component Instance Properties
Vue.createApp({
    data: () => ({
        message: '',
        flag: false,
    })
})

// Lifecycle Hooks
Vue.createApp({
    data: () => ({
        counter: 0
    }),
    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        console.log('created')
    },
    mounted() {
        console.log('mounted')
    },
    updated() {
        console.log('updated' + ' Counter: ' + this.counter)
    },
}).mount('#app')
*/

// Lesson #3 - Template Syntax [ 🤖 ]
// Interpolations (Text | Raw HTML | Attributes | JavaScript Expressions)
const App = {
    data: () => ({
        message: 'Hello world!',
        rowHtml: '<h1>Row HTML description</h1>',
        id: "tempId",
        color: "RED",
        index: 1,
    })
}

Vue.createApp(App).mount('#app')