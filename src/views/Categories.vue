<template>
    <div class="container-fluid mt-5">
        <h1>Categories</h1>
        <div class="m-3">
            <SearchInput></SearchInput>
        </div><!-- -->
        <div class="row container">
            <div class="pt-5 col-md-4 col-card card-style col-12" v-for="categoryComp in categories_data" :key="categoryComp.id">
                <CardCategory :card_categorie_data="categoryComp"></CardCategory>
            </div>
        </div>
    </div>
</template>
<script>

    import CardCategory from "@/components/CardCategory.vue";
    import SearchInput from "@/components/SearchInput.vue";

    export default {
        components: {
            SearchInput,
            CardCategory
        },
        data(){
            return {
                urlAPI: 'http://fundamentos.academlo.com/api/v1',
                directorieUUID: '5c82982e-b63e-4280-8287-4eba0e99716a',
                categories_data: [ ]
            }
        },
        created(){
            //HERE FUNCTIONS TO LOAD DATA FROM THE AXIOS HTTP REQUEST
            this.getAllCategories()
        },
        methods: {
            getAllCategories() {
                const endPointCategories = `${this.urlAPI}/directories/${this.directorieUUID}/categories`;

                axios.get(endPointCategories)
                    .then(response => {
                        console.log(response.data);
                        this.categories_data = response.data.categories;
                    })
                    .catch(err => {

                    });
            }
        }
    }
</script>