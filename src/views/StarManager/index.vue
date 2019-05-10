<script src="./StarManager.js"></script>

<template>
  <Star>
    <template slot="list">
      <StarsList />
    </template>
    <p slot="Text">
      Assign a star
      <i class="fas fa-star"></i>
    </p>
  </Star>
</template>

<style module>
.containerRoute {
  margin-left: 75.5px;
  margin-right: 75.5px;
  background-color: #ffff;
  padding: 50px;
  height: 79.5vh;
  font-family: 'Assistant', sans-serif;
  height: 100vh;
}
</style>
