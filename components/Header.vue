<template>
  <header id="header">
    <div class="section__wrapper">
      <div class="header-row">
        <div class="header-column justify-content-start">
          <!-- Logo
          =============================================-->
          <div class="logo">
            <a href="#" title="PayMaster - HTML Template">
              <img src="images/paymax-logo.jpg" alt="PayMaster" width="127" height="29" />
              </a>
          </div>

          <div class="header-column justify-content-end">
            <!-- Primary Navigation
            =============================================-->
            <nav class="primary-menu navbar navbar-expand-lg">
              <div id="header-nav" class="collapse navbar-collapse">
                <ul class="navbar-nav">
                  <li
                    v-if="!user"
                    class="login-signup ml-lg-2"
                    :class="checkPath('/') ? 'active' : ''"
                  >
                    <nuxt-link class="pr-0" to="/">
                      Home
                      <span class="d-none d-lg-inline-block">
                        <i class="fas fa-home"></i>
                      </span>
                    </nuxt-link>
                  </li>
                  <li
                    v-if="!user"
                    class="login-signup ml-lg-2"
                    :class="checkPath('/accounts/login') ? 'active' : ''"
                  >
                    <a
                      class="pl-lg-4 pr-0"
                      href="/accounts"
                    >
                      Login
                      <span class="d-none d-lg-inline-block">
                        <i class="fas fa-user"></i>
                      </span>
                    </a>
                  </li>
                  <li
                    v-if="!user"
                    class="login-signup ml-lg-2"
                    :class="checkPath('/accounts/create') ? 'active' : ''"
                  >
                    <a
                      class="pl-lg-4 pr-0"
                       href="/accounts"
                    >
                      Sign up
                      <span class="d-none d-lg-inline-block">
                        <i class="fas fa-user-plus"></i>
                      </span>
                    </a>
                  </li>
                  <li class="login-signup ml-lg-2 mt-4" v-if="user">Welcome {{ user.name }}</li>
                  <li class="login-signup ml-lg-2" v-if="user">
                    <a class="pl-lg-4 pr-0" href="/app">
                      Profile
                      <span class="d-none d-lg-inline-block">
                        <i class="fas fa-user-plus"></i>
                      </span>
                    </a>
                  </li>
                  <li class="login-signup ml-lg-2" v-if="user">
                    <button class="btn btn-primary mt-3 btn-sm" @click="logout">
                      Logout
                      <span class="d-none d-lg-inline-block">
                        <i class="fas fa-user-plus"></i>
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </nav>
            <!-- Primary Navigation end -->
          </div>

          <!-- Collapse Button
          =============================================-->
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#header-nav"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  // data()
  computed: {
    user() {
      let user = this.$auth.user;
      if (user) {
        return user || undefined;
      } else {
        this.$auth.logout();
      }
    }
  },
  methods: {
    checkPath(path) {
      if (this.$route.path == path) {
        return true;
      }

      return false;
    },
    async logout() {
      this.$auth.logout();
      // this.$router.push("/");
    }
  }
};
</script>
