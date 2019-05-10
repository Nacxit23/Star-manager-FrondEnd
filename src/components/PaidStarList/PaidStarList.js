import * as queries from './PaidStarList.gql';
import Modal from '@/components/Modal';

export default {
  name: 'PaidStarList',
  inject: ['context'],
  data() {
    return {
      status: '',
      paidStarList: [],
      description: '',
      idStar: '',
      showModal: false,
      spinnerLoading: false,
      alluserStar: [],
    };
  },

  components: {
    Modal,
  },

  apollo: {
    paidStarList: {
      query: queries.paidStarList,
      variables() {
        return {
          status: this.$route.params.status,
        };
      },
    },
  },
  methods: {
    modal(node) {
      this.description = node.description || '';
      this.idStar = node.id || 0;
      this.showModal = true;
      this.PaidAtStar = node.paidAt;
    },

    async loadMore() {
      this.spinnerLoading = true;
      await this.$apollo.queries.paidStarList.fetchMore({
        variables: {
          curso: this.paidStarList.pageInfo.endCursor,
        },
        updateQuery: (previousResult, {fetchMoreResult: {paidStarList}}) => ({
          paidStarList: {
            __typename: previousResult.paidStarList.__typename,
            edges: [
              ...previousResult.paidStarList.edges,
              ...paidStarList.edges,
            ],
            pageInfo: paidStarList.pageInfo,
          },
        }),
      });
      this.spinnerLoading = false;
    },
  },

  computed: {
    allUser() {
      return (this.alluserStar = (this.paidStarList.edges || []).map(
        edge => edge.node
      ));
    },
  },
};
