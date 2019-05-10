<script src="./NavBar.js"></script>
<style module src="./NavBar.css"></style>
<style>
.active {
  color: rgb(45, 190, 249) !important;
}
</style>
<template>
  <div :class="$style.navBar">
    <a :class="$style.imgItem" href>
      <img src="@/assets/LayoutStar.png" />
    </a>
    <ul :class="$style.navBox">
      <li :class="$style.navBarItem">
        <router-link to="/home/star-manager" exact>Stars</router-link>
      </li>
      <li :class="$style.navBarItem">
        <router-link to="/home/events">Events</router-link>
      </li>
      <li :class="$style.navBarItem">
        <router-link v-if="context.user.isAdmin" to="/home/admin-users" exact
          >Users</router-link
        >
      </li>
    </ul>
    <div :class="$style.usersInformation">
      <ul :class="$style.navBox">
        <li :class="$style.navBarItem">
          <p>
            <img src="@/assets/user.png" />
            {{ context.user.name }}
          </p>
        </li>
        <li v-if="context.user.isAdmin" :class="$style.navBarItem">
          <p :class="$style.elementAdmin">
            <i class="fas fa-user-shield"></i>Admin
          </p>
        </li>
      </ul>
    </div>
    <ul>
      <li :class="$style.exitsFront">
        <a @click="longOut">
          Logout
          <i class="fas fa-sign-out-alt"></i>
        </a>
      </li>
    </ul>
  </div>
</template>
