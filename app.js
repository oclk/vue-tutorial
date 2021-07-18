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
/*
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
*/

// Lesson #4 - Data Properties and Methods [ 👀 ]
/*
const App = {
    data: () => ({
        counter: 0,
    }),
    methods: {
        inc() {
            this.counter++;
        },
        dec() {
            this.counter--;
        },
        getDate() {
            return new Date();
        }
    }
}

Vue.createApp(App).mount('#app')
*/

// Lesson #5 - Computed Properties and Watchers [ 👁 ]
/*
const App = {
    data: () => ({
        fullname: "",
        name: "",
        surname: "",
        counter: 0,
        counter2: 0
    }),
    methods: {
        getCounter() {
            console.log('from method')
            return this.counter
        }
    },
    computed: {
        getFullName() {
            return this.name + " " + this.surname
        },
        getCounter2() {
            console.log('from computed')
            return this.counter2
        }
    },
    watch: {
        name(newVal, oldVal) {
            console.log(oldVal)
            this.fullname = newVal + " " + this.surname
        },
        surname(newVal, oldVal) {
            console.log(oldVal)
            this.fullname = this.name + " " + newVal
        }
    }
}

Vue.createApp(App).mount('#app')
*/

// Lesson #6 - Computed Properties and Watchers [ 🎨 ]
// Binding HTML Classes (Object Syntax | Array Syntax)
// Binding Inline Styles (Object Syntax | Array Syntax | Multiple Values)
/*
const App = {
    data: () => ({
        isDanger: true,
        isSuccess: false,
        classSyntax: {
            danger: true,
            success: false
        },
        border: 'border',
        danger: 'danger',
        styleSyntax: {
            color: 'yellow',
            fontSize: 30 + 'px'
        },
        styleColor: 'color: green; fontSize: 24px',
        styleBorder: 'border: 1px solid grey; border-radius: 10px' 
    })
}

Vue.createApp(App).mount('#app')
*/

// Lesson #7 - Conditional Rendering [ 🤷‍♂️ ]
// v-if (v-else | v-else-if)
// v-show
// v-if vs v-show
const App = {
    data: () => ({
        type: 'FIRST'
    })
}

Vue.createApp(App).mount('#app')