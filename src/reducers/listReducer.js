export default function reducer(state = {items: []}, action) {
    // you can define a default for state (here, an empty object)
    // state is the state starting at the root that we have defined in reducers
    // this slice of state is defined in reducers, here, it's the list slice
    // to add a property on sat in here, it would only apply to state on list state.list.hi
    // in here state.hi is (for the whole store) state.list.hi


    // state is immutable by convention (not by enforcement)
    switch (action.type) {
        case 'ADD_NEW_ITEM':
            return { ...state, ...action.payload }; // this does a shallow copy
            break;
        case 'LIST_FETCH_SUCCEEDED':
            return { ...state, items: action.payload.data }; // this does a shallow copy
            break;
        default:
            console.error('Unknown action.type in listReducer:', action.type);
            return { ...state };
            break;
    }
}

// Need to add action to handle error, skipped for now
// type: 'LIST_FETCH_FAILED',
// payload: error
