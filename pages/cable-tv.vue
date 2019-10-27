<template>
  <section class="section__wrapper">
    <div class="bg-light shadow-md rounded p-4">
      <h2 class="text-4 mb-3 ">CableTv Recharge or Bill Payment</h2>
      <br>
      <div class="row">
        <!-- CableTv Recharge
        =============================================-->
        <div class="col-lg-4 mb-4 mb-lg-0">
          <form id="cableTvRechargeBill" method="post">
            <div class="form-group">
              <label>Select Your TV Channel</label>
              <select class="custom-select" id="operator" required>
                <option value="DSTV">DSTV</option>
                <option value="GOTV">GOTV</option>
                <option value="Startimes">Star Times</option>
              </select>
            </div>
            <div class="form-group">
              <label>Enter SmartCard / Acc Number</label>
              <input
                type="text"
                class="form-control"
                data-bv-field="number"
                id="smartCardNumber"
                required
                placeholder="SmartCard / Acc Number"
              />
            </div>
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">₦</span>
              </div>

              <input
                class="form-control"
                id="amount"
                placeholder="Amount"
                required
                type="text"
              />
            </div>
            <button class="btn btn-primary btn-block" type="submit">Continue</button>
          </form>
        </div>
        <!-- CableTv Recharge end -->

        <!-- Slideshow
        =============================================-->
        <div class="col-lg-8">
          <Slider :images="images"  />
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
    Slider
  },
  data() {
    return {
      images: [
        {
          src: "/banners/cabletv-recharge.jpeg",
          alt: "Banner"
        },
        {
          src: "/bgslide/cabletv.jpeg",
          alt: "Banner"
        }
      ]
    };
  }
};
</script>


<style>
</style>





