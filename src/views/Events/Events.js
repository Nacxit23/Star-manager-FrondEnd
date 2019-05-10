import {events, update, deleteEvent} from './Events.gql';
import {format} from 'date-fns';
import swal from 'sweetalert2';
import Modal from '@/components/Modal';

export default {
  name: 'event',

  data() {
    return {
      Event: {
        id: '',
        date: '',
      },
      showModal: false,
    };
  },

  components: {
    Modal,
  },

  apollo: {
    events: {
      query: events,
      update: data => data.events,
    },
  },

  methods: {
    updateEvent() {
      this.$apollo.mutate({
        mutation: update,
        variables: {
          input: {
            id: this.Event.id,
            date: format(new Date(this.Event.date), 'YYYY-MM-DD H:mm:ss'),
          },
        },
      });
    },
    editEvent(event) {
      this.Event.id = event.id;
      this.Event.date = '';
      this.showModal = true;
    },
    deleteEvent(idEvent) {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(result => {
        // console.log('events', events)
        if (result.value) {
          this.$apollo.mutate({
            mutation: deleteEvent,
            variables: {
              id: idEvent,
            },
            update(
              cache,
              {
                data: {deleteEvent},
              }
            ) {
              const query = {
                query: events,
              };
              const {events} = cache.readQuery(query);
              const index = events.findIndex(event => event.id == idEvent);

              events.splice(index, 1, deleteEvent);

              cache.writeQuery({
                ...query,
                data: {
                  events,
                },
              });
            },
          });
          swal('Deleted!', 'Your Event has been deleted.', 'success');
        }
      });
    },
  },
};
