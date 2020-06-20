new Vue({
  el: '#app',
  data: {
    title: 'Becoming a Vue Ninja!',
    name: 'Vidit',
    url: 'http://google.com',
    classes: ['one', 'two'],
    wage: 10,
  },
  methods: {
    greet(time) {
      return `Hello and ${time}, ${this.name}`;
    },
  },
});
