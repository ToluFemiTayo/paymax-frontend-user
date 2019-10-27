<template>
  <div>
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800 d-none">
          WAEC -
          <span v-if="service" v-html="service.content.ServiceName"></span>
        </h1>
      </div>
      <div class="row">
        <div class="col-lg-5">
          <div class="card mb-4">
            <div class="card-header text-uppercase text-primay">
              <div class="row">
                <div class="col-lg-10">
                  <h5
                    class="mt-3 font-weight-bold text-primary"
                  >{{ $route.params.type.split('-').join(' ') }}</h5>
                </div>
                <div class="col-lg-2 d-none d-md-block">
                  <img
                    src="http://www.vtpass.com/resources/products/200X200/WAEC-Result-Checker-PIN.jpg"
                    height="60"
                    width="60"
                    class="img-thumbnail"
                  />
                </div>
              </div>
            </div>
            <div class="card-body" id="prepaid-box">
              <p class="text-center text-danger font-weight-bold" v-if="error">{{ error.message }}</p>
              <div class="bg-light shadow-sm rounded p-3 px-2 p-sm-4 mb-4">
                <form id="form-send-money">
                  <!-- <div id="prepaid-first" v-if="meter.name == null"> -->
                  <div class="form-group">
                    <label for="terminal">Select Type</label>
                    <select v-model="payload.service" class="form-control" v-if="service">
                      <option
                        :value="variation"
                        v-for="(variation, i) in service.content.varations"
                        :key="i"
                      >{{ variation.name }}</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="terminal">Amount</label>
                    <input
                      type="text"
                      value
                      class="form-control"
                      data-bv-field="payerName"
                      id="payerName"
                      v-model="payload.amount"
                      placeholder
                    />
                  </div>

                  <button
                    type="button"
                    class="btn btn-primary btn-block mt-4"
                    @click="makePurchase"
                  >Purchase</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-lg-5"
          :class="!selectionCompleted ? 'blurred' : ''"
          v-show="!paymentCompleted"
        >
          <PaymentOption
            v-if="selectionCompleted"
            :paymentDetails="payload"
            :payload="payload"
            :url="paymentUrl"
            @payment-completed="paymentSuccess"
          />
        </div>
        <div class="col-lg-4" v-if="pay_response != null || paymentCompleted">
          <div class="card mb-4">
            <div class="card-body">
              <div class="bg-light shadow-sm rounded p-3 p-sm-4 mb-1">
                <div class="text-center my-0">
                  <p class="text-center text-success text-20 line-height-07">
                    <i class="fas fa-check-circle"></i>
                  </p>
                  <p class="text-center text-success text-8 line-height-07">Success!</p>
                  <p class="text-center text-4">{{ pay_response.message }}</p>
                </div>
                <p class="text-center text-3 mb-4">Your Serial and Pin Number is :</p>
                <p
                  class="text-center text-primary text-uppercase font-weight-bold"
                >{{ pay_response.purchase_code }}</p>
                <p class="text-center">{{ pay_response.pin }} -</p>
                <button type="button" @click="meter = ''" class="btn btn-block btn-outline-success">
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
import {
  WAEC_RESULT_PIN,
  WAEC_REGISTRATION_PIN,
  WAEC_REGISTRATION_PIN_PAYMENT,
  WAEC_RESULT_PIN_PAYMENT
} from "@/utils/routes";
import PaymentOption from "@/components/PaymentOption";
export default {
  layout: "customers",
  components: {
    PaymentOption
  },
  data() {
    return {
      pay_response: null,
      paymentCompleted: false,
      selectionCompleted: false,
      paymentUrl: "",
      loading: false,
      service_type: "",
      service: undefined,
      error: [],
      payload: {
        service: "",
        amount: 0
      }
    };
  },
  watch: {
    "payload.service"(value) {
      this.payload.amount = value.variation_amount;
    }
  },
  mounted() {
    this.fetchServices();
  },
  methods: {
    async fetchServices() {
      this.loading = true;
      this.error = [];
      let service = "";
      if (this.service_type == "result-pin") {
        service = WAEC_RESULT_PIN;
      } else {
        service = WAEC_REGISTRATION_PIN;
      }
      await this.$axios
        .$get(service)
        .then(res => {
          this.loading = false;
          this.service = res.data;
          setTimeout(() => {
            console.log(this.service);
          }, 1000);
        })
        .catch(errors => {
          this.error = errors.response.data.data;
          this.loading = false;
        });
    },
    async makePurchase() {
      this.loading = true;
      if (this.service_type == "result-pin") {
        this.paymentUrl = WAEC_RESULT_PIN_PAYMENT;
      } else {
        this.paymentUrl = WAEC_REGISTRATION_PIN_PAYMENT;
      }
      this.payload = {
        service_id: this.service.content.serviceID,
        variation_code: this.payload.service.variation_code,
        amount: this.payload.service.variation_amount,
        phone: this.$auth.user.phone,
        service: {
          ...this.payload.service,
          type: this.payload.service.name
        }
      };
      console.log(this.payload);

      // return;

      this.selectionCompleted = true;
    },
    paymentSuccess(response) {
      this.paymentCompleted = true;
      this.pay_response = response;
      console.log(response);
    }
  },
  asyncData({ params }) {
    return {
      service_type: params.type
    };
  }
};
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