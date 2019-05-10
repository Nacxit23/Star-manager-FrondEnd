<script src="./CreateUser.js"></script>
<style module src="./CreateUser.css"></style>

<template>
  <div>
    <h2>User registration</h2>
    <div :class="$style.validator" v-if="errors.length != 0">
      <ul>
        <h4>Please correct the errors</h4>
        <li v-for="error in errors" :key="error">
          {{ error }}
        </li>
      </ul>
    </div>
    <form action="" @submit.prevent="createUser()">
      <div :class="$style.formGroup">
        <label :class="$style.label" for="email">Email Address</label>
        <input
          :class="$style.input"
          v-model="User.email"
          type="email"
          placeholder="example@getnerdify.com"
        />
      </div>
      <div :class="$style.formGroup">
        <label :class="$style.label" for="FirstName">First Name</label>
        <input
          :class="$style.input"
          v-model="User.firstName"
          type="text"
          placeholder="Your First Name"
        />
      </div>
      <div :class="$style.formGroup">
        <label :class="$style.label" for="LastName">Last Name</label>
        <input
          :class="$style.input"
          v-model="User.lastName"
          type="text"
          placeholder="Your Last Name"
        />
      </div>
      <div :class="$style.formGroup">
        <label :class="$style.label" for="Password">Password</label>
        <input
          :class="$style.input"
          v-model="User.password"
          type="password"
          placeholder="Password"
        />
      </div>
      <div :class="$style.formGroup">
        <label :class="$style.label" for="ConfirmPassword"
          >Confirm Password</label
        >
        <input
          :class="$style.input"
          v-model="ConfirmPassword"
          type="password"
          placeholder="Confirm your Password"
        />
      </div>
      <button :class="$style.button">Register</button>
    </form>
  </div>
</template>
