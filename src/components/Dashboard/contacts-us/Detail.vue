<template>
  <div id="contact-form">
    <div class="content">
      <h2 class="is-marginless">{{$options.name}}</h2>
      <div class="card" id="form-content">
        <div class="card-content">
          <div class="field is-horizontal">
            <div class="field-label">
              <label class="label">Submited At</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <label>{{formatDate(contact.created_at)}}</label>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label">
              <label class="label">Full Name</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <label>{{contact.full_name}}</label>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label">
              <label class="label">Email</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <label>{{contact.email}}</label>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label">
              <label class="label">Subject</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <label>{{contact.subject}}</label>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label">
              <label class="label">Message</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <label>{{contact.message}}</label>
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
import { mapActions, mapGetters } from "vuex";
import Notification from "../../Notification/Notification";
import { formatDate } from "../../../helper";
export default {
  name: "Edit Post",
  components: { Notification },
  methods: {
    ...mapActions(["fetchContactByID"]),
    formatDate
  },
  computed: mapGetters({
    contact: "getContact"
  }),
  beforeMount() {
    const { id } = this.$router.history.current.params;
    this.fetchContactByID(id);
  }
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
