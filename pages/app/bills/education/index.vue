<template>
  <div>
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Education</h1>
      </div>
      <div class="row">
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-primary shadow h-100 py-2">
            <nuxt-link
              :to="{name: 'app-bills-education-waec', params: { type:'result-pin' } }"
              class="card-body"
            >
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-sm font-weight-bold text-primary text-uppercase mb-1">WAEC</div>
                  <div class="text-xs mb-0 font-weight-bold text-gray-800">Purchase Result Pin</div>
                </div>
                <div class="col-auto">
                  <img
                    src="http://www.vtpass.com/resources/products/200X200/WAEC-Result-Checker-PIN.jpg"
                    height="60"
                    width="60"
                    class="img-thumbnail"
                  />
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-primary shadow h-100 py-2">
            <nuxt-link
              :to="{name: 'app-bills-education-waec', params: { type:'registration-pin' } }"
              class="card-body"
            >
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-sm font-weight-bold text-primary text-uppercase mb-1">WAEC</div>
                  <div class="text-xs mb-0 font-weight-bold text-gray-800">Purchase Registration Pin</div>
                </div>
                <div class="col-auto">
                  <img
                    src="http://www.vtpass.com/resources/products/200X200/WAEC-Registration-PIN.jpg"
                    height="60"
                    width="60"
                    class="img-thumbnail"
                  />
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
  layout: "customers"
};
</script>

<style lang="scss" scoped>
</style>