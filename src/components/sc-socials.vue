<template>
    <div class="container social">
        <span v-if="!socials.length">* * * *</span>
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
                type: Array,
                required: true
            }
        }
    }
</script>