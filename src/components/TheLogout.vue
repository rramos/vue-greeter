<template>
    <div v-if="isAuthenticated">
      <div class="logout">
        <button @click="logout">Log out</button>
      </div>
    </div>
</template>

<script>
  import { useAuth0 } from '@auth0/auth0-vue';

  export default {
    setup() {
      const { logout, user, isAuthenticated } = useAuth0();

      return {
        logout: () => {
          logout({ logoutParams: { returnTo: window.location.origin } });
        },
        user,
        isAuthenticated
      };
    }
  };
</script>

<style scoped>
  .logout {
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    height: 50px;
  }

  .logout button {
    background-color: hsla(160, 100%, 37%, 1);
    text-decoration: none;
    border: none;
    padding: 15px 32px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    font-weight: bold;
  }

  .logout:hover {
    background: rgba(84, 84, 84, 0.65);
  }
</style>