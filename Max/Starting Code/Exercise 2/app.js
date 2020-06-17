new Vue({
  el: '#exercise',
  data: {
    value: '',
  },
  methods: {
    showAlert() {
      alert('Button clicked');
    },
    storeValue() {
      this.value = event.target.value;
    },
  },
});
