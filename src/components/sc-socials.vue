<template>
    <div class="container social" v-if="socials">
        <span v-if="!socials">* * * *</span>
        <a v-for="social in socials"
            class="m-2"
            :href="social.url"
        >
            <i :class="social.icon"></i>
        </a>
    </div>
</template>

<script>
    export default{
        props:{
            socials:{
                type: Object,
                required: true
            }
        }
    }
</script>