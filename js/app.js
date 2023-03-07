let myapp = {
    data() {
        return {
            title: "rabotaet"
        }
    },
    methods: {
        onclose(){
            tg.close();
        }
    },  
};

const app = Vue.createApp(myapp);

app.mount("#app");
