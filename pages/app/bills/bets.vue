<template>
    <div>
        <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Bets, Lottery & Gaming</h1>
            </div>
            <div class="row">

                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-danger shadow h-100 py-2">
                        <nuxt-link to="/app/bills/bets" class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-sm font-weight-bold text-danger text-uppercase mb-1">
                                        1960Bet
                                    </div>
                                    <div class="text-xs mb-0 font-weight-bold text-gray-800">Online Sport Betting & Casino</div>
                                </div>
                                <div class="col-auto">
                                    <img src="https://quickteller.com/images/Downloaded/8faf32c1-b6eb-479d-bfa4-ade4fc13e0a2.png" height="60" width="60"
                                        class="img-thumbnail">
                                </div>
                            </div>
                        </nuxt-link>
                    </div>
                </div>


                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-primary shadow h-100 py-2">
                        <nuxt-link to="/app/bills/bets" class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-sm font-weight-bold text-primary text-uppercase mb-1">
                                        1XBET</div>
                                    <div class="text-xs mb-0 font-weight-bold text-gray-800">1XBET
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <img src="https://quickteller.com/images/Downloaded/2511d486-352d-48c7-894f-9697422227b2.png" height="60" width="60"
                                        class="img-thumbnail">
                                </div>
                            </div>
                        </nuxt-link>
                    </div>
                </div>


                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-success shadow h-100 py-2">
                        <nuxt-link to="/app/bills/bets" class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-sm font-weight-bold text-success text-uppercase mb-1">
                                        Bet 9ja
                                    </div>
                                    <div class="row no-gutters align-items-center">
                                        <div class="col-auto">
                                            <div class="text-xs mb-0 font-weight-bold text-gray-800">Fund Bet 9ja</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <img src="https://quickteller.com/images/Downloaded/d46ff91c-ab12-4a55-8e50-c7bdb874a778.png" height="60" width="60"
                                        class="img-thumbnail">
                                </div>
                            </div>
                        </nuxt-link>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-dark shadow h-100 py-2">
                        <nuxt-link to="/app/bills/bets" class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-sm font-weight-bold text-dark text-uppercase mb-1">
                                        Surebet247
                                    </div>
                                    <div class="row no-gutters align-items-center">
                                        <div class="col-auto">
                                            <div class="text-xs mb-0 font-weight-bold text-gray-800">Surebet247</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <img src="https://quickteller.com/images/Downloaded/9b0521dc-b970-43de-a8af-c38c23a57e0b.png" height="60" width="60"
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