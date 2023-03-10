const ActionType = {
    UPDATE_REGIONS: 'UPDATE_REGIONS',
    UPDATE_REGIONS_SUCCEED: 'UPDATE_REGIONS_SUCCEED',
    UPDATE_REGIONS_FAILED: 'UPDATE_REGIONS_FAILED',
    GET_REGIONS: 'GET_REGIONS',
    GET_REGION_SUCCEED: 'GET_REGION_SUCCEED',
    GET_REGION_FAILED: 'GET_REGION_FAILED',
    GET_REGIONS_ID : 'GET_REGIONS_ID',
    GET_REGIONS_ID_SUCCEES : 'GET_REGIONS_ID_SUCCEED',
    GET_REGIONS_ID_FAILED : 'GET_REGIONS_ID_FAILED',
    ADD_REGIONS: 'ADD_REGIONS',
    ADD_REGIONS_SUCCEED: 'ADD_REGIONS_SUCCEED',
    ADD_REGIONS_FAILED: 'ADD_REGIONS_FAILED',
    DEL_REGIONS: 'DEL_REGIONS',
    DEL_REGIONS_SUCCEED: 'DEL_REGIONS_SUCCEED',
    DEL_REGIONS_FAILED: 'DEL_REGIONS_FAILED',
    LOGIN:'LOGIN',
    LOGIN_SUCCEES:'LOGIN_SUCCEES',
    MESSAGE_NOTIFICATION: 'MESSAGE_NOTIFICATION'
}

export default ActionType;

// file ini digunakan untuk menentukan tipe-tipe aksi yang digunakan dalam aplikasi
// setiap aksi didefinisikan sebagai konstanta dengan nama yang sesuai dengan fungsinya
// contoh: UPDATE_REGIONS digunakan untuk mengupdate data regions, ADD_REGIONS digunakan untuk menambahkan data regions, dll.