<template>
  <div class="card" style="min-height: 300px; height: auto">
    <div class="card-body">
      <div class="mb-5">
        <h2>{{ paymentDetails.service.type || 'Pay For'}}</h2>
        <h1>{{ paymentDetails.amount || 0.00}}NGN</h1>
      </div>
      <div class="row mt-5">
        <div class="col-md-6 text-center">
          <button class="btn btn-primary btn-block" @click.prevent="payWithWallet">Pay with Wallet</button>
        </div>
        <div class="col-md-6 text-center">
          <button class="btn btn-secondary btn-block" @click="payWithRave">Direct Debit</button>
          <PaymentModal />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Noty from "noty";
import { SAVE_TRANSACTION } from "../utils/routes";
import PaymentModal from "@/components/PaymentModal";
export default {
  name: "payment-option",
  components: {
    PaymentModal
  },
  props: {
    paymentDetails: {
      type: Object,
      required: true,
      default: {
        service: {
          type: "Pay For"
        },
        amount: 0.0
      }
    },
    url: {
      type: String,
      required: true
    },
    payload: {
      type: Object,
      required: true
    }
  },
  computed: {
    user() {
      return this.$auth.user;
    }
  },
  mounted() {
    console.log(this.paymentDetails);
  },
  methods: {
    payWithRave() {
      let appky = process.env.RV;
      var app = this;
      var x = getpaidSetup({
        PBFPubKey: appky,
        customer_email: this.user.email,
        amount: this.paymentDetails.amount,
        customer_phone: this.user.phone,
        currency: "NGN",
        txref: "rave-123456",
        meta: [
          {
            metaname: "flightID",
            metavalue: "AP1234"
          }
        ],
        onclose: function() {
          // alert("Payment Cancelled");
          // location.reload();
        },
        callback(response) {
          var txref = response.tx.txRef; // collect txRef returned and pass to a 					server page to complete status check.
          // console.log("This is the response returned after a charge", response);
          if (
            response.tx.chargeResponseCode == "00" ||
            response.tx.chargeResponseCode == "0"
          ) {
            // save transaction
            const transactionPayload = {
              ...app.paymentDetails
            };

            const { orderRef } = response.tx;

            app.purchaseService().then(() => {
              x.close();
            });
          } else {
            // redirect to a failure page.
          }
        }
      });
    },
    payWithWallet() {
      //console.log(this.user.wallet.balance);return;
      if (this.user.wallet.balance > this.paymentDetails.amount) {
        this.$store.dispatch("deductBalance", this.paymentDetails.amount);
      } else {
        this.toast("Insufficient Funds", "error");
      }
    },
    toast(text, type = "info") {
      return new Noty({
        theme: "nest",
        text,
        type,
        layout: "topCenter"
      }).show();
    },
    notifyParent(data) {
      this.$emit("payment-completed", data);
    },
    async purchaseService() {
      this.loading = true;
      this.error = [];
      await this.$axios
        .$post(this.url, this.payload)
        .then(res => {
          this.loading = false;
          this.saveTransaction(res.data);
        })
        .catch(error => {
          this.loading = false;
          this.error = error.response.data.errors;
        });
    },
    async saveTransaction(transactionPayload) {
      await this.$axios
        .post(SAVE_TRANSACTION, transactionPayload)
        .then(res => {
          setTimeout(() => {
            this.notifyParent(res.data.data); // emits data to parent
          }, 2000);
        })
        .catch(err => console.log(err.response.data));
    }
  }
};
</script>

<style lang="scss" scoped>
</style>