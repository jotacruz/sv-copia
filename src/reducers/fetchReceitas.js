const INITIAL_VALUE = {
    receitas: []
}

export const fetchReceitas =  (state = INITIAL_VALUE, action) => {
    switch (action.type){
        case 'LIST_RECEITAS':
            return { ...state, receitas: action.receitas }    
        default:    
            return state
    }
}