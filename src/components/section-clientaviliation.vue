<script setup>
    import scCarousel from './sc-carousel.vue';
</script>
<template>
    <!-- ======= Affiliated Section ======= -->
    <section id="Affiliated" :style="'background-color:'+ color">
        <div class="container" data-aos="fade-up">
        <scCarousel
        title="Affiliated"
        description="Untuk menunjang kinerja, kami berafiliasi dengan beberapa instansi dan perusahaan berikut"
        dataclass="dataClient"
        m="getAffiliates"
        />
        </div>
    </section><!-- End Affiliated Section -->

    <!-- ======= Client Section ======= -->
    <section id="Client" :style="'background-color:'+ color">
        <div class="container" data-aos="fade-up">
        <scCarousel
        title="Our Client"
        description="Beberapa instansi dan perusahaan yang puas atas kinerja kami"
        dataclass="dataClient"
        m="getClients"
        />
        </div>
    </section>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 192">
        <path :fill="color" fill-opacity="1" d="M0,32L720,160L1440,0L1440,0L720,0L0,0Z"></path>
    </svg>
    <!-- End Client Section -->
</template>

<script>
    export default{
        props:{
            color: String
        }
    }
</script>