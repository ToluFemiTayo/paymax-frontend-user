<template>
    <div>
        <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Cable TV</h1>
            </div>
            <div class="row">

                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-danger shadow h-100 py-2">
                        <nuxt-link to="/app/bills/cable-tv" class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-sm font-weight-bold text-danger text-uppercase mb-1">
                                        GoTV
                                    </div>
                                    <div class="text-xs mb-0 font-weight-bold text-gray-800">GoTV Subscription</div>
                                </div>
                                <div class="col-auto">
                                    <img src="https://www.quickteller.com/images/Downloaded/9c85a7e5-0680-4800-b712-7e2058493219.png" height="60" width="60"
                                        class="img-thumbnail">
                                </div>
                            </div>
                        </nuxt-link>
                    </div>
                </div>


                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-primary shadow h-100 py-2">
                        <nuxt-link to="/app/bills/cable-tv" class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-sm font-weight-bold text-primary text-uppercase mb-1">
                                        DSTV Subscription</div>
                                    <div class="text-xs mb-0 font-weight-bold text-gray-800">Pay DSTV Bills
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <img src="https://quickteller.com/images/Downloaded/362ed1cc-f986-4946-bb48-bfcdc76020cd.png" height="60" width="60"
                                        class="img-thumbnail">
                                </div>
                            </div>
                        </nuxt-link>
                    </div>
                </div>


                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-warning shadow h-100 py-2">
                        <nuxt-link to="/app/bills/cable-tv" class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-sm font-weight-bold text-warning text-uppercase mb-1">
                                        Startimes
                                    </div>
                                    <div class="row no-gutters align-items-center">
                                        <div class="col-auto">
                                            <div class="text-xs mb-0 font-weight-bold text-gray-800">Cable Subscription Payment</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <img src="https://quickteller.com/images/Downloaded/2cc21ebb-f7d4-466b-b9cf-653afd1ed768.png" height="60" width="60"
                                        class="img-thumbnail">
                                </div>
                            </div>
                        </nuxt-link>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-secondary shadow h-100 py-2">
                        <nuxt-link to="/app/bills/cable-tv" class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-sm font-weight-bold text-secondary text-uppercase mb-1">
                                        iROKOtv
                                    </div>
                                    <div class="row no-gutters align-items-center">
                                        <div class="col-auto">
                                            <div class="text-xs mb-0 font-weight-bold text-gray-800">Iroko Patners</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <img src="https://quickteller.com/images/Downloaded/f02b83ff-82b7-4577-9819-5c83c8eedc3b.png" height="60" width="60"
                                        class="img-thumbnail">
                                </div>
                            </div>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        layout: 'customers',
        methods: {
            openBio() {
                $('#edit-personal-details').modal('show');
            }
        }
    }
</script>

<style>
    a.card-body:hover {
        text-decoration: none;
        background-color: #f8f9fc;
    }
</style>