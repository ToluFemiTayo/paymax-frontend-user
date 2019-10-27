<template>
	<section class="section__wrapper">
		<div class="bg-light shadow-md rounded p-4">
			<h2 class="text-4 mb-3">Betting, Games, Pool</h2>
			<br>
			<div class="row">
				<!-- CableTv Recharge
				=============================================-->
				<div class="col-lg-4 mb-4 mb-lg-0">
					<form id="cableTvRechargeBill" method="post">
						<div class="form-group">
							<select class="custom-select" id="operator" required>
								<option value>Select</option>
								<option>Bet9ja</option>
								<option>Bet360</option>
							</select>
						</div>
						<div class="form-group">
							<input
								type="text"
								class="form-control"
								data-bv-field="number"
								id="accountNumber"
								required
								placeholder="Enter Account Number"
							/>
						</div>
						<div class="form-group input-group">
							<div class="input-group-prepend">
								<span class="input-group-text">₦</span>
							</div>

							<input class="form-control" id="amount" placeholder="Enter Amount" required type="text" />
						</div>
						<button class="btn btn-primary btn-block" type="submit">Continue</button>
					</form>
				</div>
				<!-- CableTv Recharge end -->

				<!-- Slideshow
				=============================================-->
				<div class="col-lg-8">
					<div class="owl-carousel owl-theme slideshow single-slider owl-loaded owl-drag">
						<div class="owl-stage-outer">
							<div
								class="owl-stage"
								style="transform: translate3d(-1436px, 0px, 0px); transition: all 0s ease 0s; width: 5026px;"
							>
								<div class="owl-item cloned" style="width: 718px;">
									<div class="item">
										<a href="#">
											<img class="img-fluid" src="images/slider/banner-9.jpg" alt="banner 8" />
										</a>
									</div>
								</div>
								<div class="owl-item cloned" style="width: 718px;">
									<div class="item">
										<a href="#">
											<img class="img-fluid" src="images/slider/banner-7.jpg" alt="banner 3" />
										</a>
									</div>
								</div>
								<div class="owl-item active" style="width: 718px;">
									<div class="item">
										<a href="#">
											<img class="img-fluid" src="images/slider/banner-5.jpg" alt="banner 5" />
										</a>
									</div>
								</div>
								<div class="owl-item" style="width: 718px;">
									<div class="item">
										<a href="#">
											<img class="img-fluid" src="images/slider/banner-9.jpg" alt="banner 8" />
										</a>
									</div>
								</div>
								<div class="owl-item" style="width: 718px;">
									<div class="item">
										<a href="#">
											<img class="img-fluid" src="images/slider/banner-7.jpg" alt="banner 3" />
										</a>
									</div>
								</div>
								<div class="owl-item cloned" style="width: 718px;">
									<div class="item">
										<a href="#">
											<img class="img-fluid" src="images/slider/banner-5.jpg" alt="banner 5" />
										</a>
									</div>
								</div>
								<div class="owl-item cloned" style="width: 718px;">
									<div class="item">
										<a href="#">
											<img class="img-fluid" src="images/slider/banner-9.jpg" alt="banner 8" />
										</a>
									</div>
								</div>
							</div>
						</div>
						<div class="owl-nav">
							<button type="button" role="presentation" class="owl-prev">
								<i class="fa fa-chevron-left"></i>
							</button>
							<button type="button" role="presentation" class="owl-next">
								<i class="fa fa-chevron-right"></i>
							</button>
						</div>
						<div class="owl-dots">
							<button role="button" class="owl-dot active">
								<span></span>
							</button>
							<button role="button" class="owl-dot">
								<span></span>
							</button>
							<button role="button" class="owl-dot">
								<span></span>
							</button>
						</div>
					</div>
				</div>
				<!-- Slideshow end -->
			</div>
		</div>
	</section>
</template>