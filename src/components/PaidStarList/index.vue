<script src="./PaidStarList.js"></script>
<style src="@/class.css" module></style>
<style></style>

<template>
  <div v-if="allUser.length > 0">
    <table cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th>User</th>
          <th>Stars</th>
        </tr>
      </thead>

      <tbody v-for="user in allUser" :key="user.id">
        <tr>
          <td>{{ user.name }}</td>
          <td v-for="{node} in user.stars.edges" :key="node.id">
            <a :class="$style.StarList" @click="modal(node)">
              <img src="@/assets/stars.png" alt />
            </a>
          </td>
          <td>
            <div v-if="user.stars.pageInfo.total - 3 > 0" :class="$style.total">
              <p :class="$style.totalInfo">
                +{{ user.stars.pageInfo.total - 3 }}
              </p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div :class="$style.buttonConteiner">
      <button
        v-if="paidStarList.pageInfo.hasNextPage"
        :class="$style.loadMore"
        @click="loadMore"
      >
        <i
          v-if="spinnerLoading"
          @click="spinnerLoading = true"
          class="fas fa-spinner fa-spin"
        ></i>
        Load More
      </button>
    </div>

    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">Detail Star</h3>
      <div slot="body">
        <strong>
          <label for="date">Description:</label>
          <p>{{ description }}</p>
        </strong>
        <strong v-if="PaidAtStar">
          <label for="date">
            Paid date:
            <p>{{ PaidAtStar }}</p>
          </label>
        </strong>
        <div :class="$style.buttonModalConteiner">
          <a
            v-if="context.user.isAdmin && PaidAtStar == null"
            @click="deleteStar"
            :class="$style.deleteButton"
          >
            Delete
            <i class="fas fa-trash"></i>
          </a>
        </div>
      </div>
    </modal>
  </div>
</template>
