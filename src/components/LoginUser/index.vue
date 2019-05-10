<script src="./LoginUser.js"></script>
<style module src="./LoginUser.css"></style>
<style module="$generalCss" src="@/class.css"></style>

<template>
  <div>
    <div :class="$style.validator" v-if="message.length != 0">
      <ul>
        <h4>Please correct the errors</h4>
        <li>
          {{ message }}
        </li>
      </ul>
    </div>
    <form @submit.prevent="login()">
      <div :class="$generalCss.formGroup">
        <label :class="$generalCss.label" for="email">Email</label>
        <input
          :class="$generalCss.input"
          type="email"
          v-model="email"
          placeholder="Enter email"
        />
      </div>
      <div :class="$generalCss.formGroup">
        <label for="passwordUser" :class="$generalCss.label">Password</label>
        <input
          type="password"
          :class="$generalCss.input"
          v-model="password"
          placeholder="Password"
        />
      </div>
      <button :class="$style.button">Sign In</button>
    </form>
  </div>
</template>
