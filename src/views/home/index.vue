<script src="./home.js"></script>
<style src="./home.css"></style>

<template>
  <div>
    <NavBar></NavBar>
    <div class="containerRoute">
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
