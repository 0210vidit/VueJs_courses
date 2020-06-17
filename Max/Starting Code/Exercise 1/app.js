new Vue({
  el: '#exercise',
  data: {
    name: 'Vidit Shah',
    age: 23,
    image:
      'https://images.unsplash.com/photo-1587613990174-1f14ba3be7cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  },
  methods: {
    setRandom() {
      return Math.random();
    },
  },
});
