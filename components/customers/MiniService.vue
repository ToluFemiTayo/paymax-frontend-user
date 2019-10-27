<template>
    <div class="col-xl-4 col-lg-5 col-sm-12 col-xs-12">
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a class="nav-item nav-link active text-2 font-weight-bold" id="nav-transfer-tab" data-toggle="tab"
                    href="#nav-transfer" role="tab" aria-controls="nav-transfer" aria-selected="true">Transfer</a>
                <a class="nav-item nav-link text-2 font-weight-bold" id="nav-recharge-tab" data-toggle="tab"
                    href="#nav-recharge" role="tab" aria-controls="nav-recharge" aria-selected="false">Recharge</a>
                <a class="nav-item nav-link text-2 font-weight-bold" id="nav-bills-tab" data-toggle="tab"
                    href="#nav-bills" role="tab" aria-controls="nav-bills" aria-selected="false">Bills</a>
                <a class="nav-item nav-link text-2 font-weight-bold" id="nav-more-tab" data-toggle="tab"
                    href="#nav-more" role="tab" aria-controls="nav-more" aria-selected="false">More</a>
            </div>
        </nav>
        <div class="tab-content" id="nav-tabContent" v-if="request.pay_response == null">
            <div class="tab-pane fade show active" id="nav-transfer" role="tabpanel" aria-labelledby="nav-transfer-tab">
                <div class="container mt-2">
                    <h5 class="text-center font-weight-bold">Deposit Money</h5>
                    <form id="form-send-money" method="post">
                        <div class="form-group">
                            <label for="withdrawto" class="text-2">Beneficiary's Account Number</label>
                            <select id="withdrawto" class="custom-select" required="">
                                <option>Bank A/c 2 - XXXXXX-1211</option>
                                <option>Bank A/c 3 - XXXXXX-2011</option>
                                <option>Bank A/c 4 - XXXXXX-2011</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="withdrawto" class="text-2">Beneficiary's Bank</label>
                            <select id="withdrawto" class="custom-select" required="">
                                <option>First Bank</option>
                                <option>Stanbic Ibtc</option>
                                <option>Union Bank</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="youSend" class="text-2">Amount (₦)</label>
                            <div class="input-group">
                                <div class="input-group-prepend"> <span class="input-group-text">₦</span> </div>
                                <input type="text" class="form-control" data-bv-field="youSend" id="youSend"
                                    value="1,000" placeholder="">
                            </div>
                        </div>
                        <button class="btn btn-primary btn-block">Continue</button>
                    </form>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-recharge" role="tabpanel" aria-labelledby="nav-recharge-tab">
                <div class="container mt-2">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item ml-4">
                            <a class="nav-link active text-2" id="pills-home-tab" data-toggle="pill" href="#pills-home"
                                role="tab" aria-controls="pills-home" aria-selected="true">Airtime <i
                                    class="fa fa-phone"></i> </a>
                        </li>
                        <li class="nav-item ml-5">
                            <a class="nav-link text-2" id="pills-profile-tab" data-toggle="pill" href="#pills-profile"
                                role="tab" aria-controls="pills-profile" aria-selected="false">Data <i
                                    class="fa fa-phone"></i> </a>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                            aria-labelledby="pills-home-tab">
                            <h6 class="text-center font-weight-bold">Buy Airtime</h6>
                            <form id="form-send-money" method="post">
                                <div class="form-group">
                                    <label for="withdrawto" class="text-2">Mobile Network</label>
                                    <select id="withdrawto" class="custom-select" v-model="request.airtime.vendor" @change="openAirtimeNum">
                                        <option :value="airtime.service" v-for="airtime in airtime.vendors" :key="airtime.name">{{ airtime.name.toUpperCase() }}</option>
                                    </select>
                                </div>
                                <div id="airtime-num" class="form-group">
                                    <label for="youSend" class="text-2">Mobile No</label>
                                    <div class="input-group">
                                        <input id="num-input" type="text" disabled class="form-control" v-model="request.airtime.phone"
                                                placeholder="">
                                    </div>
                                </div>
                                <div id="airtime-amount" class="form-group d-none">
                                    <label for="youSend" class="text-2">Amount (₦)</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend"> <span class="input-group-text">₦</span> </div>
                                        <input type="text"  class="form-control" value="" v-model="request.airtime.amount">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xl-6 col-sm-6 col-md-6 col-xs-6" id="airtime-prev">
                                        <button class="btn btn-primary btn-block no-event"  @click.prevent="airtimePrev">Prev</button>
                                    </div>
                                    <div class="col-xl-6 col-sm-6 col-md-6 col-xs-6" id="airtime-next">
                                        <button class="btn btn-primary btn-block no-event" @click.prevent="airtimeNext">Next</button>
                                    </div>
                                    <div class="col-xl-6 col-sm-6 col-md-6 col-xs-6 d-none" id="airtime-submit">
                                        <button class="btn btn-primary btn-block" @click.prevent="buyAirtime()">{{ loading ? "Purchasing.." : "Purchase" }}</button>
                                    </div>
                                </div>
                                <!-- <button class="btn btn-primary btn-block no-event" id="airtime-nxt" @click.prevent="nextAirtime">Next</button>
                                <button class="btn btn-primary btn-block d-none" id="airtime-cnt">Continue</button> -->
                            </form>
                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel"
                            aria-labelledby="pills-profile-tab">
                            <h6 class="text-center font-weight-bold">Buy Data</h6>
                            <form id="form-send-money" method="post">
                                <div id="data-first">
                                    <div class="form-group">
                                        <label for="withdrawto" class="text-2">Mobile Network</label>
                                        <select id="withdrawto" class="custom-select" v-model="request.data.vendor" @change="fetchPlans">      
                                            <option :value="data.service" v-for="data in data.vendors" :key="data.name">{{ data.name.toUpperCase() }}</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="withdrawto" class="text-2">Data Plan</label>
                                        <select id="data-service" disabled class="custom-select" v-model="request.data.service">
                                        <option :value="service" v-for="service in data.services" :key="service.code">{{ service.description.toUpperCase() }}</option>
                                        </select>
                                    </div>
                                </div>
                                <div id="data-second" class="d-none">               
                                    <div id="data-amount" class="form-group">
                                        <label for="youSend" class="text-2">Mobile No</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" v-model="request.data.phone"
                                                 placeholder="">
                                        </div>
                                    </div>
                                    <div id="data-amount" class="form-group">
                                        <label for="youSend" class="text-2">Amount (₦)</label>
                                        <div class="input-group">
                                            <div class="input-group-prepend"> <span class="input-group-text">₦</span> </div>
                                            <input type="number" class="form-control" v-if="request.data.amount" readonly v-model="request.data.service.amount"
                                                placeholder="">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xl-6 col-sm-6 col-md-6 col-xs-6" id="data-prev">
                                        <button class="btn btn-primary btn-block no-event"  @click.prevent="dataPrev">Prev</button>
                                    </div>
                                    <div class="col-xl-6 col-sm-6 col-md-6 col-xs-6" id="data-next">
                                        <button class="btn btn-primary btn-block no-event" @click.prevent="dataNext">Next</button>
                                    </div>
                                    <div class="col-xl-6 col-sm-6 col-md-6 col-xs-6 d-none" id="data-submit">
                                        <button class="btn btn-primary btn-block" @click.prevent="buyData()">{{ loading ? "Purchasing.." : "Purchase" }}</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-bills" role="tabpanel" aria-labelledby="nav-bills-tab">
                <div class="container mt-3">
                    <h5 class="text-3 text-center font-weight-bold mb-3">Pay Your Bills</h5>
                    <div class="row">
                        <div class="col-xs-3 mb-2">
                            <img src="https://www.payvice.com/assets/img/util_ikedc.png" height="62" width="79"
                                class="img-thumbnail">
                        </div>
                        <div class="col-xs-3 mb-2">
                            <img src="https://www.payvice.com/assets/img/util_eedc.png" height="62" width="79"
                                class="img-thumbnail">
                        </div>
                        <div class="col-xs-3 mb-2">
                            <img src="https://www.payvice.com/assets/img/util_ekedc.png" height="62" width="79"
                                class="img-thumbnail">
                        </div>
                        <div class="col-xs-3 mb-2">
                            <img src="https://www.payvice.com/assets/img/util_phdc.png" height="62" width="79"
                                class="img-thumbnail">
                        </div>
                        <div class="col-xs-3 mb-2">
                            <img src="https://www.payvice.com/assets/img/util_ibedc.png" height="62" width="79"
                                class="img-thumbnail">
                        </div>
                        <div class="col-xs-3 mb-2">
                            <img src="https://www.payvice.com/assets/img/util_aedc.png" height="62" width="79"
                                class="img-thumbnail">
                        </div>
                        <div class="col-xs-3 mb-2">
                            <img src="https://www.payvice.com/assets/img/util_gotv.png" height="62" width="79"
                                class="img-thumbnail">
                        </div>
                        <div class="col-xs-3 mb-2">
                            <img src="https://www.payvice.com/assets/img/util_dstv.png" height="62" width="79"
                                class="img-thumbnail">
                        </div>
                        <div class="col-xs-3 mb-2">
                            <img src="https://www.quackit.com/pix/samples/22l.jpg" height="62" width="79"
                                class="img-thumbnail">
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-more" role="tabpanel" aria-labelledby="nav-more-tab">
                <div class="container">
                    
                </div>
            </div>
        </div>
        <div v-if="request.pay_response != null">
            <div class="card mb-4 mt-2">
                <div class="card-body">
                    <div class="bg-light shadow-sm rounded p-3 p-sm-4 mb-1">
                        <div class="text-center my-0">
                            <p class="text-center text-success text-20 line-height-07"><i
                                    class="fas fa-check-circle"></i></p>
                            <p class="text-center text-success text-8 line-height-07">Success!</p>
                            <p class="text-center text-4">{{ request.pay_response.message }}</p>
                            <p class="text-center text-4">Amount: {{ request.pay_response.amount }} </p>
                            <p class="text-center text-4">Transaction ID: {{ request.pay_response.transactionID }}</p>
                        </div>
                        <p class="text-center"></p>
                        <button type="button" @click="clearData" class="btn btn-block btn-outline-success"><i
                                class="fas fa-print"></i> Pay Again</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
    DATA_VENDORS,
    AIRTIME_VENDORS,
    DATA_PLANS,
    SAVE_TRANSACTION,
    PURCHASE_DATA,
    PURCHASE_AIRTIME
    } from "@/utils/routes";
    export default {
        data() {
            return {
                data:{
                    toggle:true,
                    vendors:[],
                    services:[],
                },
                airtime: {
                    vendors:[],
                    services:[]
                },
                request:{
                    data:{
                        vendor:null,
                        service:null,
                        phone:null,
                        description:null,
                        code:null,
                    },
                    airtime:{
                        vendor:null,
                        phone:null,
                        amount:null
                    },
                    pay_response:null,
                },
                error: [],
                loading:false
            }
        },
        methods: {
            async fetchDataVendors() {
                await this.$axios.$get(DATA_VENDORS)
                .then(res => {
                    this.data.vendors = res.data;
                    //console.log(this.data_vendors);
                })
            },
            async fetchAirtimeVendors() {
                await this.$axios.$get(AIRTIME_VENDORS)
                .then(res => {
                    this.airtime.vendors = res.data;
                    //console.log(this.data_vendors);
                })
            },
            async fetchPlans() {
                //console.log(this.request.data.vendor); return;
                if (this.request.data.vendor != "") {
                   // alert("hello"); return;
                    let vendor = this.request.data.vendor;
                    await this.$axios
                    .get(DATA_PLANS(vendor))
                    .then(res => {
                        this.data.services = res.data.data.data
                        console.log(res.data.data.data); 
                        $('#data-service').removeAttr('disabled');
                        $('#data-next').children().removeClass('no-event');
                    })
                    .catch(err => console.log(err));
                }
                //alert("No Hello"); return;
            },
            dataNext() {
                if (this.request.data.service !== "") {
                    //this.request.data.service.amount = this.request.data.amount
                    $('#data-first').addClass('d-none');
                    $('#data-second').removeClass('d-none');
                    $('#data-prev').children().removeClass('no-event');
                    $('#data-next').addClass('d-none');
                    $('#data-submit').removeClass('d-none');
                }
            },
            dataPrev() {
                if (this.request.data.service !== "") {
                    $('#data-first').removeClass('d-none');
                    $('#data-second').addClass('d-none');
                    $('#data-prev').children().addClass('no-event');
                    $('#data-next').removeClass('d-none');
                    $('#data-submit').addClass('d-none');
                }
            },
            async buyData() {
                this.loading = true;
                console.log(this.request.data)
                await this.$axios.$post(PURCHASE_DATA(this.request.data.vendor), this.request.data)
                        .then(res => {
                            this.loading = false;
                            console.log(res.data);
                            this.request.pay_response = res.data
                        })
                        .catch(error => {
                            this.loading = false;
                            this.error = error.response.data
                        });
            },
            openAirtimeNum() {
                $('#num-input').removeAttr('disabled');
                $('#airtime-next').children().removeClass('no-event');
            },
            airtimeNext() {
                //console.log(this.request.airtime.phone); return;
                if (this.request.airtime.phone === "" || this.request.airtime.phone === null) {
                    $('#airtime-next').children().addClass('text-danger');
                    //console.log('die');
                    return;
                }
                $('#airtime-next').addClass('d-none').children().removeClass('text-danger');
                $('#airtime-prev').children().removeClass('no-event');
                $('#airtime-submit').removeClass('d-none');
                $('#airtime-num').addClass('d-none');
                $('#airtime-amount').removeClass('d-none');
            },
            airtimePrev() {
                $('#airtime-next').removeClass('d-none');
                $('#airtime-prev').children().addClass('no-event');
                $('#airtime-submit').addClass('d-none');
                $('#airtime-num').removeClass('d-none');
                $('#airtime-amount').addClass('d-none');
            },
            async buyAirtime() {
                //console.log(this.request.airtime); return;
                this.loading = true;
                await this.$axios.$post(PURCHASE_AIRTIME(this.request.airtime.vendor), this.request.airtime)
                        .then(res => {
                            console.log(res.data);
                            this.loading = false;
                            this.request.pay_response = res.data
                        })
                        .catch(error => {
                            this.loading = false;
                            this.error = error.response.data
                        });
            },
            clearData() {
                this.request.pay_response = null
                this.request.airtime = '';
                this.request.data.service = '';
                this.request.data = '';
                location.reload();
            }
            
        },
        mounted(){
            this.fetchDataVendors();
            this.fetchAirtimeVendors();
        },
        watch: {
            'request.data.service': function(value) {           
                if (value) {      
                    this.request.data.description = value.description
                    this.request.data.code = value.code
                    this.request.data.amount = value.amount
                }
            }
        }
    }
</script>

<style scoped>
 .no-event {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.65;
 }
</style>