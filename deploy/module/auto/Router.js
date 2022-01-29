"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerAuto = void 0;
const express_1 = __importDefault(require("express"));
const Util_1 = require("../Util");
const Step_1 = require("./Step");
class Router {
    router = express_1.default.Router();
    mapRouter() {
        console.debug('api router 2');
        this.router.get("/api/auto/", (req, resp) => {
            try {
                console.log(req.body.step);
                Step_1.step.buatTugas("test", "isi").then(() => {
                    console.log('buat tugas selesai');
                }).catch((e) => {
                    console.log('buat tugas error:');
                    console.error(e);
                });
                resp.status(200).send('');
            }
            catch (e) {
                Util_1.util.respError(resp, e);
            }
        });
        this.router.post("/api/auto/run", (req, resp) => {
            try {
                console.log(req.body);
                resp.status(200).send('');
            }
            catch (e) {
                Util_1.util.respError(resp, e);
            }
        });
    }
}
exports.routerAuto = new Router();
