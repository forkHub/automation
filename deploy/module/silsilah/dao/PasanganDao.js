"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasanganDao = void 0;
const Sql_1 = require("../../Sql");
const Config_1 = require("../Config");
class PasanganDao {
    async lihatPasangan(id, relId) {
        return await Sql_1.sql.query(`
			SELECT *
			FROM sl_anggota
			WHERE id != ?  AND rel_id = ? 
		`, [id, relId]);
    }
    //TODO: [ref] bani ambil dari session
    async jmlCariPasangan(kunci, offsetAbs, bani, jkl) {
        let kunciSql = `%${kunci}%`;
        let where;
        let data = [];
        offsetAbs = parseInt(offsetAbs + '');
        if (("-" == kunci) || ("---" == kunci) || ("" == kunci)) {
            where = "WHERE  1  AND bani = ? AND jkl = ? ";
            data = [bani, jkl];
        }
        else {
            where = ` 
				WHERE (nama LIKE ? OR nama_lengkap LIKE ?)  
				AND bani = ? AND jkl = ?
			`;
            data = [kunciSql, kunciSql, bani, jkl];
        }
        let hasil = await Sql_1.sql.query(`
			SELECT COUNT(id) as jumlah
			FROM sl_anggota
			${where}
		`, data);
        return hasil[0];
    }
    async daftarCalonPasangan(kunci, offsetAbs, bani, jkl) {
        let kunciSql = `%${kunci}%`;
        let where;
        let data = [];
        offsetAbs = parseInt(offsetAbs + '');
        if (("-" == kunci) || ("---" == kunci) || ("" == kunci)) {
            where = "WHERE  1  AND bani = ? AND jkl = ? ";
            data = [bani, jkl];
        }
        else {
            where = ` 
				WHERE (nama LIKE ? OR nama_lengkap LIKE ?)  
				AND bani = ? AND jkl = ?
			`;
            data = [kunciSql, kunciSql, bani, jkl];
        }
        return await Sql_1.sql.query(` 
			SELECT *
			FROM sl_anggota
			${where}
			ORDER BY NAMA
			LIMIT ${Config_1.config.jmlPerHal}
			OFFSET ${offsetAbs}
		`, data);
    }
}
exports.PasanganDao = PasanganDao;
