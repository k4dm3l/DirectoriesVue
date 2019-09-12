<template>
    <div class="container-fluid mt-5">
        <h1>Categories</h1>
        <div class="m-3">
            <SearchInput></SearchInput>
        </div>
        <div class="m-5">
            <CardCategory></CardCategory>
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
        }
    }
</script>