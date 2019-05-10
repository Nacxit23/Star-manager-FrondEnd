import {comments, create} from './Comments.gql';

export default {
  name: 'Comments',
  data() {
    return {
      user: [],
      event: [],
      commentList: [],

      comment: {
        description: '',
      },
    };
  },

  apollo: {
    commentList: {
      query: comments,
      variables() {
        return {
          id: this.$route.params.id,
        };
      },
    },
  },

  computed: {
    commentListNode() {
      if (this.commentList && this.commentList.comments) {
        return this.commentList.comments.edges.map(edge => edge.node);
      }
      return [];
    },
  },

  methods: {
    createComments() {
      this.apollo.mutate({
        mutation: create,
        variables: {
          input: {
            description: this.comment.description,
            eventId: this.event.id,
          },
        },
      });
    },
  },
};
