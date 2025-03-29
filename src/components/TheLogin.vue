<template>
    <div v-if="isAuthenticated"></div>
    <div v-else>
        <div class="login">
            <button @click="login">Log in</button>
        </div>
    </div>
</template>
<script>
    import { useAuth0 } from '@auth0/auth0-vue';
  
    export default {
      setup() {
        const { loginWithRedirect,user,isAuthenticated } = useAuth0();
  
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

<style scoped>
  .login {
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    height: 50px;
  }

  .login button {
    background-color: hsla(160, 100%, 37%, 1);
    text-decoration: none;
    border: none;
    padding: 15px 32px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    font-weight: bold;
  }

  .login:hover {
    background: rgba(84, 84, 84, 0.65);
  }
</style>
