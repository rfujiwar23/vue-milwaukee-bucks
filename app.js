const app = Vue.createApp ({
    // data, functions, events
    // template: '<h2>Ryo Fujiwara</h2>'
    data() {
        return {
            showPlayer: true,
            url: "https://www.nba.com/bucks/",
            team: [
                {name: "Giannis Antetokoumpo", position: "Power Forward", img: "assets/1.jpg", isFav: true },
                {name: "Khris Middleton", position: "Small Forward", img: "assets/2.jpg", isFav: false },
                {name: "Jrue Holliday", position: "Point Guard", img: "assets/3.jpg", isFav: true },
            ]
        }
    },
    methods: {
        toggleShowPlayer() {
            this.showPlayer = !this.showPlayer
        },
        toggleFav(player) {
            player.isFav = !player.isFav
        }
    }
})

app.mount('#app')