<template>
    <div class="mt-5 container-fluid">
        <h1>Products NAME_CATEGORY</h1>
        <div class="m-5">
            <CardProduct></CardProduct>
        </div>
    </div>
</template>
<script>

    import CardProduct from "@/components/CardProduct.vue";

    export default {
        components: {
            CardProduct
        }
    }
</script>