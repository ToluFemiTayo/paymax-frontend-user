<template>
  <section class="section__wrapper">
    <div class="bg-light shadow-md rounded p-4">
      <h2 class="text-4 mb-3">Data Recharge</h2>
      <br>
      <div class="row">
        <!-- Mobile Recharge
        =============================================-->
        <div class="col-lg-4 mb-4 mb-lg-0">
          <form id="recharge-bill" method="post">
            <div v-if="serviceLoaded">
              <div class="form-group">
                <label for class="font-weight-bold">Select Your Operator</label>
                <select
                  class="custom-select"
                  id="operator"
                  v-model="subscription.service"
                  @change="fetchPlans"
                  required
                >
                  <option
                    v-for="(vendor, i) in vendors.service"
                    :key="i"
                    :value="vendor"
                  >{{ vendor.name }}</option>
                </select>
              </div>
              <div class="form-group">
                <label for class="font-weight-bold">Select Your Plan</label>
                <select class="custom-select" id="operator" v-model="subscription.plan" required>
                  <option
                    v-for="(plan, i) in vendors.plans"
                    :key="i"
                    :value="plan"
                  >{{ plan.description }} - &#8358; {{ plan.amount }}</option>
                </select>
              </div>
              <div class="form-group">
                <label for class="font-weight-bold">Enter Mobile Number</label>
                <input
                  type="text"
                  class="form-control"
                  data-bv-field="number"
                  id="mobileNumber"
                  required
                  v-model="subscription.phone"
                  placeholder="e.g 08012"
                />
              </div>
              <div class="form-group" v-if="requestType !== 'data'">
                <!-- <label>Amount</label> -->
                <div class="form-group input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">₦</span>
                  </div>
                  <!-- <a
                  href="#"
                  data-target="#view-plans"
                  data-toggle="modal"
                  class="view-plans-link"
                  >Select Plan</a>-->
                  <input
                    class="form-control"
                    id="amount"
                    placeholder="Amount"
                    required
                    v-model="subscription.plan.amount"
                    type="text"
                    readonly
                  />
                </div>
              </div>
              <button
                @click.prevent="makePayment"
                class="btn btn-primary btn-block"
                :disabled="serviceLoading"
                type="submit"
              >Continue to Recharge</button>
            </div>

            <div
              v-if="serviceLoading"
              style="  position: absolute;
            top: 5rem;
            left: 10rem;z-index: 9999"
            >
              <LoaderCube />
            </div>
          </form>
        </div>
        <!-- Mobile Recharge end -->

        <!-- Slideshow
        =============================================-->
        <div class="col-lg-8">
          <Slider :images="images" :hasMargin="true" />
        </div>
        <!-- Slideshow end -->
      </div>
    </div>
    <!-- Email Address Modal -->

    <div class="modal fade" tabindex="-1" role="dialog" id="payment-email">
      <div class="modal-dialog" role="document">
        <div class="modal-content" style="margin-top: 15rem">
          <div class="modal-header">
            <h5 class="modal-title">Continue to Payment</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row justify-content-center">
              <div class="col-md-9">
                <div class="form-group">
                  <label>Enter your Fullname</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="John Doe"
                    v-model="payment.name"
                  />
                </div>
                <div class="form-group">
                  <label>Enter your Email to Continue</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="johndoe@example.com"
                    v-model="payment.email"
                  />
                  <span class="help-block text-muted">Receipts will be sent to this email</span>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center" style="padding-bottom: 1em">
            <!-- <button type="button" class="btn btn-primary">Cal</button> -->
            <button
              type="button"
              class="btn btn-secondary"
              @click.prevent="payWithRave"
            >Make Payment</button>
            <br />
          </div>
        </div>
      </div>
    </div>
    <PaymentModal />
  </section>
</template>
  name: "School"

<script>
import { DATA_VENDORS, DATA_PLANS, SAVE_TRANSACTION } from "../utils/routes";
import ravepay from "../utils/payments/rave";
import LoaderCube from "@/components/LoaderCube";
import Slider from "@/components/packages/Slider";
import PaymentModal from "@/components/PaymentModal";
export default {
  components: {
    LoaderCube,
    Slider,
    PaymentModal
  },
  data() {
    return {
      images: [
        {
          src: "/banners/airtime-data-recharge.jpeg",
          alt: "Banner"
        },
        {
          src: "/banners/airtime-vendord.jpeg",
          alt: "Banner"
        }
      ],
      paymentModal: false,
      payment: {
        name: "",
        email: ""
      },
      vendors: {
        service: [],
        plans: []
      },
      serviceLoaded: false,
      serviceLoading: false,
      subscription: {
        service: "Select your Operator",
        plan: "",
        amount: 0,
        phone: ""
      },
      dataSubscriptions: [],
      airtimeSubscriptions: [],
      selectedDataVendor: "",
      requestType: ""
    };
  },
  mounted() {
    this.fetchService(DATA_VENDORS);
    // $("#payment-modal").modal("show");
  },

  updated() {
    // console.log(this.vendors);
  },
  watch: {
    requestType(val) {
      if (val == "airtime") {
        this.fetchService(AIRTIME_VENDORS);
      } else {
      }
    }
  },
  methods: {
    async fetchPlans() {
      let { service } = this.subscription.service;
      this.serviceLoaded = false;
      this.serviceLoading = true;
      await this.$axios
        .get(DATA_PLANS(service))
        .then(res => {
          this.vendors.plans = res.data.data.data;
          this.serviceLoaded = true;
          this.serviceLoading = false;
        })
        .catch(err => console.log(err));
    },
    async fetchService(type) {
      this.serviceLoaded = false;
      this.serviceLoading = true;
      await this.$axios
        .$get(type)
        .then(res => {
          this.serviceLoaded = true;
          this.serviceLoading = false;
          this.vendors.service = res.data;
        })
        .catch(err => {
          this.serviceLoading = false;
          console.log(err.response.data);
        });
    },
    makePayment() {
      if (!this.$auth.user) {
        $("#payment-email").modal("show");
      } else {
        this.payWithRave();
      }
    },

    payWithRave() {
      let app = this;
      this.paymentModal = true;
      var x = getpaidSetup({
        PBFPubKey: "FLWPUBK_TEST-491b3ece799f178e280d2d7b215b5072-X",
        customer_email: this.payment.email,
        amount: this.subscription.plan.amount || this.subscription.amount,
        customer_phone: this.subscription.phone,
        currency: "NGN",
        txref: "rave-123456",
        meta: [
          {
            metaname: "Payment for " + this.subscription.plan.name,
            metavalue:
              "PAYMENTFOR" +
              this.subscription.plan.name
                .split(" ")
                .join("")
                .toUpperCase()
          }
        ],
        onclose: function() {},
        callback(response) {
          var txref = response.tx.txRef; // collect txRef returned and pass to a 					server page to complete status check.
          // console.log("This is the response returned after a charge", response);
          if (
            response.tx.chargeResponseCode == "00" ||
            response.tx.chargeResponseCode == "0"
          ) {
            // save transaction
            const transactionPayload = {
              ...app.payment,
              ...app.subscription,
              ...response.tx
            };

            const { orderRef } = response.tx;
            app.$axios
              .post(SAVE_TRANSACTION, transactionPayload)
              .then(res => {
                setTimeout(() => {
                  x.close(); // use this to close the modal immediately after payment.
                  $("#payment-email").modal("hide");
                  app.$router.push(`/payment-success/${orderRef}`);
                }, 2000);
              })
              .catch(err => console.log(err.response.data));
          } else {
            // redirect to a failure page.
          }
        }
      });
    }
  }
};
</script>

