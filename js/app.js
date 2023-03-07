let myapp = {
    data() {
        return {
            title: "rabotaet"
        }
    },
    methods: {
        onclose(){
            tg.close();
        },
        useEffect(){
            tg.ready();
        }
    },  
    mounted() {
        useEffect();
    },
};

const app = Vue.createApp(myapp);

app.mount("#app");