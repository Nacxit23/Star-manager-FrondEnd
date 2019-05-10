<script src="./Events.js"></script>

<style src="./Events.css" module></style>

<template>
  <div style="width: 100%; height: 100%;">
    <table cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="event in events" :key="event.id">
          <th></th>
          <td>{{ event.name }}</td>
          <td>{{ event.date | dateFormat }}</td>
          <td>
            <span :class="$style.commentButton">
              <router-link :to="{name: 'event', params: {id: event.id}}">
                Comment
                <i class="far fa-comment-alt"></i>
              </router-link>
            </span>
            <span>
              <button :class="$style.editButton" @click="editEvent(event)">
                Edit
                <i class="far fa-edit"></i>
              </button>
            </span>
            <span>
              <button
                :class="$style.deleteButton"
                @click="deleteEvent(event.id)"
              >
                Delete
                <i class="fas fa-trash"></i>
              </button>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">Edit Event</h3>
      <div slot="body">
        <strong>
          <label for="date">Selection the date of event:</label>
        </strong>
      </div>
      <div slot="body" :class="$style.selectionDate">
        <input
          type="datetime-local"
          :class="$style.date"
          v-model="Event.date"
          step="1"
          required
        />
      </div>
      <div slot="footer">
        <button :class="$style.modalEditButton" @click="updateEvent">
          Edit
          <i class="far fa-edit"></i>
        </button>
      </div>
    </modal>
  </div>
</template>
