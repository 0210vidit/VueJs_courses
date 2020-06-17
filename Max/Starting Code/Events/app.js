new Vue({
  el: '#app',
  data: {
    counter: 0,
    x: 0,
    y: 0,
  },
  methods: {
    updateCounter(step, event) {
      this.counter += 2;
    },
    updateCoordinates(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    // dummy(event) {
    //   event.stopPropagation();
    // },
    alertMe() {
      alert('Enter Pressed');
    },
  },
});
