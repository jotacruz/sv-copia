const INITIAL_VALUE = {
    banners: []
}

export const fetchBannersHome = (state = INITIAL_VALUE, action) => {
    switch (action.type){
        case 'LIST_BANNERS':
            return { ...state, banners: action.banners }
        default:
            return state
    }
}