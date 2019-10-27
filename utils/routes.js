// Default Application API
export const LOGIN = "/login";
export const REGISTER = "/register";
export const TOPUPWALLET = "/wallet/topup";

// Fetch Data / Airtime Vendors
export const DATA_VENDORS = "/services/data-vendors";
export const AIRTIME_VENDORS = "/services/vtu-vendors";

// Return Data Service With Plan Provided
export const DATA_PLANS = service => `services/data-vendor/${service}/plan`;

//Purchasing Data /Airtime
export const PURCHASE_DATA = service =>
  `services/data-vendor/${service}/make-sub`;
export const PURCHASE_AIRTIME = service =>
  `services/vtu-vendor/${service}/purchase`;

// Transactions
export const SAVE_TRANSACTION = "/transactions/save";
export const FETCH_TRANSACTIONS = "/transactions";

//Ikeja Prepaid Meter Validation & Purchase
export const IKEJA_PREPAID_VALIDATION = "/ikeja/prepaid-validate";
export const IKEJA_PREPAID_PURCHASE = "/ikeja/prepaid-purchase";

//Ikeja Postpaid Meter Validation & Purchase
export const IKEJA_POSTPAID_VALIDATION = "/ikeja/postpaid-validate";
export const IKEJA_POSTPAID_PURCHASE = "/ikeja/postpaid-purchase";

//Eko Meter Validation & Purchase
export const EKO_METER_VALIDATION = "/eko/customer-validate";
export const EKO_PREPAID_PURCHASE = "/eko/prepaid-payment";
export const EKO_POSTPAID_PURCHASE = "/eko/postpaid-payment";

//Enugu Meter Validation & Purchase
export const ENUGU_PREPAID_VALIDATION = "/enugu/prepaid-validate";
export const ENUGU_POSTPAID_VALIDATION = "/enugu/postpaid-validate";
export const ENUGU_METER_PURCHASE = type => `/enugu/${type}/payment`;

//Ibadan Meter Validation and Payment
export const IBADAN_METER_VALIDATION = "/ibadan/validate";
export const IBADAN_PREPAID_TOKEN_PURCHASE = "/ibadan/prepaid-token-payment";
export const IBADAN_PREPAID_SMARTCARD_PURCHASE =
  "/ibadan/prepaid-smartcard-payment";
export const IBADAN_POSTPAID_PURCHASE = "/ibadan/postpaid-payment";

//Port Harcourt Validation & Purchasee
export const PH_METER_VALIDATION = "/ph/validate";
export const PH_METER_PURCHASE = "/ph/payment";

//Abuja Meter Validation & Purchasee
export const ABUJA_METER_VALIDATION = "/abuja/validate";
export const ABUJA_METER_PURCHASE = "/abuja/payment";

// WAEC
export const WAEC_RESULT_PIN = "/vtpass/waec/result-pin";
export const WAEC_RESULT_PIN_PAYMENT = "/vtpass/waec/result-pin";
export const WAEC_REGISTRATION_PIN = "/vtpass/waec/register-pin";
export const WAEC_REGISTRATION_PIN_PAYMENT = "/vtpass/waec/pay-reg";
