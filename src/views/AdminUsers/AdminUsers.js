import * as queries from './AdminUsersQuery.gql';

export default {
  name: 'AdminUsers',

  inject: ['context'],

  data() {
    return {
      usersAdmin: [],
      spinnerLoading: false,
    };
  },

  apollo: {
    usersAdmin: {
      query: queries.usersAdmin,
    },
  },
  computed: {
    allUser() {
      return (this.usersAdmin.edges || []).map(edge => edge.node);
    },
  },

  methods: {
    adminCreate(userId) {
      this.$apollo.mutate({
        mutation: queries.createAdmin,
        variables: {
          id: userId,
        },
        update: cache => {
          const userAdminQuery = {
            query: queries.usersAdmin,
          };
          const data = cache.readQuery(userAdminQuery);
          const userIndex = data.usersAdmin.edges.findIndex(
            ({node}) => node.id == this.userId
          );

          data.usersAdmin.edges.splice(userIndex, 1);

          cache.writeQuery({
            ...userAdminQuery,
            data: data,
          });
        },
      });
    },

    async loadMore() {
      this.spinnerLoading = true;
      await this.$apollo.queries.usersAdmin.fetchMore({
        variables: {
          curso: this.usersAdmin.pageInfo.endCursor,
        },

        updateQuery: (previousResult, {fetchMoreResult: {usersAdmin}}) => ({
          usersAdmin: {
            __typename: previousResult.usersAdmin.__typename,
            edges: [...previousResult.usersAdmin.edges, ...usersAdmin.edges],
            pageInfo: usersAdmin.pageInfo,
          },
        }),
      });
      this.spinnerLoading = false;
    },
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (!vm.context.user.isAdmin) {
        vm.$router.push('/home/star-manager');
      }
    });
  },
};
