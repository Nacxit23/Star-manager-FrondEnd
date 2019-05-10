<script src="./Login.js"></script>
<style module src="./Login.css"></style>

<template>
  <LoginLayout>
    <template slot="form">
      <LoginUser />
    </template>
    <template slot="singUpOptions">
      <p>
        Not a member?
        <router-link :class="$style.fontSignUp" to="/singup"
          >Sing Up</router-link
        >
      </p>
    </template>
  </LoginLayout>
</template>
