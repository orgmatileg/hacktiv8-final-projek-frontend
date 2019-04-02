<template>
  <div id="footer">
    <div class="columns">
      <FooterColumnOne/>
      <FooterColumnTwo/>
      <FooterColumnThree/>
    </div>
    <div>
      <center>
        <span>
          Made with
          <i id="love" class="fas fa-heart"></i> in Jakarta
        </span>
      </center>
    </div>
  </div>
</template>

<script>
import FooterColumnOne from "./FooterColumnOne";
import FooterColumnTwo from "./FooterColumnTwo";
import FooterColumnThree from "./FooterColumnThree";

export default {
  name: "Footer",
  components: {
    FooterColumnOne,
    FooterColumnTwo,
    FooterColumnThree
  }
};
</script>

<style>
#love {
  color: #ff3f34;
}

#footer {
  margin-top: 50px;
  margin-bottom: 25px;
}
</style>
