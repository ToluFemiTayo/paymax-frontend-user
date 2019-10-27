<template>
  <div>
    <div class="container-fluid"                                                                                                                                                                                                                                                          >
      <div class="row">
        <div class="col-lg-5">
          <div class="card mb-4">
            <div class="card-header text-uppercase text-primay">
              <div class="row">
                <div class="col-lg-10">
                  <h5 class="mt-3 font-weight-bold text-primary">Buy Data</h5>
                </div>
                <div class="col-lg-2 d-none d-md-block"></div>
              </div>
            </div>
            <div class="card-body" id="prepaid-box" :class="{ blurred: pay_response || selectionCompleted }">
              <p class="text-center text-danger font-weight-bold" v-if="error">{{ error.message }}</p>
              <div class>
                <form id="form-send-money" method="post">
                  <div id="data-first" v-if="!toggle">
                    <div class="form-group">
                      <label for="withdrawto" class="text-2">Mobile Network</label>
                      <select
                        id="withdrawto"
                        :disabled="vendors.length < 1"
                        class="custom-select"
                        v-model="form.vendor"
                        @change="fetchPlans"
                      >
                        <option
                          :value="vendor.service"
                          v-for="vendor in vendors"
                          :key="vendor.name"
                        >{{ vendor.name.toUpperCase() }}</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="withdrawto" class="text-2">Data Plan</label>
                      <select
                        id="data-service"
                        :disabled="services.length < 1"
                        class="custom-select"
                        v-model="form.service"
                      >
                        <option
                          :value="service"
                          v-for="service in services"
                          :key="service.code"
                        >{{ service.description.toUpperCase() + ' -- ' +service.amount + 'NGN' }}</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="youSend" class="text-2">Mobile No</label>
                      <div class="input-group">
                        <input type="text" class="form-control" v-model="form.phone" placeholder />
                      </div>
                      <small class="text-danger" v-if="error.phone">{{ error.phone[0] }}</small>
                    </div>
                    <div class="form-group" v-if="form.amount">
                      <label for="youSend" class="text-2">Amount (₦)</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">₦</span>
                        </div>
                        <input
                          type="number"
                          class="form-control"
                          v-if="form.amount"
                          readonly
                          v-model="form.service.amount"
                          placeholder
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div id="data-submit">
                      <button
                        class="btn btn-primary btn-block"
                        @click.prevent="buyData()"
                      >Continue</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5" :class="!selectionCompleted ? 'blurred' : ''" v-show="!paymentCompleted">
          <PaymentOption v-if="form.service" :paymentDetails="form" @payment-completed="paymentSuccess" />
        </div>
        <div ></div>
        <div class="col-lg-5" v-if="pay_response != null || paymentCompleted">
          <div class="card mb-4 mt-2">
            <div class="card-body">
              <div class="bg-light shadow-sm rounded p-3 p-sm-4 mb-1">
                <div class="text-center my-0">
                  <p class="text-center text-success text-20 line-height-07">
                    <i class="fas fa-check-circle"></i>
                  </p>
                  <p class="text-center text-success text-8 line-height-07">Success!</p>
                  <p class="text-center text-4">{{ pay_response.message }}</p>
                  <p class="text-center text-4">Amount: {{ pay_response.amount }}</p>
                  <p class="text-center text-4">Transaction ID: {{ pay_response.transactionID }}</p>
                </div>
                <p class="text-center"></p>
                <button type="button" @click="clearData" class="btn btn-block btn-outline-success">
                  <i class="fas fa-print"></i> Pay Again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DATA_VENDORS, DATA_PLANS, PURCHASE_DATA } from "@/utils/routes";
import PaymentOption from "@/components/PaymentOption";
export default {
  layout: "customers",
  components: {
    PaymentOption
  },
  data() {
    return {
      selectionCompleted: false,
      planSelected: false,
      paymentCompleted: false,
      loading: false,
      toggle: false,
      vendors: [],
      services: [],
      form: {
        vendor: null,
        service: null,
        phone: null,
        description: null,
        code: null,
        user: this.$store.state.user
      },
      pay_response: null,
      error: []
    };
  },
  methods: {
    async fetchDataVendors() {
      await this.$axios.$get(DATA_VENDORS).then(res => {
        this.vendors = res.data;
        //console.log(this.data_vendors);
      });
    },
    async fetchPlans() {
      //console.log(this.request.data.vendor); return;
      if (this.form.vendor != "") {
        // alert("hello"); return;
        let vendor = this.form.vendor;
        await this.$axios
          .get(DATA_PLANS(vendor))
          .then(res => {
            this.services = res.data.data.data;
            this.planSelected = true;
          })
          .catch(err => console.log(err));
      }
      //alert("No Hello"); return;
    },
    async buyData() {
      this.loading = true;
      this.error = [];
      this.form = {
        ...this.form,
        ...this.user
      };
      // this.showPaymentOptions = true;
      this.selectionCompleted = true;
      
    },
    clearData() {
      location.reload();
    },
    paymentSuccess(response) {
      this.paymentCompleted = true
      this.pay_response = response
      console.log(response)
    }
  },
  mounted() {
    this.fetchDataVendors();
  },
  watch: {
    "form.service": function(value) {
      if (value) {
        this.form.description = value.description;
        this.form.code = value.code;
        this.form.amount = value.amount;
      }
    }
  }
};
</script>

<style>
.bg-white {
  background-color: #fff;
}

.blurred {
  filter: blur(2px);
  pointer-events: none;
}
</style>