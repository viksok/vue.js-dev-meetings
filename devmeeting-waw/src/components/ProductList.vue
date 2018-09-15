<template>
  <div>
    <h2>Products list</h2>
    <ul>
      <ProductItem v-for="(item, index) in products" :item="item" :index="index" :key="index" @remove-element="onRemoveElement"
      >
      </ProductItem>
    </ul>

    <p v-if="!products.length">No products!</p>
  </div>
</template>

<script>
  import ProductItem from './ProductItem';
export default {
  name: "ProductList",
  props: {
    products: Array
  },
  components: {
    ProductItem
  },
  methods: {
    onRemoveElement(index) {
      this.$emit('remove-product', {index})
    }
  }
}
</script>

<style scoped>

</style>
