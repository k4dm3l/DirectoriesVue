<template>
    <div class="container custome-container mt-5">
      <div id="row-data" class="row">
        <div class="col-md-6 d-flex flex-column justify-content-between">
          <div class="principal-text">
            <h1>{{ this.titleProduct }}</h1>
            <p class="text-secondary">
              {{ this.descProduct }}
            </p>
          </div>

          <div class="row d-flex justify-content-between align-items-center">
            <div class="col-md-6">
              <a :href="this.urlProduct" target="_blank" class="btn btn-transparent btn-block">
                Visite site
              </a>
            </div>

            <div class="col-md-6">
              <div
                class="row s-media d-flex justify-content-end align-items-center"
              >
                <h4 class="mr-1">Share</h4>
                <i class="fab fa-facebook-square"></i>
                <i class="ml-2 fab fa-twitter-square"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card-img">
            <img :src="this.imgUrlProduct" alt="" />
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            urlAPI: 'https://fundamentos.academlo.com/api/v1',
            directorieUUID: '5c82982e-b63e-4280-8287-4eba0e99716a',
            titleProduct: '',
            descProduct: '',
            imgUrlProduct: '',
            urlProduct: ''
        }
    },
    created(){
        this.getProductDetails();
    },
    methods: {
        getProductDetails() {
            let endPointProduct = `${this.urlAPI}/products/${this.$route.params.uuid}`;

            axios.get(endPointProduct)
                .then(response => {
                    this.titleProduct = response.data.name;
                    this.descProduct = response.data.description;
                    this.imgUrlProduct = response.data.image;
                    this.urlProduct = response.data.url;
                    
                    console.log(response.data);
                })
                .catch(err => {
                    alert(`Its not possible load data from de API - PRODUCTS DETAILS`);
                })
            console.log(`This is the product ${this.$route.params.uuid}`);
        }
    }
}
</script>
<style scoped>
    .principal-text h1 {
        font-size: 1.5rem;
        font-weight: 700;
    }

    .principal-text p {
        font-size: 1rem;
        font-weight: 200;
    }

    #row-data {
        min-height: calc(100vh - 280px);
    }

    i {
        font-size: 2em;
        color: #343A40;
        border-radius: 50%;
        /*border: solid 1px #343A40;*/
    }

    .btn {
        border: 2.2px solid #8E8E8E;
        font-size: 1.5rem;
        font-weight: 600 !important;
    }

    .card-img img {
        width: 100%;
    }

    .card-img {
        height: 60vh !important;
        border-radius: 5px;
        border: solid 1px #CCCCCC;
        overflow: auto;
    }
</style>