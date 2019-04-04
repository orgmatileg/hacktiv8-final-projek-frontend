<template>
  <div id="table">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>No</th>
          <th>Title</th>
          <th>Author</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>
            <a
              href="https://en.wikipedia.org/wiki/Leicester_City_F.C."
              title="Leicester City F.C."
            >Leicester City</a>
            <strong>(C)</strong>
          </td>
          <td>Luqmanul Hakim</td>
          <td>5 September 2019</td>

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
        <tr>
          <th>2</th>
          <td>
            <a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">Arsenal</a>
          </td>
          <td>Luqmanul Hakim</td>
          <td>5 September 2019</td>

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
        <a class="pagination-previous">Previous</a>
        <a class="pagination-next">Next page</a>
        <ul class="pagination-list">
          <li>
            <a class="pagination-link" aria-label="Goto page 1">1</a>
          </li>
          <li>
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a class="pagination-link" aria-label="Goto page 45">2</a>
          </li>
          <li>
            <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">3</a>
          </li>
          <li>
            <a class="pagination-link" aria-label="Goto page 47">4</a>
          </li>
          <li>
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a class="pagination-link" aria-label="Goto page 86">{{lastPagination}}</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",
  computed: {
    paginationArray: function() {
      let arr = [];
      let totalData = this.count;
      let totalPagination = totalData / this.limit;

      for (let i = 0; i < totalPagination; i++) {
        arr.push(i);
      }

      return arr;
    },
    lastPagination: function() {
      let totalData = this.count;
      let totalPagination = totalData / this.limit;
      return totalPagination;
    }
  },
  props: {
    header: { type: Array, required: true },
    body: { type: Array, required: true },
    count: { type: Number, required: true },
    limit: { type: Number, required: true },
    offset: { type: Number, required: true },
    onPagination: { type: Number, default: 1 }
  },
  methods: {}
};
</script>

<style scoped>
#table {
  padding: 5px;
}
</style>
