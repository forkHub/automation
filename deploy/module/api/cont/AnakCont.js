"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnakCont = void 0;
const Util_1 = require("../../Util");
class AnakCont {
    async baru(_req, resp) {
        try {
            // let anggotaAr: ISlAnggota[] = await sm.dao.anggota.cariAnggota('---', 0, session(_req).id);
            // let jml: number = (await sm.dao.anggota.jmlCariAnggota('---', session(_req).id)).jumlah;
            // let hal: string = sm.render.daftarAnggota.render(anggotaAr, 0, jml, '---', RouterKOns.g_anggota_daftar_kunci_hal);
            // resp.status(200).send(hal);
        }
        catch (e) {
            Util_1.util.respError(resp, e);
        }
    }
}
exports.AnakCont = AnakCont;
