"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hal = exports.data = void 0;
const Data2_1 = require("./Data2");
exports.data = {
    urlMain: 'http://localhost:3000',
    urlHapus: 'http://localhost:3000/admin/auth/db/reset/',
    urlLogout: 'http://localhost:3000/auth/logout',
    user: 'test',
    tugas: {
        awal: {
            judul: 'judul-test',
            isi: 'isi-test'
        },
        edit: {
            judul: 'judul-test-edit',
            isi: 'isi-test-edit'
        }
    },
    halDepan: {
        judul: {
            awal: 'test telah membuat tugas judul-test',
            edit: 'test telah mengupdate tugas judul-test-edit'
        }
    }
};
exports.Hal = {
    comp: {
        dialog: {
            el: 'div.comp.dialog',
            judul: 'div.comp.dialog p.deskripsi',
            okTbl: 'div.comp.dialog button.ok'
        }
    },
    tugasBaru: Data2_1.TugasBaru,
    halDaftarTugas: Data2_1.HalDaftarTugas,
    halDepan: Data2_1.HalDepan,
    halLogin: Data2_1.HalLogin,
    halLihatTugas: Data2_1.HalLihatTugas,
    halEditTugas: Data2_1.HalEditTugas
};
