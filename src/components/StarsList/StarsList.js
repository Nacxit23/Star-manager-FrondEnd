import * as queries from './StarsListQuery.gql';
import Modal from '@/components/Modal';

export default {
  name: 'StarsList',
  inject: ['context'],
  data() {
    return {
      status: '',
      users: [],
      description: '',
      idStar: '',
      showModal: false,
      spinnerLoading: false,
      alluserStar: [],
      NoPaidStarUser: [],
      userId: undefined,
    };
  },

  components: {
    Modal,
  },

  apollo: {
    users: {
      query: queries.users,
      variables() {
        return {
          status: this.status,
        };
      },
    },
  },

  methods: {
    modal(node, userId) {
      this.userId = userId;
      this.description = node.description || '';
      this.idStar = node.id || 0;
      this.showModal = true;
      this.PaidAtStar = node.paidAt;
    },

    async loadMore() {
      this.spinnerLoading = true;
      await this.$apollo.queries.users.fetchMore({
        variables: {
          curso: this.users.pageInfo.endCursor,
        },
        updateQuery: (previousResult, {fetchMoreResult: {users}}) => ({
          users: {
            __typename: previousResult.users.__typename,
            edges: [...previousResult.users.edges, ...users.edges],
            pageInfo: users.pageInfo,
          },
        }),
      });
      this.spinnerLoading = false;
    },
    deleteStar() {
      this.$apollo.mutate({
        mutation: queries.deleteStar,
        variables: {
          id: this.idStar,
        },
        update: cache => {
          const starQuery = {
            query: queries.users,
            variables: {
              status: this.status,
            },
          };
          const data = cache.readQuery(starQuery);

          const userIndex = data.users.edges.findIndex(
            ({node}) => node.id === this.userId
          );

          const starIndex = data.users.edges[
            userIndex
          ].node.stars.edges.findIndex(({node}) => node.id == this.idStar);

          this.showModal = false;

          data.users.edges[userIndex].node.stars.edges.splice(starIndex, 1);
          cache.writeQuery({
            ...starQuery,
            data: data,
          });
        },
      });
    },
  },
  computed: {
    allUser() {
      return (this.alluserStar = (this.users.edges || []).map(
        edge => edge.node
      ));
    },
  },
};
