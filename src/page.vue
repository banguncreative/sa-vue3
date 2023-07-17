<script setup>
    import profile from "./profile";

    // section import
    import layout from "./components/layout.vue";
    import sectionGalery from "./components/section-galery.vue";
</script>

<template>
    <layout
        :links="links"
        :profile="profile"
    >
        <div class="bg-light" style="min-height: 100px;"></div>
        <div class="container-fluid p-4 bg-light" >
            <div class="row">
                <div class="col-lg-8 bg-white m-auto mb-2 p-4 shadow-sm rounded-lg" style="min-height: 600px;">
                    <span class="display-4" style="color: var(--accent-color_3);">Gallery</span>
                    <hr class="m-1">
                    <sectionGalery
                        :data_endpoint="data_endpoint"
                    ></sectionGalery>
                </div>
            </div>
        </div>
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
            }
        },
    }
</script>