<script setup>
    import waveAnimated from "./wave-animated.vue";
</script>
<template>
    <!-- ======= Header ======= -->
    <header id="header" class="header-transparent">
        <waveAnimated></waveAnimated>
        <div class="container">
            <div id="logo" class="pull-left">
                <a href="index.html">
                    <img src="src/assets/img/logo.png" alt="surya cemerlang" style="filter:brightness(0.8) contrast(0.7); width:70%">
                </a>
            </div>
            <nav id="nav-menu-container">
                <ul class="nav-menu">
                    <li v-for="item in links"
                        :key="item.name"
                        :class="{
                            'menu-active': item.isActive
                        }"
                    >
                        <a :href="item.url" class="text-dark">
                            {{ item.name }}
                        </a>
                    </li>
                </ul>
            </nav><!-- #nav-menu-container -->
        </div>
            
	</header>
    <svg class="" id="header-path" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 140" style="top: 0px; position: fixed; right: 0;z-index: 2;">
        <path fill="#88B990" fill-opacity="0.9" d="M0,128L120,106.7C240,85,480,43,720,26.7C960,11,1200,21,1320,26.7L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
        <path fill="#ABCD9E" fill-opacity="0.75" d="M 0 85 L 1440 55 L 1440 0 L 0 0 Z"></path>
    </svg>
    <!-- End Header -->
</template>

<script>
    export default{
        data: function(){
            return {
                links: [
                    {
                        name: "Home",
                        url: "#hero",
                        isActive: true

                    },
                    {
                        name: "About Us",
                        url: "#about"

                    },
                    {
                        name: "Services",
                        url: "#services"

                    },
                    {
                        name: "Affiliated",
                        url: "#Affiliated"

                    },
                    {
                        name: "Team",
                        url: "#team"

                    },
                    {
                        name: "Contact Us",
                        url: "#contact"

                    }
                ]
            }
        }
    }
</script>