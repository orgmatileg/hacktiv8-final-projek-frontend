<template>
  <div id="table">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th v-bind:key="index" v-for="(header,index) in headers">{{header}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="index" v-for="(data,index) in list">
          <th>{{onPage == 1 ? index+1: offset+index+1}}</th>
          <td>{{data.email}}</td>
          <td>{{formatDate(data.created_at)}}</td>
        </tr>
      </tbody>
    </table>
    <div id="footer">
      <nav class="pagination is-centered" role="navigation" aria-label="pagination">
        <a
          @click="onPage !== 1 && handlePreviousAndNext('back')"
          :disabled="onPage == 1"
          class="pagination-previous"
        >Previous</a>
        <a
          @click="onPage !== lastPagination && handlePreviousAndNext('next')"
          :disabled="onPage == lastPagination || this.list.length < this.limit"
          class="pagination-next"
        >Next page</a>
        <ul class="pagination-list">
          <li>
            <a
              @click="handleClickPagination(1)"
              v-bind:class="{'is-current':(onPage == 1)}"
              class="pagination-link"
              aria-label="Goto page 1"
            >1</a>
          </li>
          <template v-if="lastPagination > 2">
            <li>
              <span v-if="middlePagination.length > 0" class="pagination-ellipsis">&hellip;</span>
            </li>
            <li v-bind:key="val" v-for="val in middlePagination">
              <a
                v-bind:class="{'is-current':(onPage == val)}"
                @click="handleClickPagination(val)"
                class="pagination-link"
              >{{val}}</a>
            </li>
            <li>
              <span class="pagination-ellipsis">&hellip;</span>
            </li>
          </template>
          <li v-if="count > 10">
            <a
              @click="handleClickPagination(lastPagination)"
              v-bind:class="{'is-current':(onPage == lastPagination)}"
              class="pagination-link"
            >{{lastPagination}}</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
// LIBRARY
import moment from "moment";
import { mapActions } from "vuex";

export default {
  name: "Table Posts",
  data() {
    return {
      onPage: 1,
      offset: 0
    };
  },
  methods: {
    ...mapActions(["fetchSubscribes"]),
    formatDate(dateProps) {
      return moment(dateProps).format("dddd, DD/MM/YYYY hh:mm");
    },
    handlePreviousAndNext(action) {
      switch (action) {
        case "back":
          this.offset -= this.limit;
          this.onPage--;
          break;
        case "next":
          this.offset += this.limit;
          this.onPage++;
          break;
      }

      this.fetchSubscribes(this.offset);
    },
    handleClickPagination(pageNumber) {
      this.offset = pageNumber * this.limit - this.limit;

      this.fetchSubscribes(this.offset);
      return (this.onPage = pageNumber);
    }
  },
  computed: {
    lastPagination() {
      let totalData = this.count;

      if (this.count < 20) return 2;

      let totalPagination = totalData / this.limit;
      return Math.ceil(totalPagination);
    },
    middlePagination() {
      const left = this.onPage - 1;
      const middle = this.onPage;
      const right = this.onPage + 1;

      if (this.lastPagination <= 3) {
        return [2];
      }

      // for first pagination
      if (this.onPage == 1) {
        return [this.onPage + 1, this.onPage + 2, this.onPage + 3];
      }

      // for after first pagination
      if (this.onPage == 2) {
        return [this.onPage, this.onPage + 1, this.onPage + 2];
      }

      // for before last pagination
      if (this.onPage == this.lastPagination - 1) {
        return [this.onPage - 2, this.onPage - 1, this.onPage];
      }
      // for last pagination
      if (this.onPage == this.lastPagination) {
        return [this.onPage - 3, this.onPage - 2, this.onPage - 1];
      }

      // default
      return [left, middle, right];
    }
  },
  props: {
    headers: { type: Array, required: true },
    list: { type: Array, required: true },
    count: { type: Number, required: true },
    limit: { type: Number, required: true },
    handleDelete: { type: Function }
  }
};
</script>

<style scoped>
#table {
  padding: 5px;
}
</style>
