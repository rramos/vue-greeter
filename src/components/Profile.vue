<template>
    <div v-if="isAuthenticated">
      <div>
        <h2>User Profile: {{ user.name }}</h2>
        <code>{{ user.email }}</code>
      </div>
    </div>
</template>

<script>
    import { useAuth0 } from '@auth0/auth0-vue';
  
    export default {
      setup() {
        const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  
        return {
          login: () => {
            loginWithRedirect();
          },
          user,
          isAuthenticated
        };
      }
    };
</script>
