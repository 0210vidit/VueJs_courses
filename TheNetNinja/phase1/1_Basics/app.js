new Vue({
  el: '#app',
  data: {
    title: 'Becoming a Vue Ninja!',
    name: 'Vidit',
    url: 'http://google.com',
  },
  methods: {
    greet(time) {
      return `Hello and ${time}, ${this.name}`;
    },
  },
});
