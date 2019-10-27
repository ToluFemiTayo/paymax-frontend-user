<template>
  <div class="row justify-content-center">
    <div class="col-md-4 mt-5">
      <h3 class="text-muted text-center">Create an Account</h3>
      <div class="card mt-5">
        <div class="card-body">
          <div class="alert alert-danger" v-if="responseErrors.length > 0">
            <ul>
              <li v-for="(error, i) in responseErrors" :key="i">{{ error }}</li>
            </ul>
          </div>
          <form id="signupForm" method="post" @submit.prevent="createAccount">
            <div class="form-group">
              <label for>Full Name</label>
              <input
                type="text"
                class="form-control"
                v-model="user.name"
                required
                name="name"
                placeholder="John Doe"
              />
            </div>
            <div class="form-group">
              <label for>Email Address</label>
              <input
                type="text"
                class="form-control"
                v-model="user.email"
                required
                name="email"
                placeholder="Email Address"
              />
            </div>
            <div class="form-group">
              <label for>Mobile Number</label>
              <input
                type="tel"
                class="form-control"
                v-model="user.phone"
                name="phone"
                placeholder="Mobile Number"
              />
            </div>
            <div class="form-group">
              <label for>Passsword</label>
              <input
                type="password"
                class="form-control"
                v-model="user.password"
                required
                name="password"
                placeholder="Password"
              />
            </div>
            <div class="form-group">
              <label for>Confirm Passsword</label>
              <input
                type="password"
                class="form-control"
                v-model="user.password_confirmation"
                required
                name="confirm_password"
                placeholder="Password"
              />
            </div>
            <div class="mb-3">
              <div class="form-group">
                <p>I'm Signing Up as</p>
                <div class="custom-control custom-radio custom-control-inline">
                  <input
                    id="customers"
                    name="user_type"
                    class="custom-control-input"
                    checked
                    required
                    type="radio"
                    value="Customer"
                    v-model="user.userType"
                  />
                  <label class="custom-control-label" for="customers">Customer</label>
                </div>

                <div class="custom-control custom-radio custom-control-inline">
                  <input
                    id="agents"
                    name="user_type"
                    class="custom-control-input"
                    value="Agent"
                    required
                    type="radio"
                    v-model="user.userType"
                  />
                  <label class="custom-control-label" for="agents">Agent</label>
                </div>
              </div>
            </div>
            <button
              class="btn btn-primary btn-block"
              type="submit"
              :disabled="loading"
            >{{ loading ? 'Keep Calm, Working...' : 'Signup' }}</button>
          </form>
          <p class="mt-3">
            Already have an account?
            <nuxt-link to="/accounts/login">Login</nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      responseErrors: [],
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        userType: ""
      }
    };
  },
  methods: {
    async createAccount() {
      this.loading = true;
      try {
        await this.$axios.post("register", this.user);

        await this.$auth.login({
          data: {
            email: this.user.email,
            password: this.user.password
          }
        });
        this.$router.push("/app");
      } catch (e) {
        this.loading = false;
        const returnedErrors = e.response.data.data;
        this.responseErrors.length = 0;
        for (const error in returnedErrors) {
          if (returnedErrors.hasOwnProperty(error)) {
            this.responseErrors.push(`${returnedErrors[error]}`);
          }
        }
      }
    }
  }
};
</script>