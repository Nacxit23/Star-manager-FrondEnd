export default {
  name: 'NavBar',
  inject: ['context'],

  methods: {
    longOut() {
      localStorage.removeItem('token');

      return this.$router.push({
        path: '/login',
      });
    },
  },
};
