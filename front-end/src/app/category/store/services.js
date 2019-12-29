import {addCatSuccess, receiveCategories, requestAddCat, requestCategories} from "./actions";
import axios from 'axios';

export function addCatService(category) {
    return dispatch => {
        dispatch(requestAddCat())
        axios.post('http://localhost:8080/api/categories', category)
            .then(res => {
                const categorie = res.data;
                alert(JSON.stringify(categorie));
                dispatch(addCatSuccess(categorie))
            }).catch(err => {
            console.log("HHHHHHHHHHHHHHHHHh")
        });
    }
}


function fetchPosts() {
    return dispatch => {
        dispatch(requestCategories())
        axios.get('http://localhost:8080/api/categories?size=1000')
            .then(res => {
                const categories = res.data._embedded.categories;
                dispatch(receiveCategories(categories))
            }).catch(err => {
            console.log("HHHHHHHHHHHHHHHHHh")
        });
    }
}

function shouldFetchPosts(state) {
    const categories = state.categories
    if (!categories) {
        return true
    } else if (state.isFetching) {
        return false
    } else {
        return state.didInvalidate
    }
}

export function fetchPostsIfNeeded() {
    return (dispatch, getState) => {
        console.log("getstate", getState())
        if (shouldFetchPosts(getState())) {
            return dispatch(fetchPosts())
        }
    }
}