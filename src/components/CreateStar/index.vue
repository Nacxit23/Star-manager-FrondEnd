<script src="./CreateStar.js"></script>
<style src="./CreateStar.css" module></style>
<style module="$generalCss" src="@/class.css"></style>

<template>
  <div :class="$style.formConteiner" style>
    <div :class="$style.form">
      <div :class="$style.formInput">
        <h1>Users selection</h1>
        <select name="Users" v-model="user">
          <option v-for="user in usersSelect" :key="user.id" :value="user.id">{{ user.name }}</option>
        </select>
      </div>
      <div :class="$style.fromGroup">
        <label for="DescripcionLabel">Description</label>
        <textarea v-model="description" rows="20" id="DescripcionLabel"></textarea>
      </div>
      <button @click="createStarUser()" class="btn btn-primary">
        Add star
        <i class="fas fa-star"></i>
      </button>
    </div>
  </div>
</template>
