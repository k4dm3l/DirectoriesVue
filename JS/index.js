new Vue({
    el: '#app',
    data : {
        categories: [],
        apiURL: 'http://fundamentos.academlo.com/api/v1/',
        uuid_Directory: 'UUID_DIRECTORY_TEST'
    },
    created() {
        //Metodo antes de dibujar en el DOM
        this.getCategories();
    },
    methods: {
        getCategories(){
            alert('THIS IS THE FUNCTION THAT GET CATEGORIES OF THE API');
        }
    }
});