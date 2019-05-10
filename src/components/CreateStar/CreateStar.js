import * as star from './CreateStar.gql';

export default {
  name: 'CreateStar',
  data() {
    return {
      description: '',
      user: '',
    };
  },
  apollo: {
    usersSelect: star.usersSelect,
  },
  methods: {
    createStarUser() {
      this.$apollo
        .mutate({
          mutation: star.createStar,
          variables: {
            input: {
              userId: this.user,
              description: this.description,
            },
          },
        })
        .then(() => {
          this.$router.push({
            path: '/home/star-manager',
          });
        });
    },
  },
};