"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterKOns = void 0;
class RouterKOns {
    static auth_login = "/api/auth/login";
    static auth_logout = "/api/auth/logout";
    static daftar_anggota = "/api/sm/anggota/daftar"; //get
    static edit_anggota = "/api/sm/anggota/edit"; //patch	
    static delete_anggota = "/api/sm/anggota/delete"; //patch	
    static anggota_baru = "/api/sm/anggota/baru"; //patch	
    static daftar_calon_pasangan = "/api/sm/pasangan/calon/daftar";
    static daftar_pasangan = "/api/sm/pasangan/daftar";
    static hapus_pasangan = "/api/sm/pasangan/daftar";
    static edit_pasangan = "/api/sm/pasangan/edit";
    static pasangan_baru = "/api/sm/pasangan/baru";
    static daftar_calon_anak = "/api/sm/anak/calon/daftar";
    static anak_baru = "/api/sm/anak/baru";
    static anak_hapus = "/api/sm/anak/hapus"; //id_anak, id_anggota
    static daftar_anak = "/api/sm/anak/daftar";
    static daftar_calon_ortu = "/api/sm/ortu/calon/daftar";
    static ortu_baru = "/api/sm/ortu/baru";
    static ortu_hapus = "/api/sm/ortu/hapus"; //id_anak, id_anggota
    static daftar_ortu = "/api/sm/ortu/daftar";
}
exports.RouterKOns = RouterKOns;
