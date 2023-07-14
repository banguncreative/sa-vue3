<script setup>
    import sliceComponent from "./slice-component.vue";
    import sectionExperience from "./section-experince.vue";
    import globalModal from "./global/global-modal.vue";
</script>

<template>
    <section id="facts">
        <slice-component color="#d3fcc2">
            <div style="background-color: #d3fcc2" class="m-0 p-0">
                <div class="container"  data-aos="fade-up">
                    <div class="section-header">
                        <h3 class="section-title m-0">{{title}}</h3>
                        <p class="section-description text-succes" v-html="description"></p>
                    </div>
                    <div class="row counters">
                        <div 
                            v-if="datas.length>0"
                            v-for="counter in counters" 
                            class="col-lg-3 col-6 text-center"
                        >
                            <span data-toggle="counter-up">{{counter.count}}</span>
                            <p>{{counter.title}}</p>
                        </div>

                        <div 
                            v-if="datas.length<1"
                            class="spinner-border text-secondary text-center" 
                            role="status"
                            style="margin: auto;"
                        >
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                    <div v-if="datas.length>0" class="text-center pt-3 pb-0">
                        <!-- Button trigger modal -->
                        <button type="button" class="btn exp-btn" data-toggle="modal" data-target="#expmodal">
                            Tampilkan Pengalaman
                        </button>
                    </div>
                </div>
            </div>
        </slice-component>

        <!-- experience thing -->
        <global-modal id="expmodal" title="Pengalaman Kerja">
            <template v-slot:modal-body>
                <sectionExperience
                :exp_data="datas"
                ></sectionExperience>
            </template>
        </global-modal>
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
            }
        },
        props:{
            datas: Object
        },
        computed:{
            counters(){
                var byVendor = {};
                var projects = 0;


                this.datas.map( e => {
                    projects = projects + e.data.length;
                    e.data.map(k => {
                        var key = k.client;
                        if(!byVendor.hasOwnProperty(key)) byVendor[key] = [];
                        byVendor[key].push(k);
                    })
                });

                var proper = this.datas.find(e => e.sheetName == "PROPER").data.length;
                var documents = projects - proper + (proper *4);


                return [
                    {
                        count: Object.keys(byVendor).length,
                        title: "Clients"
                    },
                    {
                        count: projects,
                        title: "Projects"
                    },
                    {
                        count: documents*12*5,
                        title: "Hours Of Support"
                    },
                    {
                        count: documents,
                        title: "Repports"
                    }
                ]
            },
            dataWoClient(){
                var woClient = this.datas.map(e => {
                    var data = e.data.map(k => {
                        var {pekerjaan, client, kota, tahun} = k;
                        return {
                            pekerjaan,
                            kota,
                            tahun
                        };
                    })

                    e.data = data;
                    return e
                });

                return woClient;
            }
        }
    }
</script>


<style scoped>
    .exp-btn{
        min-width: 250px; 
        color: var(--accent-color);
        outline: 2px dashed;
        outline-color: var(--accent-color_3);
        transition: 0.3s;
    }

    .exp-btn:hover{
        background-color: var(--accent-color_3);
        outline: 2px solid var(--accent-color_3);
        color: white;
        transform: translateY(-3px);
    }
</style>