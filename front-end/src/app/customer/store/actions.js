export const REQUEST_ADD_CAT = 'REQUEST_ADD_CAT'
export const RESPONSE_ADD_CAT_SUCCESS = 'RESPONSE_ADD_CAT_SUCCESS'
export const REQUEST_CUSTOMERS = 'REQUEST_CUSTOMERS'
export const RECEIVE_CUSTOMERS = 'RECEIVE_CUSTOMERS'

export function requestAddCat() {
    return {type: REQUEST_ADD_CAT}
}

export function addCatSuccess(customer) {
    return {type: RESPONSE_ADD_CAT_SUCCESS, customer: customer}
}

export function requestCustomers() {
    return {type: REQUEST_CUSTOMERS}
}

export function receiveCustomers(customers) {
    return {type: RECEIVE_CUSTOMERS, customers: customers}
}