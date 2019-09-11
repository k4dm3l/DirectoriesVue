<template>
    <div class="input-group mb-3 mt-3">
      <input placeholder="Browse categories" type="text" class="form-control input-search"
        aria-label="Search Categorie Box" />
      <div class="input-group-append">
        <span class="input-group-text"><i class="fas fa-search"></i></span>
      </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style scoped>
.input-search {
    border-top: none;
    border-right: none;
    border-left: none;
}

.input-search:focus {
    border-color: none !important;
}

.input-group-text {
    border-top: none;
    border-right: none;
    background-color: transparent;
}
</style>