<template>
    <div>
        <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Profile</h1>
            </div>
            <div class="row">
                <div class="col-lg-8">

                    <div class="bg-white shadow-sm rounded p-4 mb-4 text-2" v-if="toggleProfile == false">
                        <h3 class="text-4 font-weight-400 mb-3">Personal Details <a
                                @click.prevent="toggleProfile = true" href="#edit-personal-details" data-toggle="modal"
                                class="float-right text-1 text-uppercase text-muted btn-link"><i
                                    class="fas fa-edit mr-1"></i>Edit</a></h3>
                        <div class="row">
                            <p class="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Name</p>
                            <p class="col-sm-9">{{ user.name }}</p>
                        </div>
                        <div class="row">
                            <p class="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Date of Birth</p>
                            <p class="col-sm-9">12-09-1982</p>
                        </div>
                        <div class="row">
                            <p class="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Address</p>
                            <p class="col-sm-9">4th Floor, Plot No.22, Above Public Park, 145 Murphy Canyon Rd, Suite
                                100-18,<br>
                                San Ditego,<br>
                                California - 22434,<br>
                                United States.</p>
                        </div>
                        <p class="col-sm-9 offset-sm-2 text-success" v-if="successProfile != null">{{ successProfile }}
                        </p>
                    </div>
                    <div class="bg-white shadow-sm rounded p-4 mb-4 text-2" v-else>
                        <h3 class="text-4 font-weight-400 mb-3">Change Personal Details <a
                                @click.prevent="toggleProfile = false" href="#edit-personal-details" data-toggle="modal"
                                class="float-right text-1 text-uppercase text-muted text-danger btn-link"><i
                                    class="fas fa-times mr-1"></i>Cancel</a></h3>
                        <div class="row mb-2">
                            <p class="col-sm-2 text-muted text-sm-right mb-0 pt-2 mb-sm-3">Name</p>
                            <input type="text" class="col-sm-6 offset-sm-1 form-control" v-model="profile.name">
                            <small class="col-sm-6 offset-sm-3 text-danger"
                                v-if="error.message">{{ error.message.name[0] }}</small>
                        </div>
                        <div class="row mb-2">
                            <p class="col-sm-2 text-muted text-sm-right mb-0  pt-2 mb-sm-3">Address</p>
                            <input type="text" class="col-sm-8 offset-sm-1 form-control">
                        </div>
                        <div class="row mb-2">
                            <p class="col-sm-2 text-muted text-sm-right mb-0  pt-2 mb-sm-3">Location</p>
                            <input type="text" class="col-sm-4 offset-sm-1 form-control" placeholder="State">
                            <input type="text" class="col-sm-4 offset-sm-1 form-control" placeholder="City">
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-7 offset-sm-3">
                                <a @click.prevent="updateProfile" href="" class="btn btn-primary btn-block">
                                    {{ loading ? 'Saving...': 'Save Changes' }}
                                </a>
                            </div>
                        </div>
                    </div>


                </div>

                <div class="col-lg-4">
                    <div class="bg-white shadow-sm rounded p-4 mb-2 text-2">
                        <h3 class="text-4 font-weight-400 mb-3">Email Addresses <a href="#edit-email"
                                data-toggle="modal" class="float-right text-1 text-uppercase text-muted btn-link"><i
                                    class="fas fa-edit mr-1"></i>Edit</a></h3>
                        <div class="row">
                            <p class="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Email</p>
                            <p class="col-sm-9">{{ user.email }}</p>
                        </div>
                        <div class="row">
                            <p class="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Mobile</p>
                            <p class="col-sm-9">+1 202-555-0125</p>
                        </div>
                    </div>
                    <div class="bg-white shadow-sm rounded p-4 mb-4 text-2" v-if="togglePassword == false">
                        <h3 class="text-4 font-weight-400 mb-3">Security <a @click.prevent="togglePassword = true"
                                href="" class="float-right text-1 text-uppercase text-muted btn-link"><i
                                    class="fas fa-edit mr-1"></i>Edit</a></h3>

                        <p class="col-sm-10 offset-sm-1 text-success" v-if="successPassword != null">
                            {{ successPassword }}</p>
                        <div class="row">
                            <p class="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">
                                <label class="col-form-label">Password</label>
                            </p>
                            <p class="col-sm-9">
                                <input type="password" readonly class="form-control-plaintext" data-bv-field="password"
                                    id="password" value="EnterPassword">
                            </p>
                        </div>
                    </div>
                    <div class="bg-white shadow-sm rounded p-4 mb-4 text-2" v-else>
                        <h4 class="text-3 font-weight-400 mb-3">Renew Password <a href="#"
                                @click.prevent="togglePassword = false"
                                class="float-right text-1 text-uppercase text-muted btn-link text-danger"><i
                                    class="fas fa-times mr-1 text-danger"></i> <b class="text-danger">Cancel</b></a>
                        </h4>
                        <p class="col-sm-12 offset-sm-2 text-danger" v-if="error.message">
                            {{ error.message.password[0] }}</p>

                        <div class="row">
                            <p class="col-sm-4 text-muted text-sm-right mb-0 mb-sm-3">
                                <label class="col-form-label">Current</label>
                            </p>
                            <p class="col-sm-8">
                                <input type="password"
                                    class="form-control-plaintext border border-secondary rounded-pill"
                                    v-model="profile.oldpass">
                            </p>
                            <p class="col-sm-4 text-muted text-sm-right mb-0 mb-sm-3">
                                <label class="col-form-label">New</label>
                            </p>
                            <p class="col-sm-8">
                                <input type="password"
                                    class="form-control-plaintext border border-secondary rounded-pill"
                                    v-model="profile.password">
                            </p>
                            <p class="col-sm-4 text-muted text-sm-right mb-0 mb-sm-3">
                                <label class="col-form-label">Confirm </label>
                            </p>
                            <p class="col-sm-8">
                                <input type="password"
                                    class="form-control-plaintext border border-secondary rounded-pill"
                                    v-model="profile.password_confirmation">
                            </p>
                            <div class="col-sm-8 offset-sm-4">
                                <a href="" :disabled="loading" class="btn btn-primary btn-block"
                                    @click.prevent="changePassword">
                                    {{ loading ? 'Changing..' : 'Save Changes' }}</a> </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="bg-white shadow-sm rounded p-4">
                        <h3 class="text-4 font-weight-400 mb-3">My Referral link</h3>
                        <div class="input-group">
                            <input v-model="ref_link" readonly class="form-control bg-light border-0 small">
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button"
                                    v-clipboard:copy="ref_link"
                                    v-clipboard:success="onCopy"
                                    v-clipboard:error="onError">
                                    <i class="fas fa-edit fa-sm"></i>
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
    export default {
        layout: 'customers',
        computed: {
            user() {
                let user = this.$store.getters['getUser']
                if (user) {
                    return user || undefined;
                }
            }
        },
        data() {
            return {
                loading: false,
                toggleProfile: false,
                toggleEmail: false,
                togglePassword: false,
                ref_link: '',
                profile: {
                    name: '',
                    email: '',
                    phone: '',
                    oldpass: '',
                    password: '',
                    password_confirmation: '',
                },
                error: '',
                successPassword: null,
                successProfile: null,
            }
        },
        methods: {
            openBio() {
                $('#edit-personal-details').modal('show');
            },
            async changePassword() {
                this.loading = true
                await this.$axios.post("update-password", this.profile)
                    .then(res => {
                        this.loading = false;
                        this.successPassword = res.data.data[0];
                        this.error = '';
                        this.profile.oldpass = '',
                            this.profile.password = '',
                            this.profile.password_confirmation = '',
                            this.togglePassword = false;
                        this.$store.commit('SET_USER_DETAILS', res.data.data[1]);
                    })
                    .catch(error => {
                        // console.log(error.response.data.data); return;
                        this.loading = false;
                        let errors = error.response.data.data;
                        this.error = {
                            status: true,
                            message: errors
                        };
                    })
            },
            updateProfile() {
                this.loading = true;
                this.$axios.post("update-profile", this.profile)
                    .then(res => {
                        this.loading = false;
                        console.log(res.data.data)
                        this.successProfile = res.data.data[0];
                        this.toggleProfile = false;
                        this.$store.commit('UPDATE_USER_DETAILS', res.data.data[1]);
                    })
                    .catch(error => {
                        //console.log(error.response.data.data); return;
                        this.loading = false;
                        let errors = error.response.data.data;
                        this.error = {
                            status: true,
                            message: errors
                        };
                    })
            },
            onCopy: function (e) {
                alert('You just copied: ' + e.text)
            },
            onError: function (e) {
                alert('Failed to copy texts')
            },
            getUrl() {
                let locator = location.protocol + '//' + location.hostname + ':' +
                    location.port + '/accounts?ref=' + this.user.ref_code;
                this.ref_link = locator;
            }
        },
        watch: {
            toggleProfile(v) {
                this.error = ''
                this.profile.name = this.user.name
            }
        },
        mounted() {
            this.getUrl();
        }
    }
</script>

<style>
    .bg-white {
        background-color: #fff;
    }
</style>