<template>
    <router-link :to="'/test'">
    <div class="card card-styles">
        <div class="card-description d-flex justify-content-center align-items-center flex-wrap ">
          <i class="fab fa-js-square icon-style "></i>
          <h3 class="title-description d-block w-100 text-center">
            {{ card_categorie_data.name }}
          </h3>
          <p class="sub-title-description">
            12 Entrada
          </p>
        </div>
        <img src="https://images.pexels.com/photos/7114/laptop-mobile.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="Foto 1" />
      </div
      ></router-link>
</template>
<script>
    export default {
        props: ['card_categorie_data']
    }
</script>