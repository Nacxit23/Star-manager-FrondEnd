import StarsList from '@/components/StarsList';
import CreateStar from '@/components/CreateStar';

export default {
  name: 'Stars',
  components: {
    StarsList,
    CreateStar,
  },
  inject: ['context'],
};
