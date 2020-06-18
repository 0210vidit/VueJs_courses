// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
  el: '#app',
  data: {
    name: 'Vidit',
    title: 'Hello World!',
    link: 'http://google.com',
    finished: '<a href="http://google.com">Google</a>',
  },
  computed: {},
  methods: {
    sayHello: function () {
      this.title = 'Hello';
      return this.title;
    },
  },
});
