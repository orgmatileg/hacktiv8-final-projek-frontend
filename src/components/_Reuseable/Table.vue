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
          <th>{{onPage == 1 ? index+1*onPage: index+1*onPage*limit}}</th>
          <td>{{data.judul}}</td>
          <td>{{data.author}}</td>
          <td>{{data.date}}</td>
          <td>
            <div class="field has-addons">
              <p class="control">
                <a class="button is-info">
                  <span class="icon is-small">
                    <i class="fas fa-edit"></i>
                  </span>
                  <span>Edit</span>
                </a>
              </p>
              <p class="control">
                <a class="button is-danger">
                  <span class="icon is-small">
                    <i class="fas fa-trash-alt"></i>
                  </span>
                  <span>Delete</span>
                </a>
              </p>
            </div>
          </td>
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
          :disabled="onPage == lastPagination"
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
          <template v-if="count > limit">
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
            <li>
              <a
                @click="handleClickPagination(lastPagination)"
                v-bind:class="{'is-current':(onPage == lastPagination)}"
                class="pagination-link"
              >{{lastPagination}}</a>
            </li>
          </template>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      onPage: 1
    };
  },
  methods: {
    handlePreviousAndNext(action) {
      switch (action) {
        case "back":
          return this.onPage--;
        case "next":
          return this.onPage++;
      }
    },
    handleClickPagination(pageNumber) {
      return (this.onPage = pageNumber);
    }
  },
  computed: {
    lastPagination: function() {
      let totalData = this.count;
      let totalPagination = totalData / this.limit;
      return totalPagination;
    },
    middlePagination: function() {
      const left = this.onPage - 1;
      const middle = this.onPage;
      const right = this.onPage + 1;

      // check if only one page
      // if

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
    offset: { type: Number, required: true },
    onPagination: { type: Number, default: 1 }
  }
};
</script>

<style scoped>
#table {
  padding: 5px;
}
</style>
