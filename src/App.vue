<script setup>
  import profile from "./profile";

  // section import
  import layout from "./components/layout.vue";

  import sectionHero from './components/section-hero.vue';
  import sectionNewsletter from "./components/section-newsletter.vue";
  import sectionAbout from './components/section-about.vue';
  import sectionfact from "./components/section-fact.vue";
  import sectionServices from './components/section-services.vue';
  import sectionCalltoaction from './components/section-calltoaction.vue';
  import sectionClientaviliation  from './components/section-clientaviliation.vue';
  import sectionTeam from "./components/section-team/index.vue";
</script>

<template>
  <layout
    :links="links"
    :profile="profile"
  >
    <sectionHero></sectionHero>

    <sectionNewsletter></sectionNewsletter>

    <sectionAbout
      :founded="profile.founded"
      :links="profile.aboutLinks"
      :indexing="profile.indexing_key"
      :description="profile.description"
    ></sectionAbout>

    <sectionfact
      :datas="experiences"
    ></sectionfact>

    <sectionServices
      :wa="profile.contacts.wa"
    ></sectionServices>

    <sectionCalltoaction
      :contact="profile.contacts"
    ></sectionCalltoaction>
    
    <sectionClientaviliation
      color="#338275"
      :data_endpoint="data_endpoint"
    ></sectionClientaviliation>

    <sectionTeam
      :data_endpoint="data_endpoint"
    ></sectionTeam>
  </layout>
  
</template>

<script>
  export default{
    data:function(){
      return {
        data_endpoint: profile.data_endpoint,
        links: [
            {
                name: "Home",
                url: "#hero",
                isActive: true

            },
            {
                name: "About Us",
                url: "#about"

            },
            {
                name: "Services",
                url: "#services"

            },
            {
                name: "Affiliated",
                url: "#Affiliated"

            },
            {
                name: "Team",
                url: "#team"

            },
            {
                name: "Contact Us",
                url: "#contact"

            }
        ],
        experiences: [],
      }
    },
    mounted: function(){
      var method = "getJobList"
      fetch(this.data_endpoint+"?m="+method)
        .then(r => r.json())
        .then(data => this.experiences = data.data);
    },
  }
</script>
