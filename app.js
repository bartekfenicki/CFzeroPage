const app = Vue.createApp({
    //data, functions 
    //template: '<h2> Hello thats template </h2>'

    data() {
        return {
            items: 0,
        }
        
    },
    methods: {
        bgChange(){
            document.getElementById("info").style.backgroundColor = "#489C33";
            document.getElementById("recycling").style.backgroundColor = "#2B2A29";
        },
        bgLeave(){
            document.getElementById("recycling").style.backgroundColor = "#489C33";
            document.getElementById("info").style.backgroundColor = "#2B2A29";
        }
 
    }  
});






app.mount('#app');
