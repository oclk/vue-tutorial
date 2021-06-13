// Lesson #1 - Introduction [ 🚀 ]
const { createApp } = Vue

const App = {
    data: () => ({
        message: "Hello world!"
    })
}

Vue.createApp(App).mount('#app')