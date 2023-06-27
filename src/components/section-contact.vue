<script setup>
    import footerComponent from './section-footer/footer-component.vue';
    import footerInfo from './section-footer/footer-info.vue';
    import cpright from './section-footer/cpright.vue';
    import wave from './section-footer/wave.vue';
</script>

<template>
    <section id="contact" class="pb-0">
        <div class="container">
            <div class="section-header">
                <h3 class="section-title">Contact</h3>
                <p class="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
            </div>
        </div>
        <!-- Uncomment below if you wan to use dynamic maps -->
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6653.397098475638!2d112.68386229421344!3d-7.450469986169888!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e10123322055%3A0x3fb58254a0c2490!2sSurya%20Cemerlang.%20CV!5e0!3m2!1sen!2sid!4v1623132889972!5m2!1sen!2sid" width="100%" height="480" style="border:0;" allowfullscreen="" loading="lazy">
        
        </iframe>
        <div id="footer" class="p-0" style="position: relative; background: #338275; ">
            <div style="transform: translateY(calc(-0.09*100vw));">
                <wave
                    color="#338275"
                ></wave>
            </div>
            <div
                class="container-fluid text-white"
                style="min-height: 150px"
            >
            <div class="container" id="footer-info">
                <div class="row">
                    <div class="col-lg-4 p-2" id="contact">
                        <footer-info></footer-info>
                        <footer-component></footer-component>
                        </div>
                        <div class="col-lg-4 p-2"></div>
                        <div class="col-lg-4 p-2"></div>
                    </div>
                </div>
            </div>
            <cpright
                color="#338275"
            ></cpright>
                
            </div>
    </section>
</template>

<script>
    export default{
        data: function(){
            return {

            }
        },
    }
</script>