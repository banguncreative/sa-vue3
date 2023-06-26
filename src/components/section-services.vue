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
                    <div class="box" style="min-height: 300px;">
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
                                style="list-style-type: upper-roman;"
                            >
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
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
                            "Pertek Baku Mutu Air",
                            "Pertek Emisi",
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
    }
</script>