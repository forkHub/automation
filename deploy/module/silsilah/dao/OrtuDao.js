"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrtuDao = void 0;
const Sql_1 = require("../../Sql");
class OrtuDao {
    async updateOrtu(id, idOrtu) {
        return await Sql_1.sql.query(`
			UPDATE sl_anggota
			SET ortu_id = ?
			WHERE id = ?
		`, [idOrtu, id]);
    }
    async lihatOrtu(relId) {
        return await Sql_1.sql.query(`
			SELECT *
			FROM sl_anggota
			WHERE rel_id = ?
		`, [relId]);
    }
}
exports.OrtuDao = OrtuDao;
