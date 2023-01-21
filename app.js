const app = Vue.createApp({
    //data, functions, react to events
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            url: 'http://www.thenetninja.co.uk',
            showBooks: true,
            title: 'The Final Empire',
            author: 'Tim Timtiman',
            age: '29',
            x: 0,
            y: 0,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/book1.png', isFav:true},
                { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/book2.jpg', isFav:false},
                { title: 'the final empire', author: 'brandon sanderson', img: 'assets/book3.jpg', isFav:true}
            ]
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
        },
        handleEvent(e, arg)
        {
            console.log(e.type)
            if(arg){
                console.log(arg)
            }
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book)
        {
            book.isFav = !book.isFav
            // this.books[key].isFav = !this.books[key].isFav
        },
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')