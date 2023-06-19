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
                        title: "Konsultasi Lingkungan",
                        description: "",
                        url: "#",
                        icon: "fa fa-pagelines"
                    },
                    {
                        title: "Dokumen AMDAL",
                        description: "",
                        url: "#",
                        icon: "fa fa-file-text-o"
                    },
                    {
                        title: "Pemantauan Lingkungan",
                        description: "",
                        url: "#",
                        icon: "fa fa-flask"
                    }
                ]
            }
        },
    }
</script>