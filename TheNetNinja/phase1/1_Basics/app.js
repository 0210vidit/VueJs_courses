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
    showName: true,
    items: ['Mushroom', 'Green Shells', 'Red Shells', 'Blue Shells'],
    ninjas: [
      {
        name: 'Crystal',
        age: 25,
        belt: 'Black',
      },
      { name: 'Ryu', age: 35, belt: 'Orange' },
      { name: 'Vidit', age: 23, belt: 'Black' },
    ],
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
    // updateName(e) {
    //   this.name = e.target.value;
    // },
    logMessage() {
      console.log('Clicked');
    },
    toggleName() {
      this.showName = !this.showName;
    },
  },
});
