<script src="./LoginLayout.js"></script>
<style module src="./LoginLayout.css"></style>
<style module="$generalCss" src="@/class.css"></style>
<template>
  <div :class="$style.loginComponents">
    <div :class="$style.loginLayout">
      <div :class="$style.leftLoginConteiner">
        <div :class="$style.logoLogin">
          <img src="@/assets/LayoutStar.png" alt="" />
        </div>
        <div :class="$style.formConteiner">
          <slot name="form" />
        </div>
        <div :class="$style.member">
          <slot name="singUpOptions" />
        </div>
      </div>
      <div :class="$style.rightLoginConteiner"></div>
    </div>
  </div>
</template>
