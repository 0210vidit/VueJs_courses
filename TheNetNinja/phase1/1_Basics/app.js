new Vue({
  el: '#app',
  data: {
    title: 'Becoming a Vue Ninja!',
    name: 'Vidit',
  },
  methods: {
    greet(time) {
      return `Hello and ${time}, ${this.name}`;
    },
  },
});
