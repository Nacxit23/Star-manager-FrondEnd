<script src="./Comments.js"></script>

<style src="./Comments.css" module></style>

<template>
  <div :class="$style.container" v-if="commentList">
    <div>
      <p>
        <strong
          >Event: {{ `${commentList.name} vamos a ir el ` }}
          {{ commentList.date | dateFormat }}</strong
        >
      </p>
    </div>
    <div :class="$style.list" style="width: 50%; height: 50%;">
      <table cellpadding="5" cellspacing="15">
        <h4>Comments</h4>
        <tbody>
          <tr v-for="comment in commentListNode" :key="comment.id">
            <td>{{ comment.user.name }}</td>
            <td>{{ comment.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <form action :class="$style.form">
      <div>
        <i class="far fa-user"></i>
        <textarea
          cols="40"
          rows="5"
          id="Description"
          v-model="comment.description"
          placeholder="Write your comment..."
        ></textarea>
      </div>
      <button @click="createComments">
        Send
        <i class="fas fa-sign-in-alt"></i>
      </button>
    </form>
  </div>
</template>
