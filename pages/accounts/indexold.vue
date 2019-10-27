<template>
  <div class="container-login100">

    <div
      v-if="type == 'verify'"
      class="wrap-login100 p-l-60 p-r-60 p-t-40 p-b-30 d-right animated fadeIn animation-delay: 10s;"
      >
      <form class="login100-form">
        <span class="login100-form-title p-b-65">VERIFY YOUR EMAIL</span>
        <small class="text-danger text-center" v-if="error.message == 'Invalid Secure Pin'">
          <b>{{ error.message }}</b>
        </small>
        <div class="row">
          <div class="col-md-12">
            <div class="wrap-input100 m-b-10">
              <input
                class="input100"
                readonly
                type="text"
                v-model="register.email"
                placeholder="Email Address"
              />
              <span class="focus-input100"></span>
            </div>
          </div>
          <div class="col-md-12">
            <div class="wrap-input100 m-b-10">
              <input
                class="input100"
                type="text"
                v-model="register.secure_pin"
                placeholder="Enter Secure Pin"
              />
            </div>
          </div>
        </div>

        <div class="container-login100-form-btn p-t-15 m-b-10">
          <button
            class="login100-form-btn"
            @click.prevent="verifyEmail"
          >{{ loading ? "Verifying..." : "Verify" }}</button>
        </div>
      </form>
    </div>

    <div class="container-login100-form-btn p-t-5 m-b-10 d-right">
      <button
        :disabled="loading"
        class="login100-form-btn"
        @click.prevent="createAccount"
        >
      <i class="fas fa-sign-in-alt text-5 m-r-10"></i>
        {{ loading ? 'Signing Up...' : 'Signup' }}
      </button>
    </div>

    <a href="#" class="btn-face p-l-10 p-r-10 m-b-10 d-right" @click.prevent="type = 'login'">
      <i class="fas fa-user"></i>
      Login
    </a>

    <div
      v-if="type == 'register'"
      class="wrap-login100 p-l-30 p-r-30 p-t-20 p-b-20 d-right animated fadeIn animation-delay: 10s;"
      >
      <form class="login100-form">
        <span class="login100-form-title p-b-20">CREATE AN ACCOUNT</span>
        <div class="row">
          <div class="col-md-12">
            <div class="wrap-input100 m-b-10">
              <input class="input100" type="text" v-model="register.name" placeholder="Full Name" />
              <span class="focus-input100"></span>
              <small
                class="text-danger"
                v-if="error.message != undefined && error.message.name"
              >{{ error.message.name[0] }}</small>
            </div>
          </div>
          <div class="col-md-6">
            <div class="wrap-input100 m-b-10">
              <input class="input100" type="text" v-model="register.email" placeholder="Email" />
              <span class="focus-input100"></span>
              <small
                class="text-danger"
                v-if="error.message != undefined && error.message.email"
              >{{ error.message.email[0] }}</small>
            </div>
          </div>
          <div class="col-md-6">
            <div class="wrap-input100 m-b-10">
              <input class="input100" type="text" v-model="register.phone" placeholder="Mobile No." />
              <span class="focus-input100"></span>
            </div>
          </div>

          <div class="col-md-6">
            <div class="wrap-input100 m-b-10">
              <input
                class="input100"
                type="password"
                v-model="register.password"
                placeholder="Password"
              />
              <span class="focus-input100"></span>
              <small
                class="text-danger"
                v-if="error.message != undefined && error.message.password"
              >{{ error.message.password[0] }}</small>
            </div>
          </div>
          <div class="col-md-6">
            <div class="wrap-input100 m-b-16">
              <input
                class="input100"
                type="password"
                v-model="register.password_confirmation"
                placeholder="Confirm Password"
              />
              <span class="focus-input100"></span>
            </div>
          </div>

          <div class="col-md-12">
            <div class="wrap-input100 m-b-10">
              <input
                class="input100"
                type="text"
                :readonly="!error.message"
                v-model="register.ref"
                placeholder="Referral ID"
              />
              <span class="focus-input100"></span>
              <small
                class="text-danger"
                v-if="error.message != undefined && error.message.ref"
              >{{ error.message.ref[0] }}</small>
            </div>
          </div>

          <div class="col-md-12">
            <h6>I'm Signing up as</h6>
            <div class="row">
              <div class="col-md-4 col-xs-6 m-t-10">
                <div class="contact100-form-checkbox m-l-4 m-t-10">
                  <input
                    class="input-checkbox100"
                    id="ckb2"
                    value="Customer"
                    checked
                    type="radio"
                    v-model="register.userType"
                  />
                  <label class="label-checkbox100" for="ckb2">Customer</label>
                </div>
              </div>
              <div class="col-md-4 col-xs-6 m-t-10">
                <div class="contact100-form-checkbox m-l-4 m-t-10">
                  <input
                    class="input-checkbox100"
                    id="ckb1"
                    value="Agent"
                    type="radio"
                    v-model="register.userType"
                  />
                  <label class="label-checkbox100" for="ckb1">Agent</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>


    <div
      v-if="type == 'login'"
      class="wrap-login100 p-l-60 p-r-60 p-t-40 p-b-30 d-right animated fadeIn animation-delay: 10s;"
      >
      <form class="login100-form">
        <span class="login100-form-title p-b-65">LOGIN</span>
        <small class="text-danger text-center" v-if="error.message == undefined">
          <b>Invalid Credentials</b>
        </small>
        <p class="m-b-10">Enter your Login Credentials</p>
        <div class="row">
          <div class="col-md-12">
            <div class="wrap-input100 m-b-16">
              <input class="input100 text-right" type="text" v-model="login.email" name="text" placeholder="Email"/>
              <span class="focus-input100"></span>
              <span class="symbol-input100">
                <span class="lnr lnr-envelope"></span>
              </span>
              <small
                class="text-danger"
                v-if="error.message != undefined && error.message.email"
              >{{ error.message.email[0] }}</small>
            </div>
          </div>
          <div class="col-md-12">
            <div class="wrap-input100 m-b-16">
              <input class="input100 text-right" type="password" v-model="login.password" name="password" placeholder="Password" />
              <span class="focus-input100"></span>
              <span class="symbol-input100">
                <span class="lnr lnr-lock"></span>
              </span>
              <small
                class="text-danger"
                v-if="error.message != undefined && error.message.password"
              >{{ error.message.password[0] }}</small>
            </div>
          </div>
        </div>
        <a href="#" class="text-right" @click.prevent="type = 'forgotpassword'">
          Forgot Password ?
        </a>
      </form>
    </div>

     <div
      v-if="type == 'forgotpassword'"
      class="wrap-login100 p-l-60 p-r-60 p-t-40 p-b-30 d-right animated fadeIn animation-delay: 10s;"
      >
      <form class="login100-form">
        <span class="login100-form-title p-b-65">FORGOT PASSWORD ?</span>
        <small class="text-danger text-center" v-if="error.message == undefined">
          <b>Invalid Credentials</b>
        </small>
        <p class="m-b-10">Continue the password reset process by entering your mail address.</p>
        <div class="row">
          <div class="col-md-12">
            <div class="wrap-input100 m-b-16">
              <input class="input100" type="text" v-model="login.email" name="text" />
              <span class="focus-input100"></span>
              <span class="symbol-input100">
                <span class="lnr lnr-envelope"></span>
              </span>
              <small
                class="text-danger"
                v-if="error.message != undefined && error.message.email"
              >{{ error.message.email[0] }}</small>
            </div>
          </div>
          <div class="col-md-12">
            <div class="text-right w-50">
              <a href="#" class="btn-google p-l-10 p-r-10">Send</a>
            </div>
          </div>
        </div>
      </form>
    </div>

    <a href="#" class="btn-face p-l-10 p-r-10 m-t-10 m-b-10 d-right" @click.prevent="type = 'register'">
      <i class="fas fa-user-plus"></i>
      Register
    </a>
    
    <nuxt-link to="/" class=" btn-google p-l-10 p-r-10 m-b-10 d-right w-100">
      <i class="fas fa-home m-r-10"></i>
      Home
    </nuxt-link>

  </div>
</template>

<script>
export default {
  layout: "account",
  data() {
    return {
      type: "login",
      register: {
        name: "",
        email: "",
        phone: "",
        password: "",
        password_confirmation: "",
        userType: "",
        secure_pin: "",
        ref: ""
      },
      login: {
        email: "",
        password: ""
      },
      loading: false,
      error: {
        status: false,
        message: []
      }
    };
  },
  methods: {
    async userLogin() {
      this.loading = true;
      try {
        await this.$auth.login({
          data: this.login
        });
        this.$router.push("/app");
      } catch (error) {
        //onsole.log(error.response); return;
        let errors = error.response.data.data;
        this.loading = false;
        //return;
        this.error = {
          status: true,
          message: errors
        };
      }
    },
    async createAccount() {
      this.loading = true;
      try {
        let res = await this.$axios.post("register", this.register);
        this.loading = false;
        //console.log(res.data);return
        this.type = "verify";
      } catch (e) {
        this.loading = false;
        //console.log(e.response.data);return
        let errors = e.response.data.data;
        console.log(errors);
        this.error = {
          status: true,
          message: errors
        };
      }
    },
    async verifyEmail() {
      this.loading = true;
      try {
        await this.$axios.post("verify", this.register);
        await this.$auth.login({
          data: {
            email: this.register.email,
            password: this.register.password
          }
        });
        this.$router.push("/app");
      } catch (error) {
        this.loading = false;
        //console.log(error.response); return;
        let errors = error.response.data.data;
        this.error = {
          status: true,
          message: errors
        };
      }
    }
  },
  mounted() {
    console.log(this.$route.query.ref);
    this.register.ref =
      this.$route.query.ref != undefined ? this.$route.query.ref : "";
  },
  watch: {
    type(v) {
      this.error = { status: false, message: [] };
    }
  },
  asyncData({ params }) {
    return {
      type: params.type == "register" ? "register" : "login"
    };
  }
};
</script>

<style>
@media (min-width: 992px) {
  .d-right {
    margin-left: 70%;
  }
}
.btn-lavender {
  background-color: lavender;
}
</style>