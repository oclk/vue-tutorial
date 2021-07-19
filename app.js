const App = {
    data: () => ({
        title: '',
        description: '',
        severity: '',
        todos: [],
        danger: 'bg-danger',
        warning: 'bg-warning',
        info: 'bg-info'
    }),
    methods: {
        add() {
            const item = { title: this.title, description: this.description, severity: this.severity }
            this.todos.push(item)
        },
        del(index) {
            this.todos.splice(index, 1)
        },
        getClass(severity) {
            switch (severity) {
                case 'High':
                    return this.danger
                case 'Medium':
                    return this.warning
                case 'Low':
                    return this.info
                default:
                    return this.info
            }
        }
    }
}

Vue.createApp(App).mount('#app')