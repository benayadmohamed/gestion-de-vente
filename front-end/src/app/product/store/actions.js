export const ADD_Product = 'ADD_Product'
export const LOAD_LIST_Product = 'LOAD_LIST_Product'
export const INIT_LIST_Product = 'INIT_LIST_Product'

export function addProduct(product) {
    return {type: ADD_Product, product}
}

export function loadListCat() {
    return {type: LOAD_LIST_Product}
}

export function initListCat(products) {
    return {type: INIT_LIST_Product, products}
}