<template>
    <div>
        <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800 d-none">Eko Electicty</h1>
            </div>
            <div class="row">
                <div class="col-lg-5">
                    <div class="card mb-4">
                        <div class="card-header text-uppercase text-primay">
                            <div class="row">
                                
                                <div class="col-lg-10">
                                    <h5 class="mt-3 font-weight-bold text-primary">Enugu Electricity Distribution
                                        Company</h5>
                                </div>
                                <div class="col-lg-2 d-none d-md-block">
                                    <img src="https://www.payvice.com/assets/img/util_eedc.png" height="60" width="60"
                                        class="img-thumbnail">
                                </div>
                            </div>
                        </div>
                        <div class="card-body" id="prepaid-box">
                                <p class="text-center text-danger font-weight-bold" v-if="error">{{ error.message }}</p>
                            <div class="bg-light shadow-sm rounded  p-3 px-2 p-sm-4 mb-4">
                                <form id="form-send-money">
                                    <div id="prepaid-first" v-if="meter.customerName == null">
                                        <div class="form-group">
                                            <label for="terminal">Meter Type</label>
                                            <select name="" id="" v-model="meter_type" class="form-control">
                                                <option value="">Select an Option</option>
                                                <option value="prepaid">Prepaid</option>
                                                <option value="postpaid">Postpaid</option>
                                                <option value="smartcard">Smart Card</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="meter">Meter No</label>
                                            <input type="text" value="" class="form-control" data-bv-field="payerName"
                                                id="payerName" v-model="meter.account" placeholder="">
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
                                </div>
                                <p class="text-center text-3 mb-4">
                                    Your Token Number is :
                                </p>
                                <p class="text-center text-primary text-uppercase font-weight-bold">
                                    {{ meter.pay_response.token }}</p>
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
        ENUGU_METER_PURCHASE,
        ENUGU_PREPAID_VALIDATION,
        ENUGU_POSTPAID_VALIDATION,

    } from "@/utils/routes";
    export default {
        layout: 'customers',
        data() {
            return {
                loading: false,
                meter_type: null,
                meter: {
                    account: '45037595423',
                    type: '',
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
                this.error = []
                await this.$axios.$post(this.checkMeter(this.meter_type), this.meter)
                    .then(res => {
                        this.loading = false
                        //console.log(res.data); return;
                        this.meter.customerName = res.data.name.trim()
                        this.meter.productCode = res.data.productCode.trim()
                    })
                    .catch(errors => {
                        this.error = errors.response.data.data
                        this.loading = false
                    })
            },
            async makePurchase() {
                this.loading = true
                await this.$axios.$post(this.checkMeter(this.meter_type), this.meter)
                    .then(res => {
                        this.loading = false
                        this.meter.pay_response = res.data
                       // console.log(res.data); return;
                        $('#prepaid-box').addClass('overlay');
                    })
                    .catch(errors => {
                        this.error = errors.response.data.data
                        this.loading = false
                    })
            },
            checkMeter(type) {
                switch(type) {
                case "prepaid":
                    return this.meter.customerName == null ? ENUGU_PREPAID_VALIDATION : ENUGU_METER_PURCHASE(type)
                    break;
                case "postpaid":
                    return this.meter.customerName == null ?  ENUGU_POSTPAID_VALIDATION : ENUGU_METER_PURCHASE(type)
                    break;
                default:
                    let x = this.error
                    x['message'] = "Meter Type Not Selected";
                    this.loading = false
                    return
                }
            }

        },
        asyncData({ params}) {
            return {
                meter_type: params.type
            }
        },
        watch:{
            meter_type(value) {
                if (value) {
                    this.meter.type = value
                }
            }
        }
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