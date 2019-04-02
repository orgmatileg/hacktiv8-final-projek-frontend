<template>
  <div id="contact-form">
    <div class="content">
      <center>
        <h1>Contact Us</h1>
      </center>
    </div>
    <div class="card" id="form-content">
      <div class="card-content">
        <form action>
          <div class="field">
            <label class="label">Nama Lengkap</label>
            <div class="control">
              <input
                v-bind:class="{'is-danger':formError.namaLengkap.length > 0}"
                v-model="form.namaLengkap"
                class="input"
                type="text"
                placeholder="Masukkan nama lengkap Anda"
                @keyup="onChangeInput('namaLengkap')"
              >
            </div>
            <p
              v-if="formError.namaLengkap.length > 0"
              class="help is-danger"
            >{{formError.namaLengkap}}</p>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input
                v-bind:class="{'is-danger':formError.email.length > 0}"
                class="input"
                type="email"
                placeholder="Masukkan email Anda"
                v-model="form.email"
                @keyup="onChangeInput('email')"
              >
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
            <p v-if="formError.email.length > 0" class="help is-danger">{{formError.email}}</p>
          </div>

          <div class="field">
            <label class="label">Judul</label>
            <div class="control">
              <input
                v-bind:class="{'is-danger':formError.judul.length > 0}"
                class="input"
                type="text"
                placeholder="Masukkan judul pesan Anda"
                v-model="form.judul"
                @keyup="onChangeInput('judul')"
              >
            </div>
            <p v-if="formError.judul.length > 0" class="help is-danger">{{formError.judul}}</p>
          </div>

          <div class="field">
            <label class="label">Pesan</label>
            <div class="control">
              <textarea
                v-bind:class="{'is-danger':formError.pesan.length > 0}"
                class="textarea"
                placeholder="Masukkan pesan Anda"
                v-model="form.pesan"
                @keyup="onChangeInput('pesan')"
              ></textarea>
            </div>
            <p v-if="formError.pesan.length > 0" class="help is-danger">{{formError.pesan}}</p>
          </div>
          <div class="field">
            <div class="control">
              <button @click="handleSubmit" class="button is-link" type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      formError: {
        namaLengkap: "",
        email: "",
        judul: "",
        pesan: ""
      },
      form: {
        namaLengkap: "",
        email: "",
        judul: "",
        pesan: ""
      },
      isFormValid: true
    };
  },
  methods: {
    onChangeInput(formName) {
      if (this.form[formName].length > 0) {
        this.formError[formName] = "";
      }
    },
    validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
    handleSubmit(e) {
      e.preventDefault();

      // validasi form kosong
      if (this.form.namaLengkap == "") {
        this.formError.namaLengkap = "Nama Lengkap tidak boleh kosong!";
        this.isFormValid = false;
      }
      if (this.form.email == "") {
        this.formError.email = "Email tidak boleh kosong!";
        this.isFormValid = false;
      }
      if (this.form.judul == "") {
        this.formError.judul = "Judul tidak boleh kosong";
        this.isFormValid = false;
      }
      if (this.form.pesan == "") {
        this.formError.pesan = "Pesan tidak boleh kosong";
        this.isFormValid = false;
      }

      if (this.isFormValid == false) return;

      // Lanjut
    }
  }
};
</script>

<style>
#contact-form {
  padding-left: 200px;
  padding-right: 200px;
}

#form-content {
  padding-top: 15px;
  padding-left: 50px;
  padding-right: 50px;
}
</style>
