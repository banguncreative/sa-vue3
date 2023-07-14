<template>
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 120 1440 200"
    >

        <path :fill="color" fill-opacity="0.7" d="M0,256L60,256C120,256,240,256,360,250.7C480,245,600,235,720,234.7C840,235,960,245,1080,261.3C1200,277,1320,299,1380,309.3L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        <path :fill="color" fill-opacity="0.5" d="M0,224L60,234.7C120,245,240,267,360,266.7C480,267,600,245,720,229.3C840,213,960,203,1080,202.7C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        <path :fill="color" fill-opacity="0.8" d="M0,128L60,128C120,128,240,128,360,144C480,160,600,192,720,213.3C840,235,960,245,1080,256C1200,267,1320,277,1380,282.7L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        
        <text x="900" y="270" :fill="color" class="fa" transform="rotate(-3)" style="font-size:80px;">&#xf06c;</text>
        <text x="1200" y="270" :fill="color" class="fa" transform="rotate(-3)" style="font-size:80px;">+</text>
        <text x="1000" y="300" fill="#fff" class="fa" transform="rotate(-5,30)" style="font-size:42px;">+</text>
        <text x="1100" y="200" fill="#9BEAB3" class="fa" transform="rotate(-5,30)" style="font-size:42px;">+</text>
        <text x="1300" y="220" fill="#9BEAB3" class="fa" transform="rotate(-5,30)" style="font-size:66px;">&#xf18c;</text>
        <text x="1100" y="280" fill="#fff" class="fa" rotate="-15" style="font-size:72px;">+</text>


        <image href="/assets/img/logo.png" x="50" y="150" alt="CV. Surya Cemerlang" style="filter: brightness(10)"/>

    </svg>
</template>

<script>
    export default{
        props:{
            color: String
        }
    }
</script>