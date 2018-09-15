<template>
  <li>
    {{ item }} {{ index }}
    <button @click="removeElement(index)">Remove</button>
  </li>
</template>

<script>
export default {
    name: "ProductItem",
    props: {
      item: String,
      index: Number
    },
    methods: {
      removeElement(index) {
        this.$emit('remove-element', index)
      }
    }
  }
</script>

<style scoped>

</style>
