<script src="./AssignStar.js"></script>

<template>
  <Star>
    <template slot="list">
      <CreateStar />
    </template>
    <p @click="redirect" slot="Text">
      Return List Stars
      <i class="fas fa-exchange-alt"></i>
    </p>
  </Star>
</template>
