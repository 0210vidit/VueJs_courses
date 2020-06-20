new Vue({
  el: '#app',
  data: {
    title: 'Becoming a Vue Ninja!',
    name: 'Vidit',
    url: 'http://google.com',
    classes: ['one', 'two'],
  },
  methods: {
    greet(time) {
      return `Hello and ${time}, ${this.name}`;
    },
  },
});
