<template>
    <div class="mt-5 container">
        <h1>{{ this.categorieName }}</h1>
        <div class="row">
            <div class="pt-5 col-md-4 col-card card-style col-12" v-for="product in products_Category" :key="product.id">
                <CardProduct :card_product_data="product"></CardProduct>
            </div>
        </div>
    </div>
</template>
<script>

    import CardProduct from "@/components/CardProduct.vue";

    export default {
        components: {
            CardProduct
        },
        data() {
            return {
                urlAPI: 'https://fundamentos.academlo.com/api/v1',
                directorieUUID: '5c82982e-b63e-4280-8287-4eba0e99716a',
                categorieName: '',
                products_Category: [ ]
            }
        },
        created(){
            this.getAllCategoriesProducts();
        },
        methods: {
            getAllCategoriesProducts() {
                const endPointProductsCategorie = `${this.urlAPI}/categories/${this.$route.params.uuid}/products`;

                axios.get(endPointProductsCategorie)
                    .then(response => {
                        this.categorieName = response.data.name;
                        this.products_Category = response.data.products;
                        console.log(response);
                    })
                    .catch(err => {
                        alert(`Its not possible load data from de API - Products CATEGORIE`);
                    });
            }
        }
    }
</script>