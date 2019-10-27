<template>
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    <nuxt-link class="sidebar-brand d-flex align-items-center justify-content-center" to="/app">
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-laugh-wink"></i>
      </div>
      <div class="sidebar-brand-text mx-3">PayMax</div>
    </nuxt-link>

    <hr class="sidebar-divider my-0" />

    <li class="nav-item">
      <nuxt-link class="nav-link" to="/app">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span>
      </nuxt-link>
    </li>

    <hr class="sidebar-divider" />

    <div class="sidebar-heading">Interface</div>

    <li class="nav-item">
      <a
        class="nav-link collapsed"
        id="nav-link"
        href="#"
        data-toggle="collapse"
        data-target="#collapseTwo"
        aria-expanded="true"
        aria-controls="collapseTwo"
      >
        <i class="fas fa-fw fa-pallet"></i>
        <span>Airtime & Data</span>
      </a>
      <div
        id="collapseTwo"
        class="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <nuxt-link class="collapse-item" to="/app/bills/buy-data">Buy Data</nuxt-link>
          <nuxt-link class="collapse-item" to="/app/bills/buy-airtime">Buy Airtime</nuxt-link>
          <nuxt-link class="collapse-item" to="/app/bills/smile">Smile Data</nuxt-link>
        </div>
      </div>
    </li>

    <li class="nav-item">
      <a
        class="nav-link collapsed"
        id="nav-link"
        href="#"
        data-toggle="collapse"
        data-target="#collapseUtilities"
        aria-expanded="true"
        aria-controls="collapseUtilities"
      >
        <i class="fas fa-fw fa-outdent"></i>
        <span>Transfer</span>
      </a>
      <div
        id="collapseUtilities"
        class="collapse"
        aria-labelledby="headingUtilities"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <a class="collapse-item" href="#">To Phone Number</a>
          <a class="collapse-item" href="#">To Bank Account</a>
        </div>
      </div>
    </li>

    <li class="nav-item">
      <a
        class="nav-link collapsed"
        id="nav-link"
        href="#"
        data-toggle="collapse"
        data-target="#collapseServices"
        aria-expanded="true"
        aria-controls="collapseServices"
      >
        <i class="fas fa-fw fa-outdent"></i>
        <span>Services</span>
      </a>
      <div
        id="collapseServices"
        class="collapse"
        aria-labelledby="headingServices"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <!-- <a class="collapse-item" href="#">Government</a>
          <a class="collapse-item" href="#">Aids, Grants & Donation</a>-->
          <nuxt-link class="collapse-item" to="/app/bills/cable-tv">Cable TV</nuxt-link>
          <!-- <nuxt-link class="collapse-item" to="/app/bills/bets">Bets, Lottery & Gaming</nuxt-link>
          <a class="collapse-item" href="#">Transport, Hotel & Events</a>
          <a class="collapse-item" href="/app/bills/smile">Smile</a>-->
        </div>
      </div>
    </li>

    <li class="nav-item">
      <nuxt-link class="nav-link" to="/app/bills/education/">
        <i class="fas fa-fw fa-graduation-cap"></i>
        <span>Education</span>
      </nuxt-link>
    </li>

    <li class="nav-item">
      <nuxt-link
        class="nav-link collapsed"
        id="nav-link"
        to="/app/bills/utility"
        data-toggle="collapse"
        data-target="#collapseUtitlity"
        aria-expanded="true"
        aria-controls="collapseUtitlity"
      >
        <i class="fas fa-fw fa-outdent"></i>
        <span>Electricity</span>
      </nuxt-link>
      <div
        id="collapseUtitlity"
        class="collapse"
        aria-labelledby="headingUtitlity"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <nuxt-link class="collapse-item" to="#">Abuja Electricity</nuxt-link>
          <nuxt-link class="collapse-item" to="#">Enugu Electricity</nuxt-link>
          <nuxt-link class="collapse-item" to="#">Eko Electricity</nuxt-link>
          <a class="collapse-item" href="#">Ibadan Electricity</a>
          <nuxt-link class="collapse-item" to="#">Ikeja Electricity</nuxt-link>
          <a class="collapse-item" href="#">Kano Electricity</a>
          <a class="collapse-item" href="#">PortHarcourt Electricity</a>
        </div>
      </div>
    </li>

    <li class="nav-item">
      <nuxt-link class="nav-link" to="/app/payment-history">
        <i class="fas fa-fw fa-money-check"></i>
        <span>Payment History</span>
      </nuxt-link>
    </li>

    <hr class="sidebar-divider" />

    <div class="sidebar-heading">Settings</div>

    <li class="nav-item">
      <nuxt-link class="nav-link" to>
        <i class="fas fa-fw fa-hands-helping"></i>
        <span>Support</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link class="nav-link" to="/app/profile">
        <i class="fas fa-fw fa-user"></i>
        <span>My Profile</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <a @click.prevent="logoutUser" class="nav-link" href>
        <i class="fas fa-fw fa-power-off"></i>
        <span>Logout</span>
      </a>
    </li>
  </ul>
</template>

<script>
import { mapActions } from "vuex";
export default {
  mounted() {
    console.log(this.$store.getters["getUser"]);
    // $(document).on('click','#nav-link', function() {
    //     let mTarget = $(this).data('target').substring(1);
    //     if ($(this).hasClass('collapsed')) {
    //         console.log('close'); return;
    //         $(this).addClass('collapsed').attr('aria-expanded','false');
    //         $(mTarget).removeClass('show');
    //     } else {
    //          console.log('open'); return;
    //         $(this).removeClass('collapsed').attr('aria-expanded','true');
    //        // let mTarget = $(this).data('target').substring(1);
    //         $(mTarget).addClass('show');
    //     }
    // })
  },
  methods: {
    logoutUser() {
      this.$auth.logout();
      //   this.$store.dispatch('logout').then(() => {
      this.$router.push("/");
      //   })
    }
  }
};
</script>
<style>
</style>