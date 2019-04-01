<template>
  <div class="container">
    <div class="columns">
      <div class="column is-two-thirds">
        <div class="post content">
          <h2 class="is-large">Artikel Number Satu</h2>
          <figure class="image is-2by1">
            <img src="https://bulma.io/images/placeholders/256x256.png">
          </figure>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu convallis velit. Etiam finibus odio non nisl faucibus porta. Curabitur faucibus lorem tortor, id ultricies mi facilisis eu. Aliquam commodo vehicula sapien, non commodo turpis imperdiet at. Nulla sodales mi in iaculis venenatis. Mauris consectetur commodo elit, vitae aliquam augue gravida ac. Quisque convallis orci nec odio placerat auctor. Cras tempus, purus non commodo scelerisque, ligula eros viverra turpis, a accumsan lacus magna vitae elit. Vestibulum volutpat lobortis ipsum. Integer in ullamcorper ligula, tristique dignissim ligula. Donec sit amet augue metus.
            Suspendisse massa tortor, gravida nec leo ut, pretium consequat leo. sem magna volutpat tortor, non tincidunt sapien velit ut urna. Phasellus congue et est sed interdum. Nunc ante dui, cursus vel elit bibendum, dictum vulputate metus. Aliquam lacinia condimentum nulla in finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi eget mauris eget turpis dictum bibendum quis dignissim lectus. Donec mattis, augue et ultricies iaculis, mi neque maximus mi, sed suscipit dolor velit ac ex. Fusce velit nisi, tristique nec auctor sit amet, efficitur vel lectus.
          </p>
          <button class="button is-primary">Read More...</button>
        </div>
      </div>
      <div class="column">
        <nav class="panel">
          <p class="panel-heading">repositories</p>
          <div class="panel-block">
            <p class="control has-icons-left">
              <input class="input is-small" type="text" placeholder="search">
              <span class="icon is-small is-left">
                <i class="fas fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div>
          <p class="panel-tabs">
            <a class="is-active">all</a>
            <a>public</a>
            <a>private</a>
            <a>sources</a>
            <a>forks</a>
          </p>
          <a class="panel-block is-active">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            bulma
          </a>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            marksheet
          </a>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            minireset.css
          </a>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            jgthms.github.io
          </a>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-code-branch" aria-hidden="true"></i>
            </span>
            daniellowtw/infboard
          </a>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-code-branch" aria-hidden="true"></i>
            </span>
            mojs
          </a>
          <label class="panel-block">
            <input type="checkbox">
            remember me
          </label>
          <div class="panel-block">
            <button class="button is-link is-outlined is-fullwidth">reset all filters</button>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
};
</script>
<style scoped>
.container {
  background: #f4f4f4;
}
.main-content {
  background: #fff;
}
</style>
