<template>
    <div>
        <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800 d-none">Port Harcourt Electicty</h1>
            </div>
            <div class="row">
                <div class="col-lg-5">
                    <div class="card mb-4">
                        <div class="card-header text-uppercase text-primay">
                            <div class="row">
                                
                                <div class="col-lg-10">
                                    <h5 class="mt-3 font-weight-bold text-primary">Port Harcourt Electricity Distribution
                                        Company</h5>
                                </div>
                                <div class="col-lg-2 d-none d-md-block">
                                    <img src="https://www.payvice.com/assets/img/util_phdc.png" height="60" width="60"
                                        class="img-thumbnail">
                                </div>
                            </div>
                        </div>
                        <div class="card-body" :class="{ overlay: meter.pay_response }" id="prepaid-box">
                                <p class="text-center text-danger font-weight-bold" v-if="error_msg">{{ error_msg }}</p>
                            <div class="bg-light shadow-sm rounded  p-3 px-2 p-sm-4 mb-4">
                                <form id="form-send-money">
                                    <div id="prepaid-first" v-if="meter.customerName == null">
                                        <div class="form-group">
                                            <label for="terminal">Terminal No</label>
                                            <input type="text" value="" class="form-control" v-model="meter.terminalid" placeholder="">
                                        </div>
                                        <div class="form-group">
                                            <label for="terminal">Meter Type</label>
                                            <select name="" id="" v-model="meter_type" class="form-control">
                                                <option value="prepaid">Prepaid</option>
                                                <option value="postpaid">Postpaid</option>
                                            </select>
                                            <small class="text-xs text-danger" v-if="error.type">{{ error.type[0] }}</small>
                                        </div>
                                        <div class="form-group">
                                            <label for="meter">Meter No</label>
                                            <input type="text" value="" class="form-control" data-bv-field="payerName"
                                                id="payerName" v-model="meter.account" placeholder="">
                                                <small class="text-xs text-danger" v-if="error.account">{{ error.account[0] }}</small>
                                        </div>
                                    </div>
                                    <div id="prepaid-second" v-if="meter.customerName">
                                        <div class="form-group">
                                            <label for="terminal">Full Name</label>
                                            <input type="text" readonly v-if="meter.customerName" v-model="meter.customerName"
                                                class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <label for="paymentDue">Phone Number</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend"> <span
                                                        class="input-group-text"><i class="fas fa-phone"></i></span>
                                                </div>
                                                <input type="text" class="form-control" v-model="meter.phone"
                                                    id="amount" value="" placeholder="">
                                            </div>
                                            <small class="text-xs text-danger" v-if="error.phone">{{ error.phone[0] }}</small>
                                            
                                        </div>
                                        <div class="form-group">
                                            <label for="merter">Amount</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend"> <span
                                                        class="input-group-text">₦</span>
                                                </div>
                                                <input type="text" class="form-control" data-bv-field="amount"
                                                    id="amount" v-model="meter.amount" placeholder="">
                                            </div>
                                            <small class="text-xs text-danger" v-if="error.amount">{{ error.amount[0] }}</small>
                                        </div>
                                    </div>
                                    <button type="button" v-if="meter.customerName === null"
                                        class="btn btn-primary btn-block mt-4"
                                        @click="validateAccout">{{ loading ? 'Validating...': 'Validate Account' }}</button>
                                    <button type="button" v-if="meter.customerName !== null"
                                        class="btn btn-primary btn-block mt-4"
                                        @click="makePurchase">{{ loading ? 'Paying...': 'Pay Now' }}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-1"></div>
                <div class="col-lg-4" v-if="meter.pay_response != null">
                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="bg-light shadow-sm rounded p-3 p-sm-4 mb-1">
                                <div class="text-center my-0">
                                    <p class="text-center text-success text-20 line-height-07"><i
                                            class="fas fa-check-circle"></i></p>
                                    <p class="text-center text-success text-8 line-height-07">Success!</p>
                                    <p class="text-center text-4">{{ meter.pay_response.message }}</p>
                                    <p class="text-center text-4">Meter Type: {{ meter.pay_response.type.toUpperCase() }}</p>
                                    <p class="text-center text-4">Transaction ID: {{ meter.pay_response.transactionID }}</p>
                                </div>
                                <p class="text-center">{{ meter.pay_response.unit }}</p>
                                <button type="button" @click="meter = ''" class="btn btn-block btn-outline-success"><i
                                        class="fas fa-print"></i> Pay Again</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        PH_METER_VALIDATION,
        PH_METER_PURCHASE

    } from "@/utils/routes";
    export default {
        layout: 'customers',
        data() {
            return {
                loading: false,
                meter_type: null,
                error_msg:null,
                meter: {
                    terminalid: '8352857872598735',
                    account: '861201325901',
                    type:'',
                    customerName: null,
                    phone: "",
                    amount: "",
                    productCode:"",
                    pay_response: null
                },
                error:[],
            }
        },
        methods: {
            async validateAccout() {
                this.loading = true
                this.error_msg = null
                await this.$axios.$post(PH_METER_VALIDATION, this.meter)
                    .then(res => {
                        this.loading = false
                        //console.log(res.data); return;
                        this.meter.customerName = res.data.name.trim()
                        this.meter.productCode = res.data.productCode.trim()
                    })
                    .catch(errors => {
                        this.error = errors.response.data.data.description
                        this.error_msg = errors.response.data.data.message
                        this.loading = false
                    })
            },
            async makePurchase() {
                this.loading = true
                this.error_msg = null
                this.error = []
                await this.$axios.$post(PH_METER_PURCHASE, this.meter)
                    .then(res => {
                        this.loading = false
                        this.meter.pay_response = res.data
                        this.meter.productCode = res.data.productCode
                        //console.log(res.data); return;
                       // $('#prepaid-box').addClass('overlay');
                    })
                    .catch(errors => {
                        this.error = errors.response.data.data.description
                        this.error_msg = errors.response.data.data.message
                        this.loading = false
                    })
            },
            validate_meter(type) {
                if (type == '') {                    
                    let x = this.error
                    x['message'] = "Meter Type Not Selected";
                    this.loading = false
                }
                return
            }

        },
        asyncData({ params}) {
            return {
                meter_type: params.type
            }
        },
        watch: {
            meter_type(type) {
            this.meter.type = type
        }
  },
    }
</script>

<style>
    .bg-white {
        background-color: #fff;
    }

    .overlay {
        filter: blur(2px);
        pointer-events: none;
    }
</style>