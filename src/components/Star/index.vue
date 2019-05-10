<script src="./Star.js"></script>
<style src="./Star.css" module></style>

<style>
.active {
  background-color: #f887d9;
  color: #feddf3;
}
</style>

<template>
  <div style="height: 100%;">
    <div :class="$style.conteinerStar">
      <h1>Star registration</h1>
      <router-link
        :class="$style.button"
        to="/home/assign-star"
        exact
        v-if="context.user.isAdmin"
      >
        <slot name="Text" />
      </router-link>
    </div>

    <div :class="$style.buttonStarOption">
      <router-link
        :class="$style.paidAtStar"
        :to="{name: 'PaidStarList', params: {status: 'Paid'}}"
        exact
      >
        <i class="fas fa-meteor"></i>
        Paid
      </router-link>
      <router-link
        :class="$style.NoPaidStar"
        :to="{name: 'NoPaidStars', params: {status: 'NoPaid'}}"
        exact
      >
        <i class="fas fa-meteor"></i>
        Unpaid stars
      </router-link>
    </div>
    <div :class="$style.StarComponent">
      <slot name="list" />
    </div>
  </div>
</template>
