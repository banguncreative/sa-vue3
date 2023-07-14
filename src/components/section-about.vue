<template>
    <section id="about" class="">
        <div class="container mb-5" data-aos="fade-up" style="min-height: 600px;">
            <div class="row about-container">
                <div class="col-lg-6 content order-lg-1 order-2">
                    <h2 class="title mt-5" >{{title}}</h2>
                    <p style="display: none;" v-html="indexing"></p>
                    <p v-html="description"></p>
                    <div 
                        v-for="link in links"
                        :key="link.title"
                        class="icon-box" 
                        data-aos="fade-up" 
                        data-aos-delay="100"
                    >
                        <div class="icon"><i :class="link.icon"></i></div>
                        <h4 class="title">
                            <a :href="link.url" style="color: var(--accent-color_2)">{{link.title}}</a>
                        </h4>
                        <p class="description" style="color:var(--accent-color_3)">{{link.description}}</p>
                    </div>
                </div>
                <div class="col-lg-6 background order-lg-2 order-1" data-aos="fade-left" data-aos-delay="100"></div>
            </div>
        </div>
    </section>
</template>

<script>
    export default{
        data: function(){
            return {
                title: "Sedikit Tentang Kami",
            }
        },
        props: {
            founded: {
                type: Number,
                required: true
            },
            links: Object,
            description: String,
            indexing: String
        },
        mounted: function(){
            var year_founded = this.founded;
            var cur_year = new Date().getFullYear();
            var experienced = cur_year - year_founded;
            $(".y-founded")[0].innerHTML = year_founded;
            $(".y-experienced").each( (i,e) => e.innerHTML = experienced+"thn");
        }
    }
</script>