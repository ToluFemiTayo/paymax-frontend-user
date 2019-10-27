<template>
  <div>
    <div class="modal fade" tabindex="-1" role="dialog" id="payment-modal">
      <div class="modal-dialog" role="document">
        <div class="modal-content" style="margin-top: 15rem">
          <div class="modal-header">
            <h5 class="modal-title">Continue to Payment</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-2">
                <div
                  class="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <a
                    class="nav-link active"
                    id="v-pills-home-tab"
                    data-toggle="pill"
                    href="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >Bank</a>
                  <a
                    class="nav-link"
                    id="v-pills-profile-tab"
                    data-toggle="pill"
                    href="#v-pills-profile"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >Card</a>
                  <!-- <a
                    class="nav-link"
                    id="v-pills-messages-tab"
                    data-toggle="pill"
                    href="#v-pills-messages"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >Messages</a>
                  <a
                    class="nav-link"
                    id="v-pills-settings-tab"
                    data-toggle="pill"
                    href="#v-pills-settings"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                  >Settings</a>-->
                </div>
              </div>
              <div class="col-dm-1"></div>
              <div class="col-md-9 pl-5">
                <div class="tab-content" id="v-pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <div class="row">
                      <div class="col-md-12 text-left">
                        <div class="form-group">
                          <label>Select Your Bank</label>
                          <select class="form-control" v-model="payment.bank.name">
                            <option value>Bank 1</option>
                            <option value>Bank 1</option>
                            <option value>Bank 1</option>
                            <option value>Bank 1</option>
                            <option value>Bank 1</option>
                          </select>
                        </div>
                        <div class="form-group">
                          <label>Account Number</label>
                          <input
                            type="number"
                            maxlength="10"
                            class="form-control"
                            v-model="payment.bank.account"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >...</div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center" style="padding-bottom: 1em">
            <!-- <button type="button" class="btn btn-primary">Cal</button> -->
            <button
              type="button"
              class="btn btn-secondary"
              @click.prevent="payWithRave"
            >Make Payment</button>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "payment-modal",
  data() {
    return {
      banks: [],
      payment: {
        bank: {
          name: "",
          account: ""
        }
      }
    };
  },
  mounted() {
    //   Fetch Banks
  }
};
</script>

<style lang="scss" scoped>
</style>