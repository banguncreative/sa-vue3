<template>
    <div 
        class="bg-dark text-light text-center" 
        style="font-size: 11px; min-height: 150px"
        id="cp-right"
    >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 96">
            <path :fill="color" fill-opacity="1" d="M0,0L1440,96L1440,0L0,0Z"></path>
        </svg>
        <div class="copyright mt-2">
                © Copyright <strong>CV.Surya Cemerlang</strong>. All Rights Reserved
        </div> 
        <div class="credits">
            Powered by <strong>GB-Sources</strong>, Design with ♥ and <a href="https://bootstrapmade.com/">bootstrapmade</a>
        </div>
    </div>
</template>

<script>
    export default{
        props:{
            color: String
        }
    }
</script>