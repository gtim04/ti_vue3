const app = Vue.createApp({
    //data, functions, react to events
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Tim Timtiman',
            age: '29'
        }
    },
    methods: {
        changeTitle(title){
            // console.log('you clicked me')
            // this.title = 'Avatar Book Title'
            this.title = title
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')