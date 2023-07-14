
<template>
    <!-- ======= Hero Section ======= -->
    <section id="hero" style="width: 100vw; position:relative">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-7 col-md-5" style="position: relative; height:100vh;">
                    <div class="hero-container" data-aos="zoom-in" data-aos-delay="300">
                        <h1>BEING INNOVATIVE WITH NATURE</h1>
                        <h2>We Safely Delivering Sustainable Solutions</h2>
                        <a href="#about" class="btn-get-started">Get Started</a>
                    </div>
                </div>
                <div class="col-lg-5 col-md-7" data-aos="zoom-left" data-aos-delay="300" style="background-image: url(''); background-size: cover; background-repeat: no-repeat; background-position: bottom right; height:100vh;">
                    <img class="face-of-web" src="/assets/img/face-web_2.png" alt="" style="position: absolute; bottom:0px">
                </div>
            </div>
        </div>
        <div style="position: absolute; width: 100vw; bottom:-5px; right:0px">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80">
                <!-- <path fill="#ffffff" fill-opacity="0.8" d="M0,96L120,80C240,64,480,32,720,16C960,0,1200,0,1320,0L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                <path fill="#ffffff" fill-opacity="0.6" d="M0,0L80,26.7C160,53,320,107,480,117.3C640,128,800,96,960,80C1120,64,1280,64,1360,64L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                <path fill="#ffffff" fill-opacity="0.8" d="M0,96L1440,32L1440,320L0,320Z"></path> -->
                <path fill="#ABCD9E" fill-opacity="0.4" d="M 255 45 L 1440 15 L 1440 80 L 225 80 Z"></path>
                <path fill="#ABCD9E" fill-opacity="0.2" d="M 555 55 L 1440 5 L 1440 80 L 525 80 Z"></path>
                <path fill="#ffffff" fill-opacity="1" d="M 0 35 L 1440 60 L 1440 80 L 0 80 Z"></path>




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
                    '/assets/img/hero-bg.jpg',
                    '/assets/img/hero-bg_2.jpg',
                    '/assets/img/hero-bg_3.jpg'
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
                if(this.nextimage>=this.images.length){this.nextimage=0;}
                $('#hero')
                .css('background-image','linear-gradient(90deg, rgba(171,205,158,0.3) 10%, rgba(255,255,255,0.5) 77%), url("'+this.images[this.nextimage++]+'")')
                .css('position','relative')
                .show("slow",this.routine());
            },
            routine(){
                setTimeout(this.doSlideshow,10000);
            }
        }
    }
</script>

<style scoped>
    #hero {
        background: linear-gradient(40deg, rgba(2,0,36,1) 0%, rgba(51,130,117,1) 40%, rgba(171,205,158,1) 99%);
    }

    @media (max-width: 720px){
        .face-of-web{
            display: none;
        }
    }
</style>