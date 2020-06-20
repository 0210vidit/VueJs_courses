new Vue({
  el: '#app',
  data: {
    title: 'Becoming a Vue Ninja!',
    name: 'Vidit',
    url: 'http://google.com',
    classes: ['one', 'two'],
    wage: 10,
    coords: {
      x: 0,
      y: 0,
    },
  },
  methods: {
    greet(time) {
      return `Hello and ${time}, ${this.name}`;
    },
    changeWage(amount) {
      this.wage += amount;
    },
    logEvent(e) {
      console.log(e);
    },
    logCoords(e) {
      this.coords.x = e.offsetX;
      this.coords.y = e.offsetY;
    },
    updateName(e) {
      this.name = e.target.value;
    },
  },
});
