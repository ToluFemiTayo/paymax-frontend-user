<template>
  <!-- Secondary Navigation
  =============================================-->
  <div
    class="bg-secondary"
    :class="checkPath('/accounts/create') || checkPath('/accounts/login') ? 'hidden': ''"
  >
    <div class="section__wrapper">
      <ul class="nav secondary-nav">
        <li class="nav-item">
          <nuxt-link class="nav-link" :class="checkPath('/') ? 'active' : ''" to="/">
            <span>
              <i class="fas fa-phone-alt"></i>
            </span> AirTime
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" :class="checkPath('/data-services') ? 'active' : ''" to="/data-services">
            <span>
              <i class="fas fa-wifi"></i>
            </span> Data
          </nuxt-link>
        </li>
         <li class="nav-item">
          <nuxt-link
            class="nav-link"
            :class="checkPath('/cable-tv') ? 'active' : ''"
            to="/cable-tv"
          >
            <span>
              <i class="fas fa-tv"></i>
            </span> Cable TV
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link
            class="nav-link"
            :class="checkPath('/electricity') ? 'active' : ''"
            to="/electricity"
          >
            <span>
              <i class="fas fa-bolt"></i>
            </span> Electricity
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" :class="checkPath('/education') ? 'active' : ''" to="/education">
            <span>
              <i class="fas fa-graduation-cap"></i>
            </span> Education
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" :class="checkPath('/donations') ? 'active' : ''" to="/donations">
            <span>
              <!-- <i class="fas fa-hand-holding-usd"></i> -->
              <i class="fas fa-donate"></i>
            </span> Donation
          </nuxt-link>
        </li>
        
        <!-- <li class="nav-item">
          <nuxt-link class="nav-link" :class="checkPath('/school') ? 'active' : ''" to="/school">
            <span>
              <i class="fas fa-school"></i>
            </span> School
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link
            class="nav-link"
            :class="checkPath('/government-payments') ? 'active' : ''"
            to="/government-payments"
          >
            <span>
              <i class="fas fa-credit-card"></i>
            </span> Government
          </nuxt-link>
        </li>-->
        <!-- <li class="nav-item">
          <nuxt-link
            class="nav-link"
            :class="checkPath('/commerce') ? 'active' : ''"
            to="/commerce"
          >
            <span>
              <i class="fas fa-phone"></i>
            </span> Commerce
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" :class="checkPath('/betting') ? 'active' : ''" to="/betting">
            <span>
              <i class="fas fa-gamepad"></i>
            </span> Betting
          </nuxt-link>
        </li>-->
       <!-- <li class="nav-item">
          <nuxt-link
            class="nav-link"
            :class="checkPath('/transports-and-hotels') ? 'active' : ''"
            to="/transports-and-hotels"
          >
            <span>
              <i class="fas fa-subway"></i>
            </span> Transport, Hotel & Events
          </nuxt-link>
        </li>-->
        
        <!-- <li class="nav-item"> <a class="nav-link" href="recharge-bill-water.html"><span><i class="fas fa-tint"></i></span> Water</a> </li>
          <li class="nav-item"> <a class="nav-link" href="recharge-bill-toll.html"><span><i class="fas fa-flask"></i></span> Toll</a> </li>
        <li class="nav-item"> <a class="nav-link" href="recharge-bill-vat.html"><span><i class="fas fa-tint"></i></span> IFRS</a> </li>-->
      </ul>
    </div>
  </div>
  <!-- Secondary Navigation end -->
</template>

<script>
export default {
  name: "ServicesMenu",
  data() {
    return {};
  },
  mounted() {
    // console.log(this.$route);
  },
  methods: {
    checkPath(path) {
      if (this.$route.path == path) {
        return true;
      }

      return false;
    }
  }
};
</script>



<style scoped>
.hidden {
  display: none;
}

</style>