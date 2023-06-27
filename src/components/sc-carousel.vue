<template>
    <div class="container section-header align-items-center text-center mb-2">
        <h3 class="section-title text-light">{{title}}</h3>
        <span
            v-if="description" 
            class="section-description text-white"
        >
            {{description}}
        </span>
        <div v-if="!items.length" class="mb-3">Loading...</div>
        <div
            v-if="items.length" 
            :class="classCarousel"
        >
            <div
                v-for="item in items"
                class="item"
            >
                <div 
                class="bg-img on-mouse-color"
                :style="{
                    width: width,
                    height: width,
                    backgroundImage: 'Url('+(item.image? item.image : 'assets/img/sc-profile/file-no-photo.png')+')'
                }"
                ></div>
            </div>
        </div>
    </div>
</template>


<script>
    export default{
        data: function(){
            return {
                width: "7em",
                opt: {
                    loop:true,
                    margin:10,
                    nav:false,
                    responsive:{
                        0:{
                            items:3
                        },
                        600:{
                            items:3
                        },
                        1000:{
                            items:7
                        }
                    }
                },
                items:[]
            }
        },
        props:{
            "data_endpoint":{
                type: String,
                required: true
            },
            "title":{
                type:String,
                required:true
            },
            "description":{
                type:String,
                required: false
            },
            "dataclass":{
                type: String,
                required: true
            },
            "m":{
                type: String,
                required: true
            }
        },
        computed:{
            classCarousel: function(){
                return "owl-carousel owl-theme "+ this.dataclass
            }
        },
        beforeMount: function(){
            fetch(this.data_endpoint+"?m="+this.m)
                .then(r => r.json())
                .then(data => this.items = data);
        },
        updated: function(){
            $("."+this.dataclass).owlCarousel(this.opt);
            $("."+this.dataclass).on('mousewheel', '.owl-stage', function (e) {
                    if (e.originalEvent.deltaY>0) {
                            $(this).trigger('next.owl');
                    } else {
                            $(this).trigger('prev.owl');
                    }
                    e.preventDefault();
            });
        }
    }
</script>