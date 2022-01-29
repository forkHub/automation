"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.url = void 0;
//TODO: final2
class Url {
    urlBase = 'http://localhost:3000';
    profile = '/penjual/profile';
    urlFileUpload = '/penjual/upload';
    urlPenjualProfile = '/penjual/profile/:id';
    urlPenjualGetEditProfile = '/penjual/profile/edit/:id';
    urlPenjualPostEditProfile = '/penjual/profile/edit/';
    urlPenjualBeranda = '/penjual/beranda/:id';
    urlPenjualBarangBaru = '/penjual/barang/baru';
    urlPenjualEditBarangGet = '/penjual/barang/edit/:id';
    urlPenjualEditBarangPost = '/penjual/barang/edit';
    urlPenjualHapusBarang = '/penjual/barang/hapus';
    urlAuthLogin = '/auth/login';
    urlAuthLogout = '/auth/logout';
    urlAuthGantiPass = '/auth/ganti';
    urlAuthLupaPass = '/auth/lupa';
    urlAuthDaftar = '/auth/daftar';
    urlTokoLapak = `/lapak/:id`;
    urlTokoBarang = `/barang/baca/id/:id`;
    urlTokoBeranda = '/';
    urlBarangCariGet = '';
    getUrl(url, params) {
        let urlHasil = url;
        console.log('get url: ' + urlHasil);
        params.forEach((item) => {
            urlHasil = urlHasil.replace(/\:[a-z]+/, item);
            console.log('item ' + item);
            console.log('url ' + urlHasil);
        });
        return urlHasil;
    }
}
exports.url = new Url;
