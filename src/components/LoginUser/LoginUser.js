import loginMutation from './Login.gql';

export default {
  name: 'LoginUser',

  data() {
    return {
      email: '',
      password: '',
      message: [],
    };
  },

  methods: {
    login() {
      this.$apollo
        .mutate({
          mutation: loginMutation,
          variables: {
            input: {
              email: this.email,
              password: this.password,
            },
          },
        })
        .then(reponse => {
          window.localStorage.setItem('token', reponse.data.loginUser.token);
          window.location.href = '/home/star-manager';
        })
        .catch(error => {
          this.message = error.graphQLErrors[0].message;
        });
    },
  },
};
