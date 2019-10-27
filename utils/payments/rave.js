export default ({ amount, email, phone } = {}, cb) => {
  let x = getpaidSetup({
    PBFPubKey: process.env.RV,
    customer_email: email,
    amount: amount,
    customer_phone: phone,
    currency: "NGN",
    txref: Math.floor(Math.random() * 10000000) + 10,
    // meta: [{
    //     metaname: "flightID",
    //     metavalue: "AP1234"
    // }],
    onclose: function() {},
    callback(response) {
      var txref = response.tx.txRef; // collect txRef returned and pass to a 					server page to complete status check.
      // console.log("This is the response returned after a charge", response);
      if (
        response.tx.chargeResponseCode == "00" ||
        response.tx.chargeResponseCode == "0"
      ) {
        x.close();
        return response;
      } else {
        // redirect to a failure page.
      }
    }
  });
  cb(x);
};
