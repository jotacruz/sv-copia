export const toggleReceita = receita => ({
    type: 'toggleReceita',
    receita: receita
})

export const selectReceita = receita => ({
    type: 'toggleReceita',
    receita: receita
})

export const fetchReceitas = () => ({
    type: 'RECEITAS_FETCHED'
})

export const fetchBannersHome = () => ({
    type: 'BANNERS_FETCHED'
})