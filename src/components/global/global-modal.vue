<template>
    <div class="modal fade" tabindex="-1" :id="id" :aria-labelledby="id+'Label'" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable" role="document" style="max-width: 95%;">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" :id="id+'Label'">{{ title }}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <slot name="modal-body"></slot>
            </div>
            <div class="modal-footer">
                <slot name="modal-footer" v-if="hasFooter"></slot>
                <button v-if="!hasFooter" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data: function(){
            return {

            }
        },
        props:{
            id: {
                type: String,
                required: true
            },
            title: String
        },
        computed:{
            hasFooter(){
                return !!this.$slots["modal-footer"];
            }
        }
    }
</script>