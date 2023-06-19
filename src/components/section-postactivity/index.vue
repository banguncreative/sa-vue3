<script setup>
    import listCategory from "./listcategory.vue"
</script>
<template>
    <div class="container">
        <div class="row">
            <list-category v-for="labelKey in bindLabels"
                :key="labelKey"
                :category="labelKey"
                :entries="labels.get(labelKey)"
                :seen="labelAvail(labelKey)"
                :ismore="raw_labels.get(labelKey)? raw_labels.get(labelKey).length>limit: false"
            ></list-category>
        </div>
    </div>
</template>

<script>
    export default{
        data: function(){
            return {
                base_serv: "https://script.google.com/macros/s/AKfycby_ieCMCLP1DVbg5LHVKzkphfuxZR8B8P5y8GOtyiH1KKZ4vjUmZZAh3fzt3rBDuGq3/exec",
                bindLabels:[
                    "News",
                    "Announcement",
                    "Publications",
                    "References"
                ],
                raw_labels: new Map(),
                labels: new Map(),
                limit: 3
            }
        },
        props:{
		seen: Boolean,
		entries:Array
        },
        methods:{
            labelAvail: function(key){
                return (this.labelKeys).includes(key);
            },
            labelSort: function(data,limit){
                var collection = new Map();
                data.map((e, i) => {
                    var labels = e.labels;
                    if(labels && labels.length){
                        labels.map(c => {
                            if (collection.has(c)){
                                var col = collection.get(c)
                                if(limit){
                                    if(col.length < limit) col.push(e);
                                }else{
                                    col.push(e);
                                }
                            }else{
                                var newCol = collection.set(c,[]);
                                newCol.get(c).push(e);
                            }
                        });
                    } else {
                        var c = "other";
                        if (collection.has(c)){
                            collection.get(c).push(e);
                        }else{
                            var newCol = collection.set(c,[]);
                            newCol.get(c).push(e);
                        }
                    }
                        
                });
                return collection;
            },
            slicebylimit: function(data){
                console.log(data)
                return data? data.splice(0,this.limit): null;
            },
            ismore: function(labelKey){
                var data = this.raw_labels.get(labelKey);
                if(!data) return false;
                return data.length > this.limit;
            }
        },
        computed:{
            labelKeys: function(){
                let labels = this.labels
                return [...labels.keys()];
            }
        },
        created: function(){
            const req_server = this.base_serv+"?m=getPosts&id=";
            fetch(req_server)
            .then(response => response.json())
            .then(data => {
                if(data.items){
                    this.raw_labels = this.labelSort(data.items);
                    this.labels = this.labelSort(data.items, this.limit);
                }
            });
        }
    }
</script>