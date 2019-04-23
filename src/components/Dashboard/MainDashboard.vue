<template>
  <div id="container">
    <div class="content">
      <h2 class="is-marginless">{{$options.name}}</h2>
      <div class="card" id="form-content">
        <div class="card-content">
          <div class="tile is-ancestor">
            <div class="tile is-vertical is-12">
              <div class="tile">
                <div class="tile is-parent is-vertical is-5">
                  <article class="tile is-child notification is-primary">
                    <p class="title">Posts</p>
                    <p class="subtitle">10 post</p>
                  </article>
                  <article class="tile is-child notification is-info">
                    <p class="title">Subscriber</p>
                    <p class="subtitle">50 subscribe</p>
                  </article>
                </div>
                <div class="tile is-parent is-vertical">
                  <article class="tile is-child notification is-success">
                    <p class="title">Tags</p>
                    <p class="subtitle">5 tag</p>
                  </article>

                  <article class="tile is-child notification is-warning">
                    <p class="title">Opt-In</p>
                    <p class="subtitle">5 opt-in</p>
                  </article>
                </div>
                <div class="tile is-parent is-vertical">
                  <article class="tile is-child notification is-danger">
                    <p class="title">Users</p>
                    <p class="subtitle">1 user</p>
                  </article>
                  <article class="tile is-child notification is-link">
                    <p class="title">Users</p>
                    <p class="subtitle">1 user</p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard"
};
</script>

<style scoped>
#container {
  margin-top: 15px;
  padding-top: 5px;
  padding-left: 50px;
  padding-right: 50px;
}
</style>
