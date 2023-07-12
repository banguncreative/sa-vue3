<template>
    <section id="services">
        <div class="container" data-aos="fade-up">
            <div class="section-header">
                <h3 class="section-title">{{title}}</h3>
                <p v-if="description" class="section-description">
                    {{description}}
                </p>
            </div>
            <div class="row">
                <div 
                    v-for="service in services"
                    class="col-lg-4 col-md-6" 
                    data-aos="zoom-in"
                >
                    <div class="box">
                        <div class="icon">
                            <a :href="service.url">
                                <i :class="service.icon"></i>
                            </a>
                        </div>
                        <h4 class="title">
                            <a :href="service.url">
                                {{service.title}}
                            </a>
                        </h4>
                        <p 
                            v-if="service.description"
                            class="description"
                        >
                            {{service.description}}
                        </p>
                        <ul style="text-align: left;">
                            <li
                                v-for="item in service.child"
                                class="service-list position-relative"
                            >
                                {{ item }}
                                <a :href="wame(wa, 'hallo, saya ingin berkonsultasi terkait '+item)" target="_blank" class="callme position-absolute" style="right:20px;">
                                    <i class="fa fa-whatsapp text-white" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import choppingLib from './chopping.lib';

    export default{
        data: function(){
            return {
                title: "SERVICES",
                description: "Kami bergerak di bidang jasa konsultasi, berikut adalah beberapa jasa yang kami tawarkan:",
                services: [
                    {
                        title: "Dokumen Lingkungan",
                        description: "",
                        child:[
                            "AMDAL",
                            "UKL-UPL",
                            "SPPL",
                            "Baku Mutu Air Limbah (BMAL)",
                            "Baku Mutu Emisi (BME)",
                            "Pertek",
                            "Rintek B3",
                            "Laporan Monitoring"
                        ],
                        url: "#",
                        icon: "fa fa-file-text-o"
                    },
                    {
                        title: "Pendampingan Perusahaan",
                        description: "",
                        child:[
                            "PROPER",
                            "PROPERDA",
                            "Audit Lingkungan"
                        ],
                        url: "#",
                        icon: "fa fa-pagelines"
                    },
                    {
                        title: "Pembuatan IPAL",
                        description: "",
                        child:[
                            "Perencanaan",
                            "Konstruksi",
                            "Pengawasan"
                        ],
                        url: "#",
                        icon: "fa fa-flask"
                    }
                ]
            }
        },
        props:{
            wa: String
        },
        methods: choppingLib
    }
</script>

<style scoped>
    .box {
        min-height: 350px;
        padding: 20px;
    }
    .service-list {
        list-style-type: none;
        padding: 3px;
        text-align: center;
        transition: 0.5s;
    }

    .service-list:hover {
        background-color: var(--accent-color_4);
        color: white;
        font-weight: 600;
        padding: 10px;
        
    }

    ul {
        padding: 0;
    }

    .callme{
        display: none;
    }

    .service-list:hover .callme{
        transform: scale(1.5);
        display: inline-block;
    }
</style>