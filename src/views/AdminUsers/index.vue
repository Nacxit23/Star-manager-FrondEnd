<script src="./AdminUsers.js"></script>
<style src="@/class.css" module></style>

<template>
  <div>
    <table cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th>Email</th>
          <th>Name</th>
          <th>Admin</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in allUser" :key="user.id">
          <td>{{ user.email }}</td>
          <td>{{ user.name }}</td>
          <td>
            <i
              v-if="user.isAdmin == true"
              :class="$style.check"
              class="fas fa-check"
            ></i>
            <i
              v-if="user.isAdmin == false"
              :class="$style.Nocheck"
              class="fas fa-user-times"
            ></i>
          </td>
          <td>
            <a
              v-if="!user.isAdmin"
              @click="adminCreate(user.id)"
              :class="$style.adminButton"
              id="Adminbutton"
            >
              Admin
              <i class="fas fa-unlock-alt"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <div :class="$style.buttonConteiner">
      <button :class="$style.loadMore" @click="loadMore">
        <i
          v-if="spinnerLoading"
          @click="spinnerLoading = true"
          class="fas fa-spinner fa-spin"
        ></i>
        Load More
      </button>
    </div>
  </div>
</template>
