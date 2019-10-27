<template>
    <div>
        <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Electricity</h1>
            </div>
            <div class="row">

                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-primary shadow h-100 py-2">
                        <nuxt-link :to="{name: 'app-bills-ikeja', params: { type:'prepaid' } }" class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-sm font-weight-bold text-primary text-uppercase mb-1">
                                        Ikeja Electric (Prepaid)
                                    </div>
                                    <div class="text-xs mb-0 font-weight-bold text-gray-800">IKeja Prepaid Payment</div>
                                </div>
                                <div class="col-auto">
                                    <img src="https://www.payvice.com/assets/img/util_ikedc.png" height="60" width="60"
                                        class="img-thumbnail">
                                </div>
                            </div>
                        </nuxt-link>
                    </div>
                </div>


                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-primary shadow h-100 py-2">
                        <nuxt-link :to="{name: 'app-bills-ikeja', params: { type:'postpaid' } }" class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-sm font-weight-bold text-primary text-uppercase mb-1">
                                        Ikeja Electric (Postpaid)</div>
                                    <div class="text-xs mb-0 font-weight-bold text-gray-800">IKeja Postpaid Payment
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <img src="https://www.payvice.com/assets/img/util_ikedc.png" height="60" width="60"
                                        class="img-thumbnail">
                                </div>
                            </div>
                        </nuxt-link>
                    </div>
                </div>


                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-info shadow h-100 py-2">
                        <nuxt-link :to="{name: 'app-bills-ekedc', params: { type:'prepaid' } }" class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-sm font-weight-bold text-info text-uppercase mb-1">
                                        Eko Electricty (PREPAID)
                                    </div>
                                    <div class="row no-gutters align-items-center">
                                        <div class="col-auto">
                                            <div class="text-xs mb-0 font-weight-bold text-gray-800">EKEDC Prepaid
                                                Payment</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <img src="https://www.payvice.com/assets/img/util_ekedc.png" height="60" width="60"
                                        class="img-thumbnail">
                                </div>
                            </div>
                        </nuxt-link>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-info shadow h-100 py-2">
                        <nuxt-link :to="{name: 'app-bills-ekedc', params: { type:'postpaid' } }" class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-sm font-weight-bold text-info text-uppercase mb-1">
                                        Eko Electricty (Postpaid)
                                    </div>
                                    <div class="row no-gutters align-items-center">
                                        <div class="col-auto">
                                            <div class="text-xs mb-0 font-weight-bold text-gray-800">EKEDC Postpaid
                                                Payment
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <img src="https://www.payvice.com/assets/img/util_ekedc.png" height="60" width="60"
                                        class="img-thumbnail">
                                </div>
                            </div>
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-primary shadow h-100 py-2">
                        <nuxt-link :to="{name: 'app-bills-eedc', params: { type:'prepaid' } }" class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-sm font-weight-bold text-primary text-uppercase mb-1">
                                        Enugu Electric (Prepaid)
                                    </div>
                                    <div class="text-xs mb-0 font-weight-bold text-gray-800">Enugu Prepaid Payment</div>
                                </div>
                                <div class="col-auto">
                                    <img src="https://www.payvice.com/assets/img/util_eedc.png" height="60" width="60"
                                        class="img-thumbnail">
                                </div>
                            </div>
                        </nuxt-link>
                    </div>
                </div>


                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-primary shadow h-100 py-2">
                        <nuxt-link :to="{name: 'app-bills-eedc', params: { type:'postpaid' } }" class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-sm font-weight-bold text-primary text-uppercase mb-1">
                                        Enugu Electric (Postpaid)</div>
                                    <div class="text-xs mb-0 font-weight-bold text-gray-800">Enugu Postpaid Payment
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <img src="https://www.payvice.com/assets/img/util_eedc.png" height="60" width="60"
                                        class="img-thumbnail">
                                </div>
                            </div>
                        </nuxt-link>
                    </div>
                </div>


                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-info shadow h-100 py-2">
                        <nuxt-link :to="{name: 'app-bills-ibedc', params: { type:'prepaid' } }" class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-sm font-weight-bold text-info text-uppercase mb-1">
                                        Ibadan Electricty (PREPAID)
                                    </div>
                                    <div class="row no-gutters align-items-center">
                                        <div class="col-auto">
                                            <div class="text-xs mb-0 font-weight-bold text-gray-800">IBEDC Prepaid
                                                Bills</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <img src="https://www.payvice.com/assets/img/util_ibedc.png" height="60" width="60"
                                        class="img-thumbnail">
                                </div>
                            </div>
                        </nuxt-link>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-info shadow h-100 py-2">
                        <nuxt-link :to="{name: 'app-bills-ibedc', params: { type:'postpaid' } }" class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-sm font-weight-bold text-info text-uppercase mb-1">
                                        Ibadan Electricty (POSTPAID)
                                    </div>
                                    <div class="row no-gutters align-items-center">
                                        <div class="col-auto">
                                            <div class="text-xs mb-0 font-weight-bold text-gray-800">IBEDC Postpaid
                                                Bills
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <img src="https://www.payvice.com/assets/img/util_ibedc.png" height="60" width="60"
                                        class="img-thumbnail">
                                </div>
                            </div>
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-info shadow h-100 py-2">
                        <nuxt-link :to="{name: 'app-bills-phedc', params: { type:'prepaid' } }" class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-sm font-weight-bold text-info text-uppercase mb-1">
                                        P.H Prepaid Electricty
                                    </div>
                                    <div class="row no-gutters align-items-center">
                                        <div class="col-auto">
                                            <div class="text-xs mb-0 font-weight-bold text-gray-800">P.Harcourt Prepaid Payment Bills
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <img src="https://www.payvice.com/assets/img/util_phdc.png" height="60" width="60"
                                        class="img-thumbnail">
                                </div>
                            </div>
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-info shadow h-100 py-2">
                        <nuxt-link :to="{name: 'app-bills-phedc', params: { type:'postpaid' } }" class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-sm font-weight-bold text-info text-uppercase mb-1">
                                        P.H Postpaid Electricty
                                    </div>
                                    <div class="row no-gutters align-items-center">
                                        <div class="col-auto">
                                            <div class="text-xs mb-0 font-weight-bold text-gray-800">P.Harcourt Prepaid Payment Bills
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <img src="https://www.payvice.com/assets/img/util_phdc.png" height="60" width="60"
                                        class="img-thumbnail">
                                </div>
                            </div>
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-info shadow h-100 py-2">
                        <nuxt-link :to="{ name: 'app-bills-aedc' }" class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-sm font-weight-bold text-info text-uppercase mb-1">
                                        Abuja Electricty
                                    </div>
                                    <div class="row no-gutters align-items-center">
                                        <div class="col-auto">
                                            <div class="text-xs mb-0 font-weight-bold text-gray-800">Abuja Electricity Bills
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAA+VBMVEX///8DBXUAAHXe3ukbGnIAAFu2ttEAAGcDBXf6+v0AAGEdHXMAAF/Lytuiob0AAGz+/vr9/fX0/Pz8z1BSd6j3UVD9WSYlsce2yCT+xiUmVJP7JCX++PT7eE5PvdLD0U8sLHuCgqpHR4S9vdGrqscAAFXS0uAAAE/r6/JaWo6Ih6qRka0+Pn2Zmbt3d6IVFXFISHYMDW40NIAtLXJCQnY1NXAAAEVmZpBQUIUiInJlZpcjI2x3d5sNDWQZGWZbXIn718j6Z0D6dFex3+fM2HLd5aH745382HZxirGXrcj55uP3Q0T40dD7zLn8PgDX4Y773omAm7z1BweAIiozAAAD30lEQVRoge2XW3ebOBCAJQFGKICSbffe3W4MJhibeJ3Ejb12mu79fuv//zErDbYRAtK4J+f4Yed7SHw0yB8SmhlMCIIgCIIgCIIgCIIgyOE4cZHmR7NPPF+KMD6SPQ4Z55yNoqPYc1fOJGMunR5Fn4Tn5eVsHA9HzjH0pSjTgSgXUiTH0A9E8bVafzz0smPo8zlj9Ipd0eug54rA6Ys8BRPBNN6gJ57dhIuOWDKwSB3i2GOKpK4oUSuos23zSkr/1aTHPrjQ91ZYo7FnM1rkpLxoDXvexW21ecndqDVnqUPR5n7T9+AzwSilzEsbo5dC1woTtlKJE/v2sI6IsZbErSmcy3GPdUewlFTD1mZVTkJGmzDIG6WnbbgoVWHvCr1TP9nO4sLc/gXlWmlQhUHPzXGYza4cUvicWnMYe5feudvdMxN1UXZg8XI2rLknez1zVyd74O6Zn5ApfJCzE5PZ/cM5tZRcT1J/OJ3uL3XgPAzbTVLruReRYE+20vvhD8hX8L8MLB60J55ejf+N3jju73MD9CJtX1/pG9Wz9Gs9mx5UQII1bPJtflNt/265Ws9FRy3o0Kem/uYQO9lIsDokgt2mu4MCq5fj4rymeJR+eMjqEwFbr99DSgmnPzX06gZq/HXQq+fvp8/hsNIlSeI0nsPBvc5NvVlaFk+uh0xlcyfyfF9C0nJ/Y+gbGTx9an0GJURMVMaq1W2Tfx7t9UyKmvC6X/9+z34KK54GE8Hr8inhC0Dvl1lUU7WMp1s9WFWpy0a748V4tRuHJp6hv3msHqqtetZBuSmA82JJeZWG29XbPbhbfy6NzV8/8tdEMIaUf21e7qygCKkyDTWfzVMn2+PUehEbTwVaFtvq1eQkatDT5qveYdXVWD8PHqYk9+DkG0dPXET7adwPa7YtJyJDBmdHhCaj7jLoVNXWbodDuU3+MRxLXrdWlfj5Tk8bbxRwZFV3ikNO7Rin3Q0Xvp659pPKJNzVhmQjVqdDlRP+Jel73YDXyGBFeSvS3e8TePn027/6Cgio5I+FZBY6E5S+gxG0ymjdDnbq89cz13XnHa8CwXKuI6rCZrcrt8ls7ZD4zm1xstxmqHN5NbNi8/sOfeAAXUmSVyGoPS3yXbhJYM826dp8BPl/cmrRcckHXded9oyRx/TZ/TVvvv2iwXcvlO5Li+8JOfvhZZMf1eSfnjX5Wft/ed7kVzX224dNfv9jq//zr4+aaP3HFlr/8pMmf6vJ/3za5NmZGnz+WZN/tf7t5w3e7vSnLyxgty302JnFac8YsX9awUZ3WRAEQRAEQRAEQRAEQRAEQRAEQZAH+A/b4nXyBYU0ZgAAAABJRU5ErkJggg==" height="60" width="60"
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