<template>
    <Carousel v-if="items !== []" id="gallery" :items-to-show="1" :wrap-around="true" v-model="currentSlide">
        <Slide v-for="(slide, i) in items" :key="i">
            <div class="carousel__item">
                <a :href="slide.large" :alt="slide.title">
                    <img :src="slide.large" :alt="slide.title">
                </a>
                <div class="position-absolute slide-caption text-white" style="bottom: 0px; width: 100%;">
                    <span>{{ slide.description }}</span>
                </div>
            </div>
        </Slide>
    </Carousel>

    <Carousel
        v-if="items !== []"
        id="thumbnails"
        :items-to-show="4"
        :wrap-around="true"
        v-model="currentSlide"
        ref="carousel"
    >
        <Slide v-for="(slide, i) in items" :key="i">
        <div class="carousel__item rounded-lg" @click="slideTo(i - 1)">
            <img :src="slide.thumb" :alt="slide.title">
        </div>
        </Slide>
    </Carousel>

    <div v-if="items.length<1" class="text-center pt-5">
        <div
            class="spinner-border text-secondary m-auto" 
            role="status"
        >
            <span class="sr-only">Loading...</span>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'
    import { Carousel, Slide } from 'vue3-carousel'

    import 'vue3-carousel/dist/carousel.css'

    export default defineComponent({
        name: 'Gallery',
        components: {
            Carousel,
            Slide,
            Navigation,
        },
        data: () => ({
            currentSlide: 0,
            items: [],
            m: "getGalleries",
            data_endpoint: "https://script.google.com/macros/s/AKfycby_ieCMCLP1DVbg5LHVKzkphfuxZR8B8P5y8GOtyiH1KKZ4vjUmZZAh3fzt3rBDuGq3/exec"
        }),
        methods: {
            slideTo(val) {
                this.currentSlide = val
            },
        },
        beforeMount: function(){
            fetch(this.data_endpoint+"?m="+this.m)
                .then(r => r.json())
                .then(data => this.items = data);
        }
    })
</script>

<style>
    .carousel__slide{
        background-color: gray;
    }

    #gallery{
        margin-bottom: 5px;
    }

    #gallery .carousel__slide{
        min-height: 300px;
    }

    #gallery img{
        max-width: 80%;

    }

    #thumbnails .carousel__slide{
        min-height: 80px;
    }

    #thumbnails img{
        max-width: 70%;
    }

    .carousel__item{
        cursor: pointer;
        position: relative;
        width: 100%;
    }

    .slide-caption{
        display: none;
        transition: 0.3s;
        background-color: #00000087;
    }

    #gallery:hover .slide-caption{
        display: block;
    }
</style>