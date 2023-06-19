<script setup>
    import sectionPostactivity from "./section-postactivity/index.vue"
</script>

<template>
    <section id="Newsletter" style="min-height: 200px">
        <div class="container mb-3" data-aos="fade-zoom-in">
            <div class="section-header">
                <h3 class="section-title">{{title}}</h3>
                <p 
                    v-if="description"
                    class="section-description"
                >
                    {{description}}
                </p>
            </div>
            <div class="">
                <div class="col-md-3">
                    <div class="text-center" style="font-size: 72px; color: #666666;"><i class="fa fa-newspaper-o"></i></div>
                </div>
                <sectionPostactivity class="row"></sectionPostactivity>
            </div>
        </div>
        <hr>
    </section>
</template>

<script>
    export default {
        data: function(){
            return {
                title:"ACTIVITY",
                description: ""
            }
        }
    }
</script>