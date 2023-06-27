<template>
    <div class="info">
        <h3>{{ title }}</h3>
        <slot></slot>
    </div>
</template>

<script>
    export default{
        props: {
            title: String
        }
    }
</script>

