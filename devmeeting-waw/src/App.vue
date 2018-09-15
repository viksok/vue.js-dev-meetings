<template>
  <div id="app">
    <h2>Smartphones list</h2>
    <ul>
      <li v-for="(s, index) in smartphones">{{ s }} {{ index }}
        <button @click="removeElem(index)" key>Remove</button>
      </li>
    </ul>

    <p v-if="!smartphones.length">No products!</p>

    <form @submit.prevent="addElem()">
      <input
          type="text"
          name="newVendor"
          v-model="newElem"
          v-validate="'required'"
      >
      <button>Add vendor</button>

      <div v-show="errors.has('newVendor')">
        {{ errors.first('newVendor') }}
      </div>
    </form>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      smartphones: ['Moto', 'Huawei'],
      newElem: '' //init
    }
  },
  methods: {
    addElem() {
      this.$validator.validateAll()
        .then(result => {
          if (!result) {
            return;
          }
          this.smartphones.push(this.newElem);
          this.newElem = ''; // clear input value on button pressed
          this.$validator.reset(); // reset validator state
        })
    },
    removeElem(index) {
      this.smartphones.splice(index, 1);
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
