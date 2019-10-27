<template>
	<section class="section__wrapper">
    <div class="bg-light shadow-md rounded p-4">
      <h2 class="text-4 mb-3">Aids, Grants &amp; Donations</h2>
      <br>
      <div class="row">
        
        <!-- Mobile Recharge
        ============================================= -->
        <div class="col-lg-4 mb-4 mb-lg-0">
          <form id="recharge-bill" method="post">
            <div class="mb-3">
              <div class="custom-control custom-radio custom-control-inline">
                <input id="ngo" name="rechargeBillpayment" class="custom-control-input" checked="" required="" type="radio">
                <label class="custom-control-label" for="ngo">NGO</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input id="data" name="rechargeBillpayment" class="custom-control-input" required="" type="radio">
                <label class="custom-control-label" for="data">Religious Body</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input id="airtine_data" name="rechargeBillpayment" class="custom-control-input" required="" type="radio">
                <label class="custom-control-label" for="airtine_data">Others</label>
              </div>
            </div>
            <!-- <div class="form-group">
              <select class="custom-select" id="operator" required="">
                <option value="">State</option>
                <option>Lagos</option>
              
              
              </select>
            </div> -->
            <div class="form-group">
              <label>Select Your Channel</label>
              <select class="custom-select" id="operator" required="">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
            <div class="form-group">
              <label>Write a Comment</label>
              <input type="text" class="form-control" data-bv-field="text" id="comment_id" required="" placeholder="Comment here">
            </div>
            
            <div class="form-group input-group">
              <div class="input-group-prepend"> <span class="input-group-text">₦</span> </div>
              
              <input class="form-control" id="amount" placeholder="Amount" required="" type="text">
            </div>
            <button class="btn btn-primary btn-block" type="submit">Continue Payment</button>
          </form>
        </div><!-- Mobile Rercharge end -->


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
          src: "/banners/donation 1.jpg",
          alt: "Banner"
        },
        {
          src: "/banners/donate2.jpeg",
          alt: "Banner"
        },
        {
          src: "/banners/donations.jpeg",
          alt: "Banner"
        },
      ]
    };
  }
};
</script>
