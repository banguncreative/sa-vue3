<script setup>
  import HelloWorld from './components/HelloWorld.vue'
  import TheWelcome from './components/TheWelcome.vue'

  // section import
  import sectionHeaders from './components/section-headers.vue';
  import sectionHero from './components/section-hero.vue';
  import sectionNewsletter from "./components/section-newsletter.vue";
  import sectionAbout from './components/section-about.vue';
  import sectionfact from "./components/section-fact.vue";
  import sectionServices from './components/section-services.vue';
</script>

<template>
  <sectionHeaders></sectionHeaders>
  <sectionHero></sectionHero>
  <sectionNewsletter></sectionNewsletter>
  <sectionAbout></sectionAbout>
  <sectionfact></sectionfact>
  <sectionServices></sectionServices>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<script>
  export default{
    mounted(){
      AOS.init()
    }
  }
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
