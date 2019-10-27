<template>
  <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
    <button
      id="sidebarToggleTop"
      @click="toggleSidebar"
      class="btn btn-link d-md-none rounded-circle mr-3"
    >
      <i class="fa fa-bars"></i>
    </button>

    <form
      class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
    >
      <div class="input-group">
        <input
          type="text"
          class="form-control bg-light border-0 small"
          placeholder="Search for Billers..."
          aria-label="Search"
          aria-describedby="basic-addon2"
        />
        <div class="input-group-append">
          <button class="btn btn-primary" type="button">
            <i class="fas fa-search fa-sm"></i>
          </button>
        </div>
      </div>
    </form>
    <div
      class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
    >
      <button class="btn btn-primary" @click="showWalletModal">Topup Wallet</button>
      <a
        data-target="#wallet-modal"
        data-toggle="modal"
        style="display:none"
        id="togglerModalWallet"
      />
    </div>

    <ul class="navbar-nav ml-auto">
      <li class="nav-item dropdown no-arrow d-sm-none">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="searchDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="fas fa-search fa-fw"></i>
        </a>

        <div
          class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
          aria-labelledby="searchDropdown"
        >
          <form class="form-inline mr-auto w-100 navbar-search">
            <div class="input-group">
              <input
                type="text"
                class="form-control bg-light border-0 small"
                placeholder="Search for Billers..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                  <i class="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form>
          <button class="btn btn-primary">Topup Wallet</button>
        </div>
      </li>

      <div class="topbar-divider d-none d-sm-block"></div>

      <li class="nav-item dropdown no-arrow">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="userDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{ user.name }}</span>
          <img
            class="img-profile rounded-circle"
            src="https://source.unsplash.com/QAB-WJcbgJk/60x60"
          />
        </a>

        <div
          class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
          aria-labelledby="userDropdown"
        >
          <a class="dropdown-item" href="#">
            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
            Profile
          </a>
          <a class="dropdown-item" href="#">
            <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
            Settings
          </a>
          <a class="dropdown-item" href="#">
            <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
            Activity Log
          </a>
          <div class="dropdown-divider"></div>
          <a
            class="dropdown-item"
            href="#"
            @click.prevent="logoutUser"
            data-toggle="modal"
            data-target="#logoutModal"
          >
            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
            Logout
          </a>
        </div>
      </li>
    </ul>
    <div class="modal fade" tabindex="-1" role="dialog" id="wallet-modal" v-if="showModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content" style="margin-top: 10rem">
          <div class="modal-header">
            <h5 class="modal-title">Topup</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>Enter Amount to Topup</label>
              <input type="number" v-model="topup.amount" class="form-control" />
            </div>
          </div>
          <div class="text-center" style="padding-bottom: 1em">
            <button type="button" class="btn btn-secondary" @click="payWithRave">Make Payment</button>
            <br />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Rave from "../../utils/payments/rave";
import { TOPUPWALLET } from "../../utils/routes";
export default {
  computed: {
    user() {
      let user = this.$auth.user;
      if (user) {
        return user || undefined;
      }
    }
  },
  data() {
    return {
      topup: {
        amount: ""
      },
      showModal: false,
      search_biller: ""
    };
  },
  watch: {
    search_biller(value) {
      if (value) {
        this.$store.commit("SEARCHBILLER", value);
        this.$router.push("/app/search");
      } else {
        this.$router.go(-1);
      }
    }
  },
  methods: {
    logoutUser() {
      this.$auth.logout();
      //   this.$store.dispatch('logout').then(() => {
      this.$router.push("/");
      //   })
    },
    showWalletModal() {
      this.showModal = true;
      document.getElementById("togglerModalWallet").click();
    },
    toggleSidebar() {
      // if ($("#accordionSidebar").hasClass("d-none")) {
      //     $('#accordionSidebar').removeClass('d-none');
      // } else {
      //     $('#accordionSidebar').addClass('d-none');
      // }
    },
    payWithRave() {
      const payload = {
        amount: this.topup.amount,
        email: this.user.email,
        phone: this.user.phone
      };

      let app = this;

      let x = getpaidSetup({
        PBFPubKey: process.env.RV,
        customer_email: payload.email,
        amount: payload.amount,
        customer_phone: payload.phone,
        currency: "NGN",
        txref: Math.floor(Math.random() * 10000000) + 10,
        // meta: [{
        //     metaname: "flightID",
        //     metavalue: "AP1234"
        // }],
        onclose: function() {},
        callback(response) {
          var txref = response.tx.txRef; // collect txRef returned and pass to a 					server page to complete status check.
          // console.log("This is the response returned after a charge", response);
          if (
            response.tx.chargeResponseCode == "00" ||
            response.tx.chargeResponseCode == "0"
          ) {
            x.close();
            app.topupWallet(response.data.data);
          } else {
            // redirect to a failure page.
          }
        }
      });
      //   const payment = Rave(payload, call => {
      //     console.log(call, "pay");
      //   });
    },

    async topupWallet(response) {
      await this.$axios
        .post(TOPUPWALLET, { amount: this.topup.amount })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>