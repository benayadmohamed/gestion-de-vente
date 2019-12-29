export const REQUEST_ADD_CAT = 'REQUEST_ADD_CAT'
export const RESPONSE_ADD_CAT_SUCCESS = 'RESPONSE_ADD_CAT_SUCCESS'
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

export function requestAddCat() {
    return {type: REQUEST_ADD_CAT}
}

export function addCatSuccess(category) {
    return {type: RESPONSE_ADD_CAT_SUCCESS, category: category}
}

export function requestCategories() {
    return {type: REQUEST_CATEGORIES}
}

export function receiveCategories(categories) {
    return {type: RECEIVE_CATEGORIES, categories: categories}
}