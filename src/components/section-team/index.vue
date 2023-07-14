<script setup>
    import scSocials from '../sc-socials.vue';
    import ScMember from './member.vue';
</script>
<template>
    <div class="container-fluid section-header align-items-center text-center" id="team">
        <h3 class="section-title">Team</h3>
        <p class="section-description">Sapa tim profesional kami</p>
        <div v-if="!members.length">Loading...</div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-4">
                    <div
                        v-if="chief"
                        id="chief"
                        :style="{
                            backgroundImage: `Url(${chief.profile})`
                        }"
                    >
                        <div class="card-body chief-card">
                            <h5 class="card-title">{{chief.name}}</h5>
                            <i class="card-text" style="font-size:12px">{{chief.jobdesk}}</i>
                            <sc-socials
                                :socials="chief.socials"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 p-3">
                    <div 
                        v-if="members.length"
                        class="row d-flex justify-content-center members"
                    >
                        <ScMember
                            v-for="member in members"
                            :key="member.name"
                            :member="member"
                        >
                        </ScMember>
                    </div>
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
                members: [],
            }
        },
        props: {
            data_endpoint: String
        },
        mounted(){
            fetch(this.data_endpoint+"?m=getMainMember")
			.then(r => r.json())
			.then(data => {
                this.chief = data.find(x => x.jobdesk == 'Chief Operating Officer');
                var chief_loc = data.indexOf(this.chief);
                // remove chief from collection
                data.splice(chief_loc,1);
                this.members = data
                console.log(this.members)
            });
        }
    }
</script>

<style scoped>
    .members{
        max-width: 100vw;
    }

    #chief{
        width: 100%; 
        max-width: 300px; 
        height: 450px; 

        position: sticky;
        top: 100px;
        /* background-color: aqua;  */
        margin: auto;
        margin-top: 20px;
        margin-bottom: 60px;

        background-size: contain;
        background-repeat: no-repeat;
        transition: 0.3s;


    }

    .chief-card{
        width: 300px;
        padding: 10px;
        
        background-color: aliceblue;
        position: absolute;
        bottom: -30px;
    }

    #chief:hover{
        transform: scale(1.1) translateY(10px);
    }
</style>