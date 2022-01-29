"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HalLihatTugas = exports.HalDepan = exports.HalDaftarTugas = exports.HalLogin = exports.TugasBaru = exports.HalEditTugas = void 0;
exports.HalEditTugas = {
    hal: 'div.hal-edit-tugas',
    judul: 'input.judul',
    deskripsi: 'textarea.isi',
    petugas: {
        pertama: 'form input[type="radio"]#petugas0',
        kedua: 'form input[type="radio"]#petugas1',
        ketiga: 'form input[type="radio"]#petugas2'
    },
    simpanTbl: 'form button.submit',
    nav: {
        daftarTugasLink: 'a.daftar-tugas',
        lihatTugasLink: 'a.lihat-tugas'
    }
};
exports.TugasBaru = {
    hal: 'div.hal-tugas-baru',
    judul: 'input.judul',
    deskripsi: 'textarea.isi',
    petugas: {
        pertama: 'form input[type="radio"]#petugas0'
    },
    simpanTbl: 'form button.submit',
    nav: {
        daftarTugasLink: ''
    }
};
exports.HalLogin = {
    user: 'form input.user-name',
    pass: 'form input.password',
    btnLogin: 'form button.submit'
};
exports.HalDaftarTugas = {
    el: 'div.daftar-tugas',
    status: 'ul li a.status',
    tambah: 'a.tambah',
    list: {
        pertama: {
            el: 'div.item.list-group a.list-group-item.list-group-item-action:nth-child(1)',
            judul: 'div.item.list-group a.list-group-item.list-group-item-action p.judul'
        }
    }
};
exports.HalDepan = {
    el: '',
    daftarTugas: 'a.tab.daftar-tugas',
    aktifitas: {
        el: '',
        pertama: {
            el: 'a.list-group-item.list-group-item-action:nth-child(1)',
        }
    }
};
exports.HalLihatTugas = {
    editTbl: 'button.edit'
};
