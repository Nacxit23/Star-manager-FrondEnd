import {create} from '@/components/CreateUser/CreateUser.gql';

export default {
  name: 'CreateUser',

  data() {
    return {
      errors: [],
      User: {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
      },
      ConfirmPassword: '',
      redirect: false,
    };
  },

  methods: {
    createUser() {
      const User = this.User;
      this.User = '';

      this.errors = [];

      if (!User.email) {
        this.errors.push('Email is required');
      }
      if (!User.firstName) {
        this.errors.push('FirstName is required');
      }
      if (!User.lastName) {
        this.errors.push('LastName is required');
      }
      if (!User.password) {
        this.errors.push('Password is required');
      }

      if (this.ConfirmPassword !== User.password) {
        this.errors.push('Passwords do not match');
      }

      this.$apollo
        .mutate({
          mutation: create,
          variables: {
            input: User,
          },
        })
        .then(() => {
          this.$router.push({
            path: '/login',
          });
        })
        .catch(error => {
          this.User = User;
          this.validation = error.graphQLErrors[0].extensions.validation;
          for (let message in this.validation) {
            if (!this.validation.hasOwnProperty(message)) continue;
            var object = this.validation[message];
            for (var prop in object) {
              if (!object.hasOwnProperty(prop)) continue;
              this.errors.push(object[prop]);
            }
          }
        });
    },
  },
};
