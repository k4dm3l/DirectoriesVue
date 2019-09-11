<template>
  <div>
    <Banner></Banner>
    <div class="container">
      <div class="pt-5 row">
        <CardProduct></CardProduct>
      </div>
      <div class="pt-5 row">
        <SearchInput></SearchInput>
      </div>
      <div class="pt-5">
        <CardCategory></CardCategory>
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
  }
};
</script>

<style scoped>
</style>