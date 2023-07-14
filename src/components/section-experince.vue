<script setup>
    import globalTable from './global/global-table.vue';
</script>
<template>
    <div 
        v-if="exp_data"
        v-for="experience in clearData"
        class="row"
    >
        <div class="col-lg-2">
            <div class="sticky pb-lg-5 pb-3 mt-lg-0 mt-5 ps-2">
                <p class="p-0 m-0">Pengalaman</p>
                <h3 class="fw-light">{{ experience.sheetName }}</h3 >
            </div>
        </div>
        <div class="col-lg-10" style="overflow-x:auto;">
        <globalTable
            :dats="experience.data"
        ></globalTable>
        </div>
    </div>
</template>

<script>
    export default{
        props:{
            exp_data: Object
        },
        computed:{
            clearData(){
                console.log(this.exp_data)
                return this.exp_data.filter(e => e.data.length > 0);
            }
        }
    }
</script>

<style scoped>
    .sticky{
        position: sticky !important;
        top: 20px;
    }
</style>