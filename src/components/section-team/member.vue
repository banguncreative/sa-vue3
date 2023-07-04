<script setup>
    import scSocials from '../sc-socials.vue';
</script>
<template>
    <div
        class="card col-lg-3 col-md-6 mb-2 p-0 align-items-center text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="100"
        data-aos-once="true"
        style="width:20em !important; border:none"
    >
        <div class="card-img-top bg-img"
            :style="{
                backgroundColor: 'var(--accent-color_4)',
                outline: '2px dashed #fff',
                outlineOffset:'-5px',
                filter:'brightness(1) contrast(1.2)',
                backgroundImage: backgroundProfile(member.profile,member.gender)
            }
            "
        >
        </div>
        <div class="card-body">
            <h5 class="card-title">{{member.name}}</h5>
            <i class="card-text" style="font-size:12px">{{member.jobdesk}}</i>
            <sc-socials
                :socials="member.socials"
            />
        </div>
    </div>
</template>

<script>
    export default{
        data: function(){
            return {}
        },
        props: {
            member: Object
        },
        methods:{
            backgroundProfile(a,g){
                var url = a
                ?   a 
                :   g > 0
                ?   '/src/assets/img/sc-profile/profile-no-photo.png' 
                :   '/src/assets/img/sc-profile/profile-no-photo2.png';

                return 'Url('+url+')';
            }
        }
    }
</script>

<style scoped>
    .card-img-top{
        transition: 0.3s;
    }
    .card-img-top:hover{
        transform: translateY(-5px) scale(1.08) rotate(2deg);
        box-shadow: 3px 2px 35px var(--gray-dark-200);
    }
</style>