import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* fetchReceita(action){
    try {

        const listaReceitas = yield call('http://localhost:3001/api/getReceitas')
        let lista = listaReceitas.receitas.filter( item => {
            return item.id == action.payload.id
        });
        yield put({ type: 'RECEITA_FETCHED', receita: lista[0] })
    } catch (e){
        yield put({ type: 'RECEITA_FETCHED', message: e.message });
    }
}

function* fetchAllReceitas(){
    try {
        const json = yield call(() =>
            fetch('http://localhost:3001/api/getReceitas')
            .then(response => response.json())
            .then(myJson => myJson)
        );

        yield put({ type: 'LIST_RECEITAS', receitas: json.data })
    } catch(e){
        yield put({ type: 'LIST_RECEITAS', receitas: [1], message: e.message })
    }
} 

function* fetchAllBannersHome(){
    try {

        const json = yield call(() =>
            fetch('https://picsum.photos/v2/list?limit=5')
            .then(response => response.json())
            .then(myJson => myJson)
        );

        yield put({ type: 'LIST_BANNERS', banners: json === undefined ? [] : json })

    } catch(e){
        yield put({ type: 'LIST_BANNERS', banners: [], message: e.message });
    }
}

function* mySaga(){
    yield takeEvery("RECEITAS_FETCHED", fetchAllReceitas);
    yield takeEvery("BANNERS_FETCHED", fetchAllBannersHome);
}

export default mySaga;