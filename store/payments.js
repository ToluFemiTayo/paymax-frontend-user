export const store = () => ({
    paymentResponse: ''
})


export const actions = {
    async buyData() {

        await this.$axios
            .$post(PURCHASE_DATA(this.form.vendor), this.form)
            .then(res => {
                this.loading = false;
                //console.log(res.data); return;
                this.pay_response = res.data;
            })
            .catch(error => {
                this.loading = false;
                this.error = error.response.data.errors;
            });
    }
}


export const getters = () => {

}