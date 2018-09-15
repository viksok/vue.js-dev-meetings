<template>
  <div>
    <h2>Products form</h2>
    <form @submit.prevent="addElem()">
      <input
          type="text"
          name="newProduct"
          v-model="newProduct"
          v-validate="'required'"
      >
      <button>Add vendor</button>

      <div v-show="errors.has('newProduct')">
        {{ errors.first('newProduct') }}
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "ProductForm",
    data() {
      return {
        newProduct: ''
      }
    },
    methods: {
      addElem() {
        this.$validator.validateAll()
          .then(result => {
            if (!result) {
              return;
            }
            //4/ But instead of adding element we're just emitting add-product event with product as a payload
            this.$emit('add-product', this.newProduct);
            this.newProduct = '';
            this.$validator.reset();
          })
      }
    }
  }
</script>

<style scoped>

</style>
