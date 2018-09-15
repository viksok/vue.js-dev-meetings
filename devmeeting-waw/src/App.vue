<template>
  <div id="app">

    <product-list
        :products="products"
        @remove-product="onRemoveProduct"
    ></product-list>
    <product-form
        @add-product="onAddProduct"
    ></product-form>

  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'
import ProductForm from './components/ProductForm.vue'
import ProductItem from './components/ProductItem';

export default {
  name: 'app',
  components: {
    ProductList,
    ProductItem,
    ProductForm
  },
  data() {
    return {
      products: ['Moto', 'Huawei'],
    }
  },
  methods: {
    onAddProduct(product) {
      this.products.push(product)
    },
    onRemoveProduct(index) {
      console.log('remove', this.products[index])
      this.products.splice(index, 1);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
