<template>
  <section class="section__wrapper">
    <div class="bg-light shadow-md rounded p-4">
      <h2 class="text-4 mb-3">Schools &amp; Related Payment</h2>
      <br>
      <div class="row">
        <!-- Mobile Recharge
        =============================================-->
        <div class="col-lg-4 mb-4 mb-lg-0">
          <form id="recharge-bill" method="post">
            <div class="mb-3">
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  id="tertiary"
                  name="rechargeBillpayment"
                  class="custom-control-input"
                  checked
                  required
                  type="radio"
                />
                <label class="custom-control-label" for="tertiary">Tertiary</label>
              </div>

              <div class="custom-control custom-radio custom-control-inline">
                <input
                  id="data"
                  name="rechargeBillpayment"
                  class="custom-control-input"
                  required
                  type="radio"
                />
                <label class="custom-control-label" for="data">K12</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  id="airtine_data"
                  name="rechargeBillpayment"
                  class="custom-control-input"
                  required
                  type="radio"
                />
                <label class="custom-control-label" for="airtine_data">Nursery &amp; Pre School</label>
              </div>
            </div>
            <div class="form-group">
              <label>Select Location by State</label>
              <select class="custom-select" id="operator" required>
                <option>Lagos</option>
                <option>Oyo</option>
                <option>Osun</option>
              </select>
            </div>
            <div class="form-group">
              <label>Select Your School</label>
              <select class="custom-select" id="operator" required>
                <option>School 1</option>
                <option>School 2</option>
                <option>School 3</option>
              </select>
            </div>
            <!-- <div class="form-group">
                <input type="text" class="form-control" data-bv-field="number" id="transaction_id" required placeholder="Enter Student ID">
            </div>-->

            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">₦</span>
              </div>
              <a
                href="#"
                data-target="#view-plans"
                data-toggle="modal"
                class="view-plans-link"
              >View School Fees</a>
              <input
                class="form-control"
                id="amount"
                placeholder="Amount"
                required
                type="text"
              />
            </div>
            <button class="btn btn-primary btn-block" type="submit">Continue Payment</button>
          </form>
        </div>
        <!-- Mobile Recharge end -->

        <!-- Slideshow
        =============================================-->
        <div class="col-lg-8">
          <Slider :images="images" :hasMargin="true" />
        </div>
        <!-- Slideshow end -->
      </div>
    </div>
  </section>
</template>

<script>
import Slider from "@/components/packages/Slider";
export default {
  components: {
    Slider,
  },
  data() {
    return {
      images: [
        {
          src: "/banners/school 1.jpg",
          alt: "Banner"
        },
        {
          src: "/banners/school 2.jpg",
          alt: "Banner"
        },
        {
          src: "/banners/school 3.jpg",
          alt: "Banner"
        },
      ]
    };
  }
};
</script>

