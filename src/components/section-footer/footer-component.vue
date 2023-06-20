<template>
    <div class="social-links">
        <a
            v-for="social in Object.keys(links)" 
            :href="links[social]" 
            :class="social+' m-1'"
        >
            <i :class="icons[social]"></i>
        </a>
    </div>
</template>

<script>
    export default{
        data: function(){
            return {
                links:{
                    twitter: "#",
                    facebook: "#",
                    instagram: "#",
                    google: "#",
                    linkedin: "#"
                },
                icons : {
                    twitter:"fa fa-twitter",
                    facebook: "fa fa-facebook",
                    instagram: "fa fa-instagram",
                    google: "fa fa-google-plus",
                    linkedin: "fa fa-linkedin"
                }
            }
        },
    }
</script>