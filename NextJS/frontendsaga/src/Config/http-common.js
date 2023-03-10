import axios from "axios";

// let token= localStorage.getItem('token')
export default axios.create({
    baseURL: "http://localhost:3020",
    headers: {
     "Content-type": "application/json",
    //  "Authorization": token
    }
})

// file ini digunakan untuk mengkonfigurasi axios yang digunakan dalam aplikasi.
// baseURL digunakan untuk menentukan URL dari API yang digunakan.
// headers digunakan untuk menentukan header yang dikirimkan dalam setiap request, seperti content-type atau token.
// pada kode diatas, baseURL-nya di set "http://localhost:3020" dan header "Content-type" di set "application/json"
// token juga di set, yang diambil dari localStorage dan di aktifkan.