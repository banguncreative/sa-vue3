<template>
    <div class="container section-header align-items-center text-center" id="team">
        <h3 class="section-title">Team</h3>
        <p class="section-description">Sapa tim profesional kami</p>
        <div v-if="!members.length">Loading...</div>
        <div 
            v-if="members.length"
            class="row d-flex justify-content-center"
        >
            <div
                v-for="member in members"
                class="card col-lg-3 col-md-6 mb-2 align-items-center text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="100"
                data-aos-once="true"
                style="width: 15rem; border:none"
            >
                <div class="card-img-top bg-img"
                    :style="{
                        backgroundColor: 'var(--accent-color_4)',
                        outline: '2px dashed #fff',
                        outlineOffset:'-5px',
                        filter:'brightness(1) contrast(1.2)',
                        backgroundImage: 'Url('+(member.profile? member.profile : member.gender>0?'/src/assets/img/sc-profile/profile-no-photo.png' : '/src/assets/img/sc-profile/profile-no-photo2.png')+')',
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
        </div>
        <hr>
    </div>
</template>

<script>
    export default{
        data: function(){
            return {
                members: []
            }
        },
        props: {
            data_endpoint: String
        },
        mounted(){
            fetch(this.data_endpoint+"?m=getMainMember")
			.then(r => r.json())
			.then(data => this.members = data);
        }
    }
</script>