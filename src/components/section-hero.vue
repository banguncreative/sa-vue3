<template>
    <!-- ======= Hero Section ======= -->
    <section id="hero" style="width: 100vw;">
        <div class="hero-container" data-aos="zoom-in" data-aos-delay="100">
            <h1>BEING INNOVATIVE WITH NATURE</h1>
            <h2>We Safely Delivering Sustainable Solutions</h2>
            <a href="#about" class="btn-get-started">Get Started</a>
        </div>
        <div style="position: absolute; width: 100vw; bottom:0px; right:0px">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
                <path fill="#ffffff" fill-opacity="0.8" d="M0,96L120,80C240,64,480,32,720,16C960,0,1200,0,1320,0L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                <path fill="#ffffff" fill-opacity="0.6" d="M0,0L80,26.7C160,53,320,107,480,117.3C640,128,800,96,960,80C1120,64,1280,64,1360,64L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                <path fill="#ffffff" fill-opacity="0.8" d="M0,96L1440,32L1440,320L0,320Z"></path>
            </svg>
        </div>
        <!-- w3school slider -->
    </section>
    <!-- End Hero Section -->
</template>


<script>
    export default{
        data: function(){
            return {
                images: [
                    'src/assets/img/hero-bg.jpg',
                    'src/assets/img/hero-bg_2.jpg',
                    'src/assets/img/hero-bg_3.jpg'
                ],
                nextimage: 0
            }
        },
        mounted(){
            //Array of images which you want to show: Use path you want.
            this.doSlideshow();
        },
        methods: {
            doSlideshow(){
                console.log("aaa")
                if(this.nextimage>=this.images.length){this.nextimage=0;}
                $('#hero')
                .css('background-image','url("'+this.images[this.nextimage++]+'")')
                .css('position','relative')
                .show("slow",this.routine());
            },
            routine(){
                setTimeout(this.doSlideshow,10000);
            }
        }
    }
</script>