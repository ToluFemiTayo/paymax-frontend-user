<template>
    <div>
        <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h5 mb-0 text-gray-800">Search Billers...  {{ billers }}</h1>
            </div>
            <div class="row">

                <div class="col-xl-3 col-md-6 mb-4" v-for="biller in searchedBillers" :key="biller.id">
                    <div class="card border-left-primary shadow h-100 py-2">
                        <nuxt-link to="/app/search" class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-sm font-weight-bold text-primary text-uppercase mb-1">
                                         {{ biller.biller_name.toUpperCase() }}
                                    </div>
                                    <div class="text-xs mb-0 font-weight-bold text-gray-800"></div>
                                </div>
                                <div class="col-auto">
                                    <img :src="biller.image" height="60" width="60"
                                        class="img-thumbnail">
                                </div>
                            </div>
                        </nuxt-link>
                    </div>
                </div>

            </div>
            <div class="row">
                <div class="col-md-4">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import  gBillers  from "@/utils/pages.json";
    export default {
        layout: 'customers',
        data(){
            return {
                billers:'',
                allBillers:[],
                searchedBillers:[]
            }
        },
        methods: {
            async getBillers() {
               this.allBillers = await gBillers.filter(e => e.status == 1)
           },
            async fetchBillers(value) {
               this.searchedBillers = await this.allBillers.filter(bill => bill.biller_name.toLowerCase().includes(value.toLowerCase()))
           }
        },
          watch:{
            '$store.state.biller'(v){
                this.billers = v;
                this.fetchBillers(v);
            }
        },
        mounted() {
            this.getBillers()
        }
    }
</script>

<style>
    a.card-body:hover {
        text-decoration: none;
        background-color: #f8f9fc;
    }
</style>