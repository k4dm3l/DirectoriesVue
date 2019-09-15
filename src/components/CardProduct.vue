<template>
    <div class="card">
      <div class="card-img">
        <img :src= "card_product_data.image" alt="..." />
      </div> <!-- /img/category-page.png -->
      <div class="card-body d-flex flex-column justify-content-between">
        <div class="p-3">
          <h2 class="card-title">{{ card_product_data.name }}</h2>
          <p class="card-text">{{ card_product_data.description }}</p>
        </div>
        <div>
          <router-link :to="'/product/'+card_product_data.uuid" class="btn btn-transparent btn-block">Visite site</router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props : [ 'card_product_data' ]
};
</script>

<style scoped>
/* COMPONENT CARD */

.col-card {
  margin-top: 30px;
}

.card {
  height: 100%;
  box-shadow: 0 0 5px #cccccc;
}

.card-img {
  height: 300px !important;
  overflow: auto;
}

.card-img img {
  width: 100%;
}

.card-body {
  /*border: solid 1px red;*/
  min-height: auto !important;
}

.card-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700 !important;
}

.card-body p {
  font-size: 1rem;
  font-weight: 400 !important;
  color: #403f3f;
}

.btn {
  border: 2.2px solid #dfdfdf;
  font-size: 1rem;
  font-weight: 600 !important;
  box-shadow: 0 0 5px #cccccc;
}
</style>