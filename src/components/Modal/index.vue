<style src="./Modal.css" module></style>
<script src="./Modal.js"></script>

<template>
  <transition name="modal">
    <div :class="$style.modalMask">
      <div :class="$style.modalWrapper">
        <div :class="$style.modalContainer">
          <div :class="$style.modalHeader">
            <button :class="$style.modalDefaultButton" @click="$emit('close')">
              <i class="far fa-times-circle"></i>
            </button>
            <slot name="header"></slot>
          </div>

          <div :class="$style.modalBody">
            <slot name="body"></slot>
          </div>

          <div :class="$style.modalFooter">
            <slot name="footer">
              <!-- <button :class="$style.modalEditButton" v-on:click="UpdateEvent()">
                Edit
                <i class="far fa-edit"></i>
              </button>-->
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
