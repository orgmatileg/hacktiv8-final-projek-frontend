<template>
  <div id="contact-form">
    <div class="content">
      <h2 class="is-marginless">{{$options.name}}</h2>
      <div class="card" id="form-content">
        <div class="card-content">
          <form action>
            <div class="field">
              <label class="label">Featured Image</label>
              <div class="control">
                <figure v-if="post.post_image" class="image is-128x128">
                  <img :src="post.post_image">
                </figure>
                <div class="file">
                  <label class="file-label">
                    <input class="file-input" type="file" name="resume">
                    <span class="file-cta">
                      <span class="file-icon">
                        <i class="fas fa-upload"></i>
                      </span>
                      <span class="file-label">Choose a file…</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div class="field">
              <label class="label">Title</label>
              <div class="control">
                <input
                  v-model="post.post_subject"
                  @input="handleChangePost"
                  name="post_subject"
                  class="input"
                  type="text"
                  placeholder="Your title"
                >
              </div>
            </div>

            <div class="field">
              <label class="label">Status</label>
              <div class="control">
                <div class="select">
                  <select v-model="post.is_publish" @input="handleChangePost">
                    <option :value="1">Publish</option>
                    <option :value="0">Unpublish</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field">
              <label class="label">Content</label>
              <div class="control">
                <textarea
                  v-model="post.post_content"
                  @input="handleChangePost"
                  class="textarea"
                  placeholder="Your Content"
                ></textarea>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <button @click="handleSubmit" class="button is-link" type="submit">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Notification from "../../Notification/Notification";
import { setTimeout } from "timers";

export default {
  name: "Add Post",
  components: { Notification },
  methods: {
    ...mapActions(["addPost"]),
    handleChangePost(e) {
      let newPost = this.post;
      newPost[e.target.name] = e.target.value;

      this.$store.commit("updatePost", newPost);
    },
    handleSubmit(e) {
      e.preventDefault();
      let newPost = this.post;
      newPost["post_image"] = "";
      newPost["author"]["author_id"] = "3";
      newPost["tags"] = ["No Tags"];

      this.addPost({
        post: newPost
      });

      setTimeout(() => {
        this.$router.push("/dashboard/posts");
      }, 500);
    }
  },
  computed: mapGetters({
    post: "getPost"
  })
};
</script>

<style scoped>
#form-content {
  margin-top: 15px;
  padding-top: 5px;
  padding-left: 50px;
  padding-right: 50px;
}
</style>
