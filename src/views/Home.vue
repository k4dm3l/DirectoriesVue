<template>
  <div>
    <Banner></Banner>
    <div class="container">
      
      <div class="row">
        <div class="pt-5 col-md-4 col-card card-style col-12" v-for="product in array_products_home" :key="product.id">
          <CardProduct :card_product_data="product"></CardProduct>
        </div>
      </div>

      <div class="pt-5 row">
        <SearchInput></SearchInput>
      </div>
      <div class="row">
        <div class="pt-5 col-md-3" v-for="category in array_categories_home" :key="category.id">
          <CardCategory :card_categorie_data="category"></CardCategory>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import CardProduct from "@/components/CardProduct.vue";
import CardCategory from "@/components/CardCategory.vue";
import SearchInput from "@/components/SearchInput.vue";

export default {
  components: {
    Banner,
    CardProduct,
    SearchInput,
    CardCategory
  },
  data(){
    return {
      urlAPI: 'https://fundamentos.academlo.com/api/v1',
      directorieUUID: '5c82982e-b63e-4280-8287-4eba0e99716a',
      products: [ ],
      categories_data: [ ],
      array_products_home: [ ],
      array_categories_home: [ ]
    }
  },
  created(){
    //HERE FUNCTIONS TO LOAD DATA FROM THE AXIOS HTTP REQUEST
    this.getHomeData();
  },
  methods: {
    //Function to get products
    getHomeData() {
      const endPointCategories = `${this.urlAPI}/directories/${this.directorieUUID}/categories`;
      
      let randomProducts;

      axios.get(endPointCategories)
        .then(response => {
          this.categories_data = response.data;
          randomProducts = (Math.floor(Math.random() * this.categories_data.categories.length));

          //
          for (let i = 0; i < 8; i++) {
            this.array_categories_home.push(this.categories_data.categories[i]);
          }
          //

          if(randomProducts == 0){
            randomProducts = 1;
          } else {

            let endPointProducts = `${this.urlAPI}/categories/${this.categories_data.categories[randomProducts].uuid}/products`;
            console.log(endPointProducts);

            axios.get(endPointProducts)
              .then(response => {
                this.products = response.data

                if(this.products.products.length > 2){
                  for (let i = 0; i < 3; i++) {
                    this.array_products_home.push(this.products.products[i]);
                  }
                }

              })
              .catch(err => {
                alert(`Its not possible load data from de API - PRODUCTS`);
              });
          }
        })
        .catch(err => {
          alert(`Its not possible load data from de API - CATEGORIES`);
        });
    }
  }
};
</script>

<style scoped>
</style>