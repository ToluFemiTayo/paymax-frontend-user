<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-md-4 mt-5">
        <h3 class="text-muted text-center">Login</h3>
        <div class="card mt-5">
          <div class="card-body">
            <div class="alert alert-danger" v-if="error.status">
              <li
                style="list-style: none"
                v-for="(error, i) in error.message"
                :key="i"
              >{{ error[0] }}</li>
            </div>
            <form id="signupForm" method="post" @submit.prevent="login">
              <div class="form-group">
                <label for>Email Address</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="user.email"
                  required
                  placeholder="Email Address"
                />
              </div>

              <div class="form-group">
                <label for>Passsword</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="user.password"
                  required
                  placeholder="Password"
                />
              </div>

              <button
                class="btn btn-primary btn-block"
                type="submit"
                :disabled="loading"
              >{{ loading ? 'Keep Calm, Working...' : 'Login' }}</button>
            </form>

            <div class="row mt-3">
              <div class="col-md-6">
                <p class>
                  <nuxt-link to="/accounts/create">Create an Account</nuxt-link>
                </p>
              </div>
              <div class="col-md-6">
                <p class="text-right">
                  <nuxt-link to="/">Forgot Password?</nuxt-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      error: {
        status: false,
        message: []
      },
      user: {
        email: "",
        password: ""
      },
      loading: false
    };
  },
  methods: {
    async login() {
      this.loading = true;
      try {
        await this.$auth.login({
          data: this.user
        });
        this.$router.push("/app");
      } catch (error) {
        let errors = error.response.data.data;
        this.loading = false;
        this.error = {
          status: true,
          message: errors
        };
      }
    }
  }
};
</script>
