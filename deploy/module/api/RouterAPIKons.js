"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterAPIKOns = void 0;
class RouterAPIKOns {
    //auth
    static api_auth_login = "/api/auth/login";
    static api_auth_logout = "/api/auth/logout";
    static api_anggota_daftar = "/api/anggota/daftar";
    static api_anggota_daftar_kunci_hal = "/api/anggota/daftar/kunci/:kunci/hal/:hal";
    static api_beranda_lihat_id = "/sm/beranda/lihat/:id";
    static api_beranda_id = "/sm/beranda/:id";
    static api_anggota_id_info_edit = "/sm/anggota/:id/info/edit";
    static api_anggota_id_edit_beranda = "/sm/anggota/:id/edit/beranda";
    static api_anggota_baru = "/sm/anggota/baru";
    static api_anggota_hapus_id = "/sm/anggota/hapus/:id";
    static api_anggota_id_rel_edit_id = "/sm/anggota/:id/rel/edit/:id2";
    //hanya get
    static api_anggota_id_pas_tambah = "/sm/anggota/:id/pasangan/tambah";
    static api_anggota_id_pas_tambah_kunci_hal = "/sm/anggota/:id/pasangan/tambah/kunci/:kunci/hal/:hal";
    //post
    static api_anggota_id_pas_lihat = "/sm/anggota/:id/pasangan/lihat";
    //post
    static api_anggota_id_anak_baca = "/sm/anggota/:id/anak/baca";
    static api_anggota_id_gbr_upload = "/sm/anggota/:id/gbr/upload";
    static api_anggota_id_ortu_edit_id = "/sm/anggota/:id/ortu/edit/:id2";
    static api_anggota_id_anak_tambah = "/sm/anggota/:id/anak/tambah";
    static api_anggota_id_anak_tambah_kunci_hal = "/sm/anggota/:id/anak/tambah/kunci/:kunci/hal/:hal";
    static rel_daftar = "/sm/rel/daftar";
    static rel_hapus_id = "/sm/rel/hapus/:id";
}
exports.RouterAPIKOns = RouterAPIKOns;
