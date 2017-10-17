export function addNewItem (item) {
    return {
        type: 'ADD_NEW_ITEM',
        payload: item
    }
}

export function fetchList () {
    return {
        type: 'LIST_REQUESTED'
    }
}