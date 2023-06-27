<script setup>
    import listPost from "./listpost.vue"
</script>

<template>
    <div class="col-md-3 list-post">
        <h2 style="text-decoration:underline">{{ category }}</h2>
        <span v-if="!seen" style="font-size:11px">no post yet</span>
        <list-post v-if="seen" v-for="entry in entries" 
            :key="entry.id"
            :post="entry"
        >
        </list-post>
        <span v-if="ismore">
            <a :href="morelink(category)" style="font-size:12px"> more about {{category}}</a>
        </span>
    </div>
</template>

<script>
    export default{
        data: function(){
            return {
                base_uri:"http://blog.surya-cemerlang.co.id"
            }
        },
        methods:{
            morelink: function(category){
                return this.base_uri+'/search/label/'+category
            }
        },
        props:{
            seen: Boolean,
            entry: Object,
            entries: Array,
            category: String,
            ismore: Boolean
        }
    }
</script>

<style scoped>
    .list-post{
        min-width: 250px;
    }

    h2 {
        color: var(--accent-color_3);
    }

    a {
        color: var(--accent-color_3);
    }
</style>