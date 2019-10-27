<template>
  <section class="section__wrapper">
    <div class="bg-light shadow-md rounded p-4">
      <h2 class="text-4 mb-3">Pay your Electricity Bill</h2>
      <br>
      <div class="row">
        <!-- Electricity Bill
        =============================================-->
        <div class="col-lg-4 mb-4 mb-lg-0">
          <form id="cableTvRechargeBill" method="post">
            <div class="form-group">
              <label>Select Your DisCo</label>
              <select class="custom-select" id="operator" required>
                <option value="EKEDC">EKEDC</option>
                <option value="IKEDC">IKEDC</option>
                <option value="IBDC">IBDC</option>
                <option value="BEDC">BEDC</option>
                <option value="AEDC">AEDC</option>
                <option value="KADC">KADC</option>
                <option value="EEDC">EEDC</option>
                <option value="PHCN">PHCN</option>
              </select>
            </div>
            <div class="form-group">
              <label>Enter Account / Meter Number</label>
              <input
                type="text"
                class="form-control"
                data-bv-field="number"
               id="serviceNumber"
                required
                placeholder="Account / Meter Number"
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
        <!-- Electricity Bill end -->

        <!-- Slideshow
        =============================================-->
        <div class="col-lg-8">
          <Slider :images="images" />
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
      options: {
        biller: "Select a Biller",
        billerCategory: "Select a Disco",
        accountNumber: ""
      },
      images: [
        {
          src: "/banners/utilities.jpeg",
          alt: "Banner"
        },
        {
          src: "/banners/utility-bills.jpeg",
          alt: "Banner"
        }
      ]
    };
  }
};
</script>	
