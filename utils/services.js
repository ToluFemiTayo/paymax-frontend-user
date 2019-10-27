export const checkActivePaymentProcess = (toDashboard = false) => {
    if (localStorage.getItem("prepayment")) {
        payWithRave();
    } else {
        if (toDashboard) {
            return location.href = "/app"
        }

        return
    }
}