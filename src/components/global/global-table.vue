<template>
    <table data-toggle="table" class="table table-striped" style="">
        <thead class="text-white" style="background-color: var(--accent-color_3);">
            <tr>
                <th 
                    v-for="head in arr_header(dats[0])"
                >
                    {{ head }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="(dat, i) in dats"
                :key="i"
            >
                <td style="max-width: 60px;">{{ i+1 }}</td>
                <td
                    v-if="isArray(dat)"
                    class="text-start text-break"
                    style="word-wrap: break-word;"
                >{{ dat }}</td>

                <td
                    v-if="!isArray(dat)"
                    v-for="key in Object.keys(dat)"
                    class="text-start"
                    style="word-wrap: break-word;"
                >{{ dat[key] }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default{
        data: function (){
            return{

            }
        },
        props:{
            dats: Object,
            cust_header: Object
        },
        methods:{
            isArray(dat){
                return dat instanceof Array;
            },
            isObject(dat){
                return dat instanceof Object;
            },
            arr_header(dat){
                if(this.isArray(dat)){
                    var header = this.cust_header? this.cust_header : ["content"];
                    header.unshift("#");
                    
                    return header;
                }else if(this.isObject(dat)){
                    var header = Object.keys(dat);
                    header.unshift("#");

                    return header;
                }
            }
        }
    }
</script>

<style scoped>
</style>