<template>
    <div class="bg-light p-1 m-1 rounded">
        <a :href="post.url">
            {{post.title}}
        </a><br>
        <span style="font-size:11px"><em>{{ new Date(post.published).toLocaleDateString() }} | {{ post.author.displayName }}</em></span>
    </div>
</template>

<script>
    export default{
        data: function(){
            return {

            }
        },
        props:{
            post: Object
        }
    }
</script>