<template>
  <div class="loginConteiner">
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import gql from 'graphql-tag';
export default {
  name: 'app',

  data() {
    return {
      me: null,
    };
  },
  apollo: {
    me: {
      query: gql`
        query {
          me {
            id
            name
            isAdmin
          }
        }
      `,

      skip() {
        return !localStorage.getItem('token');
      },
    },
  },

  provide() {
    const context = {};

    Object.defineProperty(context, 'user', {
      enumerable: true,
      get: () => this.user,
    });

    return {
      context,
    };
  },

  computed: {
    user() {
      return this.me ? this.me : false;
    },
  },
};
</script>
<style module>
html,
body {
  margin: 0;
  background-color: #ecedf1;
  height: 100vh;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
