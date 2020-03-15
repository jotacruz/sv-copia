import { combineReducers } from 'redux'

import { toggleReceita } from './toggleReceita'
import { fetchReceitas } from './fetchReceitas'
import { fetchBannersHome } from './fetchBannersHome'


export const Reducers = combineReducers({
    toggleReceita: toggleReceita,
    fetchReceitas: fetchReceitas,
    fetchBannersHome: fetchBannersHome
})