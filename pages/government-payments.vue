<template>
	
	<section class="section__wrapper">
      <div class="bg-light shadow-md rounded p-4">
        <h2 class="text-4 mb-3">Government Related Payment</h2>
        <br>
        <div class="row">
        
          <!-- Mobile Recharge
          ============================================= -->
          <div class="col-lg-4 mb-4 mb-lg-0">
            <form id="recharge-bill" method="post">
              <div class="mb-3">
                <div class="custom-control custom-radio custom-control-inline">
                  <input id="prepaid" name="rechargeBillpayment" class="custom-control-input" checked="" required="" type="radio">
                  <label class="custom-control-label" for="prepaid">Federal</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input id="postpaid" name="rechargeBillpayment" class="custom-control-input" required="" type="radio">
                  <label class="custom-control-label" for="postpaid">State</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input id="local" name="rechargeBillpayment" class="custom-control-input" required="" type="radio">
                  <label class="custom-control-label" for="local">Local</label>
                </div>
              </div>
              <div class="form-group">
                <select class="custom-select" id="operator" required="">
                  <option value="">Select Biller</option>
                  <option>Lagos State FIRS</option>
                
                </select>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" data-bv-field="number" id="mobileNumber" required="" placeholder="Reference Number:">
              </div>
              
              <div class="form-group input-group">
                <div class="input-group-prepend"> <span class="input-group-text">₦</span> </div>
                <a href="#" data-target="#view-plans" data-toggle="modal" class="view-plans-link">View ₦govt Fees</a>
                <input class="form-control" id="amount" placeholder="Enter Amount" required="" type="text">
              </div>
              <button class="btn btn-primary btn-block" type="submit">Continue Payment</button>
            </form>
          </div><!-- Mobile Recharge end -->
          
          <!-- Slideshow
          ============================================= -->
          <div class="col-lg-8">
            <div class="owl-carousel owl-theme slideshow single-slider owl-loaded owl-drag">
              
              
            <div class="owl-stage-outer">
              <div class="owl-stage" style="transform: translate3d(-2154px, 0px, 0px); transition: all 0s ease 0s; width: 4308px;">
                <div class="owl-item cloned" style="width: 718px;">
                  <div class="item">
                    <a href="#">
                      <img class="img-fluid" src="images/slider/banner-1.jpg" alt="banner 1">
                    </a>
                  </div>
                </div>
                <div class="owl-item cloned" style="width: 718px;">
                  <div class="item">
                    <a href="#">
                      <img class="img-fluid" src="images/slider/banner-2.jpg" alt="banner 2">
                    </a>
                  </div>
                </div>
                <div class="owl-item" style="width: 718px;">
                  <div class="item">
                    <a href="#">
                      <img class="img-fluid" src="images/slider/banner-1.jpg" alt="banner 1">
                    </a>
                  </div>
                </div>
              <div class="owl-item animated owl-animated-in fadeIn active" style="width: 718px;">
                <div class="item"><a href="#"><img class="img-fluid" src="images/slider/banner-2.jpg" alt="banner 2"></a></div></div><div class="owl-item cloned" style="width: 718px;"><div class="item"><a href="#"><img class="img-fluid" src="images/slider/banner-1.jpg" alt="banner 1"></a></div></div><div class="owl-item cloned" style="width: 718px;"><div class="item"><a href="#"><img class="img-fluid" src="images/slider/banner-2.jpg" alt="banner 2"></a></div></div></div></div><div class="owl-nav"><button type="button" role="presentation" class="owl-prev"><i class="fa fa-chevron-left"></i></button><button type="button" role="presentation" class="owl-next"><i class="fa fa-chevron-right"></i></button></div><div class="owl-dots"><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot active"><span></span></button></div></div>
          </div><!-- Slideshow end -->
          
        </div>
      </div>
    </section>
</template>