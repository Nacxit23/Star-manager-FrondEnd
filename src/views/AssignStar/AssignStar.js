import Star from '@/components/Star';
import CreateStar from '@/components/CreateStar';

export default {
  name: 'AsignedStar',
  components: {
    Star,
    CreateStar,
  },
  inject: ['context'],

  methods: {
    redirect() {
      this.$router.push({
        path: '/home/star-manager',
      });
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
