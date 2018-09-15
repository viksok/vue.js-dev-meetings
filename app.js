const app = new Vue({
  el: '#app',
  data: {
    smartphones: ['Moto', 'Huawei'],
    newElem: '', //init,
    elemToDelete: ''
  },
  methods: {
    addElem() {
      this.smartphones.push(this.newElem)
      this.newElem = '' // clear input value on button pressed
    },
    removeElem(index) {
      this.smartphones.pop(index)
    }
  }
})