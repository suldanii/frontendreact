// configureStore adalah fungsi dari redux-toolkit yang digunakan untuk mengonfigurasi store aplikasi
import { configureStore } from "@reduxjs/toolkit"
// combineReducers digunakan untuk menggabungkan beberapa reducer menjadi satu
import { combineReducers } from "redux"
// regionsReducers adalah reducer yang digunakan untuk mengubah state aplikasi berdasarkan action yang diterima
import regionsReducers from "../Reducer/regionsReducer"
import createSagaMiddleware from "@redux-saga/core"
import rootSaga from '../Sagas'

const saga = createSagaMiddleware()
//const reducer digunakan untuk menggabungkan beberapa reducer, pada kasus ini hanya ada satu reducer yaitu regionsReducers
const reducer = combineReducers({
    regionsReducer: regionsReducers

})
//store digunakan untuk menyimpan state aplikasi dan melakukan dispatch action
const store = configureStore({
    reducer,
//middleware digunakan untuk menambahkan fitur tambahan pada store seperti menangani async action atau logging
middleware:(getDefaultMiddleware)=>
getDefaultMiddleware({
    //serializableCheck digunakan untuk mencegah error ketika melakukan dispatch action yang tidak serializable
    serializableCheck:false,
}).concat(saga)
})

saga.run(rootSaga)

export default store