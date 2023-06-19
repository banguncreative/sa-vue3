<script setup>
    import sliceComponent from "./slice-component.vue";
</script>

<template>
    <section id="facts">
        <slice-component>
            <div style="background-color: #c0ffbe" class="m-0 p-0">
                <div class="container"  data-aos="fade-up">
                    <div class="section-header">
                        <h3 class="section-title m-0">{{title}}</h3>
                        <p class="section-description text-succes" v-html="description"></p>
                    </div>
                    <div
                        class="row counters"
                    >
                        <div 
                            v-for="counter in counters" 
                            class="col-lg-3 col-6 text-center"
                        >
                            <span data-toggle="counter-up">{{counter.count}}</span>
                            <p>{{counter.title}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </slice-component>
    </section>
</template>

<script>
    export default{
        data: function(){
            return {
                title: "What We Have Done", 
                description: `
                    Selama <strong class="y-experienced"></strong> mengabdi, berikut ringkas perjalanan kami:
                `,
                counters: [
                    {
                        count: 232,
                        title: "Clients"
                    },
                    {
                        count: 521,
                        title: "Projects"
                    },
                    {
                        count: 463,
                        title: "Hours Of Support"
                    },
                    {
                        count: 315,
                        title: "Repports"
                    }
                ]
            }
        },
    }
</script>